<script lang="ts">
	import BannerSeller from "$lib/page/seller/seller-overview/BannerSeller.svelte";
	import DiskonSection from "$lib/page/seller/seller-overview/DiskonSection.svelte";
	import DisplayBarang from "$lib/page/seller/seller-overview/DisplayBarang.svelte";
	import EtalaseSection from "$lib/page/seller/seller-overview/EtalaseSection.svelte";
	import FotoTokoFisikSeler from "$lib/page/seller/seller-overview/FotoTokoFisikSeler.svelte";



</script>

<main class="p-4"> 
    
    <BannerSeller/>
    <DisplayBarang/>
    <EtalaseSection/>
    <DiskonSection/>
    <FotoTokoFisikSeler/>
</main>