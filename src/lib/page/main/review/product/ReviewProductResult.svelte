<script lang="ts">
    import { ReviewProductPageState as pageFlowState, ReviewProductPageState } from '$lib/page/main/review/product/state/ui.state.svelte';
    import type { Action } from 'svelte/action';

const ulang = 9
</script>
{#snippet BelumDiReview(i: number)}
    {@const barang = {
        nama: "Mechanical Keyboard Switch Brown",
        kategori: "Elektronik & Komputer",
        jumlah: 1,
        deskripsi: "Keyboard mekanikal layout 75% dengan koneksi wireless bluetooth dan dongle 2.4Ghz. Kondisi baru, segel utuh."
    }}

    <!-- Tambahkan onclick langsung di card wrapper -->
    <div 
        role="button"
        tabindex="0"
        onclick={() => ReviewProductPageState.BerikanUlasanProduk()}
        onkeydown={(e) => e.key === 'Enter' && ReviewProductPageState.BerikanUlasanProduk()}
        class="belum-di-review-element-{i} w-full bg-white border border-zinc-950/10 p-4 flex flex-col gap-4 hover:border-slate-950 transition-colors group cursor-pointer"
    >
        <!-- Info Barang -->
        <div class="flex items-start gap-4 pointer-events-none">
            <!-- Image Placeholder Struktural -->
            <div class="w-20 h-20 shrink-0 bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                <svg class="w-6 h-6 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>

            <!-- Detail -->
            <div class="flex-1 min-w-0 flex flex-col gap-1">
                <div class="flex items-baseline justify-between gap-2">
                    <p class="font-mono text-[9px] text-zinc-500 uppercase tracking-widest truncate">
                        {barang.kategori}
                    </p>
                    <p class="font-mono text-[10px] text-slate-950 font-bold shrink-0">
                        QTY: {barang.jumlah}
                    </p>
                </div>
                <h3 class="font-sans font-bold text-slate-950 text-sm leading-snug truncate">
                    {barang.nama}
                </h3>
                <p class="font-sans text-[11px] text-zinc-600 leading-relaxed line-clamp-2 mt-0.5">
                    {barang.deskripsi}
                </p>
            </div>
        </div>

        <!-- Aksi & Bintang Kosong -->
        <div class="border-t border-zinc-950/10 pt-3 flex items-center justify-between pointer-events-none">
            <div class="flex items-center gap-1">
                {#each Array(5) as _}
                    <svg class="w-5 h-5 text-zinc-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                {/each}
            </div>
            <button class="font-mono font-bold text-[10px] bg-slate-950 text-white px-4 py-1.5 uppercase tracking-wide hover:bg-slate-800 transition-colors pointer-events-auto">
                Tulis Ulasan
            </button>
        </div>
    </div>
{/snippet}

{#snippet SudahDiReview(i: number)}
    {@const review = {
        barang_induk: "Monitor Dell UltraSharp 27 Inch 4K",
        rating: 4.5,
        ulasan: "Layar sangat tajam dan reproduksi warnanya akurat. Sempurna untuk kebutuhan desain grafis dan editing video. Pengiriman juga menggunakan packing kayu jadi sangat aman sampai tujuan tanpa cacat sama sekali.",
        created_at: "2026-08-01 14:30 WIB",
        updated_at: "2026-08-02 09:15 WIB"
    }}

    <!-- Tambahkan onclick langsung di card wrapper -->
    <div 
        role="button"
        tabindex="0"
        onclick={() => {
            console.log("el sudah di review di tekan");
            ReviewProductPageState.EditUlasanProduk();
        }}
        onkeydown={(e) => e.key === 'Enter' && ReviewProductPageState.EditUlasanProduk()}
        class="sudah-di-review-element-{i} w-full bg-white border border-zinc-950/10 p-4 flex flex-col gap-3 group cursor-pointer"
    >
        <!-- Header Review: Nama Barang & Tanggal -->
        <div class="flex items-start justify-between gap-4 border-b border-zinc-950/10 pb-3 pointer-events-none">
            <div class="flex flex-col gap-1">
                <h3 class="font-sans font-bold text-slate-950 text-sm">
                    {review.barang_induk}
                </h3>
                <div class="flex items-center gap-2 mt-1">
                    <div class="bg-slate-950 text-white font-mono text-[10px] font-bold px-1.5 py-0.5 flex items-center gap-1">
                        <span>{review.rating.toFixed(1)}</span>
                    </div>
                    <div class="flex items-center gap-0.5">
                        {#each Array(Math.floor(review.rating)) as _}
                            <svg class="w-3.5 h-3.5 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        {/each}
                        {#if review.rating % 1 !== 0}
                            <svg class="w-3.5 h-3.5 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z" />
                            </svg>
                        {/if}
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col items-end gap-1 shrink-0 text-right">
                <p class="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">Diulas Pada</p>
                <p class="font-mono text-[10px] text-slate-900">{review.created_at}</p>
            </div>
        </div>

        <div class="pt-1 pointer-events-none">
            <p class="font-sans text-[12px] text-slate-800 leading-relaxed">
                "{review.ulasan}"
            </p>
        </div>

        <div class="mt-2 flex items-center justify-between">
            <p class="font-mono text-[9px] text-zinc-400 pointer-events-none">
                Terakhir diubah: {review.updated_at}
            </p>
            
            <button class="font-mono font-bold text-[10px] text-slate-950 hover:text-zinc-500 transition-colors uppercase tracking-wide flex items-center gap-1 pointer-events-auto">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit Ulasan
            </button>
        </div>
    </div>
{/snippet}
<section id="review-product-result" class="w-full bg-zinc-50 p-4 md:p-6 min-h-[50vh]">
    {#if ReviewProductPageState.IsBerikanUlasanProduk()}
        <!-- Tampilan Form Berikan Ulasan Baru -->
        <div class="max-w-2xl mx-auto w-full bg-white border border-zinc-950/10 p-6 flex flex-col gap-6">
            <div class="border-b border-zinc-950/10 pb-4">
                <h2 class="font-sans font-bold text-slate-950 text-lg">Berikan Ulasan</h2>
                <p class="font-sans text-sm text-zinc-500 mt-1">Bagaimana kepuasanmu terhadap produk ini?</p>
            </div>

            <div class="flex flex-col gap-6">
                <!-- Input Rating (Bintang) -->
                <div class="flex flex-col gap-2">
                    <label class="font-mono text-[10px] uppercase tracking-widest text-slate-950 font-bold">Pilih Bintang</label>
                    <div class="flex items-center gap-2">
                        {#each Array(5) as _, i}
                            <svg class="bintang-ke-{i} w-8 h-8 text-zinc-300 cursor-pointer hover:text-slate-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        {/each}
                    </div>
                </div>

                <!-- Input Teks Ulasan -->
                <div class="flex flex-col gap-2">
                    <label class="font-mono text-[10px] uppercase tracking-widest text-slate-950 font-bold">Tulis Pengalamanmu</label>
                    <textarea 
                        class="w-full bg-transparent border border-zinc-950/10 p-3 font-sans text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors resize-y min-h-[120px]" 
                        placeholder="Contoh: Kualitas barang sangat bagus, sesuai deskripsi dan pengiriman cepat..."
                    ></textarea>
                </div>
            </div>

            <!-- Aksi Buttons -->
            <div class="flex items-center gap-3 pt-2">
                <button class="font-mono font-bold text-[10px] bg-slate-950 text-white px-6 py-2.5 uppercase tracking-wide hover:bg-slate-800 transition-colors">
                    Kirim Ulasan
                </button>
                <button 
                    onclick={() => ReviewProductPageState.TidakBerikanUlasanProduk()} 
                    class="font-mono font-bold text-[10px] bg-white border border-zinc-950/10 text-slate-950 px-6 py-2.5 uppercase tracking-wide hover:bg-zinc-50 transition-colors"
                >
                    Batal
                </button>
            </div>
        </div>

    {:else if ReviewProductPageState.IsEditUlasanProduk()}
        <!-- Tampilan Form Edit Ulasan -->
        <div class="max-w-2xl mx-auto w-full bg-white border border-zinc-950/10 p-6 flex flex-col gap-6">
            <div class="border-b border-zinc-950/10 pb-4">
                <h2 class="font-sans font-bold text-slate-950 text-lg">Edit Ulasan</h2>
                <p class="font-sans text-sm text-zinc-500 mt-1">Perbarui ulasan untuk produk ini.</p>
            </div>

            <div class="flex flex-col gap-6">
                <!-- Input Rating (Bintang Terisi 4 sebagai mock) -->
                <div class="flex flex-col gap-2">
                    <label class="font-mono text-[10px] uppercase tracking-widest text-slate-950 font-bold">Pilih Bintang</label>
                    <div class="flex items-center gap-2">
                        {#each Array(4) as _}
                            <svg class="w-8 h-8 text-slate-950 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        {/each}
                        <svg class="w-8 h-8 text-zinc-300 cursor-pointer hover:text-slate-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </div>
                </div>

                <!-- Input Teks Ulasan -->
                <div class="flex flex-col gap-2">
                    <label class="font-mono text-[10px] uppercase tracking-widest text-slate-950 font-bold">Tulis Pengalamanmu</label>
                    <textarea 
                        class="w-full bg-transparent border border-zinc-950/10 p-3 font-sans text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors resize-y min-h-[120px]"
                    >Layar sangat tajam dan reproduksi warnanya akurat. Sempurna untuk kebutuhan desain grafis dan editing video. Pengiriman juga menggunakan packing kayu jadi sangat aman sampai tujuan tanpa cacat sama sekali.</textarea>
                </div>
            </div>

            <!-- Aksi Buttons -->
            <div class="flex items-center gap-3 pt-2">
                <button class="font-mono font-bold text-[10px] bg-slate-950 text-white px-6 py-2.5 uppercase tracking-wide hover:bg-slate-800 transition-colors">
                    Simpan Perubahan
                </button>
                <button 
                    onclick={() => ReviewProductPageState.TidakEditUlasanProduk()} 
                    class="font-mono font-bold text-[10px] bg-white border border-zinc-950/10 text-slate-950 px-6 py-2.5 uppercase tracking-wide hover:bg-zinc-50 transition-colors"
                >
                    Batal
                </button>
            </div>
        </div>

    {:else}
        <div  class="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
        {#each Array(ulang) as _, i }
            {#if pageFlowState.IsMenungguReview()}
                {@render BelumDiReview(i)}
            {:else if pageFlowState.IsTelahDiReview()}
                {@render SudahDiReview(i)}
            {/if}
        {/each}
    </div>
    {/if}
</section>