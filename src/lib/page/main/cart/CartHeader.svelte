<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";

    // Import tetap bisa diisi jika dibutuhkan nanti
    
</script>

<section class="w-full pl-3 pt-2 pb-4 flex flex-col space-y-3 pb-2 border-b border-zinc-800/20">
    <div>
        <span class="text-[10px] uppercase tracking-[0.18em] font-medium text-slate-950/50">
            KERANJANG RESULT
        </span>
    </div>

    <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 uppercase">
            ITEM(22)
        </h1>
    </div>

    <div class="grid grid-cols-2 items-center text-xs text-slate-800/70 pt-2">
        
    <UrutkanBerdasar Kriteria={[
        {nama: "Harga Tertinggi ke Terendah", fun: (): void => {}}, 
        {nama: "Harga Terendah ke Tertinggi" , fun: (): void => {}}, 
        {nama: "Terbaru Ditambahkan", fun: (): void => {}},
        {nama: "Terlama Ditambahkan",  fun: (): void => {}}
        ]}/>

    </div>
</section>