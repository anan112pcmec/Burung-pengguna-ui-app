<script lang="ts">
  const ulang = 9;
</script>

{#snippet Etalase(i: number)}
  <div class="etalase-overview-{i} bg-slate-100 rounded-xl p-4 aspect-square flex items-center justify-center text-slate-600 font-medium text-sm text-center border border-slate-200">
    Foto Etalase {i + 1}
  </div>
{/snippet}

<section id="etalase-section" class=" p-2">
  <div class="grid grid-cols-3 gap-4">
    {#each Array(ulang) as _, i}
      {@render Etalase(i)}
    {/each}
  </div>
</section>