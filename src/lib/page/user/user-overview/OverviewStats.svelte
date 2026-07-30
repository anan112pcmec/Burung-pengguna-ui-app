<script lang="ts">
    // Kategori Konstan Sesuai Spesifikasi Go
    const KategoriBarang = {
        PakaianFashion: "Pakaian & Fashion",
        KosmetikKecantikan: "Kosmetik & Kecantikan",
        ElektronikGadget: "Elektronik & Gadget",
        BukuMedia: "Buku & Media",
        MakananMinuman: "Makanan & Minuman",
        IbuBayi: "Ibu & Bayi",
        Mainan: "Mainan",
        OlahragaOutdoor: "Olahraga & Outdoor",
        OtomotifSparepart: "Otomotif & Sparepart",
        RumahTangga: "Rumah Tangga",
        AlatTulis: "Alat Tulis",
        PerhiasanAksesoris: "Perhiasan & Aksesoris",
        ProdukDigital: "Produk Digital",
        BangunanPerkakas: "Bangunan & Perkakas",
        MusikInstrumen: "Musik & Instrumen",
        FilmBroadcasting: "Film & Broadcasting",
        SemuaBarang: "Semua Barang"
    };

    // State untuk filter waktu (Harian, Bulanan, Tahunan)
    let selectedTimeframe = $state<'harian' | 'bulanan' | 'tahunan'>('bulanan');

    // Mock Data Statistik Keuangan & Belanja Pengguna
    const userStats = {
        total_pengeluaran: 14850000,
        total_pembelian: 28,
        rata_rata_kepuasan: 4.8,
        total_ulasan_diberikan: 24,
        
        // Data berdasarkan rentang waktu
        pengeluaran_periode: {
            harian: 450000,
            bulanan: 3250000,
            tahunan: 14850000
        },
        
        pembelian_periode: {
            harian: 2,
            bulanan: 6,
            tahunan: 28
        }
    };

    const timeRanges = ["Hari Ini", "Minggu Ini", "Bulan Ini", "Tahun Ini", "Custom Date"];

    // Mock Data Pembelian Berdasarkan Kategori
    const categoryStats = [
        { nama: KategoriBarang.ElektronikGadget, jumlah: 10, total: 7200000, persentase: 48 },
        { nama: KategoriBarang.PakaianFashion, jumlah: 8, total: 3100000, persentase: 21 },
        { nama: KategoriBarang.RumahTangga, jumlah: 5, total: 2450000, persentase: 16 },
        { nama: KategoriBarang.MakananMinuman, jumlah: 3, total: 1200000, persentase: 8 },
        { nama: KategoriBarang.AlatTulis, jumlah: 2, total: 900000, persentase: 7 }
    ];

    // Mock Data Heatmap Jam Aktif Belanja (7 Hari x 6 Blok Waktu)
    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Ming'];
    const timeSlots = [
        { label: '00:00 - 04:00' },
        { label: '04:00 - 08:00' },
        { label: '08:00 - 12:00' },
        { label: '12:00 - 16:00' },
        { label: '16:00 - 20:00' },
        { label: '20:00 - 24:00' }
    ];

    const userActivityHeatmap = [
        [0, 0, 0, 0, 0, 1, 1], // 00:00 - 04:00
        [0, 1, 0, 0, 1, 0, 0], // 04:00 - 08:00
        [2, 3, 2, 2, 3, 2, 1], // 08:00 - 12:00
        [3, 2, 3, 3, 2, 3, 2], // 12:00 - 16:00
        [3, 3, 3, 3, 3, 3, 3], // 16:00 - 20:00 (Peak Shopping)
        [2, 2, 2, 1, 2, 3, 3]  // 20:00 - 24:00
    ];

    function getHeatmapColor(level: number): string {
        switch (level) {
            case 3: return 'bg-slate-900 border-slate-900 text-white';
            case 2: return 'bg-zinc-400 border-zinc-400 text-white';
            case 1: return 'bg-zinc-200 border-zinc-300 text-zinc-700';
            default: return 'bg-zinc-50 border-zinc-200 text-transparent';
        }
    }
