import React from 'react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { Plus, Package, TrendingUp, Heart, ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';

interface HighEndHomeProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
    onToggleFavorite: (product: Product) => void;
    favorites: number[];
    theme: 'light' | 'dark';
    onShopClick: () => void;
    onCartClick: () => void;
    cartCount: number;
}

const HighEndHome: React.FC<HighEndHomeProps> = ({ products, onAddToCart, onProductClick, onToggleFavorite, favorites, theme, onShopClick, onCartClick, cartCount }) => {
    // Filter products for different sections using live products list
    // Higher-end selection logic for diverse TCG variety
    const auctionProduct = products.find(p => p.id === 36) || products[0];
    const liveVaultProducts = products.filter(p => p.badge === 'HOT' || p.badge === 'NEW').slice(0, 15);
    const grailProducts = products.filter(p => p.badge === 'GRAIL' || p.badge === 'PSA 10 GEM MINT' || p.price >= 300).sort((a, b) => b.price - a.price);
    const trendingBoosters = products.filter(p => p.category === 'booster').slice(0, 10);

    const isDark = theme === 'dark';

    return (
        <div className={`flex-1 flex flex-col w-full pb-24 font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-500 ${isDark ? 'bg-[#050505] text-slate-100' : 'bg-[#f8f6f5] text-slate-900'}`}>
            {/* VARIANT 3 USER HEADER */}
            <header className={`sticky top-0 z-50 flex items-center justify-between px-4 py-3 backdrop-blur-md border-b transition-colors ${isDark ? 'bg-[#050505]/80 border-white/5' : 'bg-white/80 border-gray-100'}`}>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>The Vault</span>
                        <span className="text-sm font-black leading-none uppercase tracking-tighter italic">Chris TCG</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onCartClick}
                        className={`p-2.5 rounded-xl transition-all active:scale-95 group relative ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
                    >
                        <ShoppingBag className={`w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-700'} group-hover:text-blue-500`} />
                        {cartCount > 0 && (
                            <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[8px] font-bold text-white border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
                {/* VARIANT 2 FEATURED DROP (REPLACING OLD HERO) */}
                <section className="pt-6 mb-8">
                    <div
                        onClick={() => onProductClick(auctionProduct)}
                        className={`display-box rounded-3xl overflow-hidden group cursor-pointer relative transition-all hover:-translate-y-1 duration-500 shadow-2xl ${isDark ? 'shadow-[#ff3e3e]/10 hover:shadow-[#ff3e3e]/20' : 'shadow-blue-500/10'}`}
                    >
                        {/* Neon Border Gradient (Simulated via CSS classes below) */}
                        <div className={`absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent ${isDark ? 'via-transparent to-black/90' : 'via-transparent to-black/60'}`}></div>

                        <div className="w-full aspect-[4/3] md:aspect-[21/9] relative overflow-hidden bg-black/20">
                            <img
                                src={auctionProduct.image}
                                alt="Featured Drop"
                                className="w-full h-full object-contain md:object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Glass Tag */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="glass-tag px-3 py-1.5 text-[10px] md:text-xs font-black tracking-widest uppercase text-white rounded-lg shadow-lg flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#ff3e3e] rounded-full animate-pulse"></span>
                                    Featured Drop
                                </span>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 z-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black leading-none text-white drop-shadow-lg tracking-tighter">
                                    {auctionProduct.name.split(' ').slice(0, 2).join(' ').toUpperCase()}<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3e3e] to-orange-400">
                                        {auctionProduct.name.split(' ').slice(2).join(' ').toUpperCase() || 'COLLECTION'}
                                    </span>
                                </h2>
                                <div className="flex items-center gap-4 mt-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white border border-white/20 backdrop-blur-md">{auctionProduct.badge || 'ELITE PIECE'}</span>
                                    <span className="text-xs text-white/60 font-medium">{auctionProduct.category.toUpperCase()} Vault Piece</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-left md:text-right hidden sm:block">
                                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Current Value</p>
                                    <p className="text-2xl font-black text-white">${auctionProduct.price.toLocaleString()}</p>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onAddToCart(auctionProduct);
                                    }}
                                    className="bg-white text-black px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#ff3e3e] hover:text-white transition-all shadow-white/20 shadow-xl"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CATEGORY QUICK-NAV (Variant 2 Style) */}
                <section className="mb-8 overflow-x-auto no-scrollbar -mx-4 px-4 md:-mx-0 md:px-0">
                    <div className="flex gap-3 pb-2">
                        {['🔥 Trending', 'Pokémon', 'MTG', 'Digimon', 'Vault Grails'].map((cat, idx) => (
                            <button
                                key={cat}
                                className={`flex-shrink-0 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${idx === 0
                                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                    : (isDark ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-white border border-gray-100 text-slate-600 hover:bg-gray-50 shadow-sm')
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* 1.5 MARKET TICKER (Neon Update) */}
                <section className={`py-4 mb-10 -mx-4 md:-mx-8 overflow-hidden border-y ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-gray-100 bg-gray-50'}`}>
                    <div className="flex animate-marquee whitespace-nowrap gap-12 text-[10px] font-black tracking-widest uppercase italic">
                        {[1, 2, 3].map(i => (
                            <React.Fragment key={i}>
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-[#ff3e3e] rounded-full shadow-[0_0_8px_#ff3e3e]"></span>
                                    <span className={isDark ? 'text-white' : 'text-slate-900'}>Charizard 1st Ed</span>
                                    <span className="text-slate-500">last sold</span>
                                    <span className="text-[#ff3e3e] font-black">$12,400</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff]"></span>
                                    <span className={isDark ? 'text-white' : 'text-slate-900'}>Lugia PSA 10</span>
                                    <span className="text-slate-500">last sold</span>
                                    <span className="text-[#00f0ff] font-black">$3,200</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full shadow-[0_0_8px_#7c3aed]"></span>
                                    <span className={isDark ? 'text-white' : 'text-slate-900'}>Surging Sparks</span>
                                    <span className="text-slate-500">last sold</span>
                                    <span className="text-[#7c3aed] font-black">$220</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                {/* TRENDING BOOSTERS SECTION (Variant 1 style) */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Trending Boosters</h2>
                        <button className="text-sm font-semibold text-[#ff3e3e]">See All</button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:-mx-0 md:px-0">
                        {trendingBoosters.map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductClick(product)}
                                className={`snap-start relative flex min-w-[280px] flex-col overflow-hidden rounded-[2rem] shadow-sm transition-transform hover:scale-[1.02] cursor-pointer ${isDark ? 'bg-white/5' : 'bg-white'}`}
                            >
                                <div className="relative h-44 w-full overflow-hidden">
                                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                                    {product.badge && (
                                        <div className="absolute top-4 left-4 rounded-full bg-[#ff3e3e] px-3 py-1 text-[10px] font-bold text-white shadow-lg uppercase tracking-wider">
                                            {product.badge}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1 p-5">
                                    <h3 className="text-lg font-bold truncate uppercase tracking-tighter">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-black text-[#ff3e3e]">${product.price.toLocaleString()}</span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-[#ff3e3e] hover:text-white transition-colors shadow-lg"
                                        >
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. LIVE VAULT SCROLL (Variant 3 Style) */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-[#ff3e3e]' : 'bg-blue-500'}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${isDark ? 'bg-[#ff3e3e]' : 'bg-blue-600'}`}></span>
                            </span>
                            <h2 className={`text-xl font-black tracking-tight uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Live Vault</h2>
                        </div>
                        <button className={`text-[10px] font-black uppercase tracking-widest hover:underline ${isDark ? 'text-[#ff3e3e]' : 'text-blue-600'}`}>View All</button>
                    </div>

                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 no-scrollbar items-center -mx-4 px-4 md:-mx-0 md:px-0">
                        {liveVaultProducts.map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductClick(product)}
                                className={`display-box relative flex-shrink-0 w-36 md:w-52 overflow-hidden rounded-2xl group active:scale-95 transition-all shadow-xl ${isDark ? 'hover:border-[#ff3e3e]/30' : 'bg-white border-gray-100'}`}
                            >
                                <div className="aspect-[3/4] w-full relative bg-surface-dark overflow-hidden">
                                    <img src={product.image} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-all duration-700" alt={product.name} />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/90 via-black/20' : 'from-black/60 via-transparent'}`}></div>
                                </div>
                                <div className="absolute top-2 left-2 z-20">
                                    <span className="glass-tag px-2 py-0.5 rounded text-[8px] font-black text-white uppercase tracking-tighter shadow-lg">
                                        {Math.floor(Math.random() * 10)}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}
                                    </span>
                                </div>
                                <div className="absolute top-2 right-2 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleFavorite(product);
                                        }}
                                        className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${favorites.includes(product.id) ? 'bg-[#ff3e3e] border-[#ff3e3e]' : 'bg-black/40 border-white/10 hover:bg-white/20'}`}
                                    >
                                        <Heart className={`w-3.5 h-3.5 text-white ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                                    </button>
                                </div>
                                <div className="absolute bottom-3 left-3 right-3 z-20">
                                    <p className="truncate text-[10px] font-bold text-slate-300 mb-0.5 uppercase tracking-tighter">{product.name}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-black text-white tracking-tight">${product.price.toLocaleString()}</p>
                                        {product.stock > 0 && product.stock <= 5 && (
                                            <span className="text-[8px] font-black text-[#ff3e3e] uppercase animate-pulse">Low</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. MARKET SHOWCASE (Variant 2 Grid) */}
                <section className="mb-16">
                    <h2 className={`text-xl font-black mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        <span className={`w-1.5 h-6 rounded-full ${isDark ? 'bg-gradient-to-b from-[#7c3aed] to-purple-600' : 'bg-blue-600'}`}></span>
                        MARKET SHOWCASE
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Featured Large Case */}
                        {grailProducts.length > 0 && (
                            <div
                                onClick={() => onProductClick(grailProducts[0])}
                                className={`display-box col-span-2 row-span-1 md:row-span-2 relative aspect-[21/9] md:aspect-auto rounded-3xl overflow-hidden group cursor-pointer transition-all ${isDark ? 'hover:border-[#7c3aed]/50' : 'border-gray-100'}`}
                            >
                                <div className="absolute top-3 left-3 z-20">
                                    <span className="glass-tag px-2 py-1 text-[10px] font-black uppercase text-purple-300 rounded-lg border-purple-500/30">
                                        ULTRA GRAIL
                                    </span>
                                </div>
                                <div className="w-full h-full relative overflow-hidden bg-black/40">
                                    <img src={grailProducts[0].image} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-1000" alt="Grail" />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/90 via-black/20 to-transparent' : 'from-black/70 via-transparent'}`}></div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                                    <div>
                                        <h3 className="text-base md:text-lg font-black text-white leading-tight mb-1 uppercase tracking-tight">{grailProducts[0].name}</h3>
                                        <p className="text-lg text-[#7c3aed] font-black drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]">${grailProducts[0].price.toLocaleString()}</p>
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onAddToCart(grailProducts[0]); }}
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md transition-all border ${isDark ? 'bg-white/10 border-white/20 hover:bg-[#7c3aed]' : 'bg-blue-600 border-blue-600 text-white'}`}
                                    >
                                        <Plus className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {products.filter(p => p.id !== (grailProducts[0]?.id || 999)).slice(0, 8).map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductClick(product)}
                                className={`display-box relative flex flex-col rounded-2xl overflow-hidden group cursor-pointer transition-all ${isDark ? 'hover:border-[#00f0ff]/50' : 'bg-white shadow-sm border-gray-100'}`}
                            >
                                <div className="w-full aspect-[4/5] overflow-hidden bg-black/10 relative">
                                    <img src={product.image} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                                    {product.badge && (
                                        <div className="absolute top-2 left-2 z-20">
                                            <span className="glass-tag px-2 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-widest text-[#00f0ff] border-[#00f0ff]/20">
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4 relative z-20 flex-1 flex flex-col justify-between">
                                    <h3 className={`text-[11px] font-black leading-tight mb-2 uppercase tracking-tighter ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{product.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <p className={`text-sm font-black ${isDark ? 'text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.4)]' : 'text-blue-600'}`}>${product.price ? product.price.toLocaleString() : '0'}</p>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isDark ? 'bg-white/5 border border-white/10 hover:bg-[#00f0ff] hover:text-black' : 'bg-blue-600 text-white shadow-md'}`}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                {product.stock === 0 && (
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-30 flex items-center justify-center">
                                        <span className="px-3 py-1 rounded-full bg-red-500 text-white text-[8px] font-black uppercase tracking-widest rotate-[-12deg]">Sold Out</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. COLLECTOR'S SHELF (Variant 3 Vault Shelf) */}
                <section className="pb-20">
                    <div className="flex items-center justify-between mb-8 pr-4">
                        <h2 className={`text-xl font-black tracking-tight flex items-center gap-3 uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            <Package className={`w-6 h-6 ${isDark ? 'text-[#ff3e3e]' : 'text-blue-600'}`} />
                            Collector's Shelf
                        </h2>
                        <div className="flex gap-2">
                            <button className={`p-2 rounded-lg border transition-colors ${isDark ? 'bg-white/5 border-white/5 text-slate-400 hover:text-white' : 'bg-gray-100 border-gray-200 text-slate-500'}`}>
                                <TrendingUp className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {grailProducts.slice(1).map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductClick(product)}
                                className={`display-box group relative flex flex-col overflow-hidden rounded-[2rem] border-[6px] shadow-vault transition-all active:scale-[0.98] cursor-pointer ${isDark ? 'border-[#3d2b25] hover:border-[#ff3e3e]/40' : 'bg-white border-blue-50'}`}
                            >
                                <div className={`relative h-64 w-full shadow-inner-glow overflow-hidden ${isDark ? 'bg-[#1a0f0d]' : 'bg-slate-50'}`}>
                                    <img src={product.image} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000" alt={product.name} />
                                    <div className="absolute top-4 left-0 w-full flex justify-between px-4 z-20">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 shadow-lg">
                                            <span className="material-symbols-outlined text-green-500 text-[14px]">verified</span>
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">AUTHENTIC</span>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggleFavorite(product);
                                            }}
                                            className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all border ${favorites.includes(product.id) ? 'bg-[#ff3e3e] border-[#ff3e3e] scale-110' : 'bg-black/60 border-white/10 hover:bg-white/20'}`}
                                        >
                                            <Heart className={`w-5 h-5 text-white ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                                        </button>
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-b from-black/20 via-transparent ${isDark ? 'to-black/80' : 'to-black/60'} pointer-events-none`}></div>
                                </div>

                                <div className={`relative p-6 flex flex-col gap-3 border-t-2 transition-colors ${isDark ? 'bg-[#261815] border-[#3d2b25]' : 'bg-white border-gray-100'}`}>
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-black text-white leading-tight uppercase tracking-tight">{product.name}</h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-green-900/40 text-green-400 border border-green-800/50">MINT</span>
                                                <span className="text-xs text-slate-400 font-medium tracking-tight">Vault Case</span>
                                            </div>
                                        </div>
                                        <div className="text-right pl-2">
                                            <span className="block text-2xl font-black text-[#ff3e3e] tracking-tighter">${product.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                                        className="w-full py-3 rounded-xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-[#ff3e3e] hover:text-white active:scale-[0.98] transition-all shadow-[0_4px_0_rgb(200,200,200)] active:shadow-none active:translate-y-1 flex items-center justify-center gap-2 mt-2"
                                    >
                                        Add to Vault
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .display-box {
                    background: ${isDark ? 'linear-gradient(145deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%)' : 'white'};
                    border: 1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'};
                    position: relative;
                    overflow: hidden;
                }
                .display-box::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    z-index: 10;
                }
                .display-box::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; right: 0; height: 60%;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    z-index: 1;
                    pointer-events: none;
                }
                .glass-tag {
                    background: rgba(0,0,0,0.4);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: white;
                }
                .shadow-vault {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5), inset 0 -4px 6px -1px rgba(255, 255, 255, 0.05);
                }
                .shadow-inner-glow {
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

export default HighEndHome;
