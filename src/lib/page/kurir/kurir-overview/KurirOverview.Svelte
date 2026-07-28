<script lang="ts">
	// Mock Data Metrik & Statistik Operasional Kurir
	const stats = {
		total_pengiriman: 1420,
		berhasil: 1385,
		gagal: 35,
		trouble_rate: 2.46, // persen (gagal / total * 100)
		
		// Breakdown Review
		total_review: 480,
		good_review: 462, // bintang 4 & 5
		bad_review: 18,   // bintang 1, 2, & 3
		rating_avg: 4.92
	};

	// Mock Data Heatmap Jam Aktif Operasional (7 Hari x 6 Blok Waktu / 24 Jam)
	// Value 0: Nonaktif, 1: Rendah, 2: Sedang, 3: Tinggi (Puncak Operasional)
	const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Ming'];
	const timeSlots = [
		{ label: '00:00 - 04:00', key: 't1' },
		{ label: '04:00 - 08:00', key: 't2' },
		{ label: '08:00 - 12:00', key: 't3' },
		{ label: '12:00 - 16:00', key: 't4' },
		{ label: '16:00 - 20:00', key: 't5' },
		{ label: '20:00 - 24:00', key: 't6' }
	];

	const heatmapData = [
		// Sen, Sel, Rab, Kam, Jum, Sab, Ming
		[0, 0, 0, 0, 0, 0, 0], // 00:00 - 04:00
		[1, 1, 1, 1, 1, 0, 0], // 04:00 - 08:00
		[3, 3, 3, 3, 3, 2, 1], // 08:00 - 12:00 (Peak)
		[3, 2, 3, 3, 3, 3, 1], // 12:00 - 16:00 (Peak)
		[2, 3, 2, 2, 3, 2, 0], // 16:00 - 20:00
		[1, 1, 1, 1, 2, 1, 0]  // 20:00 - 24:00
	];

	// Helper styling warna intensitas heatmap
	function getHeatmapColor(level: number): string {
		switch (level) {
			case 3: return 'bg-slate-900 border-slate-900 text-white'; // Peak
			case 2: return 'bg-zinc-400 border-zinc-400 text-white';  // Medium
			case 1: return 'bg-zinc-200 border-zinc-300 text-zinc-700'; // Low
			default: return 'bg-zinc-50 border-zinc-200 text-transparent'; // Inactive
		}
	}
</script>

