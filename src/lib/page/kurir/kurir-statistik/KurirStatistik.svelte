<script lang="ts">
	// Time Range Filters
	const timeRanges = ["Hari Ini", "Minggu Ini", "Bulan Ini", "Tahun Ini", "Custom Date"];

	// 1. Top Metrics (Non-Financial)
	const topMetrics = [
		{ label: "RATA-RATA PICKUP LEAD TIME", value: "14.2 Min", stat: "Sesuai SLA (<20m)", positive: true },
		{ label: "KETEPATAN WAKTU (ETA)", value: "97.4%", stat: "+1.2% vs minggu lalu", positive: true },
		{ label: "DURASI SHIFT ONLINE", value: "9.2 Jam/Hari", stat: "Aktif jam 08:00 - 18:00", positive: true },
		{ label: "KAPASITAS BEBAN RATA-RATA", value: "14.8 / 20 KG", stat: "74% Kapasitas Terpakai", positive: true },
		{ label: "INCIDENT REPORT TIME", value: "3.5 Min", stat: "Respon Darurat Cepat", positive: true }
	];

	// 2. Data Sebaran Wilayah / Rute Utama
	const regionalDist = [
		{ region: "Jakarta Selatan (Kebayoran & Cilandak)", percentage: "52%", color: "bg-slate-950" },
		{ region: "Jakarta Barat (Kebon Jeruk & Palmerah)", percentage: "28%", color: "bg-slate-600" },
		{ region: "Jakarta Pusat (Tanah Abang)", percentage: "12%", color: "bg-slate-400" },
		{ region: "Lainnya / Out-of-Bound", percentage: "8%", color: "bg-zinc-200" }
	];

	// 3. Breakdown Kendala Pengiriman (Non-Financial Risk)
	const issueBreakdown = [
		{ type: "Penerima Tidak Ada / Alamat Salah", count: 18, share: "51%" },
		{ type: "Cuaca Hujan Deras / Banjir", count: 10, share: "29%" },
		{ type: "Kendala Armada (Ban Bocor/Mesin)", count: 5, share: "14%" },
		{ type: "Paket Ditolak Penerima", count: 2, share: "6%" }
	];
</script>

