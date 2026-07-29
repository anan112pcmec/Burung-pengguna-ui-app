<script>
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";

    if (browser) {
        // eslint-disable-next-line svelte/no-navigation-without-resolve
        goto('/sign-in', { replaceState: true });
    }
</script>