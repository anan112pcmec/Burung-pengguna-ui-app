<script lang="ts">
    import type { Action } from 'svelte/action';
    import type { kartuPengenalanData } from './types';
    import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
    import { fade } from 'svelte/transition';
    import { Full } from '../../../../constant/UiConstant';
    import { navbarState } from '$lib/state/main/general/state.svelte';
    
    const KontenKartuKanan: kartuPengenalanData[] = [
        {
            header: "Barang-barang",
            isi: Card1,
        },
        {
            header: "Layanan",
            isi: Card2,
        },
        {
            header: "Kecepatan",
            isi: Card3,
        }
    ]
    let pos: number = 0;

    let rotate: boolean = $state(false);

    const animationCard: Action = (node) => {
        let Cards: HTMLElement[] = [];
        let order = Array.from({ length: KontenKartuKanan.length }, (_, i) => i);

        for (let i = 0; i < KontenKartuKanan.length; i++) {
            const existCard = node.getElementsByClassName(`card_${i}`)[0] as HTMLElement;
            if (existCard) {
                Cards.push(existCard);
                existCard.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease";
                existCard.style.cursor = "pointer";
                existCard.style.userSelect = "none";
            }
        }

        const updateCardStyles = (animatingIndex?: number, direction?: 'up' | 'down') => {
            Cards.forEach((card, originalIndex) => {
                const currentPosition = order.indexOf(originalIndex);

                let translateY = -(currentPosition * 10);
                let translateX = (currentPosition * 10);
                let rotateDeg = 4;
                let skewDeg = 4;
                let opacity = currentPosition === 0 ? "1" : "0.9";
                let zIndex = 30 - (currentPosition * 10);

                if (animatingIndex !== undefined && direction) {
                    const isFrontCard = (originalIndex === animatingIndex);

                    if (isFrontCard) {
                        const dirSign = direction === 'up' ? -1 : 1;
                        translateY = (dirSign * 100);
                        translateX = -20; 
                        rotateDeg = direction === 'up' ? -12 : 15; 
                        skewDeg = -5;
                        zIndex = 40;
                        opacity = "0.6";
                    } else {
                        const dirSign = direction === 'up' ? 1 : -1;
                        translateY = -(currentPosition * 10) + (dirSign * 8);
                        translateX = (currentPosition * 10) - 4;
                        rotateDeg = 2; 

                        if (currentPosition === 1) {
                            zIndex = 35;
                        }
                    }
                }

                card.style.zIndex = zIndex.toString();
                card.style.opacity = opacity;
                card.style.transform = `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotateDeg}deg) skewX(${skewDeg}deg)`;
            });
        };

        const handlers = Cards.map((card, originalIndex) => {
            let startY = 0;

            const handleStart = (e: MouseEvent | TouchEvent) => {
                const currentPosition = order.indexOf(originalIndex);
                if (currentPosition !== 0) return; 

                startY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
            };

            const handleEnd = (e: MouseEvent | TouchEvent) => {
                const currentPosition = order.indexOf(originalIndex);
                if (currentPosition !== 0) return;

                const endY = e instanceof MouseEvent ? e.clientY : e.changedTouches[0].clientY;
                const deltaY = endY - startY;

                let direction: 'up' | 'down' = 'up'; 
                if (Math.abs(deltaY) > 15) {
                    direction = deltaY < 0 ? 'up' : 'down';
                }

                triggerSwap(originalIndex, direction);
            };

            const triggerSwap = (targetIndex: number, direction: 'up' | 'down') => {
                updateCardStyles(targetIndex, direction);

                setTimeout(() => {
                    const first = order.shift();
                    if (first !== undefined) {
                        order.push(first);
                    }
                    updateCardStyles();
                }, 250); 
            };

            card.addEventListener('mousedown', handleStart);
            card.addEventListener('mouseup', handleEnd);
            card.addEventListener('touchstart', handleStart, { passive: true });
            card.addEventListener('touchend', handleEnd);

            return { 
                card, 
                cleanup: () => {
                    card.removeEventListener('mousedown', handleStart);
                    card.removeEventListener('mouseup', handleEnd);
                    card.removeEventListener('touchstart', handleStart);
                    card.removeEventListener('touchend', handleEnd);
                } 
            };
        });

        updateCardStyles();

        return {
            destroy() {
                handlers.forEach(({ cleanup }) => cleanup());
            }
        };
    };

    interface FeaturedProduct {
        id: number;
        name: string;
        status: 'Tersedia' | 'Pre-Order' | 'Stok Habis';
    }

    const statsCard1 = {
        trendRank: "#1",
        category: "Elektronik",
        newItemsCount: "+24"
    };

    const mainProductCard1 = {
        category: "Gadget",
        price: "Rp 2.499.000"
    };

    const featuredProductsCard1: FeaturedProduct[] = [
        { id: 1, name: "Wireless Earbuds X", status: "Tersedia" },
        { id: 2, name: "Mechanical Keyboard 65%", status: "Tersedia" },
        { id: 3, name: "Ultra-wide Monitor 29\"", status: "Pre-Order" },
        { id: 4, name: "Deskmat Minimalist", status: "Stok Habis" }
    ];

    interface SpeedDashboard {
        mainMetric: string;
        subText: string;
        ping: string;
        status: string;
    }

    const speedData: SpeedDashboard = {
        mainMetric: "0.18s",
        subText: "Waktu Respon Instan",
        ping: "12ms",
        status: "99.9% Aktif"
    };
