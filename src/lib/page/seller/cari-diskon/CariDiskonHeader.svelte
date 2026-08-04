<script lang="ts">
	// State untuk input pencarian diskon
	let diskonQuery = $state("");
	let selectedFilter = $state("semua"); // "semua", "terbesar", "terbaru"
</script>

<!-- ==========================================
     SECTION: CARI DISKON HEADER
=========================================== -->
<section id="cari-diskon-header" class="w-full bg-white border border-zinc-950/10 p-5 md:p-6 flex flex-col gap-4">
	
	<!-- Top Row: Title & Status -->
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
		<div>
			<h2 class="font-sans font-bold text-slate-950 text-base md:text-lg tracking-tight uppercase">
				Pencarian Diskon & Promo
			</h2>
			<p class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">
				Filter penawaran khusus dan bundel produk aktif
			</p>
		</div>
		<span class="font-mono text-[10px] text-slate-950 font-bold bg-zinc-100 border border-zinc-950/10 px-3 py-1 self-start md:self-auto uppercase">
			Promo: Live
		</span>
	</div>

	<!-- Search & Filter Controls -->
	<div class="flex flex-col md:flex-row items-stretch gap-3">
		
		<!-- Input Pencarian Kaku -->
		<div class="relative w-full flex items-center">
			<span class="absolute left-4 text-zinc-400 pointer-events-none">
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="square" stroke-linejoin="miter" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</span>
			<input 
				type="text" 
				bind:value={diskonQuery}
				placeholder="Cari berdasarkan nama promo atau besar diskon (contoh: 40%)..." 
				class="w-full bg-zinc-50 border border-zinc-950/10 pl-11 pr-4 py-3 font-mono text-xs text-slate-950 placeholder-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition-all"
			/>
			{#if diskonQuery}
				<button 
					onclick={() => diskonQuery = ""}
					class="absolute right-3 font-mono text-[10px] text-zinc-400 hover:text-slate-950 uppercase tracking-widest px-2 py-1"
				>
					Reset
				</button>
			{/if}
		</div>

		<!-- Tombol Filter Kategori / Urutan -->
		<div class="flex items-center gap-2 shrink-0">
			<button 
				onclick={() => selectedFilter = "semua"}
				class="font-mono text-[10px] px-4 py-3 uppercase tracking-widest font-bold border transition-colors {selectedFilter === 'semua' ? 'bg-slate-950 text-white border-slate-950' : 'bg-zinc-50 text-zinc-600 border-zinc-950/10 hover:border-slate-950'}"
			>
				Semua
			</button>
			<button 
				onclick={() => selectedFilter = "terbesar"}
				class="font-mono text-[10px] px-4 py-3 uppercase tracking-widest font-bold border transition-colors {selectedFilter === 'terbesar' ? 'bg-slate-950 text-white border-slate-950' : 'bg-zinc-50 text-zinc-600 border-zinc-950/10 hover:border-slate-950'}"
			>
				Diskon Tertinggi
			</button>
		</div>

	</div>

</section>