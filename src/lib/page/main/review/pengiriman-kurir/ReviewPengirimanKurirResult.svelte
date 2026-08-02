<script lang="ts">
	const ulang = 9;
</script>

<!-- ==========================================
	 SNIPPET 1: BELUM DI REVIEW PENGIRIMAN
=========================================== -->
{#snippet BelumDiReview()}
	{@const pengiriman = {
		id_pengiriman: "TRX-88291002-XC",
		jenis_pengiriman: "Instant - GoSend",
		kurir_nama: "Agus Supriyanto",
		waktu_selesai: "Hari ini, 14:30 WIB"
	}}

	<div class="w-full bg-white border border-zinc-950/10 p-4 flex flex-col gap-4 hover:border-slate-950 transition-colors group">
		<!-- Info Pengiriman -->
		<div class="flex items-start gap-4">
			<!-- Ikon Logistik Struktural -->
			<div class="w-12 h-12 shrink-0 bg-zinc-100 border border-zinc-200 flex items-center justify-center rounded-full">
				<svg class="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
				</svg>
			</div>

			<!-- Detail -->
			<div class="flex-1 min-w-0 flex flex-col gap-1">
				<div class="flex items-baseline justify-between gap-2">
					<p class="font-mono text-[9px] text-zinc-500 uppercase tracking-widest truncate">
						ID: {pengiriman.id_pengiriman}
					</p>
					<p class="font-mono text-[9px] text-emerald-600 font-bold shrink-0 uppercase">
						Selesai
					</p>
				</div>
				<h3 class="font-sans font-bold text-slate-950 text-sm leading-snug truncate">
					{pengiriman.jenis_pengiriman}
				</h3>
				<p class="font-sans text-[11px] text-zinc-600 mt-0.5">
					Kurir: <span class="font-medium text-slate-800">{pengiriman.kurir_nama}</span> • Tiba: {pengiriman.waktu_selesai}
				</p>
			</div>
		</div>

		<!-- Aksi & Bintang Kosong -->
		<div class="border-t border-zinc-950/10 pt-3 flex items-center justify-between">
			<!-- Deretan 5 Bintang Kosong -->
			<div class="flex items-center gap-1">
				{#each Array(5) as _}
					<svg class="w-6 h-6 text-zinc-300 cursor-pointer hover:text-slate-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
					</svg>
				{/each}
			</div>

			<button class="font-mono font-bold text-[10px] bg-slate-950 text-white px-4 py-1.5 uppercase tracking-wide hover:bg-slate-800 transition-colors">
				Nilai Kurir
			</button>
		</div>
	</div>
{/snippet}


<!-- ==========================================
	 SNIPPET 2: SUDAH DI REVIEW PENGIRIMAN
=========================================== -->
{#snippet SudahDiReview()}
	{@const review_kurir = {
		id_pengiriman: 88291001,
		jenis_pengiriman: "Reguler - JNE",
		kurir: { nama: "Budi Santoso" },
		jenis_entity_rater: "Pembeli",
		ulasan: "Paket sampai dengan aman, tidak ada penyok di kardus. Kurir juga ramah dan sudah sering antar ke rumah. Mantap pelayanannya!",
		rating: 5,
		created_at: "2026-08-01 16:20 WIB",
		updated_at: "2026-08-01 16:20 WIB"
	}}

	<div class="w-full bg-white border border-zinc-950/10 p-4 flex flex-col gap-3 group">
		<!-- Header Review: Kurir & Logistik -->
		<div class="flex items-start justify-between gap-4 border-b border-zinc-950/10 pb-3">
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-2">
					<h3 class="font-sans font-bold text-slate-950 text-sm">
						{review_kurir.jenis_pengiriman}
					</h3>
					<!-- Tag Role Rater -->
					<span class="font-mono text-[8px] px-1.5 py-0.5 bg-zinc-100 text-zinc-600 border border-zinc-200 uppercase tracking-widest">
						Oleh {review_kurir.jenis_entity_rater}
					</span>
				</div>
				
				<p class="font-sans text-[11px] text-zinc-500">
					Kurir: <span class="font-medium text-slate-800">{review_kurir.kurir.nama}</span>
				</p>

				<!-- Rating Stars Solid -->
				<div class="flex items-center gap-1 mt-1">
					{#each Array(5) as _, index}
						{#if index < review_kurir.rating}
							<svg class="w-4 h-4 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
							</svg>
						{:else}
							<svg class="w-4 h-4 text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
							</svg>
						{/if}
					{/each}
				</div>
			</div>
			
			<!-- Timestamps -->
			<div class="flex flex-col items-end gap-1 shrink-0 text-right">
				<p class="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">Waktu Penilaian</p>
				<p class="font-mono text-[10px] text-slate-900">{review_kurir.created_at}</p>
			</div>
		</div>

		<!-- Body: Isi Ulasan -->
		<div class="pt-1">
			<p class="font-sans text-[12px] text-slate-800 leading-relaxed">
				"{review_kurir.ulasan}"
			</p>
		</div>

		<!-- Footer: Edit/Update Info -->
		<div class="mt-2 flex items-center justify-between">
			<p class="font-mono text-[9px] text-zinc-400">
				Terakhir diubah: {review_kurir.updated_at}
			</p>
			
			<button class="font-mono font-bold text-[10px] text-slate-950 hover:text-zinc-500 transition-colors uppercase tracking-wide flex items-center gap-1">
				<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
				</svg>
				Ubah Penilaian
			</button>
		</div>
	</div>
{/snippet}

<section id="review-pengiriman-kurir-result" class="w-full bg-zinc-50 p-4 md:p-6 min-h-[50vh]">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
		<!-- Looping render SudahDiReview() sebanyak "ulang" kali -->
		{#each Array(ulang) as _, i}
			{@render SudahDiReview()}
		{/each}
	</div>
</section>