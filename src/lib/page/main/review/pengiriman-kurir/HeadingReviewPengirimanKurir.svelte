<script lang="ts">
	import { ReviewPengirimanPageState } from "$lib/state/main/review/pengiriman-kurir/state.svelte";
	import ReviewPengirimanKurirResult from "./ReviewPengirimanKurirResult.svelte";

	// State untuk tab aktif (Menunggu vs Selesai)
</script>

<section id="heading-review-pengiriman-kurir" class="w-full bg-white border-b border-zinc-950/10 p-4 md:p-6 space-y-6">
	
	<!-- ─── HEADER TITLE & INFO ─── -->
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
		<div>
			<h1 class="text-xl font-sans font-bold text-slate-950 tracking-tight uppercase">
				Ulasan Pengiriman
			</h1>
			<p class="text-xs font-sans text-zinc-500 mt-1">
				Beri penilaian untuk performa logistik dan kurir yang mengantar pesananmu.
			</p>
		</div>
		
		<!-- Badge Info -->
		<div class="font-mono text-[10px] px-2.5 py-1.5 bg-zinc-50 border border-zinc-950/10 text-zinc-600 uppercase tracking-wider">
			Resi Menunggu: 2
		</div>
	</div>

	<!-- ─── TAB NAVIGATION ─── -->
	<div class="flex items-center gap-6 border-b border-zinc-950/10">
		
		<!-- Tab 1: Menunggu Diulas -->
		<button 
			type="button"
			onclick={() => ReviewPengirimanPageState.MenungguDiulas()}
			class="pb-2.5 flex items-center gap-2 border-b-[2px] transition-colors cursor-pointer
			{ReviewPengirimanPageState.IsMenungguDiulas() ? 'border-slate-950 text-slate-950' : 'border-transparent text-zinc-400 hover:text-slate-950'}"
		>
			<span class="font-sans text-sm font-bold">Belum Dinilai</span>
			<!-- Counter Badge -->
			<span class="font-mono text-[9px] px-1.5 py-0.5 rounded-sm transition-colors
				{ReviewPengirimanPageState.IsMenungguDiulas() ? 'bg-slate-950 text-white' : 'bg-zinc-100 text-zinc-500'}"
			>
				2
			</span>
		</button>

		<!-- Tab 2: Ulasan Selesai -->
		<button 
			type="button"
			onclick={() => ReviewPengirimanPageState.Diulas()}
			class="pb-2.5 flex items-center gap-2 border-b-[2px] transition-colors cursor-pointer
			{ReviewPengirimanPageState.IsDiulas() ? 'border-slate-950 text-slate-950' : 'border-transparent text-zinc-400 hover:text-slate-950'}"
		>
			<span class="font-sans text-sm font-bold">Sudah Dinilai</span>
			<!-- Counter Badge -->
			<span class="font-mono text-[9px] px-1.5 py-0.5 rounded-sm transition-colors
				{ReviewPengirimanPageState.IsDiulas() ? 'bg-slate-950 text-white' : 'bg-zinc-100 text-zinc-500'}"
			>
				18
			</span>
		</button>
		
	</div>
</section>