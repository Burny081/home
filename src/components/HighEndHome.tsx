import React from 'react';
import { POKEMART_ASSETS, PRODUCTS } from '../data/products';
import { Product } from '../types';

interface HighEndHomeProps {
    onAddToCart: (product: Product) => void;
    onProductClick: (product: Product) => void;
}

const HighEndHome: React.FC<HighEndHomeProps> = ({ onAddToCart, onProductClick }) => {
    // Filter products for different sections
    const auctionProduct = PRODUCTS.find(p => p.id === 13) || PRODUCTS[0]; // Mega Charizard
    const liveVaultProducts = PRODUCTS.slice(0, 6);
    const grailProducts = PRODUCTS.filter(p => p.badge === 'GRAIL' || p.badge === 'VAULT').slice(0, 4);

    return (
        <div className="flex-1 flex flex-col w-full max-w-md mx-auto bg-[#050505] pb-24 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
            {/* 1. VARIANT 2 STYLE: AUCTION HERO */}
            <section className="px-4 pt-6 mb-2">
                <div
                    onClick={() => onProductClick(auctionProduct)}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-[0_0_20px_rgba(255,62,62,0.2)] transition-all hover:shadow-[0_0_30px_rgba(255,62,62,0.4)] hover:-translate-y-1 duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10 pointer-events-none"></div>
                    <div className="w-full aspect-[4/3] relative overflow-hidden">
                        <img
                            src={POKEMART_ASSETS.megaCharizard}
                            alt="Hero Auction"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay"></div>
                    </div>

                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-white rounded-lg flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                            Live Auction
                        </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex flex-col gap-1">
                        <h2 className="text-2xl font-black leading-tight text-white tracking-tight">
                            PHANTASMAL<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3e3e] to-orange-400">MEGA CHARIZARD</span>
                        </h2>
                        <div className="flex items-end justify-between mt-1">
                            <div>
                                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider mb-0.5">Current High Bid</p>
                                <p className="text-2xl font-bold text-white tracking-tight">$550.00</p>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); onAddToCart(auctionProduct); }}
                                className="bg-white text-black px-5 py-2 rounded-xl font-bold text-sm hover:bg-[#ff3e3e] hover:text-white transition-all shadow-lg active:scale-95"
                            >
                                Bid Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 VARIANT 3_2 STYLE: RECENTLY SOLD TICKER */}
            <section className="border-y border-white/5 bg-white/[0.02] py-2 mb-6 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-8 text-[10px]">
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="material-symbols-outlined text-green-500 text-[14px]">check_circle</span>
                        <span className="text-white font-semibold">151 UPC</span> sold for <span className="text-[#ff3e3e] font-bold">$120</span> • 2m ago
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="material-symbols-outlined text-green-500 text-[14px]">check_circle</span>
                        <span className="text-white font-semibold">Lost Origin BB</span> sold for <span className="text-[#ff3e3e] font-bold">$180</span> • 5m ago
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="material-symbols-outlined text-green-500 text-[14px]">check_circle</span>
                        <span className="text-white font-semibold">Lugia Slab</span> sold for <span className="text-[#ff3e3e] font-bold">$3,200</span> • 12h ago
                    </div>
                </div>
            </section>

            {/* 2. VARIANT 3 STYLE: LIVE VAULT SCROLL */}
            <section className="mb-8">
                <div className="flex items-center justify-between px-5 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f45925] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f45925]"></span>
                        </span>
                        <h2 className="text-lg font-bold tracking-tight text-white uppercase italic">Live Vault</h2>
                    </div>
                    <button className="text-[10px] font-bold text-[#f45925] uppercase tracking-wider">Expand All</button>
                </div>

                <div className="flex gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide no-scrollbar items-center">
                    {liveVaultProducts.map(product => (
                        <div
                            key={product.id}
                            onClick={() => onProductClick(product)}
                            className="relative flex-shrink-0 w-32 overflow-hidden rounded-xl bg-[#121212] group border border-white/5 active:scale-95 transition-transform"
                        >
                            <div className="aspect-[3/4] w-full relative">
                                <img src={product.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={product.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            </div>
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-bold text-white border border-white/10 uppercase">
                                {product.badge || 'Vault'}
                            </div>
                            <div className="absolute bottom-2 left-2 right-2">
                                <p className="truncate text-[10px] text-slate-300 font-medium mb-0.5">{product.name}</p>
                                <p className="text-xs font-bold text-white">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. VARIANT 2 STYLE: DENSE GALLERY GRID */}
            <section className="px-4 mb-8">
                <h2 className="text-xl font-black text-white px-1 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#ff3e3e] rounded-full"></span>
                    MARKET SHOWCASE
                </h2>
                <div className="grid grid-cols-2 gap-3">
                    {/* Large Featured Item */}
                    <div
                        onClick={() => onProductClick(grailProducts[0])}
                        className="col-span-2 relative aspect-[21/9] rounded-2xl overflow-hidden group border border-white/10 shadow-lg cursor-pointer"
                    >
                        <img src={POKEMART_ASSETS.teamRocket} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Grail" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                        <div className="absolute top-3 left-3 bg-purple-600 px-2 py-0.5 rounded text-[8px] font-black text-white uppercase tracking-widest shadow-lg">Ancient Grail</div>
                        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                            <div>
                                <h3 className="text-sm font-bold text-white">Team Rocket Returns Box</h3>
                                <p className="text-xs text-[#7c3aed] font-bold">$950.00</p>
                            </div>
                            <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-[#7c3aed] transition-colors">
                                <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                        </div>
                    </div>

                    <div
                        onClick={() => onProductClick(PRODUCTS[1])}
                        className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10 cursor-pointer"
                    >
                        <img src={POKEMART_ASSETS.upc151} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="151" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                            <p className="text-[10px] font-bold text-white line-clamp-1">151 UPC</p>
                            <p className="text-xs font-bold text-[#ff3e3e]">$120</p>
                        </div>
                    </div>

                    <div
                        onClick={() => onProductClick(PRODUCTS[10])}
                        className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10 cursor-pointer"
                    >
                        <img src={POKEMART_ASSETS.stellarVariant} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Stellar" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                            <p className="text-[10px] font-bold text-white line-clamp-1">Stellar Deluxe</p>
                            <p className="text-xs font-bold text-[#00f0ff]">$220</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. VARIANT 3 STYLE: COLLECTOR'S SHELF */}
            <section className="px-4 pb-12">
                <div className="px-1 py-4 mb-4 rounded-xl border border-white/5 bg-gradient-to-b from-[#1a0f0d] to-[#2e1e1a] shadow-lg">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2 px-3">
                        <span className="material-symbols-outlined text-[#f45925]">shelves</span>
                        COLLECTOR'S SHELF
                    </h2>
                </div>

                <div className="flex flex-col gap-6">
                    {grailProducts.slice(1).map(product => (
                        <div
                            key={product.id}
                            onClick={() => onProductClick(product)}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#2e1e1a] border-[4px] border-[#3d2b25] shadow-2xl cursor-pointer active:scale-[0.98] transition-all"
                        >
                            <div className="relative h-48 w-full bg-[#1a0f0d] overflow-hidden">
                                <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
                                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 border border-white/10">
                                    <span className="material-symbols-outlined text-green-500 text-[10px]">verified</span>
                                    <span className="text-[8px] font-bold text-white uppercase tracking-widest">Authenticated</span>
                                </div>
                            </div>

                            <div className="p-4 bg-[#261815] border-t-2 border-[#3d2b25] flex justify-between items-center">
                                <div>
                                    <h3 className="text-sm font-bold text-white line-clamp-1">{product.name}</h3>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[8px] font-black text-green-400 uppercase tracking-widest">MINT 10</span>
                                        <span className="text-[8px] text-slate-500 uppercase">Sealed Case</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-[#f45925] tracking-tight">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default HighEndHome;
