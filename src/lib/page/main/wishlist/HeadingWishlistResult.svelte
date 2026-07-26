<script lang="ts">
	// State untuk Search & Total Counter Wishlist
	let searchQuery = $state("");
	let totalWishlist = $state(3);
</script>

<section id="heading-wishlist-result" class="w-full h-[8rem] border-b border-zinc-950/10 bg-white">
	<div class="grid grid-cols-[20%_60%_20%] w-full h-full items-center">
		
		<!-- Col 1: Title & Total Items -->
		<div class="pl-4 border-r border-zinc-950/10 h-full flex flex-col justify-center">
			<span class="text-[9px]  font-bold tracking-[0.18em] text-zinc-400 uppercase block">
				WISHLIST RESULT
			</span>
			<h1 class="text-xl font-bold  text-slate-950 tracking-tight mt-0.5">
				HASIL ({totalWishlist})
			</h1>
		</div>

		<!-- Col 2: Search Bar & Search Action Button -->
		<div class="px-4 h-full flex items-center">
			<div class="grid grid-cols-[1fr_auto] gap-2 w-full items-center">
				<!-- Input Search -->
				<div class="relative w-full">
					<input 
						type="text" 
						bind:value={searchQuery}
						placeholder="Cari folder koleksi wishlist..." 
						class="w-full h-10 px-3 text-xs font-sans bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
					/>
				</div>

				<!-- Search Trigger Button -->
				<button 
					type="button" 
					class="h-10 px-3.5 bg-slate-950 text-white hover:bg-slate-800 border border-slate-950 rounded-2xs flex items-center justify-center transition cursor-pointer shrink-0"
					title="Cari"
				>
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Col 3: Quick Action (Tambah Wishlist Baru / Folder Icon) -->
		<div class="pr-4 pl-2 border-l border-zinc-950/10 h-full flex items-center justify-end gap-3">
			<div class="text-right hidden sm:block">
				<span class="text-[9px] font-mono text-zinc-400 uppercase block leading-none">AKSI</span>
				<span class="text-[11px] font-mono font-bold text-slate-950">BUAT FOLDER</span>
			</div>

			<!-- Action Trigger Box -->
			<button 
				type="button" 
				class="p-2.5 bg-zinc-100 hover:bg-slate-950 hover:text-white border border-zinc-950/10 rounded-2xs transition group cursor-pointer"
				title="Buat Kategori Wishlist Baru"
			>
				<svg class="w-5 h-5 text-slate-900 group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
				</svg>
			</button>
		</div>

	</div>
</section>