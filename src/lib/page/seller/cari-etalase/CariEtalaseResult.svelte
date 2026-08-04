<script lang="ts">
	import { SellerGeneralPageState } from "$lib/state/seller/general/state.svelte";
	import EtalaseCard from "../general/EtalaseCard.svelte";

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

<section id="cari-etalase-result" class="w-full bg-white border-x border-b border-zinc-950/10 p-5 md:p-6 flex flex-col gap-4">
	
	<div class="flex items-center justify-between border-b border-zinc-950/10 pb-3">
		<span class=" text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
			Hasil Pencarian ({filteredResults.length} Etalase Ditemukan)
		</span>
		<span class=" text-[9px] text-zinc-400 uppercase tracking-widest">
			Mode Direktori
		</span>
	</div>

	<!-- Grid Hasil -->
	{#if filteredResults.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each filteredResults as _, i}
				<EtalaseCard id={i} path={"/details/etalase"} fun={() => SellerGeneralPageState.Detail()}/>
			{/each}
		</div>
	{:else}
		<!-- State Kosong / Tidak Ditemukan -->
		<div class="py-12 flex flex-col items-center justify-center text-center gap-2 bg-zinc-50 border border-dashed border-zinc-950/20">
			<svg class="w-8 h-8 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
				<path stroke-linecap="square" stroke-linejoin="miter" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<p class=" text-xs text-slate-950 font-bold uppercase tracking-widest mt-1">
				Etalase Tidak Ditemukan
			</p>
			<p class="font-sans text-xs text-zinc-500">
				Coba gunakan kata kunci atau kode etalase yang lain.
			</p>
		</div>
	{/if}

</section>