import React from 'react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { Plus, Package, TrendingUp, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

interface HighEndHomeProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
    onToggleFavorite: (product: Product) => void;
    favorites: number[];
    theme: 'light' | 'dark';
    onShopClick: () => void;
}

const HighEndHome: React.FC<HighEndHomeProps> = ({ products, onAddToCart, onProductClick, onToggleFavorite, favorites, theme, onShopClick }) => {
    // Filter products for different sections using live products list
    const auctionProduct = products.find(p => p.id === 13) || products[0];
    const liveVaultProducts = products.slice(0, 10);
    const grailProducts = products.filter(p => p.category === 'Special Collections' || p.price > 100).slice(0, 6);

    const isDark = theme === 'dark';

    return (
        <div className={`flex-1 flex flex-col w-full pb-24 font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
                {/* 0. LET'S SHOP CTA */}
                <div className="pt-8 pb-4">
                    <button
                        onClick={onShopClick}
                        className={`w-full group relative overflow-hidden rounded-3xl p-6 transition-all active:scale-[0.98] border shadow-2xl ${isDark ? 'bg-[#121212] border-white/5 hover:border-blue-500/30' : 'bg-white border-gray-100 hover:border-blue-500/30'}`}
                    >
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                    <ShoppingBag className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-left">
                                    <h3 className={`text-xl font-black uppercase tracking-tighter italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Let's Shop</h3>
                                    <p className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Explore 24+ Premium Booster Boxes</p>
                                </div>
                            </div>
                            <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${isDark ? 'border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600' : 'border-gray-200 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white'}`}>
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
                    </button>
                </div>

                {/* 1. AUCTION HERO */}
                <section className="pt-6 mb-8 lg:mb-12">
                    <div
                        onClick={() => onProductClick(auctionProduct)}
                        className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border transition-all hover:-translate-y-1 duration-700 ${isDark ? 'bg-slate-900 border-white/10 shadow-[0_0_40px_rgba(255,62,62,0.15)] hover:shadow-[0_0_60px_rgba(255,62,62,0.25)]' : 'bg-gray-50 border-gray-200 shadow-xl'}`}
                    >
                        <div className={`absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent ${isDark ? 'via-black/20 to-black/90' : 'via-white/20 to-white/90'}`}></div>
                        <div className={`w-full aspect-[4/3] md:aspect-[21/9] relative overflow-hidden ${isDark ? 'bg-black/40' : 'bg-white'}`}>
                            <img
                                src={auctionProduct.image}
                                alt="Hero Auction"
                                className="w-full h-full object-contain md:object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay"></div>
                        </div>

                        <div className="absolute top-6 left-6 z-20">
                            <span className={`backdrop-blur-md border px-4 py-2 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-xl flex items-center gap-2 ${isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-white/80 border-gray-200 text-slate-900'}`}>
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></span>
                                Live Auction
                            </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <div className="max-w-2xl">
                                <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    {auctionProduct.name.split(' ')[0]}<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3e3e] via-orange-500 to-yellow-500">
                                        {auctionProduct.name.split(' ').slice(1).join(' ')}
                                    </span>
                                </h2>
                                <p className={`mt-4 text-sm md:text-lg max-w-lg hidden md:block leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>
                                    Participate in the ultimate TCG showdown. Bid now on our most exclusive vault piece of the season.
                                </p>
                            </div>
                            <div className={`flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 backdrop-blur-xl p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/60 border-gray-200 text-slate-900'}`}>
                                <div className="text-left md:text-right">
                                    <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest mb-1">Current High Bid</p>
                                    <p className={`text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>${(auctionProduct.price + 100).toLocaleString()}</p>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onAddToCart(auctionProduct);
                                    }}
                                    className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 whitespace-nowrap ${isDark ? 'bg-white text-black hover:bg-[#ff3e3e] hover:text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                >
                                    Bid Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1.5 MARKET TICKER */}
                <section className={`border-y py-4 mb-12 -mx-4 md:-mx-8 overflow-hidden ${isDark ? 'border-white/5 bg-white/[0.01]' : 'border-gray-100 bg-gray-50'}`}>
                    <div className="flex animate-marquee whitespace-nowrap gap-12 text-xs font-bold tracking-widest uppercase italic text-slate-500">
                        {[1, 2, 3, 4].map(i => (
                            <React.Fragment key={i}>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">●</span>
                                    <span className={isDark ? 'text-white' : 'text-slate-900'}>Charizard 1st Ed</span> sold <span className="text-[#ff3e3e]">$12,400</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">●</span>
                                    <span className={isDark ? 'text-white' : 'text-slate-900'}>Lugia PSA 10</span> sold <span className="text-[#ff3e3e]">$3,200</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">●</span>
                                    <span className={isDark ? 'text-white' : 'text-slate-900'}>Surging Sparks Box</span> sold <span className="text-[#ff3e3e]">$220</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* 2. LIVE VAULT SCROLL */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-[#f45925]' : 'bg-blue-500'}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${isDark ? 'bg-[#f45925]' : 'bg-blue-600'}`}></span>
                            </span>
                            <h2 className={`text-2xl font-black tracking-tight uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Live Vault</h2>
                        </div>
                        <button className={`text-xs font-black uppercase tracking-widest hover:underline ${isDark ? 'text-[#f45925]' : 'text-blue-600'}`}>See All Activity</button>
                    </div>

                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 no-scrollbar items-center -mx-4 px-4 md:-mx-0 md:px-0">
                        {liveVaultProducts.map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductClick(product)}
                                className={`relative flex-shrink-0 w-40 md:w-56 overflow-hidden rounded-2xl group border active:scale-95 transition-all shadow-lg ${isDark ? 'bg-[#121212] border-white/5 hover:border-[#f45925]/30' : 'bg-white border-gray-100 hover:border-blue-500/30'}`}
                            >
                                <div className="aspect-[3/4] w-full relative">
                                    <img src={product.image} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-all duration-500" alt={product.name} />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-black/20' : 'from-white via-transparent'}`}></div>
                                </div>
                                <div className="absolute top-3 right-3 flex flex-col gap-2">
                                    <div className={`backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black border uppercase tracking-tighter ${isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-white/80 border-gray-200 text-slate-800'}`}>
                                        {product.category.split(' ')[0]}
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleFavorite(product);
                                        }}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors ${favorites.includes(product.id) ? 'bg-red-500 border-red-500' : 'bg-black/40 hover:bg-white/20'}`}
                                    >
                                        <Heart className={`w-4 h-4 text-white ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                                    </button>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className={`truncate text-sm font-bold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{product.name}</p>
                                    <p className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>${product.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. MARKET SHOWCASE GRID */}
                <section className="mb-16">
                    <h2 className={`text-2xl font-black mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        <span className="w-1.5 h-8 bg-gradient-to-b from-[#ff3e3e] to-orange-500 rounded-full"></span>
                        MARKET SHOWCASE
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Featured Large */}
                        {grailProducts.length > 0 && (
                            <div
                                onClick={() => onProductClick(grailProducts[0])}
                                className={`col-span-2 row-span-1 md:row-span-2 relative aspect-square md:aspect-auto rounded-3xl overflow-hidden group border shadow-2xl cursor-pointer ${isDark ? 'border-white/10' : 'border-gray-100'}`}
                            >
                                <img src={grailProducts[0].image} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-1000" alt="Grail" />
                                <div className={`absolute inset-0 bg-gradient-to-t opacity-90 ${isDark ? 'from-black via-black/10' : 'from-gray-100 via-transparent'}`}></div>
                                <div className="absolute top-6 left-6 bg-purple-600 px-4 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-2xl animate-pulse">
                                    High End Grail
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                    <div>
                                        <h3 className={`text-xl md:text-2xl font-black mb-1 uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{grailProducts[0].name}</h3>
                                        <p className="text-xl text-purple-500 font-black">${grailProducts[0].price.toLocaleString()}</p>
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onAddToCart(grailProducts[0]); }}
                                        className={`p-4 backdrop-blur-xl rounded-2xl border hover:bg-purple-600 hover:text-white transition-all active:scale-90 shadow-2xl ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200 text-slate-900'}`}
                                    >
                                        <Plus className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {products.filter(p => p.id !== (grailProducts[0]?.id || 999)).slice(0, 8).map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductClick(product)}
                                className={`relative aspect-square rounded-3xl overflow-hidden group border cursor-pointer hover:border-blue-500/30 transition-all ${isDark ? 'bg-[#121212] border-white/5' : 'bg-gray-50 border-gray-100'}`}
                            >
                                <img src={product.image} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-all duration-700" alt={product.name} />
                                <div className={`absolute inset-0 bg-gradient-to-t opacity-60 ${isDark ? 'from-black/90 via-black/20' : 'from-white/90 via-transparent'}`}></div>
                                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                                    <div className="flex-1 min-w-0 pr-2">
                                        <p className={`text-xs font-black truncate uppercase mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>{product.name}</p>
                                        <p className={`text-sm font-black ${isDark ? 'text-orange-500' : 'text-blue-600'}`}>${product.price}</p>
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                                        className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center border hover:bg-blue-600 hover:text-white transition-colors ${isDark ? 'bg-white/10 border-white/10' : 'bg-white/80 border-gray-200 text-slate-500'}`}
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. COLLECTOR'S SHELF */}
                <section className="pb-20">
                    <div className={`px-8 py-6 mb-10 rounded-[2rem] border shadow-2xl relative overflow-hidden group ${isDark ? 'border-white/5 bg-gradient-to-br from-[#1a0f0d] to-[#2e1e1a]' : 'border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
                        <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full group-hover:opacity-60 transition-colors ${isDark ? 'bg-orange-500/10' : 'bg-blue-500/20'}`}></div>
                        <h2 className={`text-2xl md:text-3xl font-black flex items-center gap-4 relative z-10 uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            <Package className={`w-8 h-8 ${isDark ? 'text-orange-500' : 'text-blue-600'}`} />
                            COLLECTOR'S SHELF
                        </h2>
                        <p className={`mt-2 text-sm md:text-base font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Curated high-prestige pieces for serious vault collectors.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {grailProducts.slice(1).map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductClick(product)}
                                className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] border-[6px] shadow-2xl cursor-pointer active:scale-[0.98] transition-all ${isDark ? 'bg-[#2e1e1a] border-[#3d2b25] hover:border-orange-500/40' : 'bg-white border-blue-50 hover:border-blue-500/40'}`}
                            >
                                <div className={`relative h-64 md:h-72 w-full overflow-hidden ${isDark ? 'bg-[#1a0f0d]' : 'bg-gray-50'}`}>
                                    <img src={product.image} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000" alt={product.name} />
                                    <div className={`absolute inset-0 bg-gradient-to-b from-black/10 via-transparent ${isDark ? 'to-black/80' : 'to-transparent'}`}></div>
                                    <div className={`absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl border ${isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-gray-200'}`}>
                                        <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                                        <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>Authenticated</span>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleFavorite(product);
                                        }}
                                        className={`absolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-xl border transition-all ${favorites.includes(product.id) ? 'bg-red-500 border-red-500 scale-110 text-white' : isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-white/80 border-gray-200 text-slate-400'}`}
                                    >
                                        <Heart className={`w-6 h-6 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                                    </button>
                                </div>

                                <div className={`p-8 border-t-2 flex justify-between items-center transition-colors ${isDark ? 'bg-[#261815] border-[#3d2b25] group-hover:bg-[#2d1d1a]' : 'bg-white border-gray-50 group-hover:bg-gray-50'}`}>
                                    <div>
                                        <h3 className={`text-lg md:text-xl font-black line-clamp-1 uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.name}</h3>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className="text-[10px] md:text-xs font-black text-green-400 uppercase tracking-widest bg-green-500/10 px-2 py-0.5 rounded-lg border border-green-500/20">MINT 10</span>
                                            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-slate-200'}`}></div>
                                            <span className="text-[10px] md:text-xs text-slate-400 uppercase font-black tracking-widest">Sealed Case</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-2xl md:text-3xl font-black tracking-tighter drop-shadow-2xl ${isDark ? 'text-[#f45925]' : 'text-blue-600'}`}>${product.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default HighEndHome;
