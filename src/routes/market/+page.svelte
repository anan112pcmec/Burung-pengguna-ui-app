<script lang="ts">
    import { page } from '$app/state';
    import { goto } from '$app/navigation';

    // ==========================================
    // 1. MEMBACA STATE DARI URL (Reaktif via Svelte 5 $derived)
    // ==========================================
    let searchParam = $derived(page.url.searchParams.get('q') ?? '');
    let categoryParam = $derived(page.url.searchParams.get('kategori') ?? '');
    let sellerTypeParam = $derived(page.url.searchParams.get('tipe_seller') ?? '');
    let sellerNameParam = $derived(page.url.searchParams.get('seller') ?? '');

    // ==========================================
    // 2. STATE LOCAL UNTUK INPUT/FILTER UI
    // ==========================================
    let searchQuery = $state('');
    let selectedCategory = $state('');
    let selectedSellerType = $state('');
    let sellerSearchQuery = $state('');

    // Sinkronisasi dari URL ke State Local saat halaman pertama kali dimuat / URL berubah
    $effect(() => {
        searchQuery = searchParam;
        selectedCategory = categoryParam;
        selectedSellerType = sellerTypeParam;
        sellerSearchQuery = sellerNameParam;
    });

    // ==========================================
    // 3. FUNGSI UPDATE URL (Pemicu Navigasi)
    // ==========================================
    function applyFilters() {
        const params = new URLSearchParams();

        if (searchQuery) params.set('q', searchQuery);
        if (selectedCategory) params.set('kategori', selectedCategory);
        if (selectedSellerType) params.set('tipe_seller', selectedSellerType);
        if (sellerSearchQuery) params.set('seller', sellerSearchQuery);

        // goto ke URL baru tanpa mereload halaman, mengupdate parameter reaktif
        goto(`/market?${params.toString()}`, { keepFocus: true });
    }

    function resetFilters() {
        searchQuery = '';
        selectedCategory = '';
        selectedSellerType = '';
        sellerSearchQuery = '';
        goto('/market');
    }

    // ==========================================
    // 4. DATA MOCKUP PRODUK (Contoh Filtering di Client-Side)
    // ==========================================
    const allProducts = [
        { id: 1, name: 'Sepatu Running Nike Aero', category: 'sepatu', seller: 'Sinar Sport', sellerType: 'star', price: 'Rp 1.200.000', img: '👟' },
        { id: 2, name: 'Kaos Polos Cotton Combed 30s', category: 'pakaian', seller: 'Polos Jaya', sellerType: 'regular', price: 'Rp 45.000', img: '👕' },
        { id: 3, name: 'Sandal Slide Adidas Comfort', category: 'sepatu', seller: 'Sinar Sport', sellerType: 'star', price: 'Rp 350.000', img: '🩴' },
        { id: 4, name: 'Jaket Coach Windbreaker Waterproof', category: 'pakaian', seller: 'Outerwear Co', sellerType: 'official', price: 'Rp 275.000', img: '🧥' },
        { id: 5, name: 'Raket Badminton Yonex Arcsaber', category: 'olahraga', seller: 'Toko Smash', sellerType: 'regular', price: 'Rp 850.000', img: '🏸' },
    ];

    // Filter produk secara real-time berdasarkan parameter URL yang aktif
    let filteredProducts = $derived(
        allProducts.filter(product => {
            const matchesSearch = !searchParam || product.name.toLowerCase().includes(searchParam.toLowerCase());
            const matchesCategory = !categoryParam || product.category === categoryParam;
            const matchesSellerType = !sellerTypeParam || product.sellerType === sellerTypeParam;
            const matchesSellerName = !sellerNameParam || product.seller.toLowerCase().includes(sellerNameParam.toLowerCase());
            
            return matchesSearch && matchesCategory && matchesSellerType && matchesSellerName;
        })
    );
</script>

