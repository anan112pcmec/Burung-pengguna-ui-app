<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";

    
	const wishlistItems = [1, 2, 3, 4, 5, 6];
</script>

<section  class="pr-2 pl-2 w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
        {#each wishlistItems as id}
			<ProductCard {id} />
		{/each}

</section>