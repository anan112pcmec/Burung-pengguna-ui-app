<script>
    import Filosofi from '$lib/page/main/home/Filosofi.svelte';
    import LangkahIntegrasi from '$lib/page/main/home/LangkahIntegrasi.svelte';
    import Pengenalan from '$lib/page/main/home/Pengenalan.svelte';
    import PointsPresentation from '$lib/page/main/home/PointsPresentation.svelte';
    import TanpaDataVerbose from '$lib/page/main/home/TanpaDataVerbose.svelte';
    import Testimoni from '$lib/page/main/home/Testimoni.svelte';
    import UiClean from '$lib/page/main/home/UiClean.svelte';

    import { MarginFromHeader } from "../../../constant/NavbarDesign";
</script>

<main class="px-4 sm:px-8 md:px-12 lg:px-18 space-y-4 md:space-y-8 {MarginFromHeader}">
    <Pengenalan/>
    <PointsPresentation/>
    <UiClean/>
    <TanpaDataVerbose/>
    <LangkahIntegrasi/>
    <Filosofi/>
    <Testimoni/>
</main>