import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, ChevronRight, Star } from 'lucide-react';
import { CartItem } from '../types';

interface OrderSimulationProps {
    cartItems: CartItem[];
    total: number;
    onClose: () => void;
}

const OrderSimulation: React.FC<OrderSimulationProps> = ({ cartItems, total, onClose }) => {
    const orderNumber = Math.floor(Math.random() * 90000000) + 10000000;
    const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="flex flex-col bg-white text-slate-900 font-sans max-h-[80vh] overflow-y-auto no-scrollbar rounded-t-[2rem]">
            {/* Pokemon Center Banner */}
            <div className="relative w-full aspect-[4/1] bg-[#fdfaf1] border-b border-[#f0e6c8]">
                <img
                    src="/pokemon_center_banner.png"
                    alt="Pokemon Center Banner"
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="p-8 space-y-8">
                {/* Greeting */}
                <header>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">Hello, Trainer!</h1>
                    <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                        <p>Your package has shipped! <span className="font-black text-slate-900">Estimated delivery is 3-6 business days</span> however where possible we'll try to deliver your order sooner.</p>
                        <p>Please allow up to 8 business days before contacting us regarding your order.</p>
                    </div>
                </header>

                <hr className="border-t-2 border-[#f0e6c8]" />

                {/* Order Details */}
                <section>
                    <h2 className="text-3xl font-black tracking-tight mb-6">Order Details</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between items-baseline">
                            <span className="text-lg font-black uppercase tracking-tight">Order Subtotal:</span>
                            <span className="text-lg font-black">${total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                            <span className="text-lg font-black uppercase tracking-tight">Order Number:</span>
                            <span className="text-lg font-medium">#{orderNumber}</span>
                        </div>
                        <div className="flex justify-between items-baseline text-slate-500">
                            <span className="text-sm font-bold uppercase tracking-widest">Date Ordered:</span>
                            <span className="text-sm font-bold">{date}</span>
                        </div>
                    </div>
                </section>

                <hr className="border-t-2 border-[#f0e6c8]" />

                {/* Shipping Details */}
                <section>
                    <h2 className="text-3xl font-black tracking-tight mb-6">Shipping Details</h2>
                    <div className="space-y-1">
                        <p className="text-lg font-black uppercase tracking-tight mb-2">Shipping Address:</p>
                        <p className="text-lg font-medium italic opacity-70">Gilles Michael</p>
                        <p className="text-lg font-medium italic opacity-70">123 Pallet Town Dr.</p>
                        <p className="text-lg font-medium italic opacity-70">San Angelo, TX 76903</p>
                        <p className="text-lg font-medium italic opacity-70">United States</p>
                    </div>
                </section>

                <hr className="border-t-2 border-[#f0e6c8]" />

                {/* Order Summary */}
                <section>
                    <h2 className="text-3xl font-black tracking-tight mb-6 uppercase">Order Summary</h2>
                    <div className="space-y-8">
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="w-24 h-24 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0">
                                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-xl font-black leading-tight text-slate-900">{item.product.name}</h3>
                                    <div className="space-y-1">
                                        <p className="text-sm font-black uppercase tracking-widest text-slate-500">SKU # : <span className="text-slate-900 font-black">10-{item.product.id}-{(idx + 7).toString().padStart(3, '0')}</span></p>
                                        <p className="text-sm font-black uppercase tracking-widest text-slate-500">Qty : <span className="text-slate-900 font-black">{item.quantity}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="pt-8">
                    <button
                        onClick={onClose}
                        className="w-full py-5 rounded-[1.5rem] bg-blue-600 text-white font-black uppercase text-sm tracking-[0.2em] shadow-2xl shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Return to Vault
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSimulation;
