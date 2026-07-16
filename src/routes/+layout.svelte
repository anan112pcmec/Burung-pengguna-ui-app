<script lang="ts">
    import './layout.css';
    import NavHeader from "../lib/page/general/NavHeader.svelte";
    import NavFooter from "../lib/page/general/NavFooter.svelte";
    
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
	

    let { children } = $props();
    let mounted = $state(false);

    onMount(() => {
        mounted = true;
    });
</script>

<svelte:head>
    <link rel="icon"  />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Zen+Dots&display=swap" rel="stylesheet">
</svelte:head>

{#if mounted}
    <div in:fade={{ duration: 800 }}>
        <NavHeader  />
        {@render children()}
        <NavFooter/>
    </div>
{/if}