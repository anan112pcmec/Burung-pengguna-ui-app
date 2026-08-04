<script lang="ts">
	import DetailProduk from "$lib/GeneralComponent/DetailProduk.svelte";
	import KomentarProduk from "$lib/GeneralComponent/KomentarProduk.svelte";
	import ReviewProduk from "$lib/GeneralComponent/ReviewProduk.svelte";
	import SaranProduk from "$lib/GeneralComponent/SaranProduk.svelte";
	import DiskonHeader from "$lib/page/seller/details/diskon/DiskonHeader.svelte";
	import DiskonProdukResult from "$lib/page/seller/details/diskon/DiskonProdukResult.svelte";

</script>

<main class="p-4 space-y-2">
    <DetailProduk/>
    <KomentarProduk/>
    <ReviewProduk/>
    <SaranProduk path={"/details/produk-seller"}/>
</main>