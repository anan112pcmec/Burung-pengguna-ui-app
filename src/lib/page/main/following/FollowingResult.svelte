<script lang="ts">
	// Pure UI Mockup Data Seller
	const followedSellers = [
		{
			id_seller: 101,
			username: "tokomekarjaya",
			nama: "Mekar Jaya Tech Store",
			jenis: "Official Store",
			seller_dedication: "Elektronik & Gadget",
			jam_operasional: "08:00 - 17:00 WIB",
			punchline: "Solusi cepat komponen & gadget original",
			status: "Online"
		},
		{
			id_seller: 102,
			username: "dapurkreatif",
			nama: "Dapur Kreatif Studio",
			jenis: "Personal",
			seller_dedication: "Peralatan Rumah",
			jam_operasional: "09:00 - 21:00 WIB",
			punchline: "Perabot rumah tangga estetik & ramah kantong",
			status: "Offline"
		},
		{
			id_seller: 103,
			username: "garasibekas",
			nama: "Garasi Bekas Bandung",
			jenis: "Personal",
			seller_dedication: "Semua Barang",
			jam_operasional: "24 Jam",
			punchline: "Barang bekas rasa baru, transaksi amanah",
			status: "Online"
		}
	];
</script>

<br>
<section id="following-result" class="max-h-[28rem] overflow-y-auto w-full border  p-2 border-zinc-950/10 rounded-sm bg-white divide-y divide-zinc-950/10">
	{#each followedSellers as seller}
		<div class="flex items-start justify-between gap-3 p-3.5 transition hover:bg-zinc-50">
    
    <!-- Left Column: Avatar + Seller Details -->
    <div class="flex items-start gap-3 min-w-0">
        <!-- Avatar/Foto Profil Dummy -->
        <div class="relative shrink-0 space-y-2  gap-2">
            <!-- Avatar / Foto Profil -->
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-950/10 bg-slate-950  text-xs font-bold text-white">
                {seller.nama.slice(0, 2).toUpperCase()}
            </div>
            
            <!-- Status Indicator Kanan-Kiri -->
            <div class="flex items-center justify-left gap-1.5">
                <span 
                    class="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-white {seller.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-300'}" 
                    title={seller.status}
                ></span>
                <span class=" text-[10px] text-zinc-500">{seller.status}</span>
            </div>
        </div>

        <!-- Details -->
        <div class="min-w-0 space-y-1  text-xs space-y-1.5">
            <!-- Badges & Nama Toko -->
            <div class="flex flex-wrap items-center gap-2">
                <!-- Nama Toko -->
                <span class="truncate font-bold text-sm tracking-tight text-slate-950">
                    {seller.nama}
                </span>

                <!-- Jenis Seller -->
                <span class="rounded-2xs border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-[9px] uppercase text-zinc-600">
                    {seller.jenis}
                </span>

                <!-- Seller Dedication -->
                <span class="rounded-2xs bg-slate-950 px-1.5 py-0.5 text-[9px] uppercase text-white">
                    {seller.seller_dedication}
                </span>
            </div>

            <!-- Username & Jam Operasional -->
            <div class="flex items-center gap-2 text-[10px] text-zinc-400">
                <span class="truncate">@{seller.username}</span>
                <span>.</span>
                <span class="shrink-0">ðŸ•’ {seller.jam_operasional}</span>
            </div>

            <!-- Punchline / Tagline Toko -->
            {#if seller.punchline}
                <p class="pt-0.5 font-sans text-[11px] italic text-slate-600">
                    "{seller.punchline}"
                </p>
            {/if}
        </div>
    </div>

    <!-- Right Column: Action Button -->
    <div class="shrink-0 self-center ">
        <button 
            type="button"
            class="cursor-pointer rounded-2xs border border-zinc-950/10 px-3 py-1.5 text-[10px] font-bold transition "
        >
            UNFOLLOW
        </button>
    </div>
</div>
	{/each}
</section>