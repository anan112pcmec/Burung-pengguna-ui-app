<script lang="ts">
    // Murni markup tanpa state
</script>

<section id="points-presentation" class="mt-10 md:mt-20 w-full h-auto md:h-[28rem] p-4 sm:p-6 lg:p-8 flex flex-col justify-between md:grid md:grid-rows-[8%_32%_2%_48%_10%] items-center gap-4 md:gap-0 my-6 md:my-8">
    <div>
        <h2 class="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.18em] text-slate-950/40 uppercase">
            OUR POINTS
        </h2>
    </div>

    <div> 
        <h1 class="mt-1 text-left font-bold text-xl sm:text-3xl lg:text-5xl text-slate-950 uppercase tracking-tight leading-snug">
            Platform e-commerce untuk semua kebutuhanmu.
        </h1>
    </div>

    <!-- Spacer khusus desktop -->
    <div class="hidden md:block"></div>

    <div>
        <p class="text-xs sm:text-sm lg:text-lg text-slate-700 font-light leading-relaxed tracking-wide">
            Di Burung, kami percaya pengalaman belanja online seharusnya sederhana. Kamu cukup mencari produk yang dibutuhkan, menambahkannya ke keranjang, dan menyelesaikan pembayaran dengan aman. Tidak ada langkah yang rumit, tidak ada iklan yang mengganggu. Semua dirancang agar kamu bisa fokus pada apa yang penting — menemukan produk dengan cepat, membandingkan harga dengan jelas, dan menerima barang tepat waktu. Burung dibuat untuk memudahkan, bukan membingungkan.
        </p>
    </div>

    <div class="w-full flex justify-end md:grid md:grid-cols-[80%_20%] items-center pt-2 md:pt-0">
        <div class="hidden md:block"></div>
        <div class="flex justify-end">
            <button 
                type="button"
                class="border border-zinc-800/30 text-slate-950 px-4 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.18em] uppercase rounded-xs hover:bg-slate-950 hover:text-white transition duration-300"
                onclick={() => {
                    window.scrollBy({
                        top: 400, 
                        behavior: 'smooth' 
                    });
                }}
            >
                YANG KAMI TAWARKAN ↓
            </button>
        </div>
    </div>
</section>