import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Package, LayoutDashboard, Settings, ShoppingCart,
    Plus, Search, SlidersHorizontal, Edit2, Trash2, Bell, TrendingUp, Users, DollarSign,
    X, Image as ImageIcon, Tag, Hash, Info, Check, ChevronDown, Lock
} from 'lucide-react';
import { Product } from '../types';
import { POKEMART_ASSETS } from '../data/products';

interface AdminDashboardProps {
    products: Product[];
    onAdd: (product: Product) => void;
    onUpdate: (product: Product) => void;
    onDelete: (id: number) => void;
    onClose: () => void;
    onLock: () => void;
    theme: 'light' | 'dark';
}

export default function AdminDashboard({ products, onAdd, onUpdate, onDelete, onClose, onLock, theme }: AdminDashboardProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isAddingNew, setIsAddingNew] = useState(false);

    const metrics = useMemo(() => {
        const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
        const lowStock = products.filter(p => p.stock > 0 && p.stock <= 5).length;
        const outOfStock = products.filter(p => p.stock === 0).length;
        return [
            { label: 'Vault Value', value: `$${totalValue.toLocaleString()}`, change: 'Live', icon: DollarSign, color: 'text-emerald-500 bg-emerald-500/10' },
            { label: 'Low Stock', value: lowStock.toString(), change: 'Alert', icon: Package, color: 'text-amber-500 bg-amber-500/10' },
            { label: 'Out of Stock', value: outOfStock.toString(), change: 'Critical', icon: Trash2, color: 'text-red-500 bg-red-500/10' },
        ];
    }, [products]);

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSave = (p: Product) => {
        if (isAddingNew) {
            onAdd(p);
        } else {
            onUpdate(p);
        }
        setIsAddingNew(false);
        setEditingProduct(null);
    };

    return (
        <div className={`min-h-screen font-sans pb-24 transition-colors ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-gray-50 text-slate-900'}`}>
            {/* Header */}
            <header className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 py-4 ${theme === 'dark' ? 'bg-slate-950/80 border-white/5' : 'bg-white/80 border-gray-200'}`}>
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600/10 p-2.5 rounded-2xl">
                            <LayoutDashboard className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black italic tracking-tighter uppercase">ADMIN PANEL</h1>
                            <p className="text-[10px] font-black text-blue-600/60 uppercase tracking-widest leading-none">Inventory Control</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className={`relative p-2.5 rounded-2xl border shadow-sm transition-all ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-white border-gray-100 hover:bg-gray-50'}`}>
                            <Bell className="w-5 h-5 text-blue-500" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white" />
                        </button>
                        <button
                            onClick={onLock}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black uppercase text-xs transition-all border ${theme === 'dark' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/20' : 'bg-amber-50 border-amber-200 text-amber-600 hover:bg-amber-100'
                                }`}
                        >
                            <Lock className="w-4 h-4" />
                            Lock Vault
                        </button>
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-black uppercase text-xs shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Exit
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto p-4 md:p-8">
                {/* Metrics */}
                <div className="flex overflow-x-auto gap-4 pb-6 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`min-w-[170px] flex-1 p-6 rounded-[2rem] shadow-sm border relative overflow-hidden group ${theme === 'dark' ? 'bg-slate-900 border-white/5' : 'bg-white border-gray-100'}`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`${m.color} p-3 rounded-2xl group-hover:scale-110 transition-transform`}>
                                    <m.icon className="w-6 h-6" />
                                </div>
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${m.label === 'Low Stock' ? 'bg-amber-500/10 text-amber-500' : m.label === 'Out of Stock' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                                    {m.change}
                                </span>
                            </div>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{m.label}</p>
                            <h3 className="text-2xl font-black italic">{m.value}</h3>
                        </motion.div>
                    ))}
                </div>

                {/* Search & Actions */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Filter vault inventory..."
                            className={`w-full pl-12 pr-4 py-4 rounded-2xl border focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all ${theme === 'dark' ? 'bg-white/5 border-white/5 text-white placeholder-slate-500' : 'bg-white border-gray-200 text-slate-900'}`}
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className={`p-4 rounded-2xl border transition-all ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                            <SlidersHorizontal className="w-5 h-5 text-slate-400" />
                        </button>
                        <button
                            onClick={() => { setIsAddingNew(true); setEditingProduct({ id: 0, name: '', price: 0, stock: 0, category: 'Singles', description: '', image: '' }); }}
                            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-blue-600 text-white font-black uppercase text-xs shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            <Plus className="w-5 h-5" />
                            Add Asset
                        </button>
                    </div>
                </div>

                {/* Product List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">Inventory Management</h2>
                        <span className="text-[10px] font-bold text-slate-500">{filtered.length} products listed</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-[2rem] border shadow-sm flex items-center gap-4 group transition-all ${theme === 'dark' ? 'bg-slate-900 border-white/5 hover:border-blue-500/30' : 'bg-white border-gray-100 hover:border-blue-200'}`}
                            >
                                <div className={`w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ${theme === 'dark' ? 'bg-black/40' : 'bg-gray-50'}`}>
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-black italic truncate uppercase tracking-tight">{item.name}</h3>
                                    <p className="text-[10px] font-black text-blue-600/60 uppercase tracking-widest">{item.category}</p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg border ${item.stock === 0 ? 'bg-red-500/10 border-red-500/20 text-red-500' : item.stock <= 5 ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'}`}>
                                            {item.stock === 0 ? 'OOS' : `Stock: ${item.stock}`}
                                        </span>
                                        <span className={`text-sm font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => { setIsAddingNew(false); setEditingProduct(item); }}
                                        className="p-3 rounded-xl bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => onDelete(item.id)}
                                        className="p-3 rounded-xl bg-red-600/10 text-red-600 hover:bg-red-600 hover:text-white transition-all active:scale-95"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Edit/Add Modal */}
            <AnimatePresence>
                {editingProduct && (
                    <ProductFormModal
                        product={editingProduct}
                        isNew={isAddingNew}
                        onClose={() => setEditingProduct(null)}
                        onSave={handleSave}
                        theme={theme}
                    />
                )}
            </AnimatePresence>

            {/* Secret Floating Nav */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm">
                <div className={`backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl flex justify-around border ${theme === 'dark' ? 'bg-slate-900/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
                    {[LayoutDashboard, ShoppingCart, TrendingUp, Settings].map((Icon, i) => (
                        <button key={i} className={`p-3 rounded-2xl transition-all ${i === 0 ? 'bg-blue-600 text-white' : theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
                            <Icon className="w-6 h-6" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProductFormModal({ product, isNew, onClose, onSave, theme }: {
    product: Product,
    isNew: boolean,
    onClose: () => void,
    onSave: (p: Product) => void,
    theme: 'light' | 'dark'
}) {
    const [form, setForm] = useState<Product>({ ...product });

    const inputClasses = `w-full px-4 py-3 rounded-xl border outline-none transition-all placeholder-slate-500 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10' : 'bg-gray-50 border-gray-200 text-slate-900 focus:border-blue-500 focus:bg-white'}`;
    const labelClasses = "text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5";

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                className={`w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative ${theme === 'dark' ? 'bg-slate-900 border border-white/10' : 'bg-white border border-gray-100'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-black italic uppercase tracking-tighter">
                            {isNew ? 'New Asset' : 'Edit Asset'}
                        </h2>
                        <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                            {isNew ? 'Creating database entry' : `Product ID: #${product.id}`}
                        </p>
                    </div>
                    <button onClick={onClose} className={`p-2 rounded-xl transition-all ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="space-y-6 max-h-[60vh] overflow-y-auto no-scrollbar pr-2">
                    {/* Name */}
                    <div>
                        <label className={labelClasses}><Tag className="w-3 h-3" /> Name</label>
                        <input className={inputClasses} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Shiny Charizard SIR" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Price */}
                        <div>
                            <label className={labelClasses}><DollarSign className="w-3 h-3" /> Price</label>
                            <input type="number" className={inputClasses} value={form.price} onChange={e => setForm({ ...form, price: parseFloat(e.target.value) || 0 })} placeholder="0.00" />
                        </div>
                        {/* Stock */}
                        <div>
                            <label className={labelClasses}><Hash className="w-3 h-3" /> Stock</label>
                            <input type="number" className={inputClasses} value={form.stock} onChange={e => setForm({ ...form, stock: parseInt(e.target.value) || 0 })} placeholder="0" />
                        </div>
                    </div>

                    {/* Preview Image */}
                    <div>
                        <label className={labelClasses}><ImageIcon className="w-3 h-3" /> Asset Preview</label>
                        {form.image ? (
                            <div className={`w-32 h-32 rounded-2xl overflow-hidden border-2 flex items-center justify-center p-3 ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
                                <img src={form.image} className="w-full h-full object-contain" alt="Preview" />
                            </div>
                        ) : (
                            <div className={`w-32 h-32 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                                <ImageIcon className="w-6 h-6 text-slate-500" />
                                <span className="text-[8px] font-black uppercase text-slate-500">No Image</span>
                            </div>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label className={labelClasses}><SlidersHorizontal className="w-3 h-3" /> Category</label>
                        <div className="relative">
                            <select
                                className={`${inputClasses} appearance-none pr-10`}
                                value={form.category}
                                onChange={e => setForm({ ...form, category: e.target.value })}
                            >
                                {['Singles', 'Booster Boxes', 'Elite Trainer Boxes', 'Slabs', 'Special Collections'].map(c => (
                                    <option key={c} value={c} className={theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>{c}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* Image Selection */}
                    <div>
                        <label className={labelClasses}><ImageIcon className="w-3 h-3" /> Select Asset</label>

                        {/* 1. File Upload (Gallery Access) */}
                        <div className="flex gap-2 items-center mb-3">
                            <input
                                type="file"
                                id="admin-file-upload"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setForm({ ...form, image: reader.result as string });
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            <label
                                htmlFor="admin-file-upload"
                                className={`flex-1 py-4 rounded-xl border-2 border-dashed flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-blue-500/5 group ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}
                            >
                                <ImageIcon className="w-4 h-4 text-blue-500" />
                                <span className={`text-[10px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-blue-600'}`}>
                                    Upload from Device
                                </span>
                            </label>
                        </div>

                        {/* 2. Manual URL Fallback */}
                        <input
                            className={inputClasses}
                            value={form.image}
                            onChange={e => setForm({ ...form, image: e.target.value })}
                            placeholder="Or paste external image URL..."
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className={labelClasses}><Info className="w-3 h-3" /> Description</label>
                        <textarea className={`${inputClasses} h-24 resize-none`} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Product history, condition, etc..." />
                    </div>
                </div>

                <div className="mt-8 flex gap-3">
                    <button onClick={onClose} className={`flex-1 py-4 rounded-2xl font-black uppercase text-xs border transition-all ${theme === 'dark' ? 'border-white/10 hover:bg-white/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                        Discard
                    </button>
                    <button
                        onClick={() => onSave(form)}
                        className="flex-1 py-4 rounded-2xl bg-blue-600 text-white font-black uppercase text-xs shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        Save Asset
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
