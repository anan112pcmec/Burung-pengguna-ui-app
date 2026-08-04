<script lang="ts">
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
</section>