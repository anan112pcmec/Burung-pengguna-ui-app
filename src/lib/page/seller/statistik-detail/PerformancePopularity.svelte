<script lang="ts"></script>

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
				<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">L-BAR</span>
			</div>
			<div class="h-40 w-full flex items-end gap-2 pt-4 border-b border-zinc-950/10 pb-2">
				<div class="bg-slate-950/20 hover:bg-slate-950 h-[30%] w-full rounded-xs transition-colors"></div>
				<div class="bg-slate-950/20 hover:bg-slate-950 h-[50%] w-full rounded-xs transition-colors"></div>
				<div class="bg-slate-950/20 hover:bg-slate-950 h-[40%] w-full rounded-xs transition-colors"></div>
				<div class="bg-slate-950/20 hover:bg-slate-950 h-[85%] w-full rounded-xs transition-colors"></div>
				<div class="bg-slate-950/20 hover:bg-slate-950 h-[65%] w-full rounded-xs transition-colors"></div>
				<div class="bg-slate-950 h-[100%] w-full rounded-xs"></div>
				<div class="bg-slate-950/20 hover:bg-slate-950 h-[75%] w-full rounded-xs transition-colors"></div>
			</div>
			<div class="flex justify-between text-[10px]  text-slate-950/40 uppercase">
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
				<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">AREA</span>
			</div>
			<div class="h-40 w-full flex items-end border-b border-zinc-950/10 pb-2 relative">
				<svg class="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
					<path d="M 0 40 Q 25 35, 50 20 T 100 5 L 100 50 L 0 50 Z" fill="currentColor" class="text-slate-950/10" />
					<path d="M 0 40 Q 25 35, 50 20 T 100 5" fill="none" stroke="currentColor" stroke-width="2" class="text-slate-950" />
				</svg>
			</div>
			<div class="flex justify-between text-[10px]  text-slate-950/40 uppercase">
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
				<span class="text-[10px]  border border-zinc-950/10 px-2 py-0.5 rounded-sm">GROUPED</span>
			</div>
			<div class="h-40 w-full flex items-end justify-between gap-3 border-b border-zinc-950/10 pb-2">
				<div class="flex items-end gap-1 w-full h-full justify-center">
					<div class="bg-slate-950 w-2.5 rounded-xs h-[70%]"></div>
					<div class="bg-zinc-300 w-2.5 rounded-xs h-[20%]"></div>
				</div>
				<div class="flex items-end gap-1 w-full h-full justify-center">
					<div class="bg-slate-950 w-2.5 rounded-xs h-[70%]"></div>
					<div class="bg-zinc-300 w-2.5 rounded-xs h-[20%]"></div>
				</div>
				<div class="flex items-end gap-1 w-full h-full justify-center">
					<div class="bg-slate-950 w-2.5 rounded-xs h-[70%]"></div>
					<div class="bg-zinc-300 w-2.5 rounded-xs h-[20%]"></div>
				</div>
				<div class="flex items-end gap-1 w-full h-full justify-center">
					<div class="bg-slate-950 w-2.5 rounded-xs h-[70%]"></div>
					<div class="bg-zinc-300 w-2.5 rounded-xs h-[20%]"></div>
				</div>
				<div class="flex items-end gap-1 w-full h-full justify-center">
					<div class="bg-slate-950 w-2.5 rounded-xs h-[70%]"></div>
					<div class="bg-zinc-300 w-2.5 rounded-xs h-[20%]"></div>
				</div>
			</div>
			<div class="flex justify-between items-center text-[10px]">
				<div class="flex items-center gap-1.5"><span class="w-2 h-2 bg-slate-950 rounded-xs"></span> Positif (4-5â˜…)</div>
				<div class="flex items-center gap-1.5"><span class="w-2 h-2 bg-zinc-300 rounded-xs"></span> Negatif (1-3â˜…)</div>
			</div>
		</div>
	</div>
</section>