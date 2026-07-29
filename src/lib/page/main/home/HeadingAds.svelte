<script lang="ts">
    // Heading Ads Section Component
</script>

<section id="heading-ads" class="grid grid-cols-[20%_80%] p-4 h-[11rem] gap-3 bg-white border-b border-zinc-950/10 text-xs">
    <!-- Kolom 1: Quick Navigation / Info Umum E-Commerce -->
   <div class="bg-zinc-50 border border-zinc-950/10 rounded-sm p-2 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:border-slate-950 transition">
        <!-- Background Dummy Image / Visual -->
        <div class="absolute inset-0 z-0 bg-zinc-200 flex items-center justify-center opacity-80 group-hover:scale-105 transition duration-300">
            <!-- SVG placeholder for dummy product/ad image -->
            <svg class="w-10 h-10 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
        </div>

        <!-- Dark Gradient Overlay for readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent z-0"></div>

        <!-- Content on top -->
        <div class="relative z-10">
            <span class="text-[8px] font-bold tracking-[0.2em] bg-white text-zinc-950 px-1 py-0.5 rounded-2xs uppercase">
                ADS
            </span>
        </div>

        <div class="relative z-10 space-y-0.5">
            <h2 class="text-[11px] font-bold text-white tracking-tight leading-tight">
                VOUCHER 50%
            </h2>
            <p class="text-[9px] text-zinc-300">
                Klaim sekarang
            </p>
        </div>
    </div>

    <!-- Kolom 2: Banner Ads / Promosi E-Commerce -->
    <div class="bg-zinc-950 text-white rounded-sm p-4 flex flex-col justify-between relative overflow-hidden border border-zinc-950">
        <!-- Background subtle accent or pattern if needed -->
        <div class="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-zinc-800 to-transparent opacity-40 pointer-events-none"></div>
        
        <div class="space-y-1 relative z-10">
            <div class="flex items-center gap-2">
                <span class="text-[9px] font-bold tracking-[0.2em] bg-white text-zinc-950 px-1.5 py-0.5 rounded-2xs uppercase">
                    PROMO SPESIAL
                </span>
                <span class="text-[9px] text-zinc-400 font-medium">
                    DISKON HINGGA 50%
                </span>
            </div>
            <h3 class="text-sm sm:text-base font-bold tracking-tight text-white mt-1">
                FLASH SALE ELEKTRONIK & GADGET TERBARU
            </h3>
        </div>

        <div class="flex items-center justify-between relative z-10 pt-2">
            <span class="text-[10px] text-zinc-400">
                Berakhir dalam <span class="font-bold text-white">03:45:12</span>
            </span>
            <a href="#promo" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-950 font-bold text-[10px] rounded-2xs hover:bg-zinc-100 transition">
                <span>LIHAT PENAWARAN</span>
                <span>&rarr;</span>
            </a>
        </div>
    </div>
</section>