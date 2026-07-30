<script lang="ts">
    import "../layout.css"
	import KurirHeadProfile from '$lib/page/kurir/general/KurirHeadProfile.svelte';
	import KurirFootProfile from "$lib/page/kurir/general/KurirFootProfile.svelte";
	import KurirPageDispatcher from "$lib/page/kurir/general/KurirPageDispatcher.svelte";

    let { children } = $props()
</script>

<KurirHeadProfile/>
<KurirPageDispatcher/>
{@render children()}
<KurirFootProfile/>