<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";

    const ulang = 20
</script>

<section id="likes-result"class="pr-2 pl-2 pt-5 w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
        {#each Array(ulang) as _, i}
            <ProductCard id={i} path={"/details/product"}/>
        {/each}
</section>