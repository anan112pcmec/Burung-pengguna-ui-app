<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";

	const ulang = 6; // Dibuat agak banyak (6) agar efek scroll horizontalnya terasa
</script>

<!-- Tambahan border-y dan padding agar section terlihat lebih rapi dan terpisah -->
<section id="last-seen-product" class="w-full bg-white  border-zinc-950/10 py-6 mt-4 pl-4 group">
	
	<!-- ─── HEADER SECTION ─── -->
	<div class="px-4 md:px-6 flex items-center justify-between mb-5">
		<!-- Judul dengan aksen kotak solid -->
		<div class="flex items-center gap-3">
			<div class="w-2.5 h-2.5 bg-slate-950"></div>
			<h2 class=" text-sm font-bold text-slate-950 uppercase tracking-[0.2em] leading-none mt-0.5">
				Last Seen
			</h2>
		</div>
		
		<!-- Indikator Scroll (Membantu UX) -->
		<div class="text-[9px] text-zinc-400 uppercase tracking-widest flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
			<span>Geser</span>
			<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="square" />
			</svg>
		</div>
	</div>

	<!-- ─── HORIZONTAL SCROLL CONTAINER ─── -->
	<!-- 
		Penjelasan Class:
		- overflow-x-auto: Bikin bisa scroll ke kanan-kiri
		- snap-x snap-mandatory: Bikin scrollnya nge-snap (berhenti pas di ujung card) kayak di aplikasi native
		- [&::-webkit-scrollbar]:hidden dkk: Untuk menyembunyikan scrollbar bawaan browser biar UI tetap bersih
	-->
	<div class="w-full flex overflow-x-auto gap-4 px-4 md:px-6 pb-2 snap-x snap-mandatory 
		[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
		
		{#each Array(ulang) as _, i}
			<!-- WAJIB pakai shrink-0 di wrapper ini agar ProductCard tidak mengecil otomatis -->
			<div class="snap-start shrink-0">
				<ProductCard id={i} />
			</div>
		{/each}

		<!-- Elemen kosong (Spacer) di akhir agar card terakhir tidak mentok banget di ujung layar kanan -->
		<div class="shrink-0 w-2 md:w-4"></div>
	</div>

</section>