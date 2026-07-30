<script lang="ts">
	import { goto } from '$app/navigation';

	
	
</script>

{#snippet ListTransaksi(i: number)}
    <!-- Container Utama Kartu Transaksi -->
   <div class="grid grid-cols-[40%_30%_30%] w-full min-h-[12rem] bg-white overflow-hidden shadow-xs rounded-lg border border-zinc-200">
        
    <!-- Kolom 1: Detail Transaksi & Produk (40%) -->
    <div class="transaction-info-{i} grid grid-rows-[auto_1fr_auto] p-4 gap-3 border-r border-zinc-100">
        
        <!-- Row 1 (Header Transaksi): Meta Data Penting -->
        <div class="flex items-center justify-between text-xs text-slate-500 border-b border-zinc-100 pb-2">
            <div class="flex items-center gap-2">
                <span class="font-medium text-slate-900">22 Jul 2026</span>
                <span class="text-zinc-300">&bull;</span>
                <span class="text-slate-600">TRX-893021</span>
                <span class="text-zinc-300">&bull;</span>
                <span class="text-slate-600">3 Barang</span>
            </div>
            
            <!-- Status Badge (Diproses) -->
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-amber-50 text-amber-700 border border-amber-200/60">
                Diproses
            </span>
        </div>

        <!-- Row 2 (Detail Barang & Harga) -->
        <div class="flex items-center justify-between gap-3 py-1">
            <div class="flex items-center gap-3 min-w-0">
                <div class="relative w-12 h-12 bg-zinc-100 rounded-sm overflow-hidden shrink-0 border border-zinc-200">
                    <img 
                        src="src/constant/hm-removebg-preview.png" 
                        alt="Product" 
                        class="w-full h-full object-cover" 
                    />
                </div>
                <div class="min-w-0 space-y-0.5">
                    <p class="text-[10px] text-slate-400 font-medium uppercase tracking-wider truncate">
                        Official Store Nike
                    </p>
                    <h4 class="text-xs font-semibold text-slate-800 truncate leading-tight">
                        Sepatu Running Nike Air Zoom
                    </h4>
                    <p class="text-[11px] text-slate-500">
                        Hitam / 42 &bull; <span class="text-slate-700 font-medium">1x Rp 150k</span>
                    </p>
                </div>
            </div>

            <!-- Total Belanja Transaksi -->
            <div class="text-right shrink-0 border-l border-zinc-100 pl-3">
                <span class="text-[10px] text-slate-400 block">Total</span>
                <span class="text-xs font-bold text-slate-900">
                    Rp 450.000
                </span>
            </div>
        </div>

        <!-- Row 3 (Footer Actions) -->
        <div class="flex items-center justify-between text-xs pt-2 border-t border-zinc-100 mt-auto">
            <span class="text-[10px] text-slate-400 truncate max-w-[130px]">
                Garansi retur sesuai
            </span>

            <div class="flex items-center gap-1.5">
                <button onclick={() => {goto("details/transaksi")}} type="button" class="px-2.5 py-1 text-[11px] border border-zinc-200 text-slate-700 hover:bg-zinc-50 rounded-sm transition cursor-pointer">
                    Detail
                </button>
                <button onclick={() => {goto("details/produk")}} type="button" class="px-2.5 py-1 text-[11px] bg-slate-900 text-white font-medium hover:bg-slate-800 rounded-sm transition cursor-pointer">
                    Beli lagi
                </button>
            </div>
        </div>
    </div>

    <!-- Kolom 2: Detail Pembayaran (30%) -->
    <div class="transaction-info-pembayaran grid grid-rows-[auto_1fr_auto] p-4 gap-3 border-r border-zinc-100 bg-white">
        
        <!-- Row 1 (Header Pembayaran) -->
        <div class="flex items-center justify-between text-xs text-slate-500 border-b border-zinc-100 pb-2">
            <div class="flex items-center gap-1.5 min-w-0">
                <span class="font-medium text-slate-900 truncate">ID: 10492</span>
                <span class="text-zinc-300">&bull;</span>
                <span class="text-slate-600 truncate">U: 1029</span>
            </div>
            
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
                Paid
            </span>
        </div>

        <!-- Row 2 (Detail Info Pembayaran) -->
        <div class="flex items-center justify-between gap-3 py-1">
            <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-10 h-10 bg-zinc-100 rounded-sm flex items-center justify-center shrink-0 border border-zinc-200 text-slate-600">
                    <svg class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </div>
                <div class="min-w-0 space-y-0.5">
                    <p class="text-[10px] text-slate-400 font-medium uppercase tracking-wider truncate">
                        Midtrans &bull; QRIS
                    </p>
                    <h4 class="text-xs font-semibold text-slate-800 truncate leading-tight">
                        ORD-SYS-984210
                    </h4>
                    <p class="text-[10px] text-slate-500 truncate">
                        PG: TRX-PG-789
                    </p>
                </div>
            </div>

            <div class="text-right shrink-0 border-l border-zinc-100 pl-3">
                <span class="text-[10px] text-slate-400 block">Total</span>
                <span class="text-xs font-bold text-slate-900">
                    Rp 450.000
                </span>
            </div>
        </div>

        <!-- Row 3 (Footer Pembayaran) -->
        <div class="flex items-center justify-between text-xs pt-2 border-t border-zinc-100 mt-auto">
            <span class="text-[10px] text-slate-400 truncate max-w-[130px]">
                Terverifikasi aman
            </span>

            <button onclick={() => {goto("details/pembayaran")}} type="button" class="px-2.5 py-1 text-[11px] border border-zinc-200 text-slate-700 hover:bg-zinc-50 rounded-sm transition cursor-pointer">
                Kwitansi
            </button>
        </div>
    </div>

    <!-- Kolom 3: Pengiriman & Logistik (30%) -->
    <div class="bg-zinc-50/50 p-4 flex flex-col justify-between text-xs space-y-3">
        
        <!-- Header Tipe Pengiriman -->
        <div class="flex items-center justify-between border-b border-zinc-200/60 pb-2">
            <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Pengiriman
            </span>
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-xs bg-slate-900 text-white">
                Ekspedisi
            </span>
        </div>

        <!-- Detail Logistik -->
        <div class="space-y-1.5 text-slate-600 text-[11px]">
            <div class="flex justify-between items-center">
                <span class="text-slate-400">Layanan</span>
                <span class="font-medium text-slate-800">Reguler</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-slate-400">Resi</span>
                <span class="text-slate-800 font-medium">JP-92049182</span>
            </div>
            
            <!-- Latest Tracking Info -->
            <div class="bg-white p-2 rounded-xs border border-zinc-200 space-y-0.5 mt-1">
                <span class="text-[9px] text-amber-700 font-medium block">
                    &bull; Posisi Terakhir
                </span>
                <p class="text-[10px] text-slate-700 font-medium leading-tight truncate">
                    Gudang Transit Jakarta Barat
                </p>
                <p class="text-[9px] text-slate-400 truncate">
                    Paket diserahkan ke kurir
                </p>
            </div>
        </div>

        <!-- Footer Kolom Pengiriman -->
        <div class="pt-2 border-t border-zinc-200/60 flex items-center justify-between text-[10px] text-slate-400 mt-auto">
            <span>1.2 Kg</span>
            <a href="/details/pengiriman-ekspedisi" class="text-slate-800 font-medium hover:underline">Lacak &rarr;</a>
        </div>
    </div>

</div>
{/snippet}

<section id="transaksi-result" class="mt-2 overflow-y-auto scrollbar-none p-4 lg:p-6 space-y-4">
    {#each Array(5) as _, i}
        {@render ListTransaksi(i)}
    {/each}
</section>