<section class="w-full space-y-8 font-sans selection:bg-slate-900 selection:text-white">

	<!-- HEADER HALAMAN: Title & Quick Info -->
	<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-5">
		<div>
			<h2 class="text-base font-bold tracking-tight text-slate-950 uppercase ">
				Ikhtisar Performa Kurir
			</h2>
			<p class="text-xs text-zinc-500 mt-0.5">
				Analisis histori operasional pengiriman, keandalan rute, dan aktivitas harian.
			</p>
		</div>
		<div class="flex items-center gap-2  text-[10px]">
			<span class="px-2 py-1 bg-zinc-100 border border-zinc-200 text-slate-700 rounded-xs">
				STATUS PERFORMA: <strong class="text-emerald-600">SANGAT BAIK</strong>
			</span>
		</div>
	</div>

	<!-- BARIS 1: METRIK STATISTIK PENGIRIMAN -->
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		
		<!-- Total Pengiriman -->
		<div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
			<span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase ">
				Total Pengiriman
			</span>
			<div class="flex items-baseline justify-between">
				<span class="text-2xl font-bold  text-slate-950">
					{stats.total_pengiriman.toLocaleString()}
				</span>
				<span class="text-[10px]  text-zinc-500">
					Order
				</span>
			</div>
			<p class="text-[11px] text-zinc-500 font-light">Akumulasi rute yang diambil</p>
		</div>

		<!-- Berhasil dikirim -->
		<div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
			<span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase ">
				Selesai (Berhasil)
			</span>
			<div class="flex items-baseline justify-between">
				<span class="text-2xl font-bold  text-emerald-600">
					{stats.berhasil.toLocaleString()}
				</span>
				<span class="text-[10px]  bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.2 rounded-xs">
					{((stats.berhasil / stats.total_pengiriman) * 100).toFixed(1)}%
				</span>
			</div>
			<p class="text-[11px] text-zinc-500 font-light">Paket diterima oleh penerima</p>
		</div>

		<!-- Gagal dikirim -->
		<div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
			<span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase ">
				Gagal / Retur
			</span>
			<div class="flex items-baseline justify-between">
				<span class="text-2xl font-bold  text-rose-600">
					{stats.gagal}
				</span>
				<span class="text-[10px]  bg-rose-50 text-rose-700 border border-rose-200 px-1 py-0.2 rounded-xs">
					{((stats.gagal / stats.total_pengiriman) * 100).toFixed(1)}%
				</span>
			</div>
			<p class="text-[11px] text-zinc-500 font-light">Alamat salah, pembatalan, dll.</p>
		</div>

		<!-- Trouble Rate -->
		<div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
			<span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase ">
				Trouble Rate
			</span>
			<div class="flex items-baseline justify-between">
				<span class="text-2xl font-bold  text-slate-950">
					{stats.trouble_rate}%
				</span>
				<span class="text-[10px]  text-amber-600 bg-amber-50 border border-amber-200 px-1 py-0.2 rounded-xs">
					Toleransi &lt; 5%
				</span>
			</div>
			<p class="text-[11px] text-zinc-500 font-light">Rasio Kendala vs Total Rute</p>
		</div>

	</section>

	<!-- BARIS 2: RATIO REVIEWS & HEATMAP -->
	<section class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
		
		<!-- REVIEWS BREAKDOWN (Col: 5) -->
		<div class="lg:col-span-5 bg-white border border-zinc-200 p-6 rounded-xs space-y-6">
			<div class="flex items-center justify-between border-b border-zinc-100 pb-3">
				<h3 class="text-xs font-bold tracking-wider text-slate-950 uppercase ">
					Reputasi & Ulasan
				</h3>
				<span class="text-xs font-bold  text-slate-950 flex items-center gap-1">
					<span class="text-amber-500">â˜…</span> {stats.rating_avg} / 5.0
				</span>
			</div>

			<!-- Ringkasan Positif vs Negatif -->
			<div class="space-y-4">
				<!-- Good Reviews -->
				<div class="space-y-1.5">
					<div class="flex justify-between text-xs ">
						<span class="text-slate-700 font-medium">Ulasan Positif (Bintang 4 - 5)</span>
						<span class="font-bold text-emerald-600">{stats.good_review} ({Math.round((stats.good_review / stats.total_review) * 100)}%)</span>
					</div>
					<div class="w-full bg-zinc-100 h-2 rounded-xs overflow-hidden">
						<div class="bg-emerald-500 h-full" style="width: {(stats.good_review / stats.total_review) * 100}%"></div>
					</div>
				</div>

				<!-- Bad Reviews -->
				<div class="space-y-1.5">
					<div class="flex justify-between text-xs ">
						<span class="text-slate-700 font-medium">Ulasan Negatif (Bintang 1 - 3)</span>
						<span class="font-bold text-rose-600">{stats.bad_review} ({Math.round((stats.bad_review / stats.total_review) * 100)}%)</span>
					</div>
					<div class="w-full bg-zinc-100 h-2 rounded-xs overflow-hidden">
						<div class="bg-rose-500 h-full" style="width: {(stats.bad_review / stats.total_review) * 100}%"></div>
					</div>
				</div>
			</div>

			<!-- Stat Ringkas Total Ulasan -->
			<div class="pt-2 border-t border-zinc-100 flex justify-between items-center text-xs  text-zinc-500">
				<span>Total Responden:</span>
				<span class="font-bold text-slate-900">{stats.total_review} Pengguna</span>
			</div>
		</div>

		<!-- HEATMAP JAM AKTIF OPERASIONAL (Col: 7) -->
		<div class="lg:col-span-7 bg-white border border-zinc-200 p-6 rounded-xs space-y-4">
			<div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-3 gap-2">
				<h3 class="text-xs font-bold tracking-wider text-slate-950 uppercase ">
					Heatmap Jam Aktif Operasional
				</h3>
				<!-- Legenda Heatmap -->
				<div class="flex items-center gap-2 text-[10px]  text-zinc-500">
					<span>Rendah</span>
					<span class="w-2.5 h-2.5 bg-zinc-200 border border-zinc-300 rounded-2xs inline-block"></span>
					<span class="w-2.5 h-2.5 bg-zinc-400 border border-zinc-400 rounded-2xs inline-block"></span>
					<span class="w-2.5 h-2.5 bg-slate-900 border border-slate-900 rounded-2xs inline-block"></span>
					<span>Tinggi</span>
				</div>
			</div>

			<!-- Matrix Heatmap Table -->
			<div class="overflow-x-auto">
				<table class="w-full text-left border-collapse  text-xs">
					<thead>
						<tr>
							<th class="py-1.5 px-2 text-[10px] text-zinc-400 font-normal uppercase">Jam</th>
							{#each days as day}
								<th class="py-1.5 px-2 text-[10px] text-center text-zinc-500 font-bold uppercase">{day}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each timeSlots as slot, rowIndex}
							<tr class="border-t border-zinc-100">
								<td class="py-2 px-2 text-[10px] text-zinc-500 whitespace-nowrap">{slot.label}</td>
								{#each days as _, colIndex}
									{@const level = heatmapData[rowIndex][colIndex]}
									<td class="p-1 text-center">
										<div 
											class="w-full h-7 rounded-2xs border transition duration-150 flex items-center justify-center text-[9px] font-bold {getHeatmapColor(level)}"
											title={`Hari: ${days[colIndex]}, Jam: ${slot.label}, Tingkat Aktivitas: ${level === 3 ? 'Sangat Tinggi' : level === 2 ? 'Sedang' : level === 1 ? 'Rendah' : 'Nonaktif'}`}
										>
											{#if level === 3}
												PUNCAK
											{/if}
										</div>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<p class="text-[10px]  text-zinc-400 pt-1">
				* Menunjukkan intensitas pengambilan dan pengantaran pesanan kurir berdasarkan akumulasi log GPS harian.
			</p>
		</div>

	</section>

</section>