<script lang="ts">
    import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
</script>

<section id="kelebihan-app" class="w-full h-auto md:h-[28rem] mt-6 md:mt-10 p-4 sm:p-6 lg:p-8 flex flex-col md:grid md:grid-cols-[45%_10%_45%] items-center my-6 md:my-8 gap-6 md:gap-0">
    <div class="flex flex-col justify-between h-full w-full">
        <div>
            <!-- Sub-heading -->
            <h2 class="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.18em] text-slate-950/40 uppercase">
                UI CLEAN SUPER CEPAT
            </h2>
            
            <!-- Main Heading -->
            <h3 class="text-base sm:text-xl lg:text-2xl font-bold text-slate-950 uppercase tracking-tight leading-snug mt-1">
                Kami tidak bertele-tele dengan animasi berat dan verbose.
            </h3>

            <!-- List Items -->
            <ul class="space-y-2.5 sm:space-y-3.5 mt-3 sm:mt-4">
                <li>
                    <span class="font-bold text-slate-950 uppercase text-[10px] sm:text-[11px] tracking-wider block">
                        — UI PILIHAN BARANG SIMPLE
                    </span>
                    <p class="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Menampilkan produk dengan jelas, mudah dicari, dan cepat dipilih.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[10px] sm:text-[11px] tracking-wider block">
                        — UI PENJUAL SIMPLE
                    </span>
                    <p class="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Informasi penjual tersaji rapih, sehingga kamu tahu dari siapa membeli tanpa kebingungan.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[10px] sm:text-[11px] tracking-wider block">
                        — UI PENGIRIMAN & ENGAGEMENT
                    </span>
                    <p class="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Status pengiriman dan interaksi dengan penjual mudah diikuti, semua transparan.
                    </p>
                </li>
            </ul>
        </div>

        <!-- Tombol Lanjut -->
        <div class="pt-4 md:pt-4 flex justify-start">
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

    <!-- Spacer desktop -->
    <div class="hidden md:block"></div>

    <!-- Lottie Container: Sembunyi di mobile (hidden), tampil di desktop (md:flex) -->
    <div class="hidden md:flex items-center justify-center h-full w-full overflow-hidden">
        <DotLottieSvelte
            src="src/constant/ecommerce.json"
            autoplay={true}
            loop={true}
            speed={1}
        />
    </div>
</section>