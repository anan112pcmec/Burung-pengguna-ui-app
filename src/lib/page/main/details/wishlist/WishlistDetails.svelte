<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";

	// Utility State untuk Search, Sort, & Filter
	let searchQuery = $state("");
	let sortBy = $state("newest"); // "newest", "price_asc", "price_desc", "discount"
	let selectedCategory = $state("all");

	// Dummy data loop item wishlist (3 item contoh)
	const wishlistItems = [1, 2, 3, 4, 5, 6];
</script>

<section id="wishlist-details" class="w-full space-y-6 font-sans">
	
	<!-- ─── 1. HEADER UTILITY & SEARCH BAR ─── -->
	<header class="border border-zinc-950/10 bg-white p-4 sm:p-5 rounded-sm space-y-4">
		
		<!-- Folder Meta & Title Bar -->
		<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-4">
			<div>
				<div class="flex items-center gap-2  text-[10px] text-zinc-400 uppercase tracking-widest">
					<span>WISHLIST FOLDER</span>
					<span>•</span>
					<span class="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-2xs border border-emerald-200">PUBLIC</span>
				</div>
				<h1 class="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mt-1">
					SETUP MEJA KERJA
				</h1>
			</div>

			<!-- Quick Counter & Mass Actions -->
			<div class="flex items-center gap-2 self-start sm:self-auto ">
				<span class="text-xs bg-zinc-100 border border-zinc-950/10 px-2.5 py-1 rounded-2xs text-slate-800 font-bold">
					{wishlistItems.length} ITEM
				</span>
				<button 
					type="button" 
					class="text-[11px] px-3 py-1 bg-slate-950 text-white hover:bg-slate-800 rounded-2xs transition"
				>
					BAGIKAN FOlDER
				</button>
			</div>
		</div>

		<!-- Search & Filter Controls Grid -->
		<div class="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3 ">
			
			<!-- Input Search Produk -->
			<div class="relative">
				<input 
					type="text" 
					bind:value={searchQuery}
					placeholder="Cari item di wishlist ini..." 
					class="w-full h-9 px-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
				/>
			</div>

			<!-- Sorting Dropdown -->
			<select 
				bind:value={sortBy} 
				class="h-9 px-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-950 transition cursor-pointer"
			>
				<option value="newest">TERBARU DITAMBAHKAN</option>
				<option value="price_asc">HARGA: TERENDAH → TERTINGGI</option>
				<option value="price_desc">HARGA: TERTINGGI → TERENDAH</option>
				<option value="discount">DISKON TERBESAR</option>
			</select>

			<!-- Quick Category Filter -->
			<select 
				bind:value={selectedCategory} 
				class="h-9 px-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-950 transition cursor-pointer"
			>
				<option value="all">SEMUA KATEGORI</option>
				<option value="electronics">ELEKTRONIK</option>
				<option value="furniture">FURNITUR</option>
				<option value="accessories">AKSESORIS</option>
			</select>

		</div>
	</header>

    <div class="pr-2 pl-2 w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
        {#each wishlistItems as id}
			<ProductCard {id} />
		{/each}
    </div>

</section>