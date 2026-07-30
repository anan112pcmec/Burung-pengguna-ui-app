<script lang="ts">
	import { goto } from "$app/navigation";

    let activeTab = $state<'routes' | 'active_bid' | 'reviews'>('routes');

	// List Navigasi Tab Kurir
	const tabs = [
		{ id: 'routes', label: 'Overview', go: 'kurir-overview' },
		{ id: 'active_bid', label: 'Statistik', go: 'kurir-statistik' },
	] as const;

	function selectTab(id: 'routes' | 'active_bid' | 'reviews') {
		activeTab = id;
	}
</script>


<section 
	id="select-page" 
	class="w-full bg-white border-b border-zinc-200 sticky z-30 selection:bg-slate-900 selection:text-white"
>
	<div class="px-6 lg:px-12 flex items-center justify-between text-xs">
		
		<!-- Tab Buttons Container -->
		<div class="flex items-center gap-1 sm:gap-6">
			{#each tabs as tab}
				<button
					type="button"
					onclick={() => {
						selectTab(tab.id);
						goto(tab.go);
					}}
					class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
					{activeTab === tab.id ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
				>
					<span>{tab.label}</span>

					<!-- Active Indicator Line -->
					{#if activeTab === tab.id}
						<div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Dispatch Status Info (Kanan) -->
		

	</div>
</section>