</script>

<section id="overview-stats" class="w-full space-y-8 font-sans selection:bg-slate-900 selection:text-white">

    <!-- HEADER HALAMAN & FILTER WAKTU -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-5">
        <div>
            <h2 class="text-base font-bold tracking-tight text-slate-950 uppercase">
                Ikhtisar & Statistik Belanja
            </h2>
            <p class="text-xs text-zinc-500 mt-0.5">
                Analisis komprehensif pengeluaran, pola aktivitas, dan preferensi kategori produk Anda.
            </p>
        </div>

        <!-- Filter Trail Waktu (Harian, Bulanan, Tahunan) -->
       <div class="flex flex-wrap items-center gap-1.5 bg-zinc-100/60 p-1 rounded-sm border border-zinc-950/10">
			{#each timeRanges as range, i}
				<button 
					type="button"
					class="text-xs tracking-wide px-3 py-1.5 rounded-sm transition duration-200 uppercase font-medium 
					{i === 1 
						? 'bg-slate-950 text-white shadow-xs' 
						: 'text-slate-800/60 hover:text-slate-950 hover:bg-white'}"
				>
					{range}
				</button>
			{/each}
		</div>
    </div>

    <!-- BARIS 1: METRIK UTAMA PENGELUARAN & KEPUASAN -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Total Pengeluaran Berdasarkan Filter Waktu -->
        <div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
            <span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
                Pengeluaran ({selectedTimeframe})
            </span>
            <div class="flex items-baseline justify-between">
                <span class="text-xl lg:text-2xl font-bold text-slate-950 font-mono">
                    Rp {userStats.pengeluaran_periode[selectedTimeframe].toLocaleString()}
                </span>
            </div>
            <p class="text-[11px] text-zinc-500 font-light">Akumulasi total transaksi belanja</p>
        </div>

        <!-- Total Pembelian / Transaksi -->
        <div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
            <span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
                Total Transaksi
            </span>
            <div class="flex items-baseline justify-between">
                <span class="text-2xl font-bold text-slate-950 font-mono">
                    {userStats.pembelian_periode[selectedTimeframe]} <span class="text-xs font-normal text-zinc-500">Order</span>
                </span>
                <span class="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded-xs font-mono">
                    {userStats.total_pembelian} Total Keseluruhan
                </span>
            </div>
            <p class="text-[11px] text-zinc-500 font-light">Jumlah pesanan berhasil diproses</p>
        </div>

        <!-- Rata-rata Kepuasan & Ulasan -->
        <div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
            <span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
                Rata-Rata Kepuasan
            </span>
            <div class="flex items-baseline justify-between">
                <span class="text-2xl font-bold text-slate-950 flex items-center gap-1 font-mono">
                    <span class="text-amber-500">★</span> {userStats.rata_rata_kepuasan}
                </span>
                <span class="text-[10px] text-zinc-500 font-mono">
                    Dari {userStats.total_ulasan_diberikan} Ulasan
                </span>
            </div>
            <p class="text-[11px] text-zinc-500 font-light">Skor ulasan yang Anda berikan ke merchant</p>
        </div>

        <!-- Status Akun / Aktivitas Utama -->
        <div class="p-4 bg-white border border-zinc-200 rounded-xs space-y-2">
            <span class="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
                Status Aktivitas
            </span>
            <div class="flex items-baseline justify-between">
                <span class="text-lg font-bold text-emerald-600 uppercase tracking-tight">
                    Sangat Aktif
                </span>
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <p class="text-[11px] text-zinc-500 font-light">Konsistensi belanja bulanan stabil</p>
        </div>

    </section>

    <!-- BARIS 2: KATEGORI BARANG & HEATMAP JAM AKTIF -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- PEMBELIAN BERDASARKAN KATEGORI (Col: 6) -->
        <div class="lg:col-span-6 bg-white border border-zinc-200 p-6 rounded-xs space-y-6">
            <div class="flex items-center justify-between border-b border-zinc-100 pb-3">
                <h3 class="text-xs font-bold tracking-wider text-slate-950 uppercase">
                    Pembelian Berdasarkan Kategori
                </h3>
                <span class="text-[10px] text-zinc-400 font-mono uppercase">Top Kategori</span>
            </div>

            <!-- List Kategori Progress Bars -->
            <div class="space-y-4">
                {#each categoryStats as cat}
                    <div class="space-y-1.5">
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-800 font-medium">{cat.nama}</span>
                            <span class="font-mono text-zinc-600 font-semibold">
                                {cat.jumlah} Item • <span class="text-slate-900">Rp {(cat.total / 1000000).toFixed(1)}jt</span> ({cat.persentase}%)
                            </span>
                        </div>
                        <div class="w-full bg-zinc-100 h-2 rounded-xs overflow-hidden">
                            <div class="bg-slate-900 h-full transition-all duration-500" style="width: {cat.persentase}%"></div>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="pt-2 border-t border-zinc-100 flex justify-between items-center text-[11px] text-zinc-500 font-mono">
                <span>Total Kategori Terdata:</span>
                <span class="font-bold text-slate-900">17 Kategori Tersedia</span>
            </div>
        </div>

        <!-- HEATMAP JAM AKTIF BELANJA PENGGUNA (Col: 6) -->
        <div class="lg:col-span-6 bg-white border border-zinc-200 p-6 rounded-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-3 gap-2">
                <h3 class="text-xs font-bold tracking-wider text-slate-950 uppercase">
                    Rate Waktu Aktif Belanja
                </h3>
                <!-- Legenda Heatmap -->
                <div class="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                    <span>Sepi</span>
                    <span class="w-2.5 h-2.5 bg-zinc-200 border border-zinc-300 rounded-2xs inline-block"></span>
                    <span class="w-2.5 h-2.5 bg-zinc-400 border border-zinc-400 rounded-2xs inline-block"></span>
                    <span class="w-2.5 h-2.5 bg-slate-900 border border-slate-900 rounded-2xs inline-block"></span>
                    <span>Puncak</span>
                </div>
            </div>

            <!-- Matrix Heatmap Table -->
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                        <tr>
                            <th class="py-1.5 px-2 text-[10px] text-zinc-400 font-normal uppercase">Jam</th>
                            {#each days as day}
                                <th class="py-1.5 px-2 text-[10px] text-center text-zinc-500 font-bold uppercase">{day}</th>
                            {/each}
                        </tr>
                    </thead>
                    <tbody>
                        {#each timeSlots as slot, rowIndex}
                            <tr class="border-t border-zinc-100">
                                <td class="py-2 px-2 text-[10px] text-zinc-500 whitespace-nowrap">{slot.label}</td>
                                {#each days as _, colIndex}
                                    {@const level = userActivityHeatmap[rowIndex][colIndex]}
                                    <td class="p-1 text-center">
                                        <div 
                                            class="w-full h-7 rounded-2xs border transition duration-150 flex items-center justify-center text-[9px] font-bold {getHeatmapColor(level)}"
                                            title={`Hari: ${days[colIndex]}, Jam: ${slot.label}, Tingkat Aktivitas: ${level === 3 ? 'Sangat Tinggi' : level === 2 ? 'Sedang' : level === 1 ? 'Rendah' : 'Nonaktif'}`}
                                        >
                                            {#if level === 3}
                                                <span class="text-[8px]">ACTIVE</span>
                                            {/if}
                                        </div>
                                    </td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            <p class="text-[10px] text-zinc-400 pt-1 font-mono">
                * Grafik menunjukkan waktu kebiasaan Anda melakukan transaksi, checkout, dan penelusuran katalog produk.
            </p>
        </div>

    </section>

</section>