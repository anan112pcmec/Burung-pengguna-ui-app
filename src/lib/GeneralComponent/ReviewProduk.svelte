<script lang="ts">
    // ─── TIPE DATA SESUAI GORM BACKEND ───
    export interface MediaReviewFoto {
        id_media_review_foto: number;
        id_review: number;
        key: string;
        format: string;
    }

    export interface MediaReviewVideo {
        id_media_review_video: number;
        id_review: number;
        key: string;
        format: string;
    }

    export interface ReviewItem {
        id_review: number;
        id_pengguna_review: number;
        id_barang_induk_review: number;
        rating_review: number;
        ulasan_review: string;
        created_at: string;
        // Data Agregasi / Join dari Pengguna & Relasi
        nama_pengguna?: string;
        foto_profil?: string;
        total_like?: number;
        total_dislike?: number;
        is_liked?: boolean;
        is_disliked?: boolean;
        media_foto?: MediaReviewFoto[];
        media_video?: MediaReviewVideo | null; // Maksimal 1 Video
    }

    let { reviews = [] }: { reviews?: ReviewItem[] } = $props();

    // State untuk kontrol Buka/Tutup Section Ulasan
    let isOpen = $state(true);

    // Mock Data Sesuai Relasi GORM
    const dummyReviews: ReviewItem[] = [
        {
            id_review: 1,
            id_pengguna_review: 88,
            id_barang_induk_review: 10,
            rating_review: 5.0,
            ulasan_review: "Barang bagus, sesuai ekspektasi. Material solid dan finishing rapi tanpa cacat.",
            created_at: "2026-08-04T12:00:00Z",
            nama_pengguna: "user_dev88",
            foto_profil: "https://picsum.photos/100/100?random=1",
            total_like: 12,
            total_dislike: 0,
            is_liked: false,
            is_disliked: false,
            media_foto: [
                { id_media_review_foto: 1, id_review: 1, key: "https://picsum.photos/400/400?random=11", format: "jpeg" },
                { id_media_review_foto: 2, id_review: 1, key: "https://picsum.photos/400/400?random=12", format: "jpeg" }
            ],
            media_video: {
                id_media_review_video: 1,
                id_review: 1,
                key: "https://www.w3schools.com/html/mov_bbb.mp4",
                format: "mp4"
            }
        },
        {
            id_review: 2,
            id_pengguna_review: 42,
            id_barang_induk_review: 10,
            rating_review: 4.5,
            ulasan_review: "Pengiriman cepat, tapi dus sedikit penyok di pojok. Barang aman tidak ada lecet.",
            created_at: "2026-08-03T15:30:00Z",
            nama_pengguna: "zinc_lover",
            foto_profil: "https://picsum.photos/100/100?random=2",
            total_like: 3,
            total_dislike: 1,
            is_liked: true,
            is_disliked: false,
            media_foto: [
                { id_media_review_foto: 3, id_review: 2, key: "https://picsum.photos/400/400?random=13", format: "png" }
            ],
            media_video: null
        }
    ];

    let reviewList = $derived(reviews.length > 0 ? reviews : dummyReviews);

    function formatDate(dateStr: string) {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
    }
</script>

<!-- ==========================================
     SNIPPET: ITEM ULASAN (REVIEW)
