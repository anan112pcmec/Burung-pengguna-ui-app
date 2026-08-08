<script lang="ts">
	import CartHeader from "$lib/page/main/cart/CartHeader.svelte";
	import HapusKeranjangElement from "$lib/page/main/cart/HapusKeranjangElement.svelte";
	import ListCart from "$lib/page/main/cart/ListCart.svelte";
	import TotalBelanja from "$lib/page/main/cart/TotalBelanja.svelte";
	import { CartPageState } from "$lib/page/main/cart/state/ui.state.svelte";


</script>

<main class="mt-[7rem] grid grid-cols-[72%_28%] pl-2 pr-2">
    {#if CartPageState.IsHapusKeranjang()}
        <HapusKeranjangElement/>
    {/if}
   <div>
   <CartHeader/>
   <ListCart/>
   </div>
    <TotalBelanja/>
</main>