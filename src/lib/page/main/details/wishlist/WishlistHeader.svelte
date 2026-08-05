<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";
    import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";
	import { DetailsWishlistPageState } from "$lib/state/main/details/wishlist/state.svelte";

    // Properti komponen (bisa disesuaikan dengan data dari backend/props)
    let { 
        wishlistName = "SETUP MEJA KERJA", 
        wishlistDescription = "Kumpulan referensi perangkat dan aksesoris untuk menunjang produktivitas kerja harian agar lebih rapi dan ergonomis.",
        visibility = "PUBLIC",
        itemCount = 20 
    }: {
        wishlistName?: string;
        wishlistDescription?: string;
        visibility?: string;
        itemCount?: number;
    } = $props();

    // Utility State untuk Search, Sort, & Filter
    let searchQuery = $state("");
</script>
{#snippet Static()}
    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-zinc-100 pb-4">
        <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 text-[10px] text-zinc-400 uppercase tracking-widest">
                <span>WISHLIST FOLDER</span>
                <span>•</span>
                <span class="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-2xs border border-emerald-200 uppercase">
                    PUBLIC
                </span>
            </div>
            
            <h1 class="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                SETUP MEJA KERJA
            </h1>

            <p class="text-xs sm:text-sm text-zinc-500 max-w-2xl leading-relaxed">
                Kumpulan referensi perangkat dan aksesoris untuk menunjang produktivitas kerja harian agar lebih rapi dan ergonomis.
            </p>
        </div>

        <div class="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <span class="text-xs bg-zinc-100 border border-zinc-950/10 px-2.5 py-1 rounded-2xs text-slate-800 font-bold">
                20 ITEM
            </span>

            <button 
                type="button" 
                class="text-[11px] px-3 py-1 bg-slate-950 text-white hover:bg-slate-800 rounded-2xs transition cursor-pointer"
            >
                BAGIKAN WISHLIST
            </button>
        </div>
    </div>
{/snippet}

{#snippet Edit()}
    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-zinc-100 pb-4">
        <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 text-[10px] text-zinc-400 uppercase tracking-widest">
                <span>EDIT WISHLIST FOLDER</span>
                <span>•</span>
                <select 
                    class="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-2xs border border-emerald-200 uppercase font-semibold focus:outline-none cursor-pointer"
                >
                    <option value="Public">PUBLIC</option>
                    <option value="Private">PRIVATE</option>
                </select>
            </div>
            
            <div>
                <input 
                    type="text" 
                    value="SETUP MEJA KERJA"
                    placeholder="Nama wishlist..."
                    class="w-full text-xl sm:text-2xl font-bold text-slate-950 tracking-tight bg-transparent border-b border-transparent hover:border-zinc-300 focus:border-slate-950 focus:outline-none transition px-0 py-0.5"
                />
            </div>

            <div>
                <textarea 
                    placeholder="Deskripsi wishlist..."
                    rows="2"
                    class="w-full text-xs sm:text-sm text-zinc-500 max-w-2xl leading-relaxed bg-transparent border-b border-transparent hover:border-zinc-300 focus:border-slate-950 focus:outline-none transition resize-none px-0 py-0.5"
                >Kumpulan referensi perangkat dan aksesoris untuk menunjang produktivitas kerja harian agar lebih rapi dan ergonomis.</textarea>
            </div>
        </div>

    
    </div>
{/snippet}

<section id="wishlist-details" class="w-full space-y-6 font-sans">
    
    <!-- ─── 1. HEADER UTILITY & SEARCH BAR ─── -->
	
    <header class=" bg-white p-4 sm:p-5 rounded-sm space-y-4">
       
        <!-- Folder Meta & Title Bar -->
        {#if DetailsWishlistPageState.IsStatic()}
            <button 
                    onclick={() => DetailsWishlistPageState.EditWishlist()}
                    type="button" 
                    class="text-[11px] px-3 py-1 bg-slate-950 text-white hover:bg-slate-800 rounded-2xs transition"
                >
                EDIT
            </button>
            {@render Static()}
        
        {:else if DetailsWishlistPageState.IsEditWishlist()}
             <div class="flex items-center gap-2 self-start sm:self-auto shrink-0">
           
            <button 
                
                type="button" 
                onclick={() => {
                     DetailsWishlistPageState.Static()
                }}
                class="text-[11px] px-3 py-1 bg-slate-800 text-white rounded-2xs transition font-medium cursor-pointer"
            >
                SIMPAN
            </button>
            <button 
                type="button" 
                onclick={() => {
                     DetailsWishlistPageState.Static()
                }}
                class="text-[11px] px-3 py-1 bg-zinc-200 text-zinc-700 hover:bg-zinc-300 rounded-2xs transition font-medium cursor-pointer"
            >
                BATAL
            </button>
        </div>
            {@render Edit()}
        {/if}
		
		 <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3">
            
            <!-- Input Search Produk -->
            <div class="relative">
                <input 
                    type="text" 
                    bind:value={searchQuery}
                    placeholder="Cari item di wishlist ini..." 
                    class="w-full h-9 px-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
                />
            </div>

            <!-- Sorting Dropdown -->
           <div class="flex items-center">
                <UrutkanBerdasar Kriteria={[
                    {nama: "Acak", fun: (): void => {}}, 
                    {nama: "Terbaru" , fun: (): void => {}}, 
                    {nama: "Terlama", fun: (): void => {}},
                    {nama: "Likes Tertinggi",  fun: (): void => {}}
                    ]} OpsiDropdown={"Kanan"}
                />
           </div>

        </div>
    </header>
</section>