<script lang="ts">
    import { goto } from '$app/navigation';
    import { WishlistPageState } from '$lib/state/main/wishlist/state.svelte';
    import type { Action } from 'svelte/action';
    import { SvelteMap } from 'svelte/reactivity';

    // Jumlah iterasi koleksi wishlist
    const ulang = 6;

    const wishlistCategories = [
        { name: "SETUP MEJA KERJA", totalItems: 12, isPublic: true },
        { name: "OUTFIT MINIMALIS", totalItems: 5, isPublic: false },
        { name: "ELECTRONICS & GADGET", totalItems: 8, isPublic: true },
        { name: "IMPILAN TAHUN INI", totalItems: 3, isPublic: false },
        { name: "BUKU & READING LIST", totalItems: 15, isPublic: true },
        { name: "HOME LIVING & DECOR", totalItems: 7, isPublic: true },
    ];

    export const ClickBoxWishlist: Action = (node) => {
        console.log("[TRACE:Action] ClickBoxWishlist initialized on node:", node);

        const WishlistBoxs: NodeListOf<HTMLDivElement> = node.querySelectorAll('[class*="box-wishlist"]');
        const TambahKategoriButton: HTMLButtonElement | null = node.querySelector('#tambah-kategori-button');
        
        const handlers: { element: HTMLElement; ev: EventListener }[] = [];
        const WishlistClickedTrack: SvelteMap<HTMLDivElement, number> = new SvelteMap();
        const WishlistClickedTimeout: SvelteMap<HTMLDivElement, NodeJS.Timeout> = new SvelteMap();

        const HapusKategoriFlow = (): void => {
            console.log("[TRACE:Flow] HapusKategoriFlow triggered. Active tracked size:", WishlistClickedTrack.size);
            if (WishlistClickedTrack.size > 0) {
                WishlistPageState.HapusKategori();
            } else {
                WishlistPageState.Idle();
            }
        };

        const resetAllBoxes = () => {
            console.log("[TRACE:Reset] Resetting all wishlist boxes to normal state.");
            for (const [wishlistEl] of WishlistClickedTrack) {
                wishlistEl.classList.remove('border-2', 'border-slate-950');
                wishlistEl.classList.add('border-zinc-950/10');
                const cancelButton = wishlistEl.querySelector('[id*="close-button-wishlist"]') as HTMLButtonElement | null;
                cancelButton?.classList.add('hidden');
            }
            for (const [, timeoutId] of WishlistClickedTimeout) {
                clearInterval(timeoutId);
            }
            WishlistClickedTimeout.clear();
            WishlistClickedTrack.clear();
            WishlistPageState.Idle();
        };

        const TKBEvent = (): void => {
            console.log("[TRACE:Event] Tambah Kategori Button clicked.");
            resetAllBoxes();
            WishlistPageState.TambahKategori();
        };

        if (TambahKategoriButton) {
            TambahKategoriButton.addEventListener("click", TKBEvent);
            handlers.push({ element: TambahKategoriButton, ev: TKBEvent as EventListener });
        }

        for (const wishlistEl of WishlistBoxs) {
            const cancelButton = wishlistEl.querySelector('[id*="close-button-wishlist"]') as HTMLButtonElement | null;
            
            if (cancelButton) {
                cancelButton.classList.add('hidden');
            }

            const event = (e: Event): void => {
                const pointerEvent = e as PointerEvent;
                console.log("[TRACE:Event] Wishlist box clicked:", wishlistEl.className);

                if (WishlistPageState.IsTambahKategori()) {
                    console.log("[TRACE:State] In Tambah Kategori mode, resetting boxes.");
                    resetAllBoxes();
                    return;
                }

                // Handle Cancel / Close button click inside the card
                if (cancelButton && (pointerEvent.target === cancelButton || cancelButton.contains(pointerEvent.target as Node))) {
                    console.log("[TRACE:Action] Cancel button clicked on box.");
                    const existingTimeout = WishlistClickedTimeout.get(wishlistEl);
                    if (existingTimeout) clearInterval(existingTimeout);
                    
                    WishlistClickedTimeout.delete(wishlistEl);
                    WishlistClickedTrack.delete(wishlistEl);

                    wishlistEl.classList.remove('border-2', 'border-slate-950');
                    wishlistEl.classList.add('border-zinc-950/10');
                    cancelButton.classList.add('hidden');
                    HapusKategoriFlow();
                    return;
                }

                const currentCount = WishlistClickedTrack.get(wishlistEl);
                const newCount: number = (currentCount ?? 0) + 1;
                
                console.log("[TRACE:Track] Box click count updated:", { box: wishlistEl.className, count: newCount });

                WishlistClickedTrack.set(wishlistEl, newCount);
                HapusKategoriFlow();

                if (currentCount == undefined) {
                    wishlistEl.classList.remove('border-zinc-950/10');
                    wishlistEl.classList.add('border-2', 'border-slate-950');
                    cancelButton?.classList.remove('hidden');
                }

                // Navigasi jika diklik 3 kali
                if (newCount >= 3) {
                    console.log("[TRACE:Navigation] Threshold reached (>=3). Navigating to details/wishlist.");
                    const existingTimeout = WishlistClickedTimeout.get(wishlistEl);
                    if (existingTimeout) clearInterval(existingTimeout);
                    
                    WishlistClickedTimeout.delete(wishlistEl);
                    WishlistClickedTrack.delete(wishlistEl);

                    wishlistEl.classList.remove('border-2', 'border-slate-950');
                    wishlistEl.classList.add('border-zinc-950/10');
                    cancelButton?.classList.add('hidden');

                    goto("/details/wishlist");
                    return;
                }

                // Kelola Countdown Interval per Box
                if (!WishlistClickedTimeout.has(wishlistEl)) {
                    console.log("[TRACE:Timeout] Starting countdown interval for box.");
                    const intervalId = setInterval(() => {
                        const clickedRn = WishlistClickedTrack.get(wishlistEl);

                        if (clickedRn == undefined) {
                            clearInterval(intervalId);
                            WishlistClickedTimeout.delete(wishlistEl);
                            WishlistClickedTrack.delete(wishlistEl);
                            wishlistEl.classList.remove('border-2', 'border-slate-950');
                            wishlistEl.classList.add('border-zinc-950/10');
                            cancelButton?.classList.add('hidden');
                        } else if (clickedRn <= 1) {
                            clearInterval(intervalId);
                            WishlistClickedTimeout.delete(wishlistEl);
                        } else {
                            WishlistClickedTrack.set(wishlistEl, clickedRn - 1);
                            console.log("[TRACE:Timeout] Decrementing count for box to:", clickedRn - 1);
                        }
                    }, 1200);

                    WishlistClickedTimeout.set(wishlistEl, intervalId);
                }
            };

            wishlistEl.addEventListener("click", event);
            handlers.push({ element: wishlistEl, ev: event });
        }

        return {
            destroy() {
                console.log("[TRACE:Action] Destroying ClickBoxWishlist action and clearing intervals/listeners.");
                for (const [, timeoutId] of WishlistClickedTimeout) {
                    clearInterval(timeoutId);
                }
                WishlistClickedTimeout.clear();
                WishlistClickedTrack.clear();

                for (const h of handlers) {
                    h.element.removeEventListener("click", h.ev);
                }
            }
        };
    };
