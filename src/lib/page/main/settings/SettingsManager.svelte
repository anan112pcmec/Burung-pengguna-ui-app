<script lang="ts">
    import { LeftOpsiState } from "$lib/state/main/profile/state.svelte";
	import type { Action } from "svelte/action";
	import { SvelteMap } from "svelte/reactivity";
	import Aktivitas from "./Aktivitas.svelte";
	import Profil from "./Profil.svelte";
	import Alamat from "./Alamat.svelte";
	import KeamananAkun from "./KeamananAkun.svelte";
	import Notifikasi from "./Notifikasi.svelte";
	import PrivasiAkun from "./PrivasiAkun.svelte";
	import Penautan from "./Penautan.svelte";

    let UbahProfil: boolean = $state<boolean>(false)
    let EditAlamat2: boolean = $state<boolean>(false)
    
    async function ClickedAlamatList(node: HTMLDivElement, eventHandle: (el: MouseEvent) => void) {
        node.addEventListener("click", eventHandle);
    }

    const AlamatEditAction: Action = (node) => {
    const alamatList = node.querySelectorAll('[class*="card-alamat"]') as NodeListOf<HTMLDivElement>;
    const handlers: { alamat: HTMLDivElement; handler: (el: MouseEvent) => void }[] = [];
    
    const alamatCountClick = new SvelteMap<HTMLDivElement, number>();
    const alamatTimers = new SvelteMap<HTMLDivElement, ReturnType<typeof setTimeout>>();

    const AlamatClicked: HTMLDivElement[] = []

    for (const alamat of alamatList) {
        const eventmain = (el: MouseEvent) => {
            el.stopPropagation();
            el.preventDefault();

            AlamatClicked.push(alamat)
            alamat.classList.remove("border-slate-950/10")
            alamat.classList.add("border-slate-950")

            const currentCount = (alamatCountClick.get(alamat) ?? 0) + 1;
            alamatCountClick.set(alamat, currentCount);

            if (currentCount === 1) {
                const timer = setTimeout(() => {
                    alamatCountClick.set(alamat, 0);
                    alamatTimers.delete(alamat);
                }, 700);
                
                alamatTimers.set(alamat, timer);
            }

            if (currentCount > 2) {
                const activeTimer = alamatTimers.get(alamat);
                if (activeTimer) clearTimeout(activeTimer);
                
                // Reset data state hitungan
                alamatCountClick.set(alamat, 0);
                alamatTimers.delete(alamat);
                
                // Jalankan trigger edit
                EditAlamat2 = true;
            }
        };

        ClickedAlamatList(alamat, eventmain);
        handlers.push({ alamat, handler: eventmain });
    }

    return {
        destroy() {
            // Bersihkan semua timer yang tersisa saat komponen hancur
            for (const timer of alamatTimers.values()) {
                clearTimeout(timer);
            }
            // Bersihkan semua event listener
            for (const item of handlers) {
                item.alamat.removeEventListener("click", item.handler);
            }
        }   
    };

    
}

let activeTab: 'password' | 'pin' = $state<'password' | 'pin'>('password');

</script>


<section class="grid grid-cols-[36%_64%] w-full h-[27rem] border border-zinc-950/10 rounded-sm bg-white">
    <div class="grid grid-rows-7 pl-4 pr-4 border-r border-zinc-950/10 py-2">
<button 
    onclick={() => LeftOpsiState.setAktifitas()}
    class="w-full grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isAktifitas() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Aktifitas</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => LeftOpsiState.setUbahProfil()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isUbahProfil() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Ubah Profil</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => LeftOpsiState.setDaftarAlamat()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isDaftarAlamat() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Daftar Alamat</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => LeftOpsiState.setKeamananAkun()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isKeamananAkun() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Keamanan Akun</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => LeftOpsiState.setNotifikasi()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isNotifikasi() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Notifikasi</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => LeftOpsiState.setPrivasiAkun()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isPrivasiAkun() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Privasi Akun</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => LeftOpsiState.setPenautan()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isPenautan() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Penautan</span> 
    <span class="text-right text-zinc-400">-></span>
</button>
    </div>

    <div class="p-6 overflow-y-auto scrollbar-none h-full bg-white flex flex-col min-h-0">
        
        {#if LeftOpsiState.isAktifitas()}
            <Aktivitas/>

        {:else if LeftOpsiState.isUbahProfil()}
           <Profil/>

        {:else if LeftOpsiState.isDaftarAlamat()}
           <Alamat/>

        {:else if LeftOpsiState.isKeamananAkun()}
         <KeamananAkun/>

        {:else if LeftOpsiState.isNotifikasi()}
        <Notifikasi/>

        {:else if LeftOpsiState.isPrivasiAkun()}
        <PrivasiAkun/>


        {:else if LeftOpsiState.isPrivasiAkun()}
            <PrivasiAkun/>

        {:else if LeftOpsiState.isPenautan()}
          <Penautan/>
        {/if}

    </div>
</section>