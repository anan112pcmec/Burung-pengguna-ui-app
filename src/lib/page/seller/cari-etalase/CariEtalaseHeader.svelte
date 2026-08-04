<script lang="ts">
	// State untuk input pencarian etalase
	let searchQuery = $state("");
	
	// Data dummy hasil pencarian etalase
	const searchResults = [
		{ id: 1, name: "Koleksi Elektronik & Gadget", items: 24, code: "ET-01" },
		{ id: 2, name: "Aksesoris & Kabel Pendukung", items: 12, code: "ET-02" },
		{ id: 3, name: "Perlengkapan Audio Studio", items: 8, code: "ET-03" },
		{ id: 4, name: "Komponen Hardware PC", items: 30, code: "ET-04" },
		{ id: 5, name: "Penyimpanan Eksternal", items: 15, code: "ET-05" },
		{ id: 6, name: "Smart Home Device", items: 9, code: "ET-06" },
	];

	// Filter hasil berdasarkan query
	let filteredResults = $derived(
		searchResults.filter(res => 
			res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			res.code.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<!-- ==========================================
     SECTION 1: CARI ETALASE HEADER (INPUT BAR)
=========================================== -->
<section id="cari-etalase-header" class="w-full bg-white border border-zinc-950/10 p-5 md:p-6 flex flex-col gap-4">
	
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
		<div>
			<h2 class="font-sans font-bold text-slate-950 text-base md:text-lg tracking-tight uppercase">
				Pencarian Direktori Etalase
			</h2>
			<p class="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">
				Telusuri kategori atau nomor rak penyimpanan toko
			</p>
		</div>
		<span class="text-[10px] text-slate-950 font-bold bg-zinc-100 border border-zinc-950/10 px-3 py-1 self-start md:self-auto uppercase">
			Index: Aktif
		</span>
	</div>

	<!-- Input Pencarian Kaku & Monokrom -->
	<div class="relative w-full flex items-center">
		<span class="absolute left-4 text-zinc-400 pointer-events-none">
			<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="square" stroke-linejoin="miter" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</span>
		<input 
			type="text" 
			bind:value={searchQuery}
			placeholder="Ketik nama etalase atau kode (contoh: ET-01)..." 
			class="w-full bg-zinc-50 border border-zinc-950/10 pl-11 pr-4 py-3  text-xs text-slate-950 placeholder-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition-all"
		/>
		{#if searchQuery}
			<button 
				onclick={() => searchQuery = ""}
				class="absolute right-3 text-[10px] text-zinc-400 hover:text-slate-950 uppercase tracking-widest px-2 py-1"
			>
				Reset
			</button>
		{/if}
	</div>

</section>


<!-- ==========================================
     SECTION 2: CARI ETALASE RESULT (GRID HASIL)
=========================================== -->
