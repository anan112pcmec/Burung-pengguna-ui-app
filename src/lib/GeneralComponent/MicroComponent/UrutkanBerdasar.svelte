<script lang="ts">
    let isOpen = $state(false)

    const {Kriteria, OpsiDropdown = "Kiri"}: {Kriteria: {nama: string, fun?: () => void}[], OpsiDropdown?:'Kanan' | 'Kiri'} = $props()
</script>

<div class="relative">
    <!-- Tombol Trigger -->
    <button 
        type="button"
        onclick={() => isOpen = !isOpen}
        class="flex items-center gap-2 text-left hover:text-slate-950 transition group"
    >
        <span class="tracking-[0.15em] text-[10px] font-medium uppercase group-hover:underline">
            URUTKAN BERDASAR
        </span>

        <svg 
            class="w-3.5 h-3.5 text-slate-700"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill-rule="evenodd" clip-rule="evenodd" 
                d="M12 4.875C12.6213 4.875 13.125 5.37868 13.125 6V10.8752V13.1252V18.0007C13.125 18.622 12.6213 19.1257 12 19.1257C11.3787 19.1257 10.875 18.622 10.875 18.0007V13.1252V10.8752V6C10.875 5.37868 11.3787 4.875 12 4.875Z" 
                fill="currentColor"/>
            <g opacity="0.4">
                <path d="M18.0007 10.875H13.1252V13.125H18.0007C18.622 13.125 19.1257 12.6213 19.1257 12C19.1257 11.3787 18.622 10.875 18.0007 10.875Z" fill="currentColor"/>
                <path d="M6 13.125H10.8752V10.875H6C5.37868 10.875 4.875 11.3787 4.875 12C4.875 12.6213 5.37868 13.125 6 13.125Z" fill="currentColor"/>
            </g>
        </svg>
    </button>

    <!-- Dropdown Menu (Menggunakan conditional class alih-alih static 'hidden') -->
    <div class="{isOpen ? 'block' : 'hidden'} absolute {OpsiDropdown == "Kanan" ? "right-0" : "left"} top-full mt-2 w-56 bg-white border border-zinc-800/20 rounded-sm shadow-md py-1.5 z-50">
        <div class="px-3 py-1 text-[9px] font-bold text-slate-950/40 uppercase tracking-[0.18em]">
            Opsi Urutan
        </div>
        
        {#each Kriteria as k (k.nama)}
        <button 
        onclick={k.fun}
        class="px-3 py-2 text-[11px] text-slate-800 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between transition">
            <span>{k.nama}</span>
            <span class="text-[9px] ml-2 text-slate-400">&rarr;</span>
        </button>
        {/each}
        
        <div class="border-t border-zinc-800/10 my-1"></div>

        <button 
            type="button"
            onclick={() => isOpen = false}
            class="w-full text-center text-[10px] text-slate-500 font-medium uppercase tracking-wider hover:text-slate-950 py-1"
        >
            Tutup 
        </button>
    </div>
</div>