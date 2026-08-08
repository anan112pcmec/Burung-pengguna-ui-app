<script lang="ts">
	import { ReviewProductPageState} from "$lib/page/main/review/product/state/ui.state.svelte";

</script>

<section id="heading-result-review-product" class="w-full bg-white border-b border-zinc-950/10 p-4 md:p-6 space-y-6">
	
	<!-- ─── HEADER TITLE & INFO ─── -->
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
		<div>
			<h1 class="text-xl font-sans font-bold text-slate-950 tracking-tight uppercase">
				Ulasan Produk
			</h1>
			<p class="text-xs font-sans text-zinc-500 mt-1">
				Kelola ulasan untuk produk yang telah kamu beli.
			</p>
		</div>
		
		<!-- Badge Info -->
		<div class="font-mono text-[10px] px-2.5 py-1.5 bg-zinc-50 border border-zinc-950/10 text-zinc-600 uppercase tracking-wider">
			Total:10
		</div>
	</div>

	<!-- ─── TAB NAVIGATION ─── -->
	<div class="flex items-center gap-6 border-b border-zinc-950/10">
		
		<!-- Tab 1: Menunggu Diulas -->
		<button 
			type="button"
			onclick={() => ReviewProductPageState.MenungguReview()}
			class="pb-2.5 flex items-center gap-2 border-b-[2px] transition-colors cursor-pointer
			{ReviewProductPageState.IsMenungguReview() ? 'border-slate-950 text-slate-950' : 'border-transparent text-zinc-400 hover:text-slate-950'}"
		>
			<span class="font-sans text-sm font-bold">Menunggu Di Review</span>
			<!-- Counter Badge -->
			<span class="font-mono text-[9px] px-1.5 py-0.5 rounded-sm transition-colors
				{ReviewProductPageState.IsMenungguReview() ? 'bg-slate-950 text-white' : 'bg-zinc-100 text-zinc-500'}"
			>
				3
			</span>
		</button>

		<!-- Tab 2: Ulasan Selesai -->
		<button 
			type="button"
			onclick={() => ReviewProductPageState.TelahDiReview()}
			class="pb-2.5 flex items-center gap-2 border-b-[2px] transition-colors cursor-pointer
			{ReviewProductPageState.IsTelahDiReview() ? 'border-slate-950 text-slate-950' : 'border-transparent text-zinc-400 hover:text-slate-950'}"
		>
			<span class="font-sans text-sm font-bold">Ulasan Selesai</span>
			<!-- Counter Badge -->
			<span class="font-mono text-[9px] px-1.5 py-0.5 rounded-sm transition-colors
				{ReviewProductPageState.IsTelahDiReview()  ? 'bg-slate-950 text-white' : 'bg-zinc-100 text-zinc-500'}"
			>
				12
			</span>
		</button>
		
	</div>
</section>