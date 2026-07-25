
<script lang="ts">
	import ChatPerformance from "$lib/page/seller/statistik-detail/ChatPerformance.svelte";
	import EfektivitasPromosi from "$lib/page/seller/statistik-detail/EfektivitasPromosi.svelte";
	import HeadingStatistik from "$lib/page/seller/statistik-detail/HeadingStatistik.svelte";
	import ManajemenStok from "$lib/page/seller/statistik-detail/ManajemenStok.svelte";
	import MetricCardsEngagement from "$lib/page/seller/statistik-detail/MetricCardsEngagement.svelte";
	import PerformancePopularity from "$lib/page/seller/statistik-detail/PerformancePopularity.svelte";
	import ReputasiRisiko from "$lib/page/seller/statistik-detail/ReputasiRisiko.svelte";
	import TraffikData from "$lib/page/seller/statistik-detail/TraffikData.svelte";


</script>



<main class="w-full min-h-screen bg-white text-slate-900 p-4 lg:p-8 space-y-10 font-sans">
    <HeadingStatistik/>
    <MetricCardsEngagement/>
    <PerformancePopularity/>
    <ChatPerformance/>
    <ReputasiRisiko/>
    <ManajemenStok/>
    <TraffikData/>
    <EfektivitasPromosi/>
</main>