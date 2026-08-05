<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";

</script>

<section id="likes-heading">
    <div class="grid grid-cols-[20%_60%_20%] w-full h-full items-center pt-3">
		
		<!-- Col 1: Title & Total Items -->
		<div class="pl-4 border-r border-zinc-950/10 h-full flex flex-col justify-center">
			<span class="text-[9px]  font-bold tracking-[0.18em] text-zinc-400 uppercase block">
				LIKES RESULT
			</span>
			<h1 class="text-xl font-bold  text-slate-950 tracking-tight mt-0.5">
				HASIL (20)
			</h1>
		</div>

		<!-- Col 2: Search Bar & Search Action Button -->
		<div class="px-4 h-full flex items-center">
			<div class="grid grid-cols-[1fr_auto] gap-2 w-full items-center">
				<!-- Input Search -->
				<div class="relative w-full">
					<input 
						type="text" 
						
						placeholder="Cari Nama Barang..." 
						class="w-full h-10 px-3 text-xs font-sans bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
					/>
				</div>

				<!-- Search Trigger Button -->
				<button 
					type="button" 
					class="h-10 px-3.5 bg-slate-950 text-white hover:bg-slate-800 border border-slate-950 rounded-2xs flex items-center justify-center transition cursor-pointer shrink-0"
					title="Cari"
				>
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Col 3: Quick Action (Tambah Wishlist Baru / Folder Icon) -->
		<div class="ml-10">
			 <UrutkanBerdasar Kriteria={[
            {nama: "Acak", fun: (): void => {}}, 
            {nama: "Terbaru" , fun: (): void => {}}, 
            {nama: "Terlama", fun: (): void => {}},
            {nama: "Likes Tertinggi",  fun: (): void => {}}
            ]} OpsiDropdown={"Kanan"}/>
		</div>

		 

	</div>
</section>