=========================================== -->
{#snippet Review(item: ReviewItem)}
    <div class="p-4 border-b border-zinc-200 last:border-b-0 bg-white space-y-3 font-sans">
        
        <!-- Header: Profil & Rating -->
        <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-2.5">
                <img 
                    src={item.foto_profil || "https://picsum.photos/100/100?random=99"} 
                    alt={item.nama_pengguna} 
                    class="w-8 h-8 rounded-full object-cover border border-zinc-200 shrink-0" 
                />
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-zinc-950">
                        {item.nama_pengguna || `User #${item.id_pengguna_review}`}
                    </span>
                    <span class="text-[10px] text-zinc-400">
                        {formatDate(item.created_at)}
                    </span>
                </div>
            </div>

            <!-- Rating Tag -->
            <div class="flex items-center gap-1 bg-zinc-950 text-white px-2 py-0.5 rounded-2xs text-[11px] font-bold">
                <span>★</span>
                <span>{Number(item.rating_review).toFixed(1)}</span>
            </div>
        </div>

        <!-- Teks Ulasan -->
        {#if item.ulasan_review}
            <p class="text-xs text-zinc-700 leading-relaxed font-normal">
                {item.ulasan_review}
            </p>
        {/if}

        <!-- Media Preview (1 Video + Multiple Foto) -->
        {#if item.media_video || (item.media_foto && item.media_foto.length > 0)}
            <div class="flex flex-wrap gap-2 pt-1">
                
                <!-- Video (Maksimal 1 Video) -->
                {#if item.media_video}
                    <div class="relative w-24 h-24 bg-zinc-950 rounded-2xs overflow-hidden border border-zinc-300 shrink-0 group">
                        <video class="w-full h-full object-cover">
                            <source src={item.media_video.key} type="video/{item.media_video.format}" />
                            <track kind="captions" />
                        </video>
                        <div class="absolute inset-0 bg-zinc-950/40 flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                {/if}

                <!-- Foto Grid (Multiple Foto) -->
                {#if item.media_foto}
                    {#each item.media_foto as foto (foto.id_media_review_foto)}
                        <div class="w-24 h-24 bg-zinc-100 rounded-2xs overflow-hidden border border-zinc-200 shrink-0">
                            <img 
                                src={foto.key} 
                                alt="Review Foto" 
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer" 
                            />
                        </div>
                    {/each}
                {/if}

            </div>
        {/if}

        <!-- Action Bar: Like & Dislike Counter -->
        <div class="flex items-center gap-3 pt-1 text-[11px] text-zinc-500">
            <!-- Like Button -->
            <button class="flex items-center gap-1 hover:text-zinc-950 transition-colors cursor-pointer {item.is_liked ? 'text-zinc-950 font-bold' : ''}">
                <svg class="w-3.5 h-3.5" fill={item.is_liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.888 1.043-2.19 1.685-3.585 1.685H10.5a2.25 2.25 0 0 1-2.25-2.25V10.25Z" />
                </svg>
                <span>{item.total_like || 0}</span>
            </button>

            <!-- Dislike Button -->
            <button class="flex items-center gap-1 hover:text-zinc-950 transition-colors cursor-pointer {item.is_disliked ? 'text-zinc-950 font-bold' : ''}">
                <svg class="w-3.5 h-3.5" fill={item.is_disliked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.367 13.75c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 0 0-.322 1.672v.25a.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H4.373c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 0 1 2.25 10.5c0-2.81 1.01-5.385 2.649-7.521C5.787 1.936 7.089 1.294 8.484 1.294H13.5a2.25 2.25 0 0 1 2.25 2.25v10.206Z" />
                </svg>
                <span>{item.total_dislike || 0}</span>
            </button>
        </div>

    </div>
{/snippet}

<!-- ==========================================
     SECTION: ULASAN PRODUK
=========================================== -->
<section id="review-produk" class="w-full border-y border-zinc-200 bg-white">
    <!-- Header Section (Klik untuk Tutup/Buka) -->
    <button 
        type="button"
        onclick={() => isOpen = !isOpen}
        class="w-full px-6 py-3.5 border-b border-zinc-200 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors"
    >
        <div class="flex items-center gap-2">
            <h3 class="text-[11px] font-bold uppercase tracking-wider text-zinc-950">
                Ulasan Pembeli
            </h3>
            <span class="text-[10px] bg-zinc-100 border border-zinc-200 px-1.5 py-0.2 font-bold rounded-full text-zinc-700">
                {reviewList.length}
            </span>
        </div>
        <div class="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
            <span class="transition-colors">
                {isOpen ? 'Tutup' : 'Lihat Semua'}
            </span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="w-4 h-4 text-zinc-400 transition-transform duration-300 {isOpen ? 'rotate-180' : ''}"
            >
                <path d="m6 9 6 6 6-6"/>
            </svg>
        </div>
    </button>

    <!-- List Ulasan (Ditampilkan Berdasarkan State isOpen) -->
    {#if isOpen}
        <div class="divide-y divide-zinc-200 max-h-[15rem] overflow-y-auto scroll-auto scrollbar-none transition-all">
            {#each reviewList as item (item.id_review)}
                {@render Review(item)}
            {:else}
                <div class="p-6 text-center text-xs text-zinc-400">
                    NIL_REVIEWS
                </div>
            {/each}
        </div>
    {/if}
</section>