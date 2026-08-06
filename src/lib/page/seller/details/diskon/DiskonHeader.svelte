<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";

	// State data promo dari backend untuk ditampilkan ke pembeli
	let promo = $state({
		id_diskon_produk: 101,
		nama_diskon_produk: "PROMO MID-YEAR TECH SALE",
		deskripsi_diskon_produk: "Diskon otomatis terpotong saat checkout untuk produk terpilih selama kuota promo masih tersedia.",
		diskon_persen_diskon_produk: 15.00,
		berlaku_mulai_diskon_produk: "2026-08-01",
		berlaku_sampai_diskon_produk: "2026-08-31",
		status_diskon_produk: "Aktif"
	});
	
</script>

<section id="diskon-header" class="w-full border border-zinc-200 rounded-xs bg-white p-4">
	<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
		
		<!-- Left Side: Detail Promo untuk Pembeli -->
		<div class="space-y-1.5 min-w-0 flex-1">
			<!-- Tag Diskon & Label -->
			<div class="flex items-center gap-2">
				<span class="inline-flex items-center rounded-2xs bg-zinc-950 px-2 py-0.5  text-xs font-bold text-white tracking-wider">
					HEMAT {promo.diskon_persen_diskon_produk}%
				</span>
				<span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
					PROMO SPESIAL
				</span>
			</div>

			<!-- Judul Promo -->
			<h2 class="text-sm font-bold tracking-tight text-slate-950 uppercase">
				{promo.nama_diskon_produk}
			</h2>

			<!-- Deskripsi untuk Pembeli -->
			{#if promo.deskripsi_diskon_produk}
				<p class="text-xs text-zinc-600 font-sans leading-relaxed max-w-2xl">
					{promo.deskripsi_diskon_produk}
				</p>
			{/if}
		</div>

		

		<!-- Right Side: Info Masa Berlaku & Status Otomatis -->
		<div class="shrink-0 flex items-center gap-2 pt-2 md:pt-0 border-t border-zinc-100 md:border-t-0 text-[10px] text-zinc-500">
			<svg class="w-3.5 h-3.5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>BERLAKU S/D {promo.berlaku_sampai_diskon_produk}</span>
		</div>

		

	</div>
	 <div class="relative pt-4 space-y-4 ">
        <input 
            type="text" 
    	    placeholder="Cari item di Diskon ini..." 
            class="w-full h-9 px-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
        />
		<div class="w-full grid grid-cols-2 pl-0.5">
			<div class="flex items-center">
				<UrutkanBerdasar Kriteria={[
					{nama: "Terbaru", fun: (): void =>{}},
					{nama: "Harga Termurah", fun: (): void =>{}},
					{nama: "Harga Tertinggi", fun: (): void =>{}}
				]}/>
			</div>
			<dir class="flex items-end justify-end">
				<button class="p-1.5 justify-end text-right border border-zinc-200 rounded-xs text-zinc-600 hover:text-slate-950 hover:border-zinc-400 transition" title="Bagikan Etalase">
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0-10.628a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0 10.628a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
					</svg>
				</button>
			</dir>
		</div>
    </div>
</section>