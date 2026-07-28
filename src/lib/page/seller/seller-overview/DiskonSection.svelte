<script lang="ts">
  const bayangkanajasisellerbikindiskonsebanyak = 6;
  const bayangkanajaadaimagefotobarangdidiskon = 5;

  let pos: number = 0;
</script>

{#snippet DiskonElement(i: number)}
  <div class="diskon-elemen-{i} relative bg-white text-zinc-900 rounded-2xl p-5 min-w-[12rem] shrink-0 border border-zinc-200/80 shadow-sm hover:border-zinc-300 transition-all overflow-visible my-4">
    
    <!-- Icon Bundle Melayang (Clean Monochrome) -->
    <div class="absolute -top-3 -right-3 bg-zinc-900 text-white p-2 rounded-xl shadow-md border border-zinc-800 flex items-center justify-center z-30">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    </div>

    <div class="grid grid-cols-[55%_45%] items-center gap-2">
      <!-- Teks Diskon -->
      <div class="flex flex-col justify-center">
        <h2 class="text-4xl font-extrabold text-zinc-900  tracking-tight">40%</h2>
        <span class="text-[11px] text-zinc-500 mt-1 ">Promo Spesial</span>
      </div>

      <div class="relative h-28 w-full">
        {#each Array(bayangkanajaadaimagefotobarangdidiskon) as _, idx}
          <div 
            style="z-index: {10 - idx}; transform: translateX({pos + (idx * 12)}px) rotate({pos - (idx * 8)}deg) skewX(2deg);" 
            class="card_{idx} absolute top-0 left-0 w-20 h-24 rounded-xl overflow-hidden shadow-md border-2 border-white transition-all duration-300 origin-bottom-left bg-zinc-100"
          >
            <!-- Mockup Image Full Container -->
            <img 
              src="https://picsum.photos/200/300?random={i * 10 + idx}" 
              alt="Foto Produk" 
              class="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all" 
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
{/snippet}

<!-- Container Utama Horizontal Scroll -->
<section id="diskon-section">
    <h1 class="p-2">
        <span>Diskon Nama Seller</span>
    </h1>
    <div  class="flex gap-6 overflow-x-auto scrollbar-none items-center p-4 w-full bg-white">
         {#each Array(bayangkanajasisellerbikindiskonsebanyak) as _, i}
            {@render DiskonElement(i)}
        {/each}
    </div>
</section>