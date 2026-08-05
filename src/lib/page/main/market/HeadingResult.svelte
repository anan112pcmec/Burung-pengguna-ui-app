<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";
	import { MarketPageState } from "$lib/state/main/market/state.svelte";
	import { Full } from "../../../../constant/UiConstant";

	let section: string[] = $state<string[]>(["View All[18]", "Anak", 'Wanita', "Sale[2]", "Flash sale[1]"]);
	
</script>


<section>
	<!-- ─── TAB UTAMA: BARANG | SELLER | KURIR ─── -->
	<div class="flex items-center gap-4 pl-2 text-xs font-bold border-b border-slate-900/10 pb-2 mb-2">
		<button 
				type="button"
				onclick={(e) => {
					e.preventDefault();
					MarketPageState.ResultBarang();
				}}
				class="transition-colors cursor-pointer {MarketPageState.IsResultBarang() ? 'text-slate-950 underline underline-offset-4 decoration-2' : 'text-slate-800/40 hover:text-slate-950'}"
			>
				Barang
			</button>
			<button 
				type="button"
				onclick={(e) => {
					e.preventDefault();
					MarketPageState.ResultSeller();
				}}
				class="transition-colors cursor-pointer {MarketPageState.IsResultSeller() ? 'text-slate-950 underline underline-offset-4 decoration-2' : 'text-slate-800/40 hover:text-slate-950'}"
			>
				Seller
			</button>
			<button 
				type="button"
				onclick={(e) => {
					e.preventDefault();
					MarketPageState.ResultKurir();
				}}
				class="transition-colors cursor-pointer {MarketPageState.IsResultKurir() ? 'text-slate-950 underline underline-offset-4 decoration-2' : 'text-slate-800/40 hover:text-slate-950'}"
			>
				Kurir
			</button>
	</div>

	<div class="w-full h-[10rem]  grid grid-rows-[12%_30%_2%_33%_5%_18%]">
		<div class="text-sm">
			<p class="{Full} p-2 text-xs/loose">
				SEARCH RESULT
			</p>
		</div>

		<div class="p-2 font-bold font-sans text-2xl">
			<h1>BARANG 1</h1>
		</div>

		<div><!-- Hanya sebagai jarak --></div>

		<div class="flex items-start space-x-3 p-2">
			{#each section as s, i}
				<button class="text-slate-800/60 text-xs/loose border border-slate-900/30 pl-1 pr-1 hover:border-white hover:bg-slate-800 hover:text-white transition duration-300">{s}</button>
			{/each}
		</div>

		<div><!-- Hanya sebagai jarak --></div>

		<div class="p-2 grid grid-cols-2 items-center text-xs text-slate-800/70">
			

				<!-- Dropdown dipindah ke luar button agar tag <a> di dalamnya berfungsi normal -->
					{#if MarketPageState.IsResultBarang()}
						<UrutkanBerdasar Kriteria={[
							{nama: "Harga Tertinggi ke Terendah", fun: () => {}},
							{nama: "Harga Terendah ke Tertinggi", fun: () => {}},
							{nama: "Terbaru Ditambahkan", fun: () => {}},
							{nama: "Terlama Ditambahkan", fun: () => {}},
							{nama: "Likes Tertinggi", fun: () => {}},
						]}/>
					{:else if MarketPageState.IsResultSeller()}
						<UrutkanBerdasar Kriteria={[
							{nama: "Rating Toko Tertinggi", fun: () => {}},
							{nama: "Ulasan Terbanyak", fun: () => {}},
							{nama: "Paling Populer", fun: () => {}},
							{nama: "Terbaru", fun: () => {}},
						]}/>
					{:else if MarketPageState.IsResultKurir()}
						<UrutkanBerdasar Kriteria={[
							{nama: "Paling Aktif", fun: () => {}},
							{nama: "Ulasan Terbanyak", fun: () => {}},
							{nama: "Paling Populer", fun: () => {}},
						]}/>
					{:else}
						tak diketahui
					{/if}

			<div class="flex items-center justify-end gap-2">
				<svg 
					class="w-4 h-4"
					viewBox="0 0 25 24" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg">
					<path d="M3.38501 9.75C3.38501 9.12868 3.88869 8.625 4.51001 8.625L20.51 8.625C21.1313 8.625 21.635 9.12868 21.635 9.75C21.635 10.3713 21.1313 10.875 20.51 10.875L4.51001 10.875C3.88869 10.875 3.38501 10.3713 3.38501 9.75Z" fill="currentColor"/>
					<g opacity="0.4">
						<path d="M18.01 13.125C18.6313 13.125 19.135 13.6287 19.135 14.25C19.135 14.8713 18.6313 15.375 18.01 15.375H7.01001C6.38869 15.375 5.88501 14.8713 5.88501 14.25C5.88501 13.6287 6.38869 13.125 7.01001 13.125H18.01Z" fill="currentColor"/>
					</g>
				</svg>

				<button 
					type="button"
					class="cursor-pointer"
					onclick={(e) => {
						e.preventDefault();
						MarketPageState.Filtering();
					}}
				>
					<span class="tracking-wide hover:text-slate-900/80">
						FILTER
					</span>
				</button>
			</div>
		</div>
	</div>
</section>