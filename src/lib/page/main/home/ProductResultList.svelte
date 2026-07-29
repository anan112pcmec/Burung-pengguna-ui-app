<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";

    const ulang = 21
</script>

<section class="p-4 w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
        {#each Array(ulang) as _, i}
            <ProductCard id={i}/>
        {/each}
</section>