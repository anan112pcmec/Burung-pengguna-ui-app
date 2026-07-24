<script lang="ts">
	// Hardcoded Mock Data untuk Visualisasi Chart Sederhana (pure HTML/SVG)
	const timeRanges = ["Hari Ini", "Minggu Ini", "Bulan Ini", "Tahun Ini", "Custom Date"];
	
	const topMetrics = [
		{ label: "TOTAL PENJUALAN PRODUK", value: "1,284 Unit", stat: "+12% vs periode lalu", positive: true },
		{ label: "TOTAL FOLLOWER BARU", value: "342 Follower", stat: "+5% vs periode lalu", positive: true },
		{ label: "TOTAL ULASAN MASUK", value: "89 Ulasan", stat: "Rating 4.8 / 5.0", positive: true },
		{ label: "RATA-RATA BALAS CHAT", value: "4.2 Menit", stat: "Sangat Cepat", positive: true },
		{ label: "DURASI ONLINE / AKTIF", value: "8.5 Jam/Hari", stat: "Online 12m lalu", positive: true }
	];

	const categories = [
		{ name: "Pakaian & Fashion", percentage: "45%", color: "bg-slate-950" },
		{ name: "Aksesoris", percentage: "30%", color: "bg-slate-600" },
		{ name: "Sepatu", percentage: "15%", color: "bg-slate-400" },
		{ name: "Lainnya", percentage: "10%", color: "bg-slate-200" }
	];
