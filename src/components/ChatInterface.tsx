import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, User, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

interface ChatInterfaceProps {
    onClose: () => void;
    theme: 'light' | 'dark';
}

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose, theme }) => {
    const isDark = theme === 'dark';
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Welcome to the Royal Vault Concierge. How can we assist with your payment or transaction today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Bot Response Simulation
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const botMsg: Message = {
                id: Date.now() + 1,
                text: "I understand you're looking for alternative payment methods. An Elite Concierge agent will be with you shortly to provide our secure manual payment details. Please keep this window open.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-slate-950/40`}
        >
            <motion.div
                className={`w-full max-w-lg h-[80vh] rounded-[2.5rem] flex flex-col shadow-2xl border overflow-hidden ${isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-gray-100'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`p-6 border-b flex items-center justify-between ${isDark ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50'}`}>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <MessageSquare className="w-6 h-6 text-white" />
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-sm animate-pulse" />
                        </div>
                        <div>
                            <h3 className={`text-lg font-black uppercase tracking-tight italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Elite Concierge</h3>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-3 h-3 text-blue-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secure Live Support</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'}`}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Messages Panel */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm text-sm font-medium ${msg.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                    : isDark ? 'bg-white/5 text-slate-200 border border-white/5 rounded-tl-none' : 'bg-gray-100 text-slate-700 rounded-tl-none'
                                }`}>
                                {msg.text}
                                <p className={`text-[8px] mt-1.5 font-bold uppercase tracking-widest opacity-40 ${msg.sender === 'user' ? 'text-white' : 'text-slate-500'}`}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className={`p-4 rounded-2xl rounded-tl-none flex gap-1 ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-100" />
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-200" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className={`p-6 border-t ${isDark ? 'border-white/5 bg-black/20' : 'border-gray-100 bg-gray-50'}`}>
                    <div className="flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type reaching our concierge..."
                            className={`flex-1 p-4 rounded-2xl border outline-none transition-all placeholder:text-[10px] placeholder:font-black placeholder:uppercase placeholder:text-slate-500 ${isDark ? 'bg-white/5 border-white/5 focus:bg-white/10 focus:border-blue-500 text-white' : 'bg-white border-gray-200 focus:border-blue-500'}`}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                        >
                            <Send className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 opacity-40">
                        <Zap className="w-3 h-3 text-amber-500" />
                        <span className="text-[8px] font-black uppercase tracking-widest">Powered by Royal Intelligence</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ChatInterface;
