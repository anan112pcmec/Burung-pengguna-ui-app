<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";

</script>

<section id="following-header">
      <div>
        <span class="text-[10px] uppercase tracking-[0.18em] font-medium text-slate-950/50">
            FOLLOWING RESULT
        </span>
    </div>

    <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 uppercase">
            SELLER(22)
        </h1>
    </div>

    <div class="grid grid-cols-2 items-center text-xs text-slate-800/70 pt-2">
        
        <UrutkanBerdasar Kriteria={[
            {nama: "Paling Populer", fun: () => {}},
			{nama: "Folower Tertinggi", fun: () => {}},
			{nama: "Follower Terendah", fun: () => {}},
			{nama: "Terbaru", fun: () => {}},
            {nama: "Terlama", fun: () => {}},
		]}/>

        <div class="flex items-center justify-end">
            <button type="button" class="flex items-center gap-2 hover:text-slate-950 transition group">
                <svg 
                    class="w-3.5 h-3.5 text-slate-700"
                    viewBox="0 0 25 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3.38501 9.75C3.38501 9.12868 3.88869 8.625 4.51001 8.625L20.51 8.625C21.1313 8.625 21.635 9.12868 21.635 9.75C21.635 10.3713 21.1313 10.875 20.51 10.875L4.51001 10.875C3.88869 10.875 3.38501 10.3713 3.38501 9.75Z" fill="currentColor"/>
                    <g opacity="0.4">
                        <path d="M18.01 13.125C18.6313 13.125 19.135 13.6287 19.135 14.25C19.135 14.8713 18.6313 15.375 18.01 15.375H7.01001C6.38869 15.375 5.88501 14.8713 5.88501 14.25C5.88501 13.125 6.38869 13.125 7.01001 13.125H18.01Z" fill="currentColor"/>
                    </g>
                </svg>

                <span class="tracking-[0.15em] text-[10px] font-medium uppercase group-hover:underline">
                    FILTER
                </span>
            </button>
        </div>

    </div>
</section>