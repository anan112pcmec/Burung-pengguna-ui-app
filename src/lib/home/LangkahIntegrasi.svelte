
{#snippet carouselData({header, isi}: carouselData,key: number)}
    <div id={String(key)} class="bg-zinc-900/30 backdrop-blur-md rounded-t-3xl rounded-b-lg grid w-[100%] h-[6rem] p-4 grid-rows-[30%_5%_65%]">
    <div>
        <h2>{header}</h2>
    </div>
    <div></div>
    <ul>
        <li class="text-sm/tight">
            {isi}
        </li>
    </ul>
    </div>
{/snippet}

<script lang="ts">
	import { Full } from '../../constant/UiConstant';
	import type { carouselData } from './types';


const headeramaisi: carouselData[] = [
    {
        header:"Login One Tap",
        isi: "Burung menyediakan login one tap auth tanpa muluk-muluk ribet masukin kredensial kamu deh"
    },
    {
        header:"Cari Barang",
        isi: "Burung menerapkan persortiran yang sesuai selera kamu banget."
    },
    {
        header:"Beli Deh",
        isi: "Gausah repot mikirin barang nyampe gimana — semua Burung yang handle."
    },
    {
        header:"Login One Tap",
        isi: "Burung menyediakan login one tap auth tanpa muluk-muluk ribet masukin kredensial kamu deh"
    },
    {
        header:"Cari Barang",
        isi: "Burung menerapkan persortiran yang sesuai selera kamu banget."
    },
    {
        header:"Beli Deh",
        isi: "Gausah repot mikirin barang nyampe gimana — semua Burung yang handle."
    },
    
    
] 
</script>

<section id="kelebihan-app" class="w-full h-[24rem] p-4 grid grid-cols-[50%_5%_45%]">
    <div class=" text-6xl text-right font-signature text-slate-900  flex justify-center items-center">
    Langkah Nya Cukup Mudah
    </div>
    <div></div>
    <!-- Container Utama (Harus relative agar shade absolute bisa menempel pas) -->
    <div class="relative h-[22rem] mt-20">
        
        <!-- SHADE ATAS: Gradasi putih ke transparan -->
        <div class="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>

        <!-- WADAH SCROLL KAMU -->
        <div class="h-full overflow-y-auto p-2 scrollbar-none grid space-y-2 scroll-my-[100%]">
            {#each headeramaisi as d, i}
                {@render carouselData(d, i)}
            {/each}
        </div>

        <!-- SHADE BAWAH: Gradasi transparan ke putih -->
        <div class="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

    </div>
</section>