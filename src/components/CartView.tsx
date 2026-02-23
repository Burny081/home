import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShoppingCart, Zap } from 'lucide-react';
import { CartItem } from '../types';

interface CartViewProps {
    cartItems: CartItem[];
    onRemove: (productId: number) => void;
    onChangeQty: (productId: number, delta: number) => void;
    onShop: () => void;
}

export default function CartView({ cartItems, onRemove, onChangeQty, onShop }: CartViewProps) {
    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Bulk Discount: 10% off if 20+ articles
    const discount = totalItems >= 20 ? subtotal * 0.1 : 0;
    const discountedSubtotal = subtotal - discount;

    const shipping = discountedSubtotal > 150 ? 0 : 9.99;
    const total = discountedSubtotal + shipping;

    const canCheckout = totalItems >= 5;

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 mb-20">
                <div className="w-24 h-24 rounded-[2rem] bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 shadow-inner">
                    <ShoppingCart className="w-12 h-12 text-slate-300 dark:text-slate-700" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white italic uppercase mb-2">Your cart is empty</h3>
                <p className="text-slate-400 font-medium mb-8 text-center max-w-xs">
                    You haven't added anything yet. Head to the shop and find your next rare pull!
                </p>
                <button
                    onClick={onShop}
                    className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide shadow-xl shadow-blue-500/30 hover:scale-105 transition-all active:scale-95"
                >
                    <ShoppingBag className="w-5 h-5" />
                    Browse Shop
                </button>
            </div>
        );
    }

    return (
        <div className="mb-28">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-black italic uppercase">Your Cart</h2>
                    <p className="text-sm font-bold text-slate-400">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your bag</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Item List */}
                <div className="lg:col-span-2 space-y-4">
                    <AnimatePresence>
                        {cartItems.map((item) => (
                            <motion.div
                                key={item.product.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                                transition={{ duration: 0.25 }}
                                className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-[1.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-md transition-all"
                            >
                                {/* Image */}
                                <div className="flex-none w-20 h-20 bg-gray-50 dark:bg-black/40 rounded-2xl flex items-center justify-center overflow-hidden">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        referrerPolicy="no-referrer"
                                        className="h-full w-auto object-contain"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-0.5">{item.product.category}</p>
                                    <p className="font-black text-sm leading-tight line-clamp-2 dark:text-white uppercase italic">{item.product.name}</p>
                                    <p className="text-base font-black mt-1 dark:text-white">${(item.product.price * item.quantity).toFixed(2)}</p>
                                </div>

                                {/* Qty & Remove */}
                                <div className="flex flex-col items-end gap-3">
                                    <button
                                        onClick={() => onRemove(item.product.id)}
                                        className="p-1.5 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-black/40 rounded-xl p-1">
                                        <button
                                            onClick={() => onChangeQty(item.product.id, -1)}
                                            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all active:scale-90"
                                        >
                                            <Minus className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                                        </button>
                                        <span className="w-6 text-center text-sm font-black dark:text-white">{item.quantity}</span>
                                        <button
                                            onClick={() => onChangeQty(item.product.id, 1)}
                                            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all active:scale-90"
                                        >
                                            <Plus className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-900 dark:bg-slate-900 border border-transparent dark:border-white/5 rounded-[2rem] p-6 text-white sticky top-24 shadow-2xl">
                        <h3 className="text-lg font-black uppercase italic mb-6 tracking-tighter">Order Summary</h3>
                        <div className="space-y-3 mb-6 font-bold">
                            <div className="flex justify-between text-sm text-slate-400">
                                <span className="uppercase tracking-widest text-[10px]">Subtotal ({totalItems} {totalItems === 1 ? 'box' : 'boxes'})</span>
                                <span className="text-white">${subtotal.toFixed(2)}</span>
                            </div>

                            {discount > 0 && (
                                <div className="flex justify-between text-sm text-emerald-400">
                                    <span className="uppercase tracking-widest text-[10px]">Bulk Discount (10%)</span>
                                    <span className="font-black">-${discount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="flex justify-between text-sm text-slate-400">
                                <span className="uppercase tracking-widest text-[10px]">Shipping</span>
                                <span className={`${shipping === 0 ? 'text-emerald-400 font-black' : 'text-white'}`}>
                                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                                </span>
                            </div>

                            {!canCheckout && (
                                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 mt-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-red-500 text-center">
                                        Minimum order of 5 boxes required.
                                        <br />
                                        Add {5 - totalItems} more to proceed.
                                    </p>
                                </div>
                            )}

                            {canCheckout && subtotal > 0 && shipping > 0 && (
                                <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 p-2.5 rounded-xl border border-blue-500/20">
                                    Add ${(150 - discountedSubtotal).toFixed(2)} more for free shipping!
                                </p>
                            )}

                            {totalItems >= 20 && (
                                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-emerald-500 text-center flex items-center justify-center gap-1.5">
                                        <Zap className="w-3 h-3 fill-current" />
                                        Bulk Discount Applied!
                                    </p>
                                </div>
                            )}

                            {totalItems >= 15 && totalItems < 20 && (
                                <p className="text-[9px] font-black uppercase tracking-widest text-amber-500 text-center">
                                    Add {20 - totalItems} more for 10% Bulk Discount!
                                </p>
                            )}

                            <div className="border-t border-slate-700/50 pt-3 flex justify-between items-baseline">
                                <span className="font-black uppercase italic text-sm">Total</span>
                                <span className="font-black text-2xl text-blue-500 italic">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            disabled={!canCheckout}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl ${canCheckout
                                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20 active:scale-95'
                                : 'bg-slate-800 text-slate-500 cursor-not-allowed shadow-none'
                                }`}
                        >
                            Process Vault Checkout
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <p className="text-center text-[9px] font-black uppercase tracking-widest text-slate-500 mt-5 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Secure Vault Transaction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
