<script lang="ts">
	import { goto } from '$app/navigation';
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
    const WishlistBoxs: NodeListOf<HTMLDivElement> = node.querySelectorAll('[class*="box-wishlist"]');
    const handlers: { element: HTMLDivElement; ev: (e: PointerEvent) => void }[] = [];

    interface ClickTrack {
        status: 'locked' | 'not-locked' | 'prep-for-delete';
        count: number;
    }
    
    const WishlistClickedTrack: SvelteMap<HTMLDivElement, ClickTrack> = new SvelteMap();
    const WishlistClickedTimeout: SvelteMap<HTMLDivElement, NodeJS.Timeout> = new SvelteMap();

    for (const wishlistEl of WishlistBoxs) {
        const event = (e: PointerEvent): void => {
            const currentCount = WishlistClickedTrack.get(wishlistEl);
            
            // 1. Jika status saat ini 'locked', klik berikutnya ubah jadi 'prep-for-delete' (Border Tebal Siap Hapus)
            if (currentCount && currentCount.status === 'locked') {
                const existingTimeout = WishlistClickedTimeout.get(wishlistEl);
                if (existingTimeout) clearInterval(existingTimeout);
                WishlistClickedTimeout.delete(wishlistEl);

                const updatePrep: ClickTrack = {
                    status: 'prep-for-delete',
                    count: 1
                };
                WishlistClickedTrack.set(wishlistEl, updatePrep);

                // Ubah border menjadi tebal/aktif via class DOM
                wishlistEl.classList.remove('border-zinc-950/10');
                wishlistEl.classList.add('border-2', 'border-slate-950');
                return;
            }

            // 2. Jika status 'prep-for-delete', klik kedua kalinya akan menghapus data & mereset border
            if (currentCount && currentCount.status === 'prep-for-delete') {
                WishlistClickedTrack.delete(wishlistEl);
                
                // Kembalikan border ke default
                wishlistEl.classList.remove('border-2', 'border-slate-950');
                wishlistEl.classList.add('border-zinc-950/10');
                return;
            }

            // 3. Alur normal penambahan klik (Counter 1, 2, 3)
            const newCount: ClickTrack = {
                status: 'not-locked',
                count: (currentCount?.count ?? 0) + 1,
            }; 
            
            if (currentCount == undefined) {
                WishlistClickedTrack.set(wishlistEl, newCount);
                // Berikan animasi/border menebal pada klik pertama
                wishlistEl.classList.remove('border-zinc-950/10');
                wishlistEl.classList.add('border-2', 'border-slate-950');
            } else if (currentCount.status != 'locked') {
                WishlistClickedTrack.set(wishlistEl, newCount);
            }

            const latestCount = WishlistClickedTrack.get(wishlistEl)?.count ?? newCount.count;
            if (latestCount >= 3) {
                const existingTimeout = WishlistClickedTimeout.get(wishlistEl);
                if (existingTimeout) clearInterval(existingTimeout);
                WishlistClickedTimeout.delete(wishlistEl);
                WishlistClickedTrack.delete(wishlistEl);

                // Reset border sebelum pindah halaman
                wishlistEl.classList.remove('border-2', 'border-slate-950');
                wishlistEl.classList.add('border-zinc-950/10');

                goto("/details/wishlist");
                return;
            }

            // Atur Interval Timeout Mundur (Countdown)
            if (!WishlistClickedTimeout.has(wishlistEl)) {
                const intervalId = setInterval(() => {
                    const clickedRn = WishlistClickedTrack.get(wishlistEl);
                    console.log("el ini sisa click counter: ", clickedRn);

                    if (clickedRn == undefined) {
                        clearInterval(intervalId);
                        WishlistClickedTimeout.delete(wishlistEl);
                        return;
                    }

                    if (clickedRn.count <= 1) {
                        const UpdateTrackStatus: ClickTrack = {
                            status: 'locked',
                            count: clickedRn.count
                        };
                        WishlistClickedTrack.set(wishlistEl, UpdateTrackStatus);
                        
                        clearInterval(intervalId);
                        WishlistClickedTimeout.delete(wishlistEl);
                    } else {
                        const UpdateTrackStatus: ClickTrack = {
                            status: 'not-locked',
                            count: clickedRn.count - 1
                        };
                        WishlistClickedTrack.set(wishlistEl, UpdateTrackStatus);
                    }
                }, 1200);

                WishlistClickedTimeout.set(wishlistEl, intervalId);
            }
        };

        wishlistEl.addEventListener("click", event as EventListener);
        handlers.push({ element: wishlistEl, ev: event as (e: PointerEvent) => void });
    }

    return {
        destroy() {
            for (const [, timeoutId] of WishlistClickedTimeout) {
                clearInterval(timeoutId);
            }
            WishlistClickedTimeout.clear();
            WishlistClickedTrack.clear();

            for (const h of handlers) {
                h.element.removeEventListener("click", h.ev as EventListener);
            }
        }
    };
};
</script>