</script>

	<!-- ─── SECTION 1: HEADER & TIME-RANGE SELECTOR ─── -->
	<section class="border-b border-zinc-950/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
		<div>
			<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block mb-1">
				ANALYTICS & PERFORMANCE
			</span>
			<h1 class="text-2xl font-bold tracking-tight text-slate-950 uppercase">
				Statistik Seller
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


	<!-- ─── SECTION 2: TOP METRIC CARDS ─── -->
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
		{#each topMetrics as metric}
			<div class="p-4 border border-zinc-950/10 rounded-sm bg-white flex flex-col justify-between space-y-3">
				<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase leading-tight">
					{metric.label}
				</span>
				<div>
					<div class="text-xl font-bold font-mono tracking-tight text-slate-950">
						{metric.value}
					</div>
					<div class="text-[10px] font-medium text-slate-950/60 mt-1 flex items-center gap-1">
						<span class="inline-block w-1.5 h-1.5 bg-slate-950 rounded-full"></span>
						{metric.stat}
					</div>
				</div>
			</div>
		{/each}
	</section>


	<!-- ─── SECTION 3: WIDGET 1 - PERFORMANCE & POPULARITY ─── -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				01. PERFORMANCE & POPULARITY
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<!-- Chart Penjualan Produk -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white flex flex-col justify-between space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">GRAFIK PENJUALAN</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Volume Terjual (Unit)</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">L-BAR</span>
				</div>
				<!-- SVG Bar Chart Mock -->
				<div class="h-40 w-full flex items-end gap-2 pt-4 border-b border-zinc-950/10 pb-2">
					<div class="bg-slate-950/20 hover:bg-slate-950 h-[30%] w-full rounded-xs transition-colors"></div>
					<div class="bg-slate-950/20 hover:bg-slate-950 h-[50%] w-full rounded-xs transition-colors"></div>
					<div class="bg-slate-950/20 hover:bg-slate-950 h-[40%] w-full rounded-xs transition-colors"></div>
					<div class="bg-slate-950/20 hover:bg-slate-950 h-[85%] w-full rounded-xs transition-colors"></div>
					<div class="bg-slate-950/20 hover:bg-slate-950 h-[65%] w-full rounded-xs transition-colors"></div>
					<div class="bg-slate-950 h-[100%] w-full rounded-xs"></div>
					<div class="bg-slate-950/20 hover:bg-slate-950 h-[75%] w-full rounded-xs transition-colors"></div>
				</div>
				<div class="flex justify-between text-[10px] font-mono text-slate-950/40 uppercase">
					<span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Ming</span>
				</div>
			</div>

			<!-- Chart Pertumbuhan Follower -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white flex flex-col justify-between space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">PERTUMBUHAN FOLLOWER</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Net Gain Follower</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">AREA</span>
				</div>
				<!-- SVG Area Line Chart Mock -->
				<div class="h-40 w-full flex items-end border-b border-zinc-950/10 pb-2 relative">
					<svg class="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
						<path d="M 0 40 Q 25 35, 50 20 T 100 5 L 100 50 L 0 50 Z" fill="currentColor" class="text-slate-950/10" />
						<path d="M 0 40 Q 25 35, 50 20 T 100 5" fill="none" stroke="currentColor" stroke-width="2" class="text-slate-950" />
					</svg>
				</div>
				<div class="flex justify-between text-[10px] font-mono text-slate-950/40 uppercase">
					<span>Minggu 1</span><span>Minggu 2</span><span>Minggu 3</span><span>Minggu 4</span>
				</div>
			</div>

			<!-- Chart Volume Ulasan -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white flex flex-col justify-between space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">VOLUME ULASAN</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Positif vs Negatif</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">GROUPED</span>
				</div>
				<!-- Grouped Bar Mock -->
				<div class="h-40 w-full flex items-end justify-between gap-3 border-b border-zinc-950/10 pb-2">
					{#each [1, 2, 3, 4, 5] as item}
						<div class="flex items-end gap-1 w-full h-full justify-center">
							<div class="bg-slate-950 w-2.5 rounded-xs h-[70%]"></div>
							<div class="bg-zinc-300 w-2.5 rounded-xs h-[20%]"></div>
						</div>
					{/each}
				</div>
				<div class="flex justify-between items-center text-[10px]">
					<div class="flex items-center gap-1.5"><span class="w-2 h-2 bg-slate-950 rounded-xs"></span> Positif (4-5★)</div>
					<div class="flex items-center gap-1.5"><span class="w-2 h-2 bg-zinc-300 rounded-xs"></span> Negatif (1-3★)</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ─── SECTION 4: WIDGET 2 - CHAT & ACTIVITY TRACKER ─── -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				02. CHAT & ACTIVITY TRACKER
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- Hourly Heatmap Activity -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">KEAKTIFAN TOKO</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Heatmap Jam Aktif Seller</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">HEATMAP</span>
				</div>
				
				<!-- Grid Matrix Heatmap -->
				<div class="space-y-1.5 pt-2">
					{#each ['Sen', 'Rab', 'Jum', 'Min'] as day}
						<div class="flex items-center gap-1.5">
							<span class="text-[10px] font-mono w-6 text-slate-950/50">{day}</span>
							<div class="grid grid-cols-12 gap-1 w-full">
								{#each Array(12) as _, i}
									<div 
										class="h-5 rounded-xs border border-zinc-950/5 transition-opacity hover:opacity-80"
										class:bg-slate-950={i % 3 === 0}
										class:bg-slate-400={i % 3 === 1}
										class:bg-zinc-100={i % 3 === 2}
									></div>
								{/each}
							</div>
						</div>
					{/each}
				</div>
				<div class="flex items-center justify-end gap-2 text-[10px] text-slate-950/50 pt-2">
					<span>Rendah</span>
					<span class="w-3 h-3 bg-zinc-100 border border-zinc-200 rounded-xs"></span>
					<span class="w-3 h-3 bg-slate-400 rounded-xs"></span>
					<span class="w-3 h-3 bg-slate-950 rounded-xs"></span>
					<span>Tinggi</span>
				</div>
			</div>

			<!-- Response Time Line Chart -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white flex flex-col justify-between space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">KECEPATAN RESPON</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Rata-Rata Waktu Balas Chat (Menit)</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">RESPONSE</span>
				</div>

				<div class="h-36 w-full flex items-end border-b border-zinc-950/10 pb-2 relative">
					<svg class="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
						<path d="M 0 10 L 20 25 L 40 15 L 60 30 L 80 8 L 100 12" fill="none" stroke="currentColor" stroke-width="2" class="text-slate-950" />
						<circle cx="80" cy="8" r="3" class="fill-slate-950" />
					</svg>
				</div>
				<div class="flex justify-between text-[10px] font-mono text-slate-950/40 uppercase">
					<span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:59</span>
				</div>
			</div>
		</div>
	</section>


	<!-- ─── SECTION 5: WIDGET 3 - REPUTASI & MANAJEMEN RISIKO ─── -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				03. REPUTASI & MANAJEMEN RISIKO
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<!-- Rating Trend -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">RATING TOKO</span>
				<div class="flex items-baseline gap-2">
					<span class="text-3xl font-bold font-mono">4.85</span>
					<span class="text-xs text-slate-950/50 uppercase tracking-wide">/ 5.0 Skala</span>
				</div>
				<div class="h-20 w-full flex items-end border-b border-zinc-950/10 pb-1">
					<svg class="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
						<path d="M 0 20 Q 50 5, 100 8" fill="none" stroke="currentColor" stroke-width="2" class="text-slate-950" />
					</svg>
				</div>
			</div>

			<!-- Cancellation & Return Rate -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">PEMBATALAN & REFUND</span>
				<div class="flex justify-between items-baseline">
					<div>
						<span class="text-xs font-medium text-slate-950/60 block">Batal</span>
						<span class="text-xl font-bold font-mono">0.8%</span>
					</div>
					<div class="text-right">
						<span class="text-xs font-medium text-slate-950/60 block">Retur</span>
						<span class="text-xl font-bold font-mono text-slate-950/80">0.2%</span>
					</div>
				</div>
				<div class="h-20 w-full flex items-end border-b border-zinc-950/10 pb-1 relative">
					<svg class="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
						<path d="M 0 15 L 30 25 L 60 10 L 100 28" fill="none" stroke="currentColor" stroke-width="1.5" class="text-slate-950" />
						<path d="M 0 25 L 40 28 L 70 20 L 100 29" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2" class="text-slate-400" />
					</svg>
				</div>
			</div>

			<!-- Pemrosesan Pesanan -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">KECEPATAN PROSES</span>
				<div class="flex items-baseline gap-2">
					<span class="text-3xl font-bold font-mono">2.4</span>
					<span class="text-xs text-slate-950/50 uppercase tracking-wide">Jam ke Kurir</span>
				</div>
				<div class="h-20 w-full flex items-end gap-2 border-b border-zinc-950/10 pb-1">
					<div class="bg-slate-950/20 h-[80%] w-full rounded-xs"></div>
					<div class="bg-slate-950/20 h-[60%] w-full rounded-xs"></div>
					<div class="bg-slate-950 h-[30%] w-full rounded-xs"></div>
					<div class="bg-slate-950/20 h-[50%] w-full rounded-xs"></div>
				</div>
			</div>
		</div>
	</section>


	<!-- ─── SECTION 6: WIDGET 4 - LOYALITAS & DEMOGRAFI ─── -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				04. LOYALITAS & DEMOGRAFI KATALOG
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- Penjualan per Kategori -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">KATALOG PRODUK</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Proporsi Penjualan per Kategori</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">DONUT</span>
				</div>

				<div class="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
					<!-- Progress Bar Stacked (Pengganti Donut Visual Sederhana) -->
					<div class="w-full space-y-3">
						<div class="h-4 w-full bg-zinc-100 rounded-xs overflow-hidden flex">
							{#each categories as cat}
								<div class="{cat.color} h-full" style="width: {cat.percentage}"></div>
							{/each}
						</div>
						<div class="grid grid-cols-2 gap-2 pt-2">
							{#each categories as cat}
								<div class="flex items-center gap-2 text-xs">
									<span class="w-2.5 h-2.5 {cat.color} rounded-xs"></span>
									<span class="text-slate-800">{cat.name}</span>
									<span class="font-mono text-slate-950/50 ml-auto">{cat.percentage}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Repeat Order vs Pembeli Baru -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">PERILAKU PEMBELI</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Repeat Order vs Pembeli Baru</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">RATIO</span>
				</div>

				<div class="space-y-4 pt-2">
					<div class="space-y-1.5">
						<div class="flex justify-between text-xs font-medium">
							<span class="text-slate-950">Pembeli Baru (New)</span>
							<span class="font-mono">68%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-950 h-full w-[68%]"></div>
						</div>
					</div>

					<div class="space-y-1.5">
						<div class="flex justify-between text-xs font-medium">
							<span class="text-slate-700">Repeat Order (Loyal)</span>
							<span class="font-mono">32%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-400 h-full w-[32%]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <!-- ─── SECTION 7: WIDGET 5 - MANAJEMEN STOK & INVENTARIS ─── -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				05. MANAJEMEN STOK & INVENTARIS
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<!-- Low Stock Warning Ratio -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 flex flex-col justify-between">
				<div>
					<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">STATUS STOK</span>
					<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Produk Stok Menipis (&lt; 5 Unit)</h3>
				</div>
				<div class="flex items-baseline gap-2">
					<span class="text-3xl font-bold font-mono text-slate-950">14</span>
					<span class="text-xs text-slate-950/50 uppercase tracking-wide">SKU Perlu Restok</span>
				</div>
				<div class="w-full bg-zinc-100 h-2 rounded-xs overflow-hidden">
					<div class="bg-slate-950 h-full w-[18%]"></div>
				</div>
				<div class="flex justify-between text-[10px] font-mono text-slate-950/50">
					<span>18% Dari Total Catalog</span>
					<span>Aman: 82%</span>
				</div>
			</div>

			<!-- Fast-Moving vs Slow-Moving Goods -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 flex flex-col justify-between">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">PERPUTARAN BARANG</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Inventory Turnover Ratio</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">TURNOVER</span>
				</div>
				<div class="grid grid-cols-2 gap-2 text-center py-1">
					<div class="p-2 border border-zinc-950/10 rounded-xs">
						<span class="text-[9px] font-medium text-slate-950/50 uppercase block">Fast Moving</span>
						<span class="text-lg font-bold font-mono text-slate-950">65%</span>
					</div>
					<div class="p-2 border border-zinc-950/10 rounded-xs">
						<span class="text-[9px] font-medium text-slate-950/50 uppercase block">Slow Moving</span>
						<span class="text-lg font-bold font-mono text-slate-950/60">35%</span>
					</div>
				</div>
				<div class="text-[10px] text-slate-950/50 text-center uppercase tracking-wider">
					Rata-rata mengendap: <span class="font-mono text-slate-950 font-bold">12 Hari</span>
				</div>
			</div>

			<!-- Deadstock Risk Alert -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 flex flex-col justify-between">
				<div>
					<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">RISIKO INVENTARIS</span>
					<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Potensi Deadstock (&gt; 60 Hari)</h3>
				</div>
				<div class="flex items-baseline gap-2">
					<span class="text-3xl font-bold font-mono text-slate-950">3</span>
					<span class="text-xs text-slate-950/50 uppercase tracking-wide">Produk Pasif</span>
				</div>
				<div class="p-2 bg-zinc-50 border border-zinc-950/10 rounded-xs flex items-center justify-between text-[10px]">
					<span class="text-slate-950/70 uppercase">Rekomendasi Aksi:</span>
					<span class="font-bold text-slate-950 uppercase border-b border-slate-950">Diskon Flash Sale</span>
				</div>
			</div>
		</div>
	</section>


	<!-- ─── SECTION 8: WIDGET 6 - TRAFIK & FUNNEL KONVERSI ─── -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				06. TRAFIK & FUNNEL KONVERSI TOKO
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- Conversion Funnel Stack -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">FUNNEL ANALYTICS</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Conversion Path & Drop-off</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">FUNNEL</span>
				</div>

				<div class="space-y-2 pt-1">
					<!-- Step 1 -->
					<div class="space-y-1">
						<div class="flex justify-between text-xs">
							<span class="text-slate-950/70 font-medium">1. Impresi & Kunjungan Produk</span>
							<span class="font-mono font-bold">45,200 View</span>
						</div>
						<div class="h-3 w-full bg-slate-950 rounded-xs"></div>
					</div>
					<!-- Step 2 -->
					<div class="space-y-1 pl-4 border-l border-zinc-950/20">
						<div class="flex justify-between text-xs">
							<span class="text-slate-950/70 font-medium">2. Tambah ke Keranjang (ATC)</span>
							<span class="font-mono font-bold">3,160 (7.0%)</span>
						</div>
						<div class="h-3 w-[45%] bg-slate-600 rounded-xs"></div>
					</div>
					<!-- Step 3 -->
					<div class="space-y-1 pl-8 border-l border-zinc-950/20">
						<div class="flex justify-between text-xs">
							<span class="text-slate-950/70 font-medium">3. Checkout / Pembayaran</span>
							<span class="font-mono font-bold">1,284 (2.8%)</span>
						</div>
						<div class="h-3 w-[20%] bg-slate-400 rounded-xs"></div>
					</div>
				</div>
			</div>

			<!-- Traffic Source Breakdown -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">SUMBER PENGUNJUNG</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Asal Asal Trafik Toko</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">TRAFFIC</span>
				</div>

				<div class="space-y-3 pt-2">
					<div class="space-y-1">
						<div class="flex justify-between text-xs">
							<span class="text-slate-950">Pencarian Organik / Kata Kunci</span>
							<span class="font-mono">52%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-950 h-full w-[52%]"></div>
						</div>
					</div>

					<div class="space-y-1">
						<div class="flex justify-between text-xs">
							<span class="text-slate-950">Rekomendasi Halaman Utama</span>
							<span class="font-mono">28%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-700 h-full w-[28%]"></div>
						</div>
					</div>

					<div class="space-y-1">
						<div class="flex justify-between text-xs">
							<span class="text-slate-950">Link Luar / Social Media</span>
							<span class="font-mono">20%</span>
						</div>
						<div class="h-2 w-full bg-zinc-100 rounded-xs overflow-hidden">
							<div class="bg-slate-400 h-full w-[20%]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- ─── SECTION 9: WIDGET 7 - EFEKTIVITAS PROMOSI & EKSPOSUR ─── -->
	<section class="space-y-4">
		<div class="border-b border-zinc-950/10 pb-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				07. EFEKTIVITAS PROMOSI & EKSPOSUR TOKO
			</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<!-- Voucher Claim vs Redemption Rate -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 flex flex-col justify-between">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">PERFORMA VOUCHER</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Klaim vs Penggunaan Voucher</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">VOUCHER</span>
				</div>

				<div class="space-y-2">
					<div class="flex justify-between items-baseline">
						<span class="text-xs text-slate-950/60 uppercase">Diklaim</span>
						<span class="font-mono font-bold text-slate-950">850 Voucher</span>
					</div>
					<div class="flex justify-between items-baseline">
						<span class="text-xs text-slate-950/60 uppercase">Digunakan</span>
						<span class="font-mono font-bold text-slate-950">612 Voucher</span>
					</div>
					<div class="w-full bg-zinc-100 h-2 rounded-xs overflow-hidden">
						<div class="bg-slate-950 h-full w-[72%]"></div>
					</div>
				</div>

				<div class="text-[10px] text-slate-950/50 uppercase text-center border-t border-zinc-950/10 pt-2">
					Conversion Rate Voucher: <span class="font-mono font-bold text-slate-950">72%</span>
				</div>
			</div>

			<!-- Campaign Participation -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 flex flex-col justify-between">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">CAMPAIGN PLATFORM</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Status Keikutsertaan Event</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">EVENT</span>
				</div>

				<div class="space-y-2">
					<div class="flex items-center justify-between p-2 border border-zinc-950/10 rounded-xs">
						<span class="text-xs font-medium uppercase text-slate-950">Payday Sale 25th</span>
						<span class="text-[9px] font-mono bg-slate-950 text-white px-1.5 py-0.5 rounded-xs">AKTIF</span>
					</div>
					<div class="flex items-center justify-between p-2 border border-zinc-950/10 rounded-xs">
						<span class="text-xs font-medium uppercase text-slate-950/60">Flash Sale Toko</span>
						<span class="text-[9px] font-mono border border-zinc-950/20 text-slate-950/50 px-1.5 py-0.5 rounded-xs">SELESAI</span>
					</div>
				</div>

				<div class="text-[10px] text-slate-950/50 uppercase text-center border-t border-zinc-950/10 pt-2">
					Total Produk Terdaftar: <span class="font-mono font-bold text-slate-950">48 SKU</span>
				</div>
			</div>

			<!-- Store Banner CTR -->
			<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 flex flex-col justify-between">
				<div class="flex justify-between items-start">
					<div>
						<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">DEKORASI TOKO</span>
						<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Click-Through Rate (CTR) Banner</h3>
					</div>
					<span class="text-[10px] font-mono border border-zinc-950/10 px-2 py-0.5 rounded-sm">BANNER</span>
				</div>

				<div class="flex items-baseline gap-2">
					<span class="text-3xl font-bold font-mono text-slate-950">14.2%</span>
					<span class="text-xs text-slate-950/50 uppercase tracking-wide">Rata-rata CTR</span>
				</div>

				<div class="h-12 w-full flex items-end gap-1.5 border-b border-zinc-950/10 pb-1">
					<div class="bg-slate-950/30 h-[40%] w-full rounded-xs"></div>
					<div class="bg-slate-950 h-[85%] w-full rounded-xs"></div>
					<div class="bg-slate-950/50 h-[60%] w-full rounded-xs"></div>
				</div>

				<div class="text-[10px] text-slate-950/50 uppercase text-center">
					Banner Paling Efektif: <span class="font-mono font-bold text-slate-950">Hero Header V1</span>
				</div>
			</div>
		</div>
	</section>
