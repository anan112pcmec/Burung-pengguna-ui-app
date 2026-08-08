<script lang="ts">
	import type { Action } from "svelte/action";
	import { SvelteMap } from "svelte/reactivity";
	import Profil from "./Profil.svelte";
	import KeamananAkun from "./KeamananAkun.svelte";
	import Notifikasi from "./Notifikasi.svelte";
	import Penautan from "./Penautan.svelte";
	import { SettingsPageState } from "./state/ui.state.svelte";
	import DaftarAlamat from "./DaftarAlamat.svelte";

    let UbahProfil: boolean = $state<boolean>(false)
    let EditAlamat2: boolean = $state<boolean>(false)
    
  
let activeTab: 'password' | 'pin' = $state<'password' | 'pin'>('password');

</script>


<section class="grid grid-cols-[36%_64%] w-full h-[27rem] border border-zinc-950/10 rounded-sm bg-white">
    <div class="grid grid-rows-7 pl-4 pr-4 border-r border-zinc-950/10 py-2">

<button 
    onclick={() => SettingsPageState.Profil()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {SettingsPageState.IsProfil() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Ubah Profil</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => SettingsPageState.DaftarAlamat()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {SettingsPageState.IsDaftarAlamat() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Daftar Alamat</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => SettingsPageState.KeamananAkun()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {SettingsPageState.IsKeamananAkun() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Keamanan Akun</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => SettingsPageState.Notifikasi()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {SettingsPageState.IsNotifikasi() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Notifikasi</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<button 
    onclick={() => SettingsPageState.Penautan()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {SettingsPageState.IsPenautan() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Penautan</span> 
    <span class="text-right text-zinc-400">-></span>
</button>
    </div>

    <div class="p-6 overflow-y-auto scrollbar-none h-full bg-white flex flex-col min-h-0">
        
        {#if SettingsPageState.IsProfil()}
           <Profil/>

        {:else if SettingsPageState.IsDaftarAlamat()}
           <DaftarAlamat/>

        {:else if SettingsPageState.IsKeamananAkun()}
         <KeamananAkun/>

        {:else if SettingsPageState.IsNotifikasi()}
        <Notifikasi/>


        {:else if SettingsPageState.IsPenautan()}
          <Penautan/>
        {/if}

    </div>
</section>