</script>

{#snippet Card1()}
    <div class="p-1 sm:p-1.5 grid grid-rows-[35%_65%] {Full} gap-1 sm:gap-1.5 text-slate-800">
        <div class="p-1 sm:p-1.5 space-x-1 sm:space-x-1.5 grid grid-cols-[35%_65%] bg-white border border-zinc-800/20 rounded-sm">
            <div class="bg-slate-950 rounded-xs flex flex-col justify-center items-center text-white p-0.5 sm:p-1">
                <span class="text-[6px] sm:text-[8px] uppercase tracking-[0.15em] text-white/50 font-medium">TREND</span>
                <span class="text-[9px] sm:text-xs font-bold font-mono tracking-tight">{statsCard1.trendRank}</span>
            </div>
            <div class="bg-slate-50 border border-zinc-800/10 rounded-xs p-0.5 sm:p-1 flex flex-col justify-between">
                <div class="flex justify-between items-center">
                    <span class="text-[6px] sm:text-[8px] font-bold text-slate-900/40 uppercase tracking-[0.15em] truncate">{statsCard1.category}</span>
                    <span class="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-slate-950"></span>
                </div>
                <div class="flex justify-between items-baseline">
                    <span class="text-[7px] sm:text-[10px] font-medium text-slate-800 uppercase tracking-wider truncate">Barang Baru</span>
                    <span class="text-[7px] sm:text-[9px] text-slate-900 font-mono font-bold">{statsCard1.newItemsCount}</span>
                </div>
            </div>
        </div>

        <div class="p-0.5 space-x-1 sm:space-x-1.5 grid grid-cols-[35%_65%]">
            <div class="bg-white border border-zinc-800/20 rounded-sm p-1 sm:p-1.5 flex flex-col justify-between">
                <div class="w-full aspect-square bg-zinc-400/15 border border-zinc-950/5 rounded-xs flex items-center justify-center relative overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 sm:w-4 sm:h-4 text-slate-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div class="mt-0.5 sm:mt-1">
                    <p class="text-[6px] sm:text-[8px] text-slate-900/50 uppercase tracking-wider truncate font-medium">{mainProductCard1.category}</p>
                    <p class="text-[7.5px] sm:text-[10px] font-bold font-mono text-slate-900 truncate">{mainProductCard1.price}</p>
                </div>
            </div>

            <div class="bg-white border border-zinc-800/20 rounded-sm p-1 sm:p-1.5 flex flex-col justify-between overflow-hidden">
                <div class="space-y-0.5 sm:space-y-1 flex-1 flex flex-col justify-center">
                    {#each featuredProductsCard1 as item (item.id)}
                        <div class="flex items-center justify-between p-0.5 sm:p-1 rounded-xs bg-slate-50 border border-zinc-800/10">
                            <div class="flex items-center gap-1 min-w-0">
                                <div class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-xs bg-slate-950/10 flex-shrink-0"></div>
                                <span class="text-[7px] sm:text-[9px] font-medium text-slate-800 truncate">{item.name}</span>
                            </div>
                            <span class="text-[6px] sm:text-[8.5px] font-mono font-bold text-slate-950 uppercase border border-zinc-800/20 px-0.5 sm:px-1 rounded-xs flex-shrink-0">{item.status}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
{/snippet}

{#snippet Card2()}
    <div class="grid grid-rows-[70%_30%] {Full} bg-white border border-zinc-800/20 rounded-sm p-1.5 sm:p-2">
        <div class="flex items-center justify-center overflow-hidden">
            <DotLottieSvelte
                src="src/constant/Customer_Support.json"
                autoplay={true}
                loop={true}
                speed={1}
            />
        </div>
        <div class="flex items-center justify-center px-1 sm:px-2 text-center border-t border-zinc-800/10 pt-1">
            <p class="text-[7.5px] sm:text-[10px] font-light text-slate-700 tracking-normal sm:tracking-wide leading-tight sm:leading-relaxed">
                Dukungan penuh 24/7 siap membantu setiap kebutuhan transaksimu dengan cepat dan responsif.
            </p>
        </div>
    </div>
{/snippet}

{#snippet Card3()}
    <div class="p-1 sm:p-1.5 grid grid-cols-[55%_45%] {Full} gap-1 sm:gap-1.5 text-slate-800">
        <div class="bg-white border border-zinc-800/20 rounded-sm p-1.5 sm:p-3 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 left-0 w-0.5 sm:w-1 h-full bg-slate-950"></div>
            
            <div class="flex justify-between items-center pl-0.5 sm:pl-1">
                <span class="text-[6px] sm:text-[8px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-slate-950/50">PERFORMA</span>
                <span class="inline-flex items-center px-1 py-0.5 rounded-xs text-[6px] sm:text-[8px] font-mono uppercase font-bold bg-slate-950 text-white">
                    LIVE
                </span>
            </div>
            
            <div class="my-auto pl-0.5 sm:pl-1">
                <h2 class="text-base sm:text-2xl lg:text-3xl font-bold font-mono tracking-tight text-slate-950 leading-none">
                    {speedData.mainMetric}
                </h2>
                <p class="text-[7px] sm:text-[9px] text-slate-600/80 font-light mt-1 tracking-wide leading-tight">
                    {speedData.subText}
                </p>
            </div>
        </div>

        <div class="grid grid-rows-2 gap-1 sm:gap-1.5">
            <div class="bg-slate-950 text-white rounded-sm p-1 sm:p-2 flex items-center justify-between">
                <div class="flex flex-col">
                    <span class="text-[6px] sm:text-[8px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white/50">PING JARINGAN</span>
                    <span class="text-[9px] sm:text-xs font-bold font-mono tracking-tight mt-0.5">{speedData.ping}</span>
                </div>
                <div class="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-xs bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-ping absolute"></span>
                    <span class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full relative"></span>
                </div>
            </div>

            <div class="bg-white border border-zinc-800/20 rounded-sm p-1 sm:p-2 flex flex-col justify-between">
                <div class="flex justify-between items-center">
                    <span class="text-[6px] sm:text-[8px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-slate-950/50">UPTIME</span>
                    <span class="text-[7px] sm:text-[9px] font-mono font-bold text-slate-950 uppercase">{speedData.status}</span>
                </div>
                <div class="w-full bg-slate-100 h-1 sm:h-1.5 rounded-xs overflow-hidden mt-0.5 sm:mt-1 border border-zinc-800/10">
                    <div class="bg-slate-950 h-full w-[95%] rounded-xs"></div>
                </div>
            </div>
        </div>
    </div>
{/snippet}

<style>
    .searching * {
        transform: none !important;
        perspective: none !important;
        transform-style: flat !important;
    }

    .perspective-1000 {
        perspective: 1000px;
    }

    .transform-style-3d {
        transform-style: preserve-3d;
    }

    .card-flipped {
        transform: rotateY(180deg);
    }

    .backface-hidden {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    .rotate-y-180 {
        transform: rotateY(180deg);
    }
</style>

<!-- MAIN CONTAINER: grid-cols-[46%_8%_46%] mempertahankan posisi kiri-kanan di layar HP hingga Desktop -->
<section id="pengenalan" class="w-full mb-8 lg:mb-4 h-auto p-1 sm:p-2 grid grid-cols-[46%_8%_46%] lg:grid-cols-[42%_18%_40%] items-center z-10">
    
    <!-- LEFT SIDE: SIGNUP / LOGIN -->
    <section id="signup-login" class="flex justify-center items-center h-[16rem] sm:h-[19rem] lg:h-[20rem] w-full max-w-md mx-auto {navbarState.searching ? '': 'perspective-1000'}">
        
        <div
            class="relative w-full h-full transition-transform duration-700 {navbarState.searching ? '': 'transform-style-3d'}"
            class:card-flipped={rotate}
        >

            <!-- FRONT CARD -->
            <div
                class="absolute inset-0 backface-hidden border border-zinc-900/10 p-2.5 sm:p-5 lg:p-6 bg-gradient-to-br w-full from-slate-100/60 via-slate-100/40 to-white/30 {navbarState.searching ? '': 'backdrop-blur-xl'} rounded-sm grid grid-rows-[45%_55%] sm:grid-rows-[50%_50%] overflow-hidden shadow-xl shadow-slate-900/5"
                style:z-index={rotate && !navbarState.searching ? 10 : 20}
            >
                <div class="relative overflow-hidden">
                    <div class="absolute -top-10 -right-10 w-20 h-20 sm:w-40 sm:h-40 bg-white/50 blur-2xl sm:blur-3xl rounded-full"></div>

                    <div class="grid grid-cols-[5%_90%_5%] sm:grid-cols-[10%_80%_10%] relative">
                        <div></div>

                        <div>
                            <h1 class="text-left mt-1 sm:mt-4 font-bold text-xs sm:text-2xl lg:text-4xl text-slate-950 font-sans tracking-tight uppercase leading-snug sm:leading-none">
                                JUAL BELI JADI GAMPANG
                            </h1>

                            <div class="mt-1 sm:mt-2 w-[30%] h-0.5 sm:h-1 rounded-none bg-slate-950"></div>
                        </div>

                        <div></div>
                        </div>
                    </div>

                    <div>
                        <div class="grid grid-cols-[5%_90%_5%] sm:grid-cols-[10%_80%_10%] h-full">

                            <div></div>

                            <div class="flex flex-col justify-between pb-1 sm:pb-6">

                                <h4 class="text-left font-sans text-[9px] sm:text-xs lg:text-sm text-slate-700 font-light leading-tight sm:leading-relaxed">
                                    Bersama Burung temukan barang incaranmu dengan usapan jari
                                </h4>

                                <div class="space-x-1 sm:space-x-3 flex justify-left mt-2 sm:mt-4 mb-2 sm:mb-6">

                                    <button
                                        class="group relative overflow-hidden text-white bg-slate-950 px-1.5 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-xs transition duration-300 shadow-md shadow-slate-900/10 hover:shadow-lg hover:bg-slate-800"
                                        onclick={() => {
                                            window.scrollBy({
                                                top: 478, 
                                                behavior: 'smooth' 
                                            });
                                        }}
                                    >
                                        <span class="relative z-10 text-[7.5px] sm:text-[11px] lg:text-xs font-medium uppercase tracking-wider block">
                                            Tentang Kami
                                        </span>
                                    </button>

                                    <button
                                        onclick={() => rotate = true}
                                        class="relative px-1.5 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-xs border border-slate-900/20 text-[7.5px] sm:text-[11px] lg:text-xs font-medium uppercase tracking-wider text-slate-950 hover:border-slate-950 transition duration-300 hover:bg-slate-950 hover:text-white"
                                    >
                                        Bergabung
                                    </button>

                                </div>

                            </div>

                        <div></div>

                    </div>
                </div>

            </div>

            <!-- BACK CARD (FORM LOGIN) -->
            <div
                class="absolute inset-0 backface-hidden rotate-y-180 bg-slate-50 border border-zinc-900/10 rounded-sm flex flex-col justify-center py-2 sm:py-4 px-2 sm:px-6 lg:px-8 overflow-y-auto"
                style:z-index={rotate && !navbarState.searching ? 20 : 10}
            >
                <div class="w-full mx-auto">

                    <h1 class="text-left font-sans font-bold text-xs sm:text-xl text-slate-950 tracking-wider uppercase">
                        LOGIN
                    </h1>

                    <div class="mt-1.5 sm:mt-3">
                        <form class="space-y-1.5 sm:space-y-2.5" onsubmit={(e) => e.preventDefault()}>

                            <div>
                                <label class="block text-[7.5px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                                    Email
                                </label>

                                <input 
                                    type="email"
                                    class="w-full rounded-xs border border-slate-300 p-1 sm:p-2 text-[9px] sm:text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-slate-950 transition"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label class="block text-[7.5px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    class="w-full rounded-xs border border-slate-300 p-1 sm:p-2 text-[9px] sm:text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-slate-950 transition"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div class="grid grid-cols-2 gap-1.5 sm:gap-3 pt-1">

                                <button
                                    type="submit"
                                    class="w-full bg-slate-950 text-white hover:bg-slate-800 transition duration-300 px-1 sm:px-3 py-1 sm:py-2 text-[7.5px] sm:text-xs font-medium uppercase tracking-wider rounded-xs text-center shadow-sm"
                                >
                                    Login
                                </button>

                                <a
                                    href="/sign-up"
                                    class="w-full text-slate-950 bg-white border border-slate-300 px-1 sm:px-3 py-1 sm:py-2 text-[7.5px] sm:text-xs font-medium uppercase tracking-wider rounded-xs transition duration-300 text-center hover:bg-slate-950 hover:text-white block"
                                >
                                    Sign Up
                                </a>

                            </div>

                        </form>

                        <div class="flex justify-start mt-2 sm:mt-4 pt-1 sm:pt-2 border-t border-slate-200">

                            <button
                                onclick={() => rotate = false}
                                class="text-slate-500 bg-transparent px-1 sm:px-2 py-0.5 sm:py-1 text-[7.5px] sm:text-xs font-bold uppercase tracking-wider rounded-xs transition duration-300 hover:text-slate-950 hover:bg-slate-100 flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                                Kembali
                            </button>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- MIDDLE SPACER -->
    <div class="block"></div>

    <!-- RIGHT SIDE: CAROUSEL SLIDE STACK -->
    <section use:animationCard id="carousel-slide" class="relative w-full max-w-md lg:max-w-none mx-auto h-[16rem] sm:h-[19rem] lg:h-[20rem] p-1 sm:p-2 lg:p-4">
        {#each KontenKartuKanan as h, i}
            <div style="z-index: {(10) - (i * 10)}; transform: translateY({pos - (i * 10)}px) translateX({pos + (i * 10)}px) rotate(4deg) skewX(4deg);" class="card_{i} absolute top-0 left-0 w-[100%] h-[100%] grid grid-rows-[11%_89%] origin-bottom-left">
                <!-- Header Section -->
                <div class="bg-slate-100/60 backdrop-blur-sm border-b-slate-100 border-t border-l border-r border-zinc-400/50 rounded-t-lg {Full}">
                    <h3 class="ml-1.5 sm:ml-2 mt-0.5 sm:mt-1 text-[8.5px] sm:text-xs font-bold text-slate-950">{h.header}</h3>
                </div>
                
                <!-- Content Section -->
                <div class="bg-slate-100/90 backdrop-blur-sm border-t border-b border-l border-r border-zinc-400/40 rounded-b-sm {Full}">
                    {@render h.isi?.()}
                </div>
            </div>
        {/each}
    </section>
</section>