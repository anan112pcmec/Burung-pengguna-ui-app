<script lang="ts"></script>

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
				<span class="text-3xl font-bold  text-slate-950">14</span>
				<span class="text-xs text-slate-950/50 uppercase tracking-wide">SKU Perlu Restok</span>
			</div>
			<div class="w-full bg-zinc-100 h-2 rounded-xs overflow-hidden">
				<div class="bg-slate-950 h-full w-[18%]"></div>
			</div>
			<div class="flex justify-between text-[10px]  text-slate-950/50">
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
				<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">TURNOVER</span>
			</div>
			<div class="grid grid-cols-2 gap-2 text-center py-1">
				<div class="p-2 border border-zinc-950/10 rounded-xs">
					<span class="text-[9px] font-medium text-slate-950/50 uppercase block">Fast Moving</span>
					<span class="text-lg font-bold  text-slate-950">65%</span>
				</div>
				<div class="p-2 border border-zinc-950/10 rounded-xs">
					<span class="text-[9px] font-medium text-slate-950/50 uppercase block">Slow Moving</span>
					<span class="text-lg font-bold  text-slate-950/60">35%</span>
				</div>
			</div>
			<div class="text-[10px] text-slate-950/50 text-center uppercase tracking-wider">
				Rata-rata mengendap: <span class=" text-slate-950 font-bold">12 Hari</span>
			</div>
		</div>

		<!-- Deadstock Risk Alert -->
		<div class="p-5 border border-zinc-950/10 rounded-sm bg-white space-y-4 flex flex-col justify-between">
			<div>
				<span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">RISIKO INVENTARIS</span>
				<h3 class="text-sm font-semibold text-slate-900 mt-0.5">Potensi Deadstock (&gt; 60 Hari)</h3>
			</div>
			<div class="flex items-baseline gap-2">
				<span class="text-3xl font-bold  text-slate-950">3</span>
				<span class="text-xs text-slate-950/50 uppercase tracking-wide">Produk Pasif</span>
			</div>
			<div class="p-2 bg-zinc-50 border border-zinc-950/10 rounded-xs flex items-center justify-between text-[10px]">
				<span class="text-slate-950/70 uppercase">Rekomendasi Aksi:</span>
				<span class="font-bold text-slate-950 uppercase border-b border-slate-950">Diskon Flash Sale</span>
			</div>
		</div>
	</div>
</section>