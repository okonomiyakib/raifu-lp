import React, { useState, useCallback } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useApprovedPosts, addFireReaction, getRelativeTime } from '../../hooks/usePosts';

const FireButton = ({ postId, count }) => {
    const [animating, setAnimating] = useState(false);
    const [localCount, setLocalCount] = useState(count);
    const [particles, setParticles] = useState([]);

    const handleClick = useCallback(async (e) => {
        e.stopPropagation();
        if (animating) return;

        setAnimating(true);
        setLocalCount((c) => c + 1);

        // パーティクル生成
        const newParticles = Array.from({ length: 6 }, (_, i) => ({
            id: Date.now() + i,
            x: (Math.random() - 0.5) * 60,
            y: -(Math.random() * 40 + 20),
            rotation: Math.random() * 360,
        }));
        setParticles(newParticles);

        try {
            await addFireReaction(postId);
        } catch (err) {
            setLocalCount((c) => c - 1);
        }

        setTimeout(() => {
            setAnimating(false);
            setParticles([]);
        }, 800);
    }, [postId, animating]);

    return (
        <button
            onClick={handleClick}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all active:scale-90"
            style={{
                background: animating ? 'rgba(255,80,60,0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${animating ? 'rgba(255,100,60,0.4)' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: animating ? '0 0 20px rgba(255,80,60,0.3)' : 'none',
            }}
        >
            {/* パーティクル */}
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="absolute text-xs pointer-events-none"
                    style={{
                        left: '50%',
                        top: '50%',
                        animation: 'fireParticle 0.8s ease-out forwards',
                        '--px': `${p.x}px`,
                        '--py': `${p.y}px`,
                        '--pr': `${p.rotation}deg`,
                    }}
                >
                    🔥
                </span>
            ))}
            <span
                className="text-base"
                style={{
                    transform: animating ? 'scale(1.3)' : 'scale(1)',
                    transition: 'transform 0.2s ease-out',
                    filter: animating ? 'drop-shadow(0 0 6px rgba(255,100,50,0.6))' : 'none',
                }}
            >
                🔥
            </span>
            <span className="font-bold text-white/70">{localCount}</span>
        </button>
    );
};

const PostCard = ({ post, index }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div
            className="rounded-2xl overflow-hidden group transition-all duration-500 hover:translate-y-[-2px]"
            style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                animation: `cardFadeIn 0.5s ease-out ${index * 0.1}s both`,
            }}
        >
            {/* 画像 */}
            <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.02]">
                {!imgLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-red-500/30 border-t-red-500 rounded-full" style={{ animation: 'spin 0.8s linear infinite' }} />
                    </div>
                )}
                <img
                    src={post.imageUrl}
                    alt={post.customTitle || post.menuName || 'カスタマイズ'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onLoad={() => setImgLoaded(true)}
                    style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                />
                {/* カスタマイズ名バッジ */}
                <div className="absolute top-2 left-2">
                    <span
                        className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white"
                        style={{
                            background: 'linear-gradient(135deg, rgba(220,38,38,0.9), rgba(239,68,68,0.9))',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        }}
                    >
                        {post.customTitle || post.menuName}
                    </span>
                </div>
            </div>

            {/* コンテンツ */}
            <div className="p-3.5">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                            style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)' }}
                        >
                            {post.nickname.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-white/80">{post.nickname}</span>
                    </div>
                    <span className="text-[10px] text-white/25">{getRelativeTime(post.createdAt)}</span>
                </div>

                <p className="text-sm text-white/55 leading-relaxed mb-2 line-clamp-2">
                    {post.comment}
                </p>

                {/* トッピングタグ */}
                {post.toppings && post.toppings.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {post.toppings.slice(0, 3).map((t) => (
                            <span key={t} className="px-1.5 py-0.5 rounded text-[9px] text-white/50" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                {t}
                            </span>
                        ))}
                        {post.toppings.length > 3 && (
                            <span className="text-[9px] text-white/30">+{post.toppings.length - 3}</span>
                        )}
                    </div>
                )}

                <div className="flex items-center justify-end">
                    <FireButton postId={post.id} count={post.fireCount} />
                </div>
            </div>
        </div>
    );
};

export const UserPostsSection = ({ onPostClick }) => {
    const { posts, loading, hasMore, loadMore, loadingMore } = useApprovedPosts();

    return (
        <section id="posts" className="px-4 py-12 max-w-[540px] mx-auto">
            <ScrollReveal>
                <div className="section-header">
                    <div className="shu-accent"></div>
                    <div className="title-group">
                        <span className="title-en">My Customize</span>
                        <span className="title-jp">みんなのマイカスタマイズ</span>
                    </div>
                </div>

                {/* 投稿ボタン */}
                <div className="mb-6">
                    <button
                        onClick={onPostClick}
                        className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 active:scale-95 transition-all group"
                        style={{
                            background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)',
                            boxShadow: '0 8px 30px rgba(255,60,60,0.25)',
                            border: '1px solid rgba(255,120,120,0.3)',
                        }}
                    >
                        <span className="text-lg group-hover:scale-110 transition-transform">🔥</span>
                        <span className="text-white">マイカスタマイズを投稿！</span>
                    </button>
                </div>

                {/* ローディング */}
                {loading && (
                    <div className="flex flex-col items-center py-12 gap-3">
                        <div className="w-10 h-10 border-2 border-red-500/30 border-t-red-500 rounded-full" style={{ animation: 'spin 0.8s linear infinite' }} />
                        <p className="text-white/30 text-sm">読み込み中...</p>
                    </div>
                )}

                {/* 投稿がない場合 */}
                {!loading && posts.length === 0 && (
                    <div className="text-center py-12 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)' }}>
                        <div className="text-4xl mb-3">🍳</div>
                        <p className="text-white/50 text-sm font-medium mb-1">まだ投稿がありません</p>
                        <p className="text-white/25 text-xs">最初の投稿者になろう！</p>
                    </div>
                )}

                {/* 投稿カードグリッド */}
                {!loading && posts.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                        {posts.map((post, index) => (
                            <PostCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                )}

                {/* もっと見るボタン */}
                {hasMore && posts.length > 0 && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={loadMore}
                            disabled={loadingMore}
                            className="px-8 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white transition-all active:scale-95 disabled:opacity-50"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            {loadingMore ? (
                                <span className="flex items-center gap-2">
                                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" style={{ animation: 'spin 0.8s linear infinite' }} />
                                    読み込み中...
                                </span>
                            ) : (
                                'もっと見る'
                            )}
                        </button>
                    </div>
                )}
            </ScrollReveal>

            <style>{`
                @keyframes cardFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes fireParticle {
                    0% { transform: translate(-50%, -50%) translate(0, 0) rotate(0) scale(1); opacity: 1; }
                    100% { transform: translate(-50%, -50%) translate(var(--px), var(--py)) rotate(var(--pr)) scale(0); opacity: 0; }
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};
