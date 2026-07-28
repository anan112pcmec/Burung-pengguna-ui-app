{#snippet carouselData({header, isi}: carouselData, key: number)}
    <div 
        id={String(key)} 
        class="bg-white hover:bg-slate-950 hover:text-white transition duration-300 border border-zinc-800/20 rounded-t-3xl rounded-b-lg grid w-full h-[6.5rem] sm:h-[6rem] p-3.5 sm:p-4 grid-rows-[30%_5%_65%] shadow-sm text-slate-950"
    >
        <div>
            <h2 class="font-bold text-[11px] sm:text-xs uppercase tracking-wider">{header}</h2>
        </div>
        <div></div>
        <ul>
            <li class="text-[11px] sm:text-xs font-light leading-relaxed">
                {isi}
            </li>
        </ul>
    </div>
{/snippet}

<script lang="ts">
    import type { carouselData } from './types';

    const headeramaisi: carouselData[] = [
        {
            header: "Login Sekali Tap",
            isi: "Gak zaman masukin email & password ribet. Sekali ketuk langsung masuk, anti drama!"
        },
        {
            header: "Cari Barang Satset",
            isi: "Algoritma kita peka banget, langsung nampilin barang yang emang selera kamu banget."
        },
        {
            header: "Tinggal Beli, Beres!",
            isi: "Duduk manis aja, urusan packing sampai kurir kurir biar Burung yang handle semuanya."
        },
        {
            header: "Login Sekali Tap",
            isi: "Gak zaman masukin email & password ribet. Sekali ketuk langsung masuk, anti drama!"
        },
        {
            header: "Cari Barang Satset",
            isi: "Algoritma kita peka banget, langsung nampilin barang yang emang selera kamu banget."
        },
        {
            header: "Tinggal Beli, Beres!",
            isi: "Duduk manis aja, urusan packing sampai kurir kurir biar Burung yang handle semuanya."
        }
    ];

    function scrollEnd(node: HTMLElement) {
        const handleScroll = () => {
            // Toleransi 2-5px agar mulus di semua device
            const isBottom = Math.ceil(node.scrollTop + node.clientHeight) >= node.scrollHeight - 2;
            
            if (isBottom) {
                window.scrollBy({
                    top: 429, 
                    behavior: 'smooth'
                });
            }
        };

        // Pasang event listener saat elemen di-mount
        node.addEventListener('scroll', handleScroll);

        // Cleanup event listener saat elemen di-destroy (mencegah memory leak)
        return {
            destroy() {
                node.removeEventListener('scroll', handleScroll);
            }
        };
    }
</script>

<section id="kelebihan-app" class="w-full h-auto md:h-[24rem] p-4 sm:p-6 lg:p-8 flex flex-col md:grid md:grid-cols-[50%_5%_45%] items-center mt-6 md:mt-20 my-6 md:my-8 gap-6 md:gap-0">
    <!-- Judul Utama -->
    <div class="text-xl sm:text-3xl lg:text-5xl text-left md:text-right font-bold text-slate-950 uppercase tracking-tight leading-snug md:leading-none flex md:justify-center items-center w-full">
        Langkah Nya Cukup Mudah
    </div>

    <!-- Spacer khusus desktop -->
    <div class="hidden md:block"></div>

    <!-- Container Scroll List -->
    <div class="relative w-full h-[18rem] sm:h-[22rem]">
        
        <div class="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>

        <div use:scrollEnd class="h-full overflow-y-auto p-2 scrollbar-none grid space-y-2 scroll-my-[100%] transition-colors duration-300 ease-in-out">
            {#each headeramaisi as d, i}
                {@render carouselData(d, i)}
            {/each}
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

    </div>
</section>