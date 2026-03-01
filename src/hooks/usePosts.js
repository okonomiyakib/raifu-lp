import { useState, useEffect, useCallback } from 'react';
import {
    collection, addDoc, query, where, orderBy, limit,
    onSnapshot, doc, updateDoc, increment, serverTimestamp,
    startAfter, getDocs
} from 'firebase/firestore';
import { db } from '../lib/firebase';

const POSTS_COLLECTION = 'posts';
const POSTS_PER_PAGE = 6;


/**
 * 画像をリサイズしてBase64で返す（最大400px、JPEG品質0.7）
 * Firebase Storageを使わず、Firestoreに直接保存するための処理
 */
const imageToBase64 = (file, maxSize = 400) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let { width, height } = img;

                if (width > maxSize || height > maxSize) {
                    if (width > height) {
                        height = (height / width) * maxSize;
                        width = maxSize;
                    } else {
                        width = (width / height) * maxSize;
                        height = maxSize;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const base64 = canvas.toDataURL('image/jpeg', 0.7);
                resolve(base64);
            };
            img.onerror = () => reject(new Error('画像の読み込みに失敗しました'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('ファイルの読み込みに失敗しました'));
        reader.readAsDataURL(file);
    });
};

/**
 * 承認済み投稿をリアルタイム取得（ページネーション付き）
 */
export const useApprovedPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastDoc, setLastDoc] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        try {
            const q = query(
                collection(db, POSTS_COLLECTION),
                where('approved', '==', true),
                orderBy('createdAt', 'desc'),
                limit(POSTS_PER_PAGE)
            );

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const newPosts = snapshot.docs.map((d) => ({
                    id: d.id,
                    ...d.data(),
                    createdAt: d.data().createdAt?.toDate(),
                }));
                setPosts(newPosts);
                setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null);
                setHasMore(snapshot.docs.length === POSTS_PER_PAGE);
                setLoading(false);
            }, (error) => {
                console.warn('Firebase posts fetch error:', error.message);
                setLoading(false);
                setHasMore(false);
            });

            return () => unsubscribe();
        } catch (error) {
            console.warn('Firebase not configured:', error.message);
            setLoading(false);
            setHasMore(false);
        }
    }, []);

    const loadMore = useCallback(async () => {
        if (!lastDoc || loadingMore) return;
        setLoadingMore(true);

        try {
            const q = query(
                collection(db, POSTS_COLLECTION),
                where('approved', '==', true),
                orderBy('createdAt', 'desc'),
                startAfter(lastDoc),
                limit(POSTS_PER_PAGE)
            );

            const snapshot = await getDocs(q);
            const morePosts = snapshot.docs.map((d) => ({
                id: d.id,
                ...d.data(),
                createdAt: d.data().createdAt?.toDate(),
            }));

            setPosts((prev) => [...prev, ...morePosts]);
            setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null);
            setHasMore(snapshot.docs.length === POSTS_PER_PAGE);
        } catch (error) {
            console.warn('Load more error:', error.message);
        }
        setLoadingMore(false);
    }, [lastDoc, loadingMore]);

    return { posts, loading, hasMore, loadMore, loadingMore };
};

/**
 * 🔥数の多い順でトップ投稿を取得
 */
export const useTopPosts = (count = 3) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const q = query(
                collection(db, POSTS_COLLECTION),
                where('approved', '==', true),
                orderBy('fireCount', 'desc'),
                limit(count)
            );

            const unsubscribe = onSnapshot(q, (snapshot) => {
                setPosts(
                    snapshot.docs.map((d) => ({
                        id: d.id,
                        ...d.data(),
                        createdAt: d.data().createdAt?.toDate(),
                    }))
                );
                setLoading(false);
            }, (error) => {
                console.warn('Top posts fetch error:', error.message);
                setLoading(false);
            });

            return () => unsubscribe();
        } catch (error) {
            console.warn('Firebase not configured:', error.message);
            setLoading(false);
        }
    }, [count]);

    return { posts, loading };
};

/**
 * 新規投稿を送信（画像はBase64でFirestoreに直接保存）
 */
export const submitPost = async ({ nickname, customTitle, toppings, comment, imageFile }) => {
    // バリデーション
    if (!nickname || nickname.length < 1 || nickname.length > 12) {
        throw new Error('ニックネームは1〜12文字で入力してください');
    }
    if (!customTitle || customTitle.length < 1 || customTitle.length > 30) {
        throw new Error('カスタマイズ名を入力してください（30文字以内）');
    }
    if (!comment || comment.length < 1 || comment.length > 100) {
        throw new Error('おすすめポイントを入力してください（100文字以内）');
    }
    if (!imageFile) {
        throw new Error('写真を選択してください');
    }
    if (imageFile.size > 10 * 1024 * 1024) {
        throw new Error('画像サイズは10MB以下にしてください');
    }

    // 画像をBase64に変換（リサイズ済み）
    const imageData = await imageToBase64(imageFile);

    // Firestoreに投稿データを保存
    const postData = {
        nickname,
        customTitle,
        toppings: toppings || [],
        comment,
        imageUrl: imageData,
        fireCount: 0,
        approved: false,
        createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, POSTS_COLLECTION), postData);
};

/**
 * 🔥リアクションを+1する
 */
export const addFireReaction = async (postId) => {
    const postRef = doc(db, POSTS_COLLECTION, postId);
    await updateDoc(postRef, { fireCount: increment(1) });
};

/**
 * 相対時刻表示
 */
export const getRelativeTime = (date) => {
    if (!date) return '';
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'たった今';
    if (minutes < 60) return `${minutes}分前`;
    if (hours < 24) return `${hours}時間前`;
    if (days < 30) return `${days}日前`;
    return date.toLocaleDateString('ja-JP');
};