<div class="min-h-screen mt-30 bg-gray-50 text-slate-800 p-6">
    <div class="max-w-7xl mx-auto">
        
        <!-- HEADER & SEARCH BAR UTAMA -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h1 class="text-2xl font-bold tracking-tight">Marketplace</h1>
                <p class="text-xs text-gray-500">Temukan barang impianmu di sini</p>
            </div>
            
            <!-- Input Search Utama -->
            <form onsubmit={(e) => { e.preventDefault(); applyFilters(); }} class="flex items-center gap-2 w-full md:w-96">
                <input 
                    type="text" 
                    placeholder="Cari produk di market..." 
                    bind:value={searchQuery}
                    class="w-full px-4 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-amber-500 transition"
                />
                <button type="submit" class="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
                    Cari
                </button>
            </form>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            <!-- ========================================== -->
            <!-- SIDEBAR FILTER -->
            <!-- ========================================== -->
            <aside class="bg-white p-5 rounded-xl border border-gray-100 shadow-sm space-y-6 h-fit">
                <div class="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h2 class="text-sm font-bold">Filter Pencarian</h2>
                    <button onclick={resetFilters} class="text-[11px] text-red-500 hover:underline font-semibold">
                        Reset All
                    </button>
                </div>

                <!-- 1. Filter Kategori (Radio) -->
                <div class="space-y-2">
                    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Kategori</h3>
                    <div class="space-y-1.5">
                        <label class="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                            <input type="radio" name="category" value="" bind:group={selectedCategory} onchange={applyFilters} class="accent-amber-500" />
                            <span>Semua Kategori</span>
                        </label>
                        <label class="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                            <input type="radio" name="category" value="sepatu" bind:group={selectedCategory} onchange={applyFilters} class="accent-amber-500" />
                            <span>Sepatu</span>
                        </label>
                        <label class="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                            <input type="radio" name="category" value="pakaian" bind:group={selectedCategory} onchange={applyFilters} class="accent-amber-500" />
                            <span>Pakaian</span>
                        </label>
                        <label class="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                            <input type="radio" name="category" value="olahraga" bind:group={selectedCategory} onchange={applyFilters} class="accent-amber-500" />
                            <span>Olahraga</span>
                        </label>
                    </div>
                </div>

                <!-- 2. Filter Tipe Seller (Select Dropdown) -->
                <div class="space-y-2">
                    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipe Seller</h3>
                    <select bind:value={selectedSellerType} onchange={applyFilters} class="w-full text-xs p-2 border border-gray-200 rounded-lg bg-white outline-none focus:border-amber-500">
                        <option value="">Semua Tipe</option>
                        <option value="regular">Regular Seller</option>
                        <option value="star">Star Seller ⭐️</option>
                        <option value="official">Official Store 👑</option>
                    </select>
                </div>

                <!-- 3. Filter Nama Seller (Input Text) -->
                <div class="space-y-2">
                    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Nama Toko/Seller</h3>
                    <input 
                        type="text" 
                        placeholder="Nama toko..." 
                        bind:value={sellerSearchQuery}
                        oninput={applyFilters}
                        class="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-amber-500 transition"
                    />
                </div>
            </aside>

            <!-- ========================================== -->
            <!-- LIST PRODUK / HASIL PENCARIAN -->
            <!-- ========================================== -->
            <main class="lg:col-span-3 space-y-4">
                
                <!-- Status Info Pencarian -->
                <div class="flex items-center justify-between text-xs text-gray-500 bg-white px-4 py-3 rounded-lg border border-gray-100 shadow-sm">
                    <div>
                        Menampilkan <span class="font-bold text-slate-800">{filteredProducts.length}</span> produk
                    </div>
                    {#if searchParam || categoryParam || sellerTypeParam || sellerNameParam}
                        <div class="flex gap-1.5 flex-wrap">
                            <span class="text-gray-400">Filter aktif:</span>
                            {#if searchParam}<span class="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-medium">Cari: "{searchParam}"</span>{/if}
                            {#if categoryParam}<span class="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-medium">Kat: {categoryParam}</span>{/if}
                            {#if sellerTypeParam}<span class="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-medium">Tipe: {sellerTypeParam}</span>{/if}
                            {#if sellerNameParam}<span class="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-medium">Toko: {sellerNameParam}</span>{/if}
                        </div>
                    {/if}
                </div>

                <!-- Grid Card Produk -->
                {#if filteredProducts.length > 0}
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {#each filteredProducts as product (product.id)}
                            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                                <div>
                                    <div class="h-32 bg-gray-50 rounded-lg flex items-center justify-center text-4xl mb-3">
                                        {product.img}
                                    </div>
                                    <div class="flex items-center gap-1 mb-1">
                                        <span class="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                                            {product.category}
                                        </span>
                                        {#if product.sellerType === 'star'}
                                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-yellow-50 text-yellow-700">Star ⭐️</span>
                                        {:else if product.sellerType === 'official'}
                                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">Official 👑</span>
                                        {/if}
                                    </div>
                                    <h3 class="text-xs font-bold text-slate-800 line-clamp-2 min-h-[2rem]">{product.name}</h3>
                                    <p class="text-[10px] text-gray-400 mt-1">Toko: <span class="font-medium text-gray-600">{product.seller}</span></p>
                                </div>
                                <div class="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                                    <span class="text-xs font-extrabold text-amber-600">{product.price}</span>
                                    <button class="bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-medium px-2.5 py-1 rounded-md transition">
                                        + Keranjang
                                    </button>
                                </div>
                            </div>
                        {/each}
                    </div>
                {:else}
                    <!-- State Kosong (Not Found) -->
                    <div class="bg-white p-12 text-center rounded-xl border border-gray-100 shadow-sm">
                        <span class="text-4xl">🔍</span>
                        <h3 class="text-sm font-bold text-slate-800 mt-3">Produk Tidak Ditemukan</h3>
                        <p class="text-xs text-gray-400 mt-1 max-w-xs mx-auto">Coba sesuaikan filter pencarianmu atau gunakan kata kunci pencarian yang lain.</p>
                        <button onclick={resetFilters} class="mt-4 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
                            Reset Filter
                        </button>
                    </div>
                {/if}

            </main>
        </div>
    </div>
</div>