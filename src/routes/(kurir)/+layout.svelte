<script lang="ts">
    import "../layout.css"
	import KurirHeadProfile from '$lib/page/kurir/general/KurirHeadProfile.svelte';
	import KurirFootProfile from "$lib/page/kurir/general/KurirFootProfile.svelte";

    let { children } = $props()
</script>

<KurirHeadProfile/>
{@render children()}
<KurirFootProfile/>