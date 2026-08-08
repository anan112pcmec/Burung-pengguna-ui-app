<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";
    import { Full } from "../../../../constant/UiConstant";

    let section: string[] = $state<string[]>(["View All Etalase[10]", "Sepatu", "Baju", "Elektronik", "Makanan"]);
    let searchQuery = $state("");
</script>

<section id="heading-cari-produk" class="w-full flex flex-col gap-6 pb-4">
    <!-- BARIS ATAS: Search Bar (Ditaruh di Kanan) -->


    <!-- BARIS BWAH: Header Result Content -->
    <div class="w-full flex flex-col justify-between gap-4">
        
        <!-- Label Sub & Judul Utama -->
        <div class="px-2 space-y-1">
            <p class="{Full} text-[10px] tracking-widest text-slate-500 uppercase">
                SEARCH RESULT
            </p>
            <div class="grid grid-cols-2">
                <h1 class="font-sans font-bold text-2xl text-slate-900 tracking-tight">
                    BARANG 1
                </h1>
                 <div class="grid grid-cols-[1fr_auto] items-center w-full px-2">
                    <div><!-- Spacer Left --></div>
                    
                    <div class="relative w-64">
                        <input 
                            type="text" 
                            bind:value={searchQuery}
                            placeholder="Search Product..."
                            class="w-full text-xs bg-transparent border-b border-slate-900/30 pb-1.5 pt-1 text-slate-800 placeholder:text-slate-400/80 focus:outline-none focus:border-slate-800 transition duration-300"
                        />
                        <svg class="w-3.5 h-3.5 absolute right-1 top-2 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Filter Tags / Section -->
        <div class="flex items-center space-x-2 px-2 overflow-x-auto no-scrollbar py-1">
            {#each section as s}
                <button class="whitespace-nowrap text-slate-800/70 text-xs tracking-wide border border-slate-900/20 px-2.5 py-1 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition duration-300">
                    {s}
                </button>
            {/each}
        </div>

        <!-- Action Bar: Sort & Filter -->
        <div class="px-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-800/70">
            
            <!-- Sort Dropdown Container -->
           <UrutkanBerdasar Kriteria={[
            {nama: "Harga Tertinggi ke Terendah", fun: () => {}},
			{nama: "Harga Terendah ke Tertinggi", fun: () => {}},
			{nama: "Terbaru Ditambahkan", fun: () => {}},
			{nama: "Terlama Ditambahkan", fun: () => {}},
			{nama: "Likes Tertinggi", fun: () => {}},
            ]} />

            <!-- Filter Trigger -->
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.38501 9.75C3.38501 9.12868 3.88869 8.625 4.51001 8.625L20.51 8.625C21.1313 8.625 21.635 9.12868 21.635 9.75C21.635 10.3713 21.1313 10.875 20.51 10.875L4.51001 10.875C3.88869 10.875 3.38501 10.3713 3.38501 9.75Z" fill="currentColor"/>
                    <g opacity="0.4">
                        <path d="M18.01 13.125C18.6313 13.125 19.135 13.6287 19.135 14.25C19.135 14.8713 18.6313 15.375 18.01 15.375H7.01001C6.38869 15.375 5.88501 14.8713 5.88501 14.25C5.88501 13.6287 6.38869 13.125 7.01001 13.125H18.01Z" fill="currentColor"/>
                    </g>
                </svg>

                <button onclick={(e) => {
                    e.preventDefault();
                   // MarketPageState.Filtering();//
                }}>
                    <span class="tracking-wide hover:text-slate-900 font-medium transition">
                        FILTER
                    </span>
                </button>
            </div>

        </div>

    </div>
</section>