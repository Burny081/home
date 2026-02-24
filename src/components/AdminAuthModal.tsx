import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Crown, X, ShieldAlert, ShieldCheck, Mail, Lock, Loader2, Eye, EyeOff } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AdminAuthModalProps {
    onSuccess: () => void;
    onClose: () => void;
    theme: 'light' | 'dark';
}

export default function AdminAuthModal({ onSuccess, onClose, theme }: AdminAuthModalProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'success'>('idle');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const { data, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setIsLoading(false);

        if (authError) {
            setError(authError.message);
            return;
        }

        if (data.user) {
            setStatus('success');
            setTimeout(onSuccess, 600);
        }
    };

    const isDark = theme === 'dark';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className={`w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl border ${isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-gray-100'}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative px-8 pt-8 pb-6 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-amber-500/10 blur-3xl rounded-full" />

                    <motion.div
                        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 relative"
                        style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                    >
                        <Crown className="w-8 h-8 text-white drop-shadow-lg" />
                    </motion.div>

                    <h2 className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Vault Authority
                    </h2>
                    <p className={`text-xs font-bold mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Sign in to manage the Royal Inventory
                    </p>

                    <button
                        onClick={onClose}
                        className={`absolute top-6 right-6 p-2 rounded-xl transition-all ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
                    >
                        <X className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                    </button>
                </div>

                <form onSubmit={handleLogin} className="px-8 pb-8 space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="admin@vault.com"
                                className={`w-full pl-12 pr-4 py-4 rounded-2xl border outline-none transition-all ${isDark ? 'bg-white/5 border-white/5 text-white focus:bg-white/10 focus:border-amber-500/50' : 'bg-gray-50 border-gray-200 text-slate-900 focus:bg-white focus:border-amber-500'}`}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Secret Key</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={`w-full pl-12 pr-12 py-4 rounded-2xl border outline-none transition-all ${isDark ? 'bg-white/5 border-white/5 text-white focus:bg-white/10 focus:border-amber-500/50' : 'bg-gray-50 border-gray-200 text-slate-900 focus:bg-white focus:border-amber-500'}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-all ${isDark ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-gray-100 text-slate-500'}`}
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="h-6 flex items-center justify-center">
                        {error && (
                            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center gap-1 text-red-500 text-[10px] font-bold uppercase text-center"
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldAlert className="w-3 h-3" />
                                    {error.includes('Email not confirmed') ? 'Email Not Confirmed' : error}
                                </div>
                                {error.includes('Email not confirmed') && (
                                    <span className="opacity-60 lowercase tracking-normal">Confirm user in Supabase Dashboard {'->'} Users</span>
                                )}
                            </motion.div>
                        )}
                        {status === 'success' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase"
                            >
                                <ShieldCheck className="w-3 h-3" />
                                Access Granted
                            </motion.div>
                        )}
                    </div>

                    <button
                        disabled={isLoading || status === 'success'}
                        className={`w-full py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all active:scale-95 ${isLoading ? 'bg-slate-800 text-slate-500' : 'bg-amber-600 text-white shadow-amber-500/20 hover:bg-amber-500'}`}
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Decrypt & Enter'}
                    </button>

                    <p className={`text-center text-[8px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                        Authorized Personnel Only
                    </p>
                </form>
            </motion.div>
        </motion.div>
    );
}
