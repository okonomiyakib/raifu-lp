import React, { useState, useRef } from 'react';
import { submitPost } from '../../hooks/usePosts';

export const PostForm = ({ active, onClose }) => {
    const [nickname, setNickname] = useState('');
    const [customTitle, setCustomTitle] = useState('');
    const [toppings, setToppings] = useState([]);
    const [customTopping, setCustomTopping] = useState('');
    const [comment, setComment] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const fileInputRef = useRef(null);

    // カスタマイズで使えるトッピング・カスタマイズ候補
    const TOPPING_OPTIONS = [
        '大葉', 'ネギだく', 'チーズ', 'もち',
        '辛麺', 'ガーリック', '目玉焼き', 'イカ天',
        'コーン', 'キムチ', '紅しょうが多め', 'ソース多め',
        'マヨたっぷり', 'そば2倍',
    ];

    if (!active) return null;

    const toggleTopping = (t) => {
        setToppings((prev) =>
            prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
        );
    };

    const addCustomTopping = () => {
        if (customTopping.trim() && !toppings.includes(customTopping.trim())) {
            setToppings((prev) => [...prev, customTopping.trim()]);
            setCustomTopping('');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            setError('JPEG、PNG、WebP形式の画像を選択してください');
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            setError('画像サイズは10MB以下にしてください');
            return;
        }

        setImageFile(file);
        setError('');
        const reader = new FileReader();
        reader.onload = (ev) => setImagePreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        try {
            await submitPost({ nickname, customTitle, toppings, comment, imageFile });
            setSuccess(true);
        } catch (err) {
            setError(err.message || '投稿に失敗しました。もう一度お試しください。');
        } finally {
            setSubmitting(false);
        }
    };

    const handleClose = () => {
        setNickname('');
        setCustomTitle('');
        setToppings([]);
        setCustomTopping('');
        setComment('');
        setImageFile(null);
        setImagePreview(null);
        setError('');
        setSuccess(false);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: 'rgba(43, 18, 21, 0.95)', backdropFilter: 'blur(20px)' }}
            onClick={handleClose}
        >
            <div
                className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl relative"
                style={{
                    background: 'linear-gradient(135deg, #3d1a1e 0%, #2b1215 100%)',
                    border: '1px solid rgba(255, 120, 120, 0.2)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 80, 80, 0.1)',
                    animation: 'postFormIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* ヘッダー */}
                <div className="sticky top-0 z-10 px-6 pt-6 pb-4" style={{ background: 'linear-gradient(180deg, #3d1a1e 80%, transparent)' }}>
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                🔥 マイカスタマイズを投稿
                            </h2>
                            <p className="text-xs text-white/40 mt-0.5">あなただけの食べ方を教えて！</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-red-500/40 transition-all"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {success ? (
                    /* 投稿完了画面 */
                    <div className="px-6 pb-8 text-center">
                        <div className="py-12">
                            <div className="text-6xl mb-4" style={{ animation: 'successBounce 0.6s ease-out' }}>🎉</div>
                            <h3 className="text-xl font-bold text-white mb-2">投稿ありがとうございます！</h3>
                            <p className="text-white/50 text-sm mb-1">管理者の承認後に表示されます</p>
                            <p className="text-white/30 text-xs">少々お待ちください 🍳</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="w-full py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 active:scale-95 transition-all"
                        >
                            閉じる
                        </button>
                    </div>
                ) : (
                    /* 投稿フォーム */
                    <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-5">
                        {/* 写真アップロード */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                                📷 カスタマイズの写真 <span className="text-red-400">*</span>
                            </label>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            {imagePreview ? (
                                <div className="relative rounded-xl overflow-hidden border border-white/10 group">
                                    <img src={imagePreview} alt="プレビュー" className="w-full h-48 object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setImageFile(null);
                                            setImagePreview(null);
                                            if (fileInputRef.current) fileInputRef.current.value = '';
                                        }}
                                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                                    >
                                        ✕
                                    </button>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <span className="text-white text-sm font-medium">写真を変更</span>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full h-36 rounded-xl border-2 border-dashed border-white/15 flex flex-col items-center justify-center gap-2 text-white/40 hover:border-red-500/40 hover:text-red-400/60 transition-all active:scale-95"
                                    style={{ background: 'rgba(255,255,255,0.02)' }}
                                >
                                    <span className="text-3xl">📸</span>
                                    <span className="text-sm">タップして写真を選択</span>
                                    <span className="text-[10px] text-white/20">JPEG / PNG / WebP（10MB以下）</span>
                                </button>
                            )}
                        </div>

                        {/* ニックネーム */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                                👤 ニックネーム <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="おこビー"
                                maxLength={12}
                                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'rgba(255,80,80,0.5)';
                                    e.target.style.boxShadow = '0 0 15px rgba(255,80,80,0.15)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            <p className="text-right text-[10px] text-white/25 mt-1">{nickname.length}/12</p>
                        </div>

                        {/* カスタマイズ名 */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                                ✨ カスタマイズ名 <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={customTitle}
                                onChange={(e) => setCustomTitle(e.target.value)}
                                placeholder="例: 大葉チーズもちスペシャル"
                                maxLength={30}
                                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'rgba(255,80,80,0.5)';
                                    e.target.style.boxShadow = '0 0 15px rgba(255,80,80,0.15)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            <p className="text-right text-[10px] text-white/25 mt-1">{customTitle.length}/30</p>
                        </div>

                        {/* トッピング・カスタマイズ選択 */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                                🍳 カスタマイズ内容 <span className="text-white/30 text-xs font-normal">（複数選択OK）</span>
                            </label>
                            <div className="flex flex-wrap gap-1.5">
                                {TOPPING_OPTIONS.map((opt) => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => toggleTopping(opt)}
                                        className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95"
                                        style={{
                                            background: toppings.includes(opt)
                                                ? 'linear-gradient(135deg, #dc2626, #ef4444)'
                                                : 'rgba(255,255,255,0.05)',
                                            color: toppings.includes(opt) ? '#fff' : 'rgba(255,255,255,0.5)',
                                            border: `1px solid ${toppings.includes(opt) ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.08)'}`,
                                            boxShadow: toppings.includes(opt) ? '0 2px 10px rgba(255,60,60,0.25)' : 'none',
                                        }}
                                    >
                                        {toppings.includes(opt) ? '✓ ' : ''}{opt}
                                    </button>
                                ))}
                            </div>
                            {/* 自由入力トッピング */}
                            <div className="flex gap-2 mt-2">
                                <input
                                    type="text"
                                    value={customTopping}
                                    onChange={(e) => setCustomTopping(e.target.value)}
                                    placeholder="その他のカスタマイズを追加"
                                    maxLength={15}
                                    className="flex-1 px-3 py-2 rounded-lg text-white placeholder-white/25 text-xs outline-none transition-all"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCustomTopping(); } }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'rgba(255,80,80,0.5)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={addCustomTopping}
                                    className="px-3 py-2 rounded-lg text-xs font-bold text-white/60 hover:text-white transition-all"
                                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    + 追加
                                </button>
                            </div>
                            {/* 選択済みトッピング表示 */}
                            {toppings.length > 0 && (
                                <div className="mt-2 px-3 py-2 rounded-lg text-xs text-white/50" style={{ background: 'rgba(255,80,80,0.06)', border: '1px solid rgba(255,80,80,0.1)' }}>
                                    選択中: <span className="text-white/70 font-medium">{toppings.join(' / ')}</span>
                                </div>
                            )}
                        </div>

                        {/* コメント */}
                        <div>
                            <label className="block text-sm font-medium text-white/70 mb-2">
                                💬 おすすめポイント <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="チーズがトロトロでめっちゃ美味い！"
                                maxLength={100}
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all resize-none"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'rgba(255,80,80,0.5)';
                                    e.target.style.boxShadow = '0 0 15px rgba(255,80,80,0.15)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            <p className="text-right text-[10px] text-white/25 mt-1">{comment.length}/100</p>
                        </div>

                        {/* エラー表示 */}
                        {error && (
                            <div
                                className="px-4 py-3 rounded-xl text-sm text-red-300 flex items-center gap-2"
                                style={{ background: 'rgba(255,60,60,0.1)', border: '1px solid rgba(255,60,60,0.2)' }}
                            >
                                <span>⚠️</span>
                                <span>{error}</span>
                            </div>
                        )}

                        {/* 投稿ボタン */}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: submitting
                                    ? 'rgba(255,255,255,0.1)'
                                    : 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)',
                                boxShadow: submitting ? 'none' : '0 8px 30px rgba(255,60,60,0.3)',
                            }}
                        >
                            {submitting ? (
                                <>
                                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" style={{ animation: 'spin 0.8s linear infinite' }} />
                                    投稿中...
                                </>
                            ) : (
                                <>🔥 投稿する！</>
                            )}
                        </button>

                        <p className="text-center text-[10px] text-white/20">
                            ※ 投稿は管理者の承認後に表示されます
                        </p>
                    </form>
                )}
            </div>

            <style>{`
                @keyframes postFormIn {
                    from { opacity: 0; transform: translateY(40px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes successBounce {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};
