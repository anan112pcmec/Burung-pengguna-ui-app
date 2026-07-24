<script lang="ts">
	import ProductCard from "$lib/GeneralComponent/ProductCard.svelte";


    const ulang = 10
</script>

<section id="display-hot-barang" class="grid grid-rows-[13%_5%_82%] h-[21rem] w-full" >
    <div class="grid grid-cols-[30%_40%_30%] p-2">
        <div>Barang Unggulan Seller</div>
        <div>
            <!-- cuma buat jarak -->
        </div>
        <div class="items-right flex gap-2 text-right">
            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M8.66699 7.37109C8.66699 6.12845 9.67435 5.12109 10.917 5.12109H14.0837C15.3263 5.12109 16.3337 6.12845 16.3337 7.37109V8.87109H8.66699V7.37109Z" fill="#343C54"/><path d="M7.83398 10.3711C6.59134 10.3711 5.58398 11.3785 5.58398 12.6211V14.1211H11.7507V10.3711H7.83398Z" fill="#343C54"/><path d="M4.75 15.6211C3.50736 15.6211 2.5 16.6285 2.5 17.8711V19.3711C2.5 19.7853 2.83579 20.1211 3.25 20.1211H8.29132V15.6211H4.75Z" fill="#343C54"/><path d="M9.79132 20.1211H15.2083V15.6211H9.79132V20.1211Z" fill="#343C54"/><path d="M16.7083 20.1211H21.7497C22.1639 20.1211 22.4997 19.7853 22.4997 19.3711V17.8711C22.4997 16.6285 21.4923 15.6211 20.2497 15.6211H16.7083V20.1211Z" fill="#343C54"/><path d="M19.4167 14.1211V12.6211C19.4167 11.3785 18.4093 10.3711 17.1667 10.3711H13.2507V14.1211H19.4167Z" fill="#343C54"/></svg>
            <span>20 Barang</span>
        </div>
    </div>
    <div></div>
    <div class="flex gap-6 overflow-x-auto scrollbar-none items-center p-4 w-full bg-white">
        {#each Array(ulang) as _, i}
            <ProductCard id={i}/>
        {/each}
    </div>
</section>