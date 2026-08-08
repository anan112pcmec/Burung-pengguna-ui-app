<script lang="ts">
	import WishlistDetails from "$lib/page/main/details/wishlist/WishlistHeader.svelte";
	import OtpValidation from "$lib/page/main/sign-up/OtpValidation.svelte";
	import SignUp from "$lib/page/main/sign-up/SignUp.svelte";
	import { SignUpPageState } from "$lib/page/main/sign-up/state/ui.state.svelte";

</script>

<main class="mt-[7rem]">
    <SignUp/>
	{#if SignUpPageState.Status == 'otp'}
		<OtpValidation/>
	{/if}
</main>