<script lang="ts">

</script>

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
				<div class="w-full space-y-3">
					<div class="h-4 w-full bg-zinc-100 rounded-xs overflow-hidden flex">
						<div class="bg-slate-950 h-full" style="width: 45%"></div>
						<div class="bg-slate-600 h-full" style="width: 30%"></div>
						<div class="bg-slate-400 h-full" style="width: 15%"></div>
						<div class="bg-slate-200 h-full" style="width: 10%"></div>
					</div>
					<div class="grid grid-cols-2 gap-2 pt-2">
						<div class="flex items-center gap-2 text-xs">
							<span class="w-2.5 h-2.5 bg-slate-950 rounded-xs"></span>
							<span class="text-slate-800">Pakaian & Fashion</span>
							<span class="font-mono text-slate-950/50 ml-auto">45%</span>
						</div>
						<div class="flex items-center gap-2 text-xs">
							<span class="w-2.5 h-2.5 bg-slate-600 rounded-xs"></span>
							<span class="text-slate-800">Aksesoris</span>
							<span class="font-mono text-slate-950/50 ml-auto">30%</span>
						</div>
						<div class="flex items-center gap-2 text-xs">
							<span class="w-2.5 h-2.5 bg-slate-400 rounded-xs"></span>
							<span class="text-slate-800">Sepatu</span>
							<span class="font-mono text-slate-950/50 ml-auto">15%</span>
						</div>
						<div class="flex items-center gap-2 text-xs">
							<span class="w-2.5 h-2.5 bg-slate-200 rounded-xs"></span>
							<span class="text-slate-800">Lainnya</span>
							<span class="font-mono text-slate-950/50 ml-auto">10%</span>
						</div>
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