<div class="w-full min-h-screen bg-white text-slate-900 p-4 lg:p-8 space-y-10 font-sans selection:bg-slate-900 selection:text-white">

	<!-- â”€â”€â”€ SECTION 1: HEADER & TIME-RANGE SELECTOR â”€â”€â”€ -->
	<section class="border-b border-zinc-950/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
		<div>
			<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block mb-1 ">
				FLEET OPERATIONAL ANALYTICS
			</span>
			<h1 class="text-2xl font-bold tracking-tight text-slate-950 uppercase">
				STATISTIK OPERASIONAL KURIR
			</h1>
		</div>

		<!-- Time Range Selector Tabs -->
		<div class="flex flex-wrap items-center gap-1.5 bg-zinc-100/60 p-1 rounded-sm border border-zinc-950/10">
			{#each timeRanges as range, i}
				<button 
					type="button"
					class="text-xs tracking-wide px-3 py-1.5 rounded-sm transition duration-200 uppercase font-medium 
					{i === 1 
						? 'bg-slate-950 text-white shadow-xs' 
						: 'text-slate-800/60 hover:text-slate-950 hover:bg-white'}"
				>
					{range}
				</button>
			{/each}
		</div>
	</section>


	<!-- â”€â”€â”€ SECTION 2: TOP METRIC CARDS â”€â”€â”€ -->
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
		{#each topMetrics as metric}
			<div class="p-4 border border-zinc-950/10 rounded-sm bg-white flex flex-col justify-between space-y-3">
				<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase leading-tight ">
					{metric.label}
				</span>
				<div>
					<div class="text-xl font-bold  tracking-tight text-slate-950">
						{metric.value}
					</div>
					<div class="text-[10px] font-medium text-slate-950/60 mt-1 flex items-center gap-1 ">
						<span class="inline-block w-1.5 h-1.5 bg-slate-950 rounded-full"></span>
						{metric.stat}
					</div>
				</div>
			</div>
		{/each}
	</section>


	<!-- â”€â”€â”€ SECTION 3: WIDGET 1 - SHIFT ACTIVITY & TIME MATRIX â”€â”€â”€ -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase ">
				01. SHIFT & KEHADIRAN OPERASIONAL
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<!-- Shift Activity Heatmap Matrix -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 lg:col-span-2">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block ">MATRIKS KEAKTIFAN DISPATCH</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Fokus Jam Aktif & Ambil Order</h3>
					</div>
					<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">HOURLY LOG</span>
				</div>

				<div class="space-y-1.5 pt-2">
					{#each ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'] as day, dIdx}
						<div class="flex items-center gap-2">
							<span class="text-[10px]  w-6 text-slate-950/50">{day}</span>
							<div class="grid grid-cols-12 gap-1 w-full">
								{#each Array(12) as _, i}
									<div 
										class="h-5 rounded-xs border border-zinc-950/5 transition-opacity hover:opacity-80"
										class:bg-slate-950={dIdx < 5 && i >= 4 && i <= 9}
										class:bg-slate-400={dIdx < 5 && (i === 3 || i === 10)}
										class:bg-zinc-100={dIdx >= 5 || i < 3 || i > 10}
									></div>
								{/each}
							</div>
						</div>
					{/each}
				</div>

				<div class="flex items-center justify-between text-[10px]  text-slate-950/50 pt-2 border-t border-zinc-950/5">
					<span>00:00 WIB</span>
					<span>12:00 WIB</span>
					<span>23:59 WIB</span>
					<div class="flex items-center gap-1.5 ml-4">
						<span class="w-2.5 h-2.5 bg-zinc-100 border border-zinc-200 rounded-xs"></span>
						<span>Offline</span>
						<span class="w-2.5 h-2.5 bg-slate-400 rounded-xs"></span>
						<span>Standby</span>
						<span class="w-2.5 h-2.5 bg-slate-950 rounded-xs"></span>
						<span>Peak Active</span>
					</div>
				</div>
			</div>

			<!-- Shift Compliance & Response -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white flex flex-col justify-between space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block ">KONSISTENSI SHIFT</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Shift Compliance Rate</h3>
					</div>
					<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">SCORE</span>
				</div>

				<div class="space-y-4">
					<div class="text-center py-2">
						<span class="text-4xl font-bold  text-slate-950">94.2%</span>
						<span class="text-[10px] text-slate-500  block mt-1">Sangat Disiplin Sesuai Slot Schedule</span>
					</div>

					<div class="space-y-2 border-t border-zinc-950/10 pt-3 text-xs ">
						<div class="flex justify-between">
							<span class="text-slate-500">Total Slot On-Duty:</span>
							<span class="font-bold">28 Slot</span>
						</div>
						<div class="flex justify-between">
							<span class="text-slate-500">Terpenuhi Tepat Waktu:</span>
							<span class="font-bold text-emerald-600">26 Slot</span>
						</div>
						<div class="flex justify-between">
							<span class="text-slate-500">Terlambat/Batal Shift:</span>
							<span class="font-bold text-rose-600">2 Slot</span>
						</div>
					</div>
				</div>

				<div class="bg-zinc-50 border border-zinc-200 p-2.5 rounded-xs text-[10px]  text-slate-600">
					ðŸ’¡ Kurir paling responsif pada jam 09:00 - 15:00 WIB.
				</div>
			</div>
		</div>
	</section>


	<!-- â”€â”€â”€ SECTION 4: WIDGET 2 - SPEED & DISTANCE PROFILE â”€â”€â”€ -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase ">
				02. RUTE, JARAK & EFISIENSI LOKASI
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- Proporsi Jarak Pengiriman -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block ">PROFIL JARAK RUTE</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Distribusi Jarak Tempuh (KM)</h3>
					</div>
					<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">SPECTRUM</span>
				</div>

				<div class="space-y-3 pt-2">
					<div class="space-y-1">
						<div class="flex justify-between text-xs ">
							<span>Jarak Pendek (&lt; 5 KM)</span>
							<span class="font-bold">55%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-950 h-full w-[55%]"></div>
						</div>
					</div>

					<div class="space-y-1">
						<div class="flex justify-between text-xs ">
							<span>Jarak Menengah (5 - 15 KM)</span>
							<span class="font-bold">35%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-600 h-full w-[35%]"></div>
						</div>
					</div>

					<div class="space-y-1">
						<div class="flex justify-between text-xs ">
							<span>Jarak Jauh (&gt; 15 KM / Cross-Zone)</span>
							<span class="font-bold">10%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-300 h-full w-[10%]"></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Sebaran Wilayah / Coverage Area -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block ">CAKUPAN WILAYAH</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Konsentrasi Rute Operasional</h3>
					</div>
					<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">COVERAGE</span>
				</div>

				<div class="space-y-3 pt-2">
					<div class="h-3 w-full bg-zinc-100 rounded-xs overflow-hidden flex">
						{#each regionalDist as dist}
							<div class="{dist.color} h-full" style="width: {dist.percentage}"></div>
						{/each}
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1  text-xs">
						{#each regionalDist as dist}
							<div class="flex items-center gap-2">
								<span class="w-2.5 h-2.5 {dist.color} rounded-2xs shrink-0"></span>
								<span class="truncate text-slate-700 text-[11px]">{dist.region}</span>
								<span class="font-bold ml-auto">{dist.percentage}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- â”€â”€â”€ SECTION 5: WIDGET 3 - INCIDENTS & RISK BREAKDOWN â”€â”€â”€ -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase ">
				03. LAPORAN KENDALA & MANAJEMEN RISIKO
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<!-- Chart Trend Kendala per Hari -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 lg:col-span-2">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block ">RIWAYAT KENDALA</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Frekuensi Insiden Lapangan (7 Hari Terakhir)</h3>
					</div>
					<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">BAR CHART</span>
				</div>

				<div class="h-36 w-full flex items-end justify-between gap-3 border-b border-zinc-950/10 pb-2 pt-4">
					{#each [1, 0, 3, 1, 0, 2, 0] as count, idx}
						<div class="flex flex-col items-center gap-1 w-full h-full justify-end">
							<span class="text-[10px]  text-slate-400">{count}</span>
							<div 
								class="w-full rounded-xs transition-colors
								{count === 0 ? 'bg-zinc-100 h-1' : count > 2 ? 'bg-rose-500' : 'bg-slate-950'}"
								style="height: {count === 0 ? '4px' : `${count * 30}%`}"
							></div>
						</div>
					{/each}
				</div>

				<div class="flex justify-between text-[10px]  text-slate-950/40 uppercase">
					<span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Ming</span>
				</div>
			</div>

			<!-- Breakdown Kategori Kendala -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block ">KATEGORI KENDALA</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Penyebab Gagal/Retur</h3>
					</div>
					<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">TYPES</span>
				</div>

				<div class="space-y-2.5  text-xs pt-1">
					{#each issueBreakdown as issue}
						<div class="flex justify-between items-center border-b border-zinc-100 pb-1.5">
							<span class="text-slate-600 text-[11px] truncate pr-2">{issue.type}</span>
							<div class="text-right shrink-0">
								<span class="font-bold text-slate-950">{issue.count}</span>
								<span class="text-[10px] text-zinc-400 ml-1">({issue.share})</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

</div>