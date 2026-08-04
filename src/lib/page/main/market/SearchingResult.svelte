<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Action } from 'svelte/action';
	import ProductCard from '../../../GeneralComponent/ProductCard.svelte';
	import { MarketPageState } from '$lib/state/main/market/state.svelte';

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
		status: "Online",
		foto_profil: "https://picsum.photos/100/100?random=15",
		foto_banner: "https://picsum.photos/600/200?random=20",
		jumlah_etalase: 18,
		jumlah_diskon: 4
	}}

	<div
	 role="button"
	 onclick={() => {
		goto("/seller-overview")
	 }}
	 onkeydown={() => console.log("keydown")}
	 tabindex="0"
	 class="w-[25.5rem] rounded-sm border border-zinc-200 bg-white hover:border-zinc-800 transition duration-300 cursor-pointer overflow-hidden flex flex-col justify-between group seller-card-{seller.id_seller}">
		
		<!-- ─── BANNER & AVATAR SECTION ─── -->
		<div class="relative">
			<!-- Banner Toko -->
			<div class="h-20 w-full bg-zinc-100 overflow-hidden relative">
				<img 
					src={seller.foto_banner} 
					alt="Banner {seller.nama}" 
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
			</div>

			<!-- Status & Diskon Badge di atas Banner -->
			<div class="absolute top-2.5 right-3 flex items-center gap-1.5">
				{#if seller.jumlah_diskon > 0}
					<span class="bg-rose-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs uppercase tracking-wider shadow-xs">
						{seller.jumlah_diskon} Diskon
					</span>
				{/if}
			</div>

			<!-- Profile Picture Overlap -->
			<div class="px-4 flex items-end justify-between -mt-6 relative z-10">
				<div class="relative">
					<img 
						src={seller.foto_profil} 
						alt={seller.nama} 
						class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs bg-white" 
					/>
					<!-- Indicator Online/Offline -->
					<span 
						class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white {seller.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-300'}" 
						title={seller.status}
					></span>
				</div>

				<!-- Badge Jenis Store -->
				<span class="text-[9px] font-mono bg-slate-950 text-white px-1.5 py-0.5 rounded-xs font-bold tracking-wider uppercase">
					{seller.jenis}
				</span>
			</div>
		</div>

		<!-- ─── BODY: INFO & DESKRIPSI ─── -->
		<div class="p-4 pt-2 flex flex-col gap-2.5">
			<!-- Identitas Toko -->
			<div>
				<h3 class="text-slate-900 font-bold text-sm truncate tracking-tight group-hover:text-black">
					{seller.nama}
				</h3>
				<p class="text-slate-500 text-[11px] truncate">
					@{seller.username} &bull; <span class="text-slate-400">{seller.seller_dedication}</span>
				</p>
			</div>

			<!-- Deskripsi Ringkas -->
			<p class="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
				{seller.deskripsi || seller.punchline}
			</p>

			<!-- Metrics: Etalase & Promo -->
			<div class="flex items-center gap-3 pt-1 text-[11px] text-zinc-500 font-medium border-t border-zinc-100">
				<div class="flex items-center gap-1">
					<svg class="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
					</svg>
					<span><strong class="text-slate-800 font-semibold">{seller.jumlah_etalase}</strong> Etalase</span>
				</div>

				<span class="text-zinc-300">·</span>

				<div class="flex items-center gap-1">
					<svg class="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
					</svg>
					<span>{seller.jam_operasional}</span>
				</div>
			</div>
		</div>

		<!-- ─── FOOTER ─── -->
		<div class="px-4 py-2.5 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between text-[10px]">
			<span class="text-zinc-400 font-medium">Garansi Resmi</span>
			<span class="group-hover:translate-x-0.5 text-slate-900 font-bold tracking-wider uppercase flex items-center gap-1 transition-transform duration-200">
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
		tipe_kendaraan: "Motor",
		foto_profil: "https://picsum.photos/100/100?random=30"
	}}

	<div
	 role="button"
	 onclick={() => goto("/kurir-overview")}
	 tabindex="0"
	 onkeydown={() => console.log("kurir")}
	 class="h-[15.5rem] w-[25.5rem] bg-white border border-zinc-200 p-5 flex flex-col justify-between hover:border-slate-950 transition-colors duration-300 cursor-pointer group shadow-2xs">
		
		<!-- ─── HEADER: AVATAR & IDENTITAS ─── -->
		<div class="flex items-start gap-3.5">
			<!-- Avatar Profil & Status Indicator -->
			<div class="relative shrink-0">
				{#if kurir.foto_profil}
					<img 
						src={kurir.foto_profil} 
						alt={kurir.nama} 
						class="w-12 h-12 rounded-xs object-cover border border-zinc-200 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300" 
					/>
				{:else}
					<div class="w-12 h-12 rounded-xs bg-slate-950 text-white flex items-center justify-center font-bold text-sm tracking-widest shrink-0">
						{kurir.nama.slice(0, 2).toUpperCase()}
					</div>
				{/if}

				<!-- Status Dot -->
				<span 
					class="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white {kurir.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-300'}" 
					title={kurir.status}
				></span>
			</div>
			
			<!-- Detail Identitas -->
			<div class="flex flex-col flex-1 min-w-0">
				<div class="flex items-center justify-between gap-2">
					<h3 class="font-sans font-bold text-slate-950 text-base leading-none tracking-tight flex items-center gap-1.5 truncate">
						{kurir.nama}
						{#if kurir.verified}
							<svg class="w-3.5 h-3.5 text-slate-950 shrink-0" viewBox="0 0 24 24" fill="currentColor" >
								<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
							</svg>
						{/if}
					</h3>
					<span class="text-[9px] font-mono text-zinc-400 uppercase tracking-wider shrink-0">{kurir.status}</span>
				</div>
				
				<span class="text-[10px] text-zinc-400 font-mono mt-0.5">@{kurir.username}</span>
				
				<p class="font-sans text-[11px] text-zinc-600 mt-2 leading-relaxed line-clamp-2">
					{kurir.deskripsi}
				</p>
			</div>
		</div>

		<!-- ─── BODY: DATA GRID (STRUKTURAL) ─── -->
		<div class="border-y border-zinc-100 py-2.5 my-auto">
			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col gap-0.5">
					<span class="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Layanan & Tipe</span>
					<span class="text-xs text-slate-950 font-bold uppercase truncate">
						{kurir.jenis} &bull; {kurir.tipe_kendaraan}
					</span>
				</div>
				<div class="flex flex-col gap-0.5">
					<span class="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Rating Akun</span>
					<span class="text-xs text-slate-950 font-bold uppercase flex items-center gap-1">
						<svg class="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
						</svg>
						{kurir.rating} <span class="text-[10px] font-normal text-zinc-400">/ 5.0</span>
					</span>
				</div>
			</div>
		</div>

		<!-- ─── FOOTER: ACTION & STATUS BID ─── -->
		<div class="flex items-center justify-between">
			{#if kurir.status_bid === 'On'}
				<span class="text-[9px] font-mono font-bold px-2 py-0.5 bg-slate-950 text-white uppercase tracking-wider rounded-xs">
					MENERIMA BID
				</span>
			{:else}
				<span class="text-[9px] font-mono px-2 py-0.5 bg-zinc-100 text-zinc-400 border border-zinc-200 uppercase tracking-wider rounded-xs">
					BID DITUTUP
				</span>
			{/if}

			<span class="text-[10px] font-bold text-slate-950 flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200 tracking-wider uppercase">
				DETAIL PROFIL &rarr;
			</span>
		</div>

	</div>
{/snippet}
<div class="pr-2 pl-2 w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
        {#each Array(ulang) as _, i}
           {#if MarketPageState.IsResultBarang()}
		   <ProductCard id={i} path={"/details/produk"} />
		   {:else if MarketPageState.IsResultSeller()}
		   {@render SellerCard(i)}
		   {:else if MarketPageState.IsResultKurir()}
		   {@render KurirCard(i)}
		   {:else}
		   tak diketahui
		   {/if}
        {/each}
</div>