{#snippet BoxWishlist(i: number)}
	{@const category = wishlistCategories[i % wishlistCategories.length]}
	
	<!-- Card Container: Fixed Width/Height untuk Horizontal Scroll Grid -->
	<div class="box-wishlist-{i} h-[16rem] w-[14rem] shrink-0 border border-zinc-950/10 bg-white rounded-sm grid grid-rows-[65%_35%] transition duration-300 hover:border-slate-950 group cursor-pointer overflow-hidden">
		
		<!-- Row 1: Preview Cover / Grid Thumbnail Item -->
		<div class="relative bg-zinc-50 border-b border-zinc-950/10 p-2">
			<!-- Mini 2x2 Image Preview Stack -->
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
				<div class="bg-zinc-300 rounded-2xs flex items-center justify-center  text-[10px] text-slate-700 font-bold">
					+{category.totalItems - 3}
				</div>
			</div>

			<!-- Badge Lock / Public Status -->
			<div class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[9px]  px-1.5 py-0.5 rounded-2xs uppercase tracking-wider">
				{category.isPublic ? 'PUBLIC' : 'PRIVATE'}
			</div>

			<!-- More / Delete Option Trigger -->
			<button 
				type="button"
				class="absolute top-2.5 right-2.5 p-1 text-slate-950/40 hover:text-slate-950 transition"
				onclick={(e) => {
					e.stopPropagation();
					// Action modal/dropdown handler
				}}
			>
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</button>
		</div>

		<!-- Row 2: Informasi Kategori Wishlist -->
		<div class="p-3 flex flex-col justify-between bg-white">
			<div>
				<span class="text-[9px]  font-medium tracking-[0.18em] text-slate-950/40 uppercase block">
					WISHLIST FOLDER
				</span>
				<h3 class="text-xs font-bold text-slate-900 tracking-tight truncate mt-0.5 group-hover:text-slate-950">
					{category.name}
				</h3>
			</div>

			<div class="flex items-center justify-between pt-2 border-t border-zinc-950/5 text-[10px]  text-slate-950/60">
				<span>{category.totalItems} ITEM</span>
				<span class="group-hover:translate-x-0.5 transition-transform duration-300">&rarr;</span>
			</div>
		</div>

	</div>
{/snippet}

<!-- Container Result Wishlist: Horizontal Scroll dengan Custom Spacing -->
<section use:ClickBoxWishlist id="result-wishlist" class="w-full p-4 gap-4 flex items-center overflow-x-auto scrollbar-none">
	
	<!-- Button Tambah Kategori Baru (Paling Depan) -->
	<button 
		type="button" 
		class="h-[16rem] w-[11rem] shrink-0 border border-dashed border-zinc-950/20 hover:border-slate-950 hover:bg-zinc-50/50 rounded-sm flex flex-col items-center justify-center gap-2 transition duration-300 group cursor-pointer"
	>
		<div class="w-8 h-8 rounded-full border border-zinc-950/20 flex items-center justify-center group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white transition duration-300">
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
			</svg>
		</div>
		<span class="text-[10px]  font-bold tracking-[0.15em] text-slate-950/60 group-hover:text-slate-950 uppercase">
			KATEGORI BARU
		</span>
	</button>

	<!-- Rendering List Folder Wishlist -->
	{#each Array(ulang) as _, i}
		{@render BoxWishlist(i)}
	{/each}
</section>