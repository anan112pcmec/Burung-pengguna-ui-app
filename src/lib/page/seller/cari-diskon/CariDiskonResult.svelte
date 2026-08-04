<script lang="ts">
	import { SellerGeneralPageState } from "$lib/state/seller/general/state.svelte";
	import DiskonCard from "../general/DiskonCard.svelte";

	// Data dummy hasil pencarian diskon/promo
	const promoResults = [
		{ 
			id: 1, 
			name: "Flash Sale Keyboard Mekanikal", 
			discount: "40%", 
			code: "FS-KB-40", 
			expiry: "2 Hari Lagi", 
			type: "Flash Sale",
			status: "Tersedia"
		},
		{ 
			id: 2, 
			name: "Bundel Monitor & Bracket", 
			discount: "25%", 
			code: "BNDL-MN-25", 
			expiry: "Berakhir Besok", 
			type: "Bundel Spesial",
			status: "Sisa 5"
		},
		{ 
			id: 3, 
			name: "Diskon Akhir Tahun Perlengkapan Audio", 
			discount: "50%", 
			code: "YEAREND-50", 
			expiry: "12 Jam Lagi", 
			type: "Cuci Gudang",
			status: "Hampir Habis"
		},
		{ 
			id: 4, 
			name: "Potongan Harga Kursi Ergonomis", 
			discount: "15%", 
			code: "ERGO-15", 
			expiry: "5 Hari Lagi", 
			type: "Promo Reguler",
			status: "Tersedia"
		}
	];
</script>

<!-- ==========================================
     SECTION: CARI DISKON RESULT
=========================================== -->
<section id="cari-diskon-result" class="w-full bg-white border-x border-b border-zinc-950/10 p-5 md:p-6 flex flex-col gap-5">
	
	<!-- Header Bar Result -->
	<div class="flex items-center justify-between border-b border-zinc-950/10 pb-3">
		<span class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
			Menampilkan {promoResults.length} Penawaran Aktif
		</span>
		<span class="font-mono text-[9px] text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
			<span class="w-1.5 h-1.5 bg-green-500 inline-block animate-pulse"></span>
			Sistem Sinkronisasi Berjalan
		</span>
	</div>

	<!-- Grid List Kupon Diskon -->
	<div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
		{#each promoResults as promo, i}
		<DiskonCard id={i} path={"/details/diskon"} fun={() => SellerGeneralPageState.Detail()}/>
		{/each}
	</div>

</section>