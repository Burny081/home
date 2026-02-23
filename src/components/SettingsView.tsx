import React from 'react';
import { motion } from 'framer-motion';
import {
    Settings as SettingsIcon, Shield, CreditCard, MessageSquare,
    Bell, Languages, Moon, Sun, ChevronRight, Lock,
    LogOut, Smartphone, Globe, Info
} from 'lucide-react';

interface SettingsViewProps {
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
    onClose: () => void;
    onLockAdmin: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ theme, onToggleTheme, onClose, onLockAdmin }) => {
    const isDark = theme === 'dark';

    const SettingItem = ({ icon: Icon, label, sublabel, onClick, toggle, value }: any) => (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between p-5 rounded-3xl border transition-all active:scale-[0.98] group mb-3 ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-gray-50 border-gray-100 hover:bg-blue-50'}`}
        >
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${isDark ? 'bg-slate-800 group-hover:bg-blue-600 group-hover:text-white' : 'bg-white group-hover:bg-blue-600 group-hover:text-white'}`}>
                    <Icon className="w-5 h-5 transition-colors" />
                </div>
                <div className="text-left">
                    <p className={`text-sm font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{label}</p>
                    {sublabel && <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{sublabel}</p>}
                </div>
            </div>
            {toggle ? (
                <div className={`w-12 h-6 rounded-full relative transition-colors ${value ? 'bg-blue-600' : isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${value ? 'right-1' : 'left-1'}`} />
                </div>
            ) : (
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isDark ? 'text-slate-600' : 'text-slate-300'}`} />
            )}
        </button>
    );

    return (
        <div className={`min-h-[80vh] pb-24 font-['Plus_Jakarta_Sans',sans-serif] ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <div className="max-w-xl mx-auto px-4 pt-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-blue-600/10 p-4 rounded-[1.5rem]">
                        <SettingsIcon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black uppercase italic tracking-tight">Settings</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Vault Configuration</p>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* General Settings */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-4">Experience</p>
                        <SettingItem
                            icon={isDark ? Moon : Sun}
                            label="Dark Mode"
                            sublabel={isDark ? "Onyx Black Enabled" : "Classic White Enabled"}
                            onClick={onToggleTheme}
                            toggle
                            value={isDark}
                        />
                        <SettingItem
                            icon={Languages}
                            label="Language"
                            sublabel="English (US)"
                        />
                        <SettingItem
                            icon={Bell}
                            label="Notifications"
                            sublabel="Smart alerts only"
                        />
                    </div>

                    {/* Security */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-4">Security</p>
                        <SettingItem
                            icon={Shield}
                            label="Account Security"
                            sublabel="PIN Protected"
                        />
                        <SettingItem
                            icon={Lock}
                            label="Lock Admin Portal"
                            sublabel="Disconnect from Vault"
                            onClick={onLockAdmin}
                        />
                    </div>

                    {/* Support */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-4">About</p>
                        <SettingItem
                            icon={Info}
                            label="App Version"
                            sublabel="TCG Vault v3.0.4 - Premium"
                        />
                        <SettingItem
                            icon={MessageSquare}
                            label="Privacy Policy"
                        />
                    </div>

                    <button
                        onClick={onClose}
                        className={`w-full py-4 rounded-3xl font-black uppercase text-xs tracking-widest border transition-all active:scale-[0.98] ${isDark ? 'bg-white text-black border-transparent hover:bg-slate-200' : 'bg-slate-900 text-white border-transparent hover:bg-black'}`}
                    >
                        Save & Exit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
