<script lang="ts">
import "../layout.css"
	import UserFootProfile from '$lib/page/user/general/UserFootProfile.svelte';
	import UserHeadProfile from '$lib/page/user/general/UserHeadProfile.svelte';

    let {children} = $props()
</script>

<UserHeadProfile/>
{@render children()}
<UserFootProfile/>