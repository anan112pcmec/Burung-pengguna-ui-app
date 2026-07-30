<script lang="ts">
	import { goto } from "$app/navigation";

     let activeTab = $state<'home' | 'search' | 'stats'>('home');

    // List Navigasi Tab
    const tabs = [
        { id: 'home', label: 'Beranda Toko', go: 'seller-overview'},
        { id: 'search', label: 'Cari Produk', go: 'cari-produk'},
        { id: 'stats', label: 'Statistik & Detail', go: 'statistik-detail'}
    ] as const;

    function selectTab(id: 'home' | 'search' | 'stats') {
        activeTab = id;
    }
</script>


<section 
    id="select-page" 
    class="w-full bg-white border-b border-zinc-200 sticky rem] z-30 selection:bg-slate-900 selection:text-white"
>
    <div class="px-6 lg:px-12 flex items-center justify-between text-xs">
        
        <!-- Tab Buttons Container -->
        <div class="flex items-center gap-1 sm:gap-6">
            {#each tabs as tab}
                <button
                    type="button"
                    onclick={() => {
                        selectTab(tab.id)
                        goto(tab.go)
                    }}
                    class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                    {activeTab === tab.id ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
                >
                    <!-- Micro Number Indexing -->

                    <span>{tab.label}</span>

                    <!-- Active Indicator Line (Bottom Border Accent) -->
                    {#if activeTab === tab.id}
                        <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                    {/if}
                </button>
            {/each}
        </div>

        <!-- Quick Filter / Display Info (Kanan) -->
        <div class="hidden md:flex items-center gap-2 text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
            <span>Tampilan:</span>
            <span class="text-slate-900 font-semibold px-2 py-0.5 bg-zinc-100 rounded-xs">
                {activeTab === 'home' ? 'Katalog Utama' : activeTab === 'search' ? 'Katalog Pencarian' : 'Rincian Performa'}
            </span>
        </div>

    </div>
</section>