</script>

{#snippet BoxWishlist(i: number)}
    {@const category = wishlistCategories[i % wishlistCategories.length]}
    
    <div class="box-wishlist-{i} relative h-[16rem] w-[14rem] shrink-0 border border-zinc-950/10 bg-white rounded-sm grid grid-rows-[65%_35%] transition duration-300 hover:border-slate-950 group cursor-pointer overflow-hidden">
        
        <button 
            id="close-button-wishlist-{i}"
            aria-label="Tutup Wishlist Box"
            type="button"
            class="absolute top-2 right-2 z-20 p-1 bg-white/80 backdrop-blur-xs text-slate-950/50 hover:text-slate-950 hover:bg-white rounded-full shadow-xs transition"
            onclick={(e) => {
                e.stopPropagation();
            }}
        >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div class="relative bg-zinc-50 border-b border-zinc-950/10 p-2">
            <div class="grid grid-cols-2 gap-1 w-full h-full opacity-90 group-hover:opacity-100 transition duration-300">
                <div class="bg-zinc-200 rounded-2xs overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" alt="Item Preview" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" />
                </div>
                <div class="bg-zinc-200 rounded-2xs overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" alt="Item Preview" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" />
                </div>
                <div class="bg-zinc-200 rounded-2xs overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200" alt="Item Preview" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" />
                </div>
                <div class="bg-zinc-300 rounded-2xs flex items-center justify-center text-[10px] text-slate-700 font-bold">
                    +{category.totalItems - 3}
                </div>
            </div>

            <div class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[9px] px-1.5 py-0.5 rounded-2xs uppercase tracking-wider">
                {category.isPublic ? 'PUBLIC' : 'PRIVATE'}
            </div>

            <button 
                aria-label="Opsi Lainnya"
                type="button"
                class="absolute top-2.5 right-9 p-1 text-slate-950/40 hover:text-slate-950 transition"
                onclick={(e) => {
                    e.stopPropagation();
                }}
            >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
            </button>
        </div>

        <div class="p-3 flex flex-col justify-between bg-white">
            <div>
                <span class="text-[9px] font-medium tracking-[0.18em] text-slate-950/40 uppercase block">
                    WISHLIST FOLDER
                </span>
                <h3 class="text-xs font-bold text-slate-900 tracking-tight truncate mt-0.5 group-hover:text-slate-950">
                    {category.name}
                </h3>
            </div>

            <div class="flex items-center justify-between pt-2 border-t border-zinc-950/5 text-[10px] text-slate-950/60">
                <span>{category.totalItems} ITEM</span>
                <span class="group-hover:translate-x-0.5 transition-transform duration-300">&rarr;</span>
            </div>
        </div>

    </div>
{/snippet}

<div class="w-full px-4 pt-2 flex justify-end items-center">
    {#if WishlistPageState.IsHapusKategori()}
        <button 
            type="button" 
            class="flex items-center gap-2 px-3 py-1.5 border border-zinc-950/10 rounded-sm bg-white hover:border-slate-950 hover:bg-zinc-50 transition-all cursor-pointer group"
        >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99902 4.25C7.99902 3.00736 9.00638 2 10.249 2H13.749C14.9917 2 15.999 3.00736 15.999 4.25V5H18.498C19.7407 5 20.748 6.00736 20.748 7.25C20.748 8.28958 20.043 9.16449 19.085 9.42267C18.8979 9.4731 18.7011 9.5 18.498 9.5H5.5C5.29694 9.5 5.10016 9.4731 4.91303 9.42267C3.95503 9.16449 3.25 8.28958 3.25 7.25C3.25 6.00736 4.25736 5 5.5 5H7.99902V4.25ZM14.499 5V4.25C14.499 3.83579 14.1632 3.5 13.749 3.5H10.249C9.83481 3.5 9.49902 3.83579 9.49902 4.25V5H14.499Z" fill="currentColor"/>
                <path d="M4.97514 10.4578L5.54076 19.8848C5.61205 21.0729 6.59642 22 7.78672 22H16.2113C17.4016 22 18.386 21.0729 18.4573 19.8848L19.0229 10.4578C18.8521 10.4856 18.6767 10.5 18.498 10.5H5.5C5.32131 10.5 5.146 10.4856 4.97514 10.4578ZM10.774 13.4339L10.9982 17.9905C11.0185 18.4042 10.6996 18.7561 10.2859 18.7764C9.8722 18.7968 9.52032 18.4779 9.49997 18.0642L9.27581 13.5076C9.25546 13.0938 9.57434 12.742 9.98805 12.7216C10.4018 12.7013 10.7536 13.0201 10.774 13.4339ZM14.0101 12.7216C14.4238 12.742 14.7427 13.0938 14.7223 13.5076L14.4982 18.0642C14.4778 18.4779 14.1259 18.7968 13.7122 18.7764C13.2985 18.7561 12.9796 18.4042 13 17.9905L13.2241 13.4339C13.2445 13.0201 13.5964 12.7013 14.0101 12.7216Z" fill="currentColor"/>
            </svg>
            <span class="text-[10px] font-medium text-slate-800/70 group-hover:text-slate-950 uppercase tracking-wider">Hapus</span>
        </button>
    {/if}
</div>

<section use:ClickBoxWishlist id="result-wishlist" class="w-full p-4 gap-4 flex items-center overflow-x-auto scrollbar-none">
    
    <button 
        id="tambah-kategori-button"
        type="button" 
        class="h-[16rem] w-[11rem] shrink-0 border border-dashed border-zinc-950/20 hover:border-slate-950 hover:bg-zinc-50/50 rounded-sm flex flex-col items-center justify-center gap-2 transition duration-300 group cursor-pointer"
    >
        <div class="w-8 h-8 rounded-full border border-zinc-950/20 flex items-center justify-center group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white transition duration-300">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        </div>
        <span class="text-[10px] font-bold tracking-[0.15em] text-slate-950/60 group-hover:text-slate-950 uppercase">
            KATEGORI BARU
        </span>
    </button>

    {#each Array(ulang) as _, i}
        {@render BoxWishlist(i)}
    {/each}
</section>