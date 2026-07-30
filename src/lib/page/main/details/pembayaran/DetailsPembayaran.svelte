<!-- Top Bar: Navigation & Status Head -->
<section class="p-4">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200">
    <div class="flex items-center gap-3">
        <a 
            href="/transaksi" 
            class="p-2 -ml-2 text-slate-400 hover:text-slate-900 hover:bg-zinc-100 rounded-sm transition cursor-pointer"
            title="Kembali"
        >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </a>
        <div>
            <div class="flex items-center gap-2">
                <h1 class="text-xl font-bold tracking-tight text-slate-900">
                    Detail Kwitansi Pembayaran
                </h1>
                <!-- Badging Jenis Provider -->
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-sm bg-slate-900 text-white uppercase">
                    Midtrans
                </span>
            </div>
            <!-- ID Pembayaran & Kode Order Sistem -->
            <p class="text-xs text-slate-500 mt-0.5">
                ID Pembayaran: <span class="font-bold text-slate-800">#10492</span> 
                <span class="text-zinc-300 mx-1">.</span> No. Order: <span class="font-medium text-slate-700">ORD-SYS-984210</span>
            </p>
        </div>
    </div>

    <!-- Action Quick Button -->
    <div class="flex items-center gap-2">
        <button 
            type="button" 
            class="px-3.5 py-1.5 text-xs font-medium text-slate-700 border border-zinc-200 hover:bg-zinc-50 rounded-sm transition cursor-pointer flex items-center gap-1.5"
        >
            <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Cetak Kwitansi
        </button>
    </div>
</div>

<!-- Main Content Layout (Grid 2 Kolom: Rincian Utama 60% / Ringkasan Akun & Gateway 40%) -->
<div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
    
    <!-- KOLOM KIRI: RINCIAN PEMBAYARAN & STATUS KEUANGAN -->
    <div class="border border-zinc-200 rounded-sm p-5 space-y-6 bg-white">
        <div class="flex items-center justify-between border-b border-zinc-100 pb-3">
            <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Rincian Transaksi Keuangan
            </h2>
            <!-- Status Pembayaran -->
            <span class="text-xs font-medium px-2.5 py-0.5 rounded-sm bg-emerald-50 text-emerald-700 border border-emerald-200">
                Status: Lunas (Paid)
            </span>
        </div>

        <!-- Box Nominal Utama (Total) -->
        <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-sm flex items-center justify-between">
            <div>
                <span class="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Total Tagihan</span>
                <span class="text-xl font-bold text-slate-900">Rp 450.000</span>
            </div>
            <div class="text-right">
                <span class="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Waktu Pelunasan</span>
                <span class="text-xs font-semibold text-slate-800">22 Jul 2026, 14:35:12</span>
            </div>
        </div>

        <!-- Daftar Rincian Parameter Pembayaran -->
        <div class="space-y-4 text-xs">
            <h3 class="font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
                Informasi Transaksi
            </h3>

            <div class="grid grid-cols-2 gap-4 py-2 border-b border-zinc-100">
                <div>
                    <span class="text-slate-400 block text-[10px]">Metode Pembayaran</span>
                    <span class="font-medium text-slate-800">QRIS (Instant Payment)</span>
                </div>
                <div>
                    <span class="text-slate-400 block text-[10px]">ID Pengguna</span>
                    <span class="font-medium text-slate-800">USR-2026-1029</span>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 py-2 border-b border-zinc-100">
                <div>
                    <span class="text-slate-400 block text-[10px]">Kode Transaksi PG</span>
                    <span class="font-medium text-slate-800">TRX-PG-789123456</span>
                </div>
                <div>
                    <span class="text-slate-400 block text-[10px]">Nomor Order Sistem</span>
                    <span class="font-medium text-slate-800">ORD-SYS-984210</span>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 py-2">
                <div>
                    <span class="text-slate-400 block text-[10px]">Waktu Dibuat</span>
                    <span class="font-medium text-slate-800">22 Jul 2026, 14:30:00</span>
                </div>
                <div>
                    <span class="text-slate-400 block text-[10px]">Pembaruan Terakhir</span>
                    <span class="font-medium text-slate-800">22 Jul 2026, 14:35:12</span>
                </div>
            </div>
        </div>
    </div>

    <!-- KOLOM KANAN: PROVIDER & INFORMASI GATEWAY -->
    <div class="space-y-6">
        
        <!-- Provider Info Card -->
        <div class="border border-zinc-200 rounded-sm p-4 space-y-4 bg-white">
            <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
                Gateway Provider
            </h2>

            <div class="space-y-3 text-xs">
                <div class="flex justify-between items-center">
                    <span class="text-slate-400">Provider</span>
                    <span class="font-bold text-slate-900 uppercase">Midtrans</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-slate-400">Status Settlement</span>
                    <span class="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs">Success</span>
                </div>
            </div>

            <div class="border-t border-dashed border-zinc-200 my-2"></div>

            <div class="space-y-1 text-xs">
                <span class="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Catatan Verifikasi</span>
                <p class="text-slate-600 text-[11px] leading-relaxed">
                    Pembayaran telah diverifikasi secara otomatis oleh sistem payment gateway yang bersangkutan.
                </p>
            </div>
        </div>

        <!-- Detail Bantuan Pembayaran -->
        <div class="p-3 bg-white border border-zinc-200 rounded-sm text-[11px] text-slate-500 space-y-2">
            <p class="font-medium text-slate-900">Kendala Pembayaran atau Saldo?</p>
            <p class="leading-normal">
                Jika status pembayaran tidak berubah atau saldo terpotong namun transaksi gagal, hubungi layanan dukungan pembayaran.
            </p>
            <button 
                type="button" 
                class="w-full py-1.5 text-xs text-slate-800 font-medium border border-zinc-200 hover:bg-zinc-50 rounded-sm transition cursor-pointer"
            >
                Pusat Bantuan Pembayaran
            </button>
        </div>

    </div>

</div>
</section>