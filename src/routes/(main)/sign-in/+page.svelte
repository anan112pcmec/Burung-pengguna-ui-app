<script>
    import Filosofi from '$lib/page/main/sign-in/Filosofi.svelte';
    import LangkahIntegrasi from '$lib/page/main/sign-in/LangkahIntegrasi.svelte';
    import Pengenalan from '$lib/page/main/sign-in/Pengenalan.svelte';
    import PointsPresentation from '$lib/page/main/sign-in/PointsPresentation.svelte';
    import TanpaDataVerbose from '$lib/page/main/sign-in/TanpaDataVerbose.svelte';
    import Testimoni from '$lib/page/main/sign-in/Testimoni.svelte';
    import UiClean from '$lib/page/main/sign-in/UiClean.svelte';

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