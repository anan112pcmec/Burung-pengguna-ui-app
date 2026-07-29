<script lang="ts">
    import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
</script>

<section id="kelebihan-app" class="w-full h-auto md:h-[28rem] mt-6 md:mt-10 p-4 sm:p-6 lg:p-8 flex flex-col md:grid md:grid-cols-[45%_10%_45%] items-center my-6 md:my-8 gap-6 md:gap-0">
    
    <!-- Lottie Container: Sembunyi di mobile (hidden), tampil di desktop (md:flex) -->
    <div class="hidden md:flex items-center justify-center h-full w-full overflow-hidden">
        <DotLottieSvelte
            src="src/constant/Shopping_Cart_Loader.json"
            autoplay={true}
            loop={true}
            speed={1}
        />
    </div>

    <!-- Spacer desktop -->
    <div class="hidden md:block"></div>

    <div class="flex flex-col justify-between h-full w-full">
        <div>
            <!-- Sub-heading -->
            <h2 class="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.18em] text-slate-950/40 uppercase">
                TANPA DATA VERBOSE
            </h2>
            
            <!-- Main Heading -->
            <h3 class="text-base sm:text-xl lg:text-2xl font-bold text-slate-950 uppercase tracking-tight leading-snug mt-1">
                Kami menyajikan data cepat, aktual, dan ringkas, sehingga setiap keputusan belanja kamu jadi mudah dan tepat.
            </h3>

            <!-- List Items -->
            <ul class="space-y-2.5 sm:space-y-3.5 mt-3 sm:mt-4">
                <li>
                    <span class="font-bold text-slate-950 uppercase text-[10px] sm:text-[11px] tracking-wider block">
                        — DATA PRODUK RINGKAS
                    </span>
                    <p class="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Harga, stok, dan detail penting langsung terlihat tanpa harus scroll panjang.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[10px] sm:text-[11px] tracking-wider block">
                        — DATA PENJUAL JELAS
                    </span>
                    <p class="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Informasi penjual dan reputasi mudah dipahami, langsung bisa jadi pertimbangan.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[10px] sm:text-[11px] tracking-wider block">
                        — DATA PENGIRIMAN TERSAJI
                    </span>
                    <p class="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Status, estimasi waktu, dan riwayat pengiriman terlihat sekilas, cepat dimengerti.
                    </p>
                </li>
            </ul>
        </div>

        <!-- Tombol Lanjut -->
        <div class="pt-4 md:pt-4 flex justify-end">
            <button 
                type="button"
                class="border border-zinc-800/30 text-slate-950 px-4 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.18em] uppercase rounded-xs hover:bg-slate-950 hover:text-white transition duration-300"
                onclick={() => {
                    window.scrollBy({
                        top: 468, 
                        behavior: 'smooth' 
                    });
                }}
            >
                LANJUT ↓
            </button>
        </div>
    </div>
</section>