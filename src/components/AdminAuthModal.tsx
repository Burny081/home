import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, X, Delete, ShieldAlert, ShieldCheck } from 'lucide-react';

const ADMIN_PIN = '1337';
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60000; // 1 minute

interface AdminAuthModalProps {
    onSuccess: () => void;
    onClose: () => void;
    theme: 'light' | 'dark';
}

export default function AdminAuthModal({ onSuccess, onClose, theme }: AdminAuthModalProps) {
    const [pin, setPin] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const [lockTimer, setLockTimer] = useState(0);
    const [shake, setShake] = useState(false);
    const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

    const MAX_PIN_LENGTH = ADMIN_PIN.length;

    useEffect(() => {
        const lockoutEnd = Number(sessionStorage.getItem('admin_lockout_end') || 0);
        if (lockoutEnd > Date.now()) {
            setIsLocked(true);
            startCountdown(Math.ceil((lockoutEnd - Date.now()) / 1000));
        }
        const savedAttempts = Number(sessionStorage.getItem('admin_attempts') || 0);
        setAttempts(savedAttempts);
    }, []);

    const startCountdown = (seconds: number) => {
        setLockTimer(seconds);
        const interval = setInterval(() => {
            setLockTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsLocked(false);
                    sessionStorage.removeItem('admin_lockout_end');
                    sessionStorage.removeItem('admin_attempts');
                    setAttempts(0);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleDigit = (digit: string) => {
        if (isLocked || pin.length >= MAX_PIN_LENGTH) return;
        const newPin = pin + digit;
        setPin(newPin);
        if (newPin.length === MAX_PIN_LENGTH) {
            setTimeout(() => verifyPin(newPin), 150);
        }
    };

    const handleDelete = () => {
        if (!isLocked) setPin(prev => prev.slice(0, -1));
    };

    const verifyPin = (enteredPin: string) => {
        if (enteredPin === ADMIN_PIN) {
            setStatus('success');
            sessionStorage.removeItem('admin_attempts');
            sessionStorage.removeItem('admin_lockout_end');
            setTimeout(onSuccess, 600);
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            sessionStorage.setItem('admin_attempts', String(newAttempts));
            setStatus('error');
            setShake(true);
            setTimeout(() => {
                setShake(false);
                setPin('');
                setStatus('idle');
            }, 700);

            if (newAttempts >= MAX_ATTEMPTS) {
                const lockoutEnd = Date.now() + LOCKOUT_DURATION_MS;
                sessionStorage.setItem('admin_lockout_end', String(lockoutEnd));
                setIsLocked(true);
                startCountdown(60);
            }
        }
    };

    const isDark = theme === 'dark';

    const indicators = Array.from({ length: MAX_PIN_LENGTH }, (_, i) => ({
        filled: i < pin.length,
    }));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                className={`w-full max-w-xs rounded-[2.5rem] overflow-hidden shadow-2xl border ${isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-gray-100'}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative px-8 pt-8 pb-6 text-center">
                    {/* Glow */}
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
                        Royal Vault Access
                    </h2>
                    <p className={`text-xs font-bold mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Enter your admin PIN to continue
                    </p>

                    <button
                        onClick={onClose}
                        className={`absolute top-6 right-6 p-2 rounded-xl transition-all ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
                    >
                        <X className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                    </button>
                </div>

                {/* PIN Indicator Dots */}
                <motion.div
                    animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center gap-4 px-8 mb-6"
                >
                    {indicators.map((dot, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: dot.filled ? 1 : 0.7,
                                backgroundColor: status === 'success'
                                    ? '#10b981'
                                    : status === 'error'
                                        ? '#ef4444'
                                        : dot.filled
                                            ? '#f59e0b'
                                            : isDark ? '#334155' : '#e2e8f0',
                            }}
                            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                            className="w-4 h-4 rounded-full"
                        />
                    ))}
                </motion.div>

                {/* Status messages */}
                <div className="h-8 flex items-center justify-center px-8 mb-2">
                    {isLocked ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="flex items-center gap-2 text-red-500 text-xs font-bold"
                        >
                            <ShieldAlert className="w-4 h-4" />
                            Vault locked. Try again in {lockTimer}s
                        </motion.div>
                    ) : status === 'error' ? (
                        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-xs font-bold"
                        >
                            Incorrect PIN — {MAX_ATTEMPTS - attempts} attempt{MAX_ATTEMPTS - attempts !== 1 ? 's' : ''} left
                        </motion.p>
                    ) : status === 'success' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="flex items-center gap-2 text-emerald-500 text-xs font-bold"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            Access Granted
                        </motion.div>
                    ) : null}
                </div>

                {/* Numpad */}
                <div className="px-6 pb-8 grid grid-cols-3 gap-3">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((key, i) => {
                        if (key === '') return <div key={i} />;
                        const isDelete = key === '⌫';
                        return (
                            <motion.button
                                key={i}
                                whileTap={{ scale: 0.88 }}
                                onClick={() => isDelete ? handleDelete() : handleDigit(key)}
                                disabled={isLocked}
                                className={`
                  h-14 rounded-2xl font-black text-lg transition-all flex items-center justify-center
                  ${isDelete
                                        ? isDark
                                            ? 'bg-white/5 text-slate-400 hover:bg-white/10'
                                            : 'bg-gray-100 text-slate-500 hover:bg-gray-200'
                                        : isDark
                                            ? 'bg-white/5 text-white hover:bg-amber-500/20 hover:text-amber-400 border border-white/5'
                                            : 'bg-gray-50 text-slate-800 hover:bg-amber-50 hover:text-amber-600 border border-gray-100'
                                    }
                  disabled:opacity-30 disabled:cursor-not-allowed
                `}
                            >
                                {isDelete ? <Delete className="w-5 h-5" /> : key}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Hint */}
                <div className={`px-8 pb-6 text-center text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>
                    Tap logo 7× to open this vault
                </div>
            </motion.div>
        </motion.div>
    );
}
