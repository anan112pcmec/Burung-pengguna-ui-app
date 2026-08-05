<script>
	import DetailProduk from "$lib/GeneralComponent/DetailProduk.svelte";
	import KomentarProduk from "$lib/GeneralComponent/KomentarProduk.svelte";
	import ReviewProduk from "$lib/GeneralComponent/ReviewProduk.svelte";
	import SaranProduk from "$lib/GeneralComponent/SaranProduk.svelte";


</script>

<main class="mt-[7rem]">
<DetailProduk/>
<KomentarProduk/>
<ReviewProduk/>
<SaranProduk path={"/details/produk"}/>
</main>