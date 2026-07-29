<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";

    const ulang = 10

    const ulangProduk = 21
</script>

{#snippet ListCategory(i: number)}
    <div class="list-kategori-{i} group flex items-center gap-3 px-3 py-2 bg-white border border-zinc-950/10 rounded-sm hover:border-slate-950 hover:bg-zinc-50 transition cursor-pointer flex-shrink-0">
                <!-- Icon / Avatar placeholder -->
        <div class="w-8 h-8 rounded-2xs bg-zinc-950 text-white flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-slate-800 transition">{i + 1}</div>
                    <!-- Text content -->
            <div class="flex flex-col truncate">
                <div class="flex items-center gap-1.5">
                    <span class="text-[11px] font-bold tracking-[0.1em] text-zinc-700 uppercase truncate">
                        KATEGORI
                    </span>
                    <span class="inline-block w-1 h-1 rounded-full bg-zinc-700"></span>
                
                </div>
                <div class="flex items-center justify-between gap-2 mt-0.5">
                    <span class="text-[8px] font-bold text-slate-950 truncate">
                        Terbaru(21)
                    </span>
                    <span class="text-[8px] font-medium text-zinc-400 shrink-0">
                        
                    </span>
                </div>
            </div>
    </div>
{/snippet}

<section id="category-section" class="p-4" >
<div class="flex items-start overflow-x-auto whitespace-nowrap scrollbar-none gap-2">
    {#each Array(ulang) as _, i}
        {@render ListCategory(i)}
    {/each}
</div>
</section>