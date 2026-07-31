<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Action } from "svelte/action";
    import { FontSection } from "../../../../constant/NavbarDesign";
    import { Full } from "../../../../constant/UiConstant";
	import { GeneralPageState } from "$lib/state/main/general/state.svelte";

    const topMenus = ["Customer Service", "Newsletter", "Find a store"];
    let param_search = $state("");

    let y = $state(0);
    let progress = $state(0);

    function updateProgress() {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const totalScroll = documentHeight - windowHeight;

        progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
    }

    $effect(() => {
        updateProgress();
    });

    const goHome: Action = (node) => {
        const event = () => {
            goto("/home");
        };
        node.addEventListener("click", event);

        return {
            destroy() {
                node.removeEventListener("click", event);
            }
        };
    };
</script>

<svelte:window 
    bind:scrollY={y}
    onscroll={updateProgress}
/>

<!-- PERBAIKAN UTAMA: overflow-visible ditambahkan agar dropdown tidak terpotong oleh batas header -->
<header class="fixed top-0 w-full bg-white border-b border-gray-200 grid grid-rows-[25%_75%] h-[5.5rem] sm:h-[6.5rem] md:h-[7rem] font-sans text-[11px] sm:text-[12px] md:text-[13px] z-[100] transition-all duration-300 overflow-visible">
    
    <!-- Top Bar & Progress Bar -->
    <div class="{Full} px-3 sm:px-6 flex items-center justify-between text-gray-500 text-[10px] sm:text-[11px] relative border-b border-gray-100 overflow-visible">
        <div class="flex gap-2 sm:gap-4 truncate">
            {#each topMenus as menu}
                <a href="/" class="hover:text-black transition-colors whitespace-nowrap {FontSection}">{menu}</a>
            {/each}
        </div>
        <div class="flex gap-2 items-center shrink-0">
            <span class="cursor-pointer hover:text-black">&bull;&bull;&bull;</span>
        </div>

        <div 
            class="absolute bottom-0 left-0 h-[2px] bg-slate-900 transition-all duration-75 ease-out" 
            style="width: {progress}%"
        ></div>
    </div>  

    <!-- Main Navigation Bar -->
    <div class="grid grid-cols-[38%_24%_38%] sm:grid-cols-[40%_20%_40%] px-2 sm:px-4 md:px-6 items-center overflow-visible">
        
        <!-- Kiri: Notifikasi, Cart, Transaksi Quick Menu & Profile -->
        <div class="{Full} flex items-center gap-1.5 sm:gap-3 md:gap-5 font-medium tracking-wide text-gray-800 scrollbar-none overflow-visible">
            <!-- Inbox -->
            <button 
                onclick={() => goto("/inbox")} 
                class="relative p-1 sm:p-1.5 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-800 cursor-pointer shrink-0"
                aria-label="Inbox"
            >
                <span class="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-red-500"></span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.35417 21C9.65582 21.6033 10.2798 22 11 22C11.7202 22 12.3442 21.6033 12.6458 21M18 8C18 4.13401 14.866 1 11 1C7.13401 1 4 4.13401 4 8C4 14 2 16 2 17H20C20 16 18 14 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <!-- Cart -->
            <button 
                class="relative p-1 sm:p-1.5 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-800 cursor-pointer shrink-0" 
                onclick={() => goto("/cart")}
                aria-label="Keranjang"
            >
                <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] sm:text-[10px] font-bold text-white px-1">3</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5L7 13H17L19 5H5.4ZM7 13L6 17H19M9 21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20C8 20 9 20 9 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20 18 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <!-- Status Transaksi Quick Dropdown -->
            <div class="group relative p-1 sm:p-1.5 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-800 cursor-pointer shrink-0">
                <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] sm:text-[10px] font-bold text-white px-1">3</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H18.5C19.3284 8 20 8.67157 20 9.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.67157 20 4 19.3284 4 18.5V8ZM4 8V5.5C4 4.67157 4.67157 4 5.5 4H16C16.8284 4 17.5 4.67157 17.5 5.5V8" stroke="#343C54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <div class="absolute left-0 sm:left-auto top-full pt-1.5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[999]">
                    <div class="w-44 sm:w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-1">
                        <a href="/transaksi" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">Transaksi</a>
                        <a href="/transaksi-dibatalkan" class="flex justify-between items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">
                            <span>Transaksi Dibatalkan</span>
                            <span class="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full">1</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="h-4 sm:h-6 w-[1px] bg-gray-200 shrink-0"></div>

            <!-- Profile Menu -->
            <div class="group relative flex items-center gap-1.5 sm:gap-2 cursor-pointer py-1 shrink-0">
                <div class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-slate-200 border border-gray-300 overflow-hidden flex-none">
                    <img src="/src/constant/LogoBurung.png" alt="Avatar" class="h-full w-full object-cover" />
                </div>
                
                <div class="hidden lg:block min-w-0 max-w-[80px]">
                    <p class="text-xs font-semibold text-gray-900 truncate">nancuy.</p>
                    <p class="text-[10px] text-gray-500 truncate">Yang bikin</p>
                </div>

                <svg class="text-gray-400 group-hover:text-gray-600 transition-transform duration-200 group-hover:rotate-180 hidden sm:block" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div class="absolute left-0 sm:left-auto sm:right-0 top-full pt-1.5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[999]">
                    <div class="w-44 sm:w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-1">
                        <a href="/user-overview" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">Profile Overview</a>
                        <a href="/settings" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">Settings</a>
                        <a href="/following" class="flex justify-between items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">
                            <span>Following</span>
                            <span class="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full">1</span>
                        </a>
                        
                        <hr class="border-gray-100 my-1" />
                        <button class="w-full text-left block px-4 py-2 text-xs text-red-600 hover:bg-red-50 font-medium cursor-pointer">Keluar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tengah: Logo Utama -->
        <div class="{Full} flex items-center justify-center">
            <img class="h-12 sm:h-16 md:h-20 mt-1 object-contain transition-all duration-800" src="/src/constant/LogoBurung.png" alt="Logo Burung">
        </div>

        <!-- Kanan: Search & Actions -->
        <div class="{Full} flex items-center justify-end gap-2 sm:gap-4 md:gap-6 text-gray-700 {FontSection} overflow-visible">
            
            <!-- Form Pencarian -->
            <div class="relative border-b border-transparent hover:border-black focus-within:border-black pb-0.5 sm:pb-1 transition-colors duration-800">
                <form 
                    onsubmit={(e) => {
                        e.preventDefault();
                        goto(`/market?q=${encodeURIComponent(param_search)}`);
                    }} 
                >
                    <input 
                        bind:value={param_search}
                        type="text" 
                        placeholder="Search..." 
                        onfocus={() => GeneralPageState.Searching()}
                        onblur={() => setTimeout(() => GeneralPageState.Unsearch(), 200)} 
                        class="bg-transparent outline-none text-[11px] sm:text-[12px] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder-gray-400 {GeneralPageState.IsSearching() ? 'w-32 sm:w-48 md:w-64' : 'w-16 sm:w-24 md:w-32'}"
                    />
                </form>

                {#if GeneralPageState.IsSearching()}
                    <div class="absolute right-0 sm:left-0 top-full mt-2 w-56 sm:w-full bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-[999]">
                        <div class="px-3 py-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Rekomendasi Produk</div>
                        <a href="/market" class="flex items-center justify-between px-3 py-2 text-xs text-gray-700 hover:bg-gray-50">
                            <span class="truncate">Sepatu Running Nike</span>
                            <span class="text-[10px] text-gray-400 ml-2">Sepatu</span>
                        </a>
                        <a href="/market" class="flex items-center justify-between px-3 py-2 text-xs text-gray-700 hover:bg-gray-50">
                            <span class="truncate">Baju Kaos Polos</span>
                            <span class="text-[10px] text-gray-400 ml-2">Pakaian</span>
                        </a>
                        <hr class="border-gray-100 my-1" />
                        <a href="/market" class="block text-center text-[11px] text-slate-800 font-medium hover:underline py-1">
                            Lihat semua hasil
                        </a>
                    </div>
                {/if}
            </div>

            <!-- Action Icons -->
            <div class="flex items-center gap-1 sm:gap-2 md:gap-4 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-visible { GeneralPageState.IsSearching() ? 'max-w-0 opacity-0 pointer-events-none' : 'max-w-xs opacity-100'}">
                
                <!-- Account / Sign menu -->
                <div use:goHome class="cursor-pointer p-1 sm:p-2 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-800 flex items-center justify-center shrink-0" title="Account">
                    <svg class="w-5 h-5 sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.25 9C3.25 6.10051 5.60051 3.75 8.5 3.75H15.5C18.3995 3.75 20.75 6.10051 20.75 9V9.40675C20.435 9.30498 20.0989 9.25 19.75 9.25H4.25C3.90109 9.25 3.56503 9.30498 3.25 9.40675V9Z" fill="#343C54"/>
                        <path d="M3.25 10.4839C2.50914 10.8521 2 11.6166 2 12.5C2 13.3834 2.50914 14.1479 3.25 14.5161C3.55124 14.6658 3.89079 14.75 4.25 14.75H19.75C20.1092 14.75 20.4488 14.6658 20.75 14.5161C21.4909 14.1479 22 13.3834 22 12.5C22 11.6166 21.4909 10.8521 20.75 10.4839C20.4488 10.3342 20.1092 10.25 19.75 10.25H4.25C3.89079 10.25 3.55124 10.3342 3.25 10.4839Z" fill="#343C54"/>
                        <path d="M20.75 15.5933C20.435 15.695 20.0989 15.75 19.75 15.75H4.25C3.9011 15.75 3.56503 15.695 3.25 15.5933V18C3.25 19.2426 4.25736 20.25 5.5 20.25H18.5C19.7426 20.25 20.75 19.2426 20.75 18V15.5933Z" fill="#343C54"/>
                    </svg>
                </div>

                <!-- Transaksi -->
                <a href="/transaksi" class="p-1 sm:p-2 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-800 shrink-0" title="Transaksi">
                    <svg class="w-5 h-5 sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 19H5V5H19V19ZM7 11H17V13H7V11ZM7 7H17V9H7V7ZM7 15H13V17H7V15Z" fill="currentColor"/>
                    </svg>
                </a>

                <!-- Wishlist & Likes -->
                <div class="group relative shrink-0">
                    <div class="cursor-pointer p-1 sm:p-2 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-800 flex items-center justify-center" title="Wishlist & Likes">
                        <svg class="w-5 h-5 sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
                        </svg>
                    </div>

                    <div class="absolute right-0 top-full pt-1.5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[999]">
                        <div class="w-44 sm:w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-1">
                            <a href="/wishlist" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">Wishlist</a>
                            <a href="/likes" class="flex justify-between items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">
                                <span>Likes</span>
                                <span class="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full">1</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</header>