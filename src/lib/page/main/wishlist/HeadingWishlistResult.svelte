<script lang="ts">
    import { WishlistPageState } from "$lib/state/main/wishlist/state.svelte";

    // State untuk Search, Sort, & Total Counter Wishlist
    let searchQuery = $state("");
    let sortBy = $state("newest"); // "newest", "oldest"
    let visibilityFilter = $state("all"); // "all", "public", "private"
    let totalWishlist = $state(3);
</script>

<section id="heading-wishlist-result" class="w-full h-[8rem] border-b border-zinc-950/10 bg-white font-sans">
    <div class="grid grid-cols-[20%_50%_30%] w-full h-full items-center">
        
        <!-- Col 1: Title & Total Items -->
        <div class="pl-4 border-r border-zinc-950/10 h-full flex flex-col justify-center">
            <span class="text-[9px] font-bold tracking-[0.18em] text-zinc-400 uppercase block">
                WISHLIST RESULT
            </span>
            <h1 class="text-xl font-bold text-slate-950 tracking-tight mt-0.5">
                HASIL ({totalWishlist})
            </h1>
        </div>

        <!-- Col 2: Search Bar & Search Action Button -->
        <div class="px-4 h-full flex items-center border-r border-zinc-950/10">
            <div class="grid grid-cols-[1fr_auto] gap-2 w-full items-center">
                <!-- Input Search -->
                <div class="relative w-full">
                    <input 
                        type="text" 
                        bind:value={searchQuery}
                        placeholder="Cari folder koleksi wishlist..." 
                        class="w-full h-10 px-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
                    />
                </div>

                <!-- Search Trigger Button -->
                <button 
                    type="button" 
                    class="h-10 px-3.5 bg-slate-950 text-white hover:bg-slate-800 border border-slate-950 rounded-2xs flex items-center justify-center transition cursor-pointer shrink-0"
                    title="Cari"
                >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Col 3: Sort & Visibility Filter Controls with Icons -->
        <div class="px-4 flex items-center gap-2 justify-end">
            <!-- Sort Terbaru Ditambahkan -->
            <div class="relative flex items-center">
                <svg class="w-3.5 h-3.5 text-zinc-400 absolute left-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                <select 
                    bind:value={sortBy} 
                    class="h-10 pl-8 pr-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-950 transition cursor-pointer appearance-none"
                >
                    <option value="newest">TERBARU DITAMBAHKAN</option>
                    <option value="oldest">TERLAMA DITAMBAHKAN</option>
                </select>
            </div>

            <!-- Filter Public / Private -->
            <div class="relative flex items-center">
                <svg class="w-3.5 h-3.5 text-zinc-400 absolute left-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <select 
                    bind:value={visibilityFilter} 
                    class="h-10 pl-8 pr-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-950 transition cursor-pointer uppercase appearance-none"
                >
                    <option value="all">SEMUA</option>
                    <option value="public">PUBLIC</option>
                    <option value="private">PRIVATE</option>
                </select>
            </div>
        </div>

    </div>
</section>