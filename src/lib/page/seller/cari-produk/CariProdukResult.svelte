<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";
	import { SellerGeneralPageState } from "../general/state/ui.state.svelte";

    const ulang = 10
</script>

<section id="produk-result"  class=" w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
    {#each Array(ulang) as _, i}
        <ProductCard id={i} path={"/details/produk-seller"} fun={() => SellerGeneralPageState.Detail()} />
    {/each}
</section>