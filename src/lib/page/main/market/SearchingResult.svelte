<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Action } from 'svelte/action';
	import ProductCard from '../../../GeneralComponent/ProductCard.svelte';

    const ulang:number = 24
    let ke: number = 0
    function tambah(){
        ke++
    }
</script>
{#snippet SellerCard(id: number)}
	{@const seller = {
		id_seller: id,
		username: "tokomekarjaya",
		nama: "Mekar Jaya Tech",
		jenis: "Official Store",
		seller_dedication: "Elektronik & Gadget",
		jam_operasional: "08:00 - 17:00 WIB",
		punchline: "Solusi cepat komponen & gadget original",
		deskripsi: "Penyedia komponen elektronik terpercaya sejak 2020 dengan garansi resmi dan pengiriman super cepat.",
		status: "Online"
	}}

	<div class="h-[15rem] w-[25.5rem] rounded-sm border border-zinc-800/20 bg-white p-5 flex flex-col justify-between hover:border-zinc-800 transition duration-300 cursor-pointer seller-card-{seller.id_seller}">
		
		<!-- â”€â”€â”€ HEADER: AVATAR & BASIC INFO â”€â”€â”€ -->
		<div class="flex items-center gap-3">
			<!-- Inisial Avatar Simpel -->
			<div class="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center  font-bold text-sm shrink-0">
				{seller.nama.slice(0, 2).toUpperCase()}
			</div>

			<div class="flex flex-col min-w-0 flex-1">
				<div class="flex items-center justify-between gap-2">
					<h3 class="text-slate-900 font-bold text-sm truncate tracking-tight">
						{seller.nama}
					</h3>
					<!-- Indicator Online/Offline Minimalis -->
					<span class="w-2 h-2 rounded-full shrink-0 {seller.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-300'}" title={seller.status}></span>
				</div>
				<p class="text-slate-500 text-[11px]  truncate">
					@{seller.username} â€¢ <span class="uppercase text-slate-400">{seller.jenis}</span>
				</p>
			</div>
		</div>

		<!-- â”€â”€â”€ BODY: DESKRIPSI RINGKAS â”€â”€â”€ -->
		<div class="my-auto">
			<p class="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
				{seller.deskripsi || seller.punchline}
			</p>
		</div>

		<!-- â”€â”€â”€ FOOTER: METADATA & LINK â”€â”€â”€ -->
		<div class="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 tracking-wide font-medium">
			<div class="truncate max-w-[14rem]">
				<span>{seller.seller_dedication}</span>
			</div>

			<span class="group-hover:translate-x-0.5 text-slate-900 font-semibold tracking-wider uppercase flex items-center gap-1 transition-transform duration-200">
				LIHAT TOKO &rarr;
			</span>
		</div>

	</div>
{/snippet}

{#snippet KurirCard(id: number)}
	{@const kurir = {
		id_kurir: id,
		nama: "Budi Pratama",
		username: "budicourier",
		jenis: "Instan",
		deskripsi: "Siap antar paket cepat area Jakarta & sekitarnya. Berpengalaman 3+ tahun.",
		status: "Online",
		status_bid: "On",
		verified: true,
		rating: 4.8,
		tipe_kendaraan: "Motor"
	}}

	<div class="h-[15rem] w-[25.5rem] bg-white border border-zinc-950/10 p-5 flex flex-col justify-between hover:border-slate-950 transition-colors duration-300 cursor-pointer group">
		
		<!-- â”€â”€â”€ HEADER: AVATAR & INFO (RATA KIRI) â”€â”€â”€ -->
		<div class="flex items-start gap-4">
			<!-- Avatar Solid Square -->
			<div class="w-11 h-11 bg-slate-950 text-white flex items-center justify-center  font-bold text-sm shrink-0">
				{kurir.nama.slice(0, 2).toUpperCase()}
			</div>
			
			<!-- Detail Identitas -->
			<div class="flex flex-col flex-1 min-w-0">
				<div class="flex justify-between items-start">
					<h3 class="font-sans font-bold text-slate-950 text-base leading-none tracking-tight flex items-center gap-1.5 truncate">
						{kurir.nama}
						{#if kurir.verified}
							<!-- Verified Icon Monochrome -->
							<svg class="w-3.5 h-3.5 text-slate-950" viewBox="0 0 24 24" fill="currentColor">
								<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
							</svg>
						{/if}
					</h3>
					
					<!-- Status Dot Minimalist -->
					<div class="flex items-center gap-1.5 shrink-0" title={kurir.status}>
						<span class="w-1.5 h-1.5 rounded-full {kurir.status === 'Online' ? 'bg-slate-950' : 'bg-zinc-300'}"></span>
						<span class=" text-[9px] text-zinc-500 uppercase">{kurir.status}</span>
					</div>
				</div>
				
				<span class=" text-[10px] text-zinc-400 mt-1">@{kurir.username}</span>
				
				<p class="font-sans text-[11px] text-zinc-600 mt-2.5 leading-relaxed line-clamp-2">
					{kurir.deskripsi}
				</p>
			</div>
		</div>

		<!-- â”€â”€â”€ BODY: DATA GRID (STRUKTURAL) â”€â”€â”€ -->
		<div class="border-t border-zinc-950/10 pt-3">
			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<span class=" text-[9px] text-zinc-400 uppercase tracking-widest">Layanan & Tipe</span>
					<span class=" text-xs text-slate-950 font-bold uppercase"> â€” {kurir.tipe_kendaraan}</span>
				</div>
				<div class="flex flex-col gap-1">
					<span class=" text-[9px] text-zinc-400 uppercase tracking-widest">Rating Akun</span>
					<span class=" text-xs text-slate-950 font-bold uppercase flex items-center gap-1">
						<svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
						</svg>
						{kurir.rating}
					</span>
				</div>
			</div>
		</div>

		<!-- â”€â”€â”€ FOOTER: ACTION & STATUS BID â”€â”€â”€ -->
		<div class="flex items-center justify-between pt-3">
			{#if kurir.status_bid === 'On'}
				<span class=" text-[9px] px-2 py-1 bg-slate-950 text-white uppercase tracking-wider">
					MENERIMA BID
				</span>
			{:else}
				<span class=" text-[9px] px-2 py-1 bg-zinc-100 text-zinc-400 border border-zinc-200 uppercase tracking-wider">
					BID DITUTUP
				</span>
			{/if}

			<span class=" text-[10px] font-bold text-slate-950 flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
				DETAIL PROFIL &rarr;
			</span>
		</div>
	</div>
{/snippet}
<div class="pr-2 pl-2 w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
        {#each Array(ulang) as _, i}
            {@render KurirCard(i)}
        {/each}
</div>