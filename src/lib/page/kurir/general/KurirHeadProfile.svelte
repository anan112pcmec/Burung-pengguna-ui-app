<script lang="ts">
	import { fade } from "svelte/transition";
	import { Full } from "../../../../constant/UiConstant";
	import { goto } from "$app/navigation";

	// Mock Data berdasarkan Struct Go 'Kurir' & 'BidKurirData'
	const kurir = {
		id_kurir: 88,
		username: "cargo_budi",
		nama: "Budi Pratama",
		email: "budi.express@burunginc.com",
		jenis: "Reguler", // Reguler / Cargo / SameDay / Instant
		deskripsi: "Mitra kurir area Jakarta Selatan & Barat. Mengutamakan kecepatan dan keamanan barang rentan pecah.",
		status: "Online", // Online / Offline
		status_bid: "On", // On / Off
		verified: true,
		rating: 4.92,
		tipe_kendaraan: "Motor", // Motor / Mobil / BlindVan / PickUp
		created_at: "2024-02-10T00:00:00Z"
	};

	// Mock Active Session (BidKurirData Aktif)
	const activeBidSession = {
		provinsi: "DKI Jakarta",
		kota: "Jakarta Selatan",
		max_kg: 20,
		slot_tersisa: 4,
		is_ekspedisi: false,
		jenis_pengiriman: "SameDay"
	};

	// State untuk interaksi tombol (Svelte 5 Runes)
	let isMuted = $state(false);
	let statusBidActive = $state(kurir.status_bid === "On");

	function toggleNotif() {
		isMuted = !isMuted;
	}

	function toggleStatusBid() {
		statusBidActive = !statusBidActive;
	}

	let y = $state(0);
	let progress = $state(0);

	function updateProgress() {
		const scrollTop = window.scrollY;
		const documentHeight = document.documentElement.scrollHeight;
		const windowHeight = window.innerHeight;
		const totalScroll = documentHeight - windowHeight;

		progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
	}

	$effect(() => {
		updateProgress();
	});

	let activeTab = $state<'routes' | 'active_bid' | 'reviews'>('routes');

	// List Navigasi Tab Kurir
	const tabs = [
		{ id: 'routes', label: 'Overview', go: 'kurir-overview' },
		{ id: 'active_bid', label: 'Statistik', go: 'kurir-statistik' },
	] as const;

	function selectTab(id: 'routes' | 'active_bid' | 'reviews') {
		activeTab = id;
	}
</script>

<svelte:window bind:scrollY={y} onscroll={updateProgress} />

<header class="bg-white border-b border-zinc-200 selection:bg-slate-900 selection:text-white sticky top-0 z-40">
	<!-- TOP BAR: Brand Watermark, Fleet Dispatch Tag & Progress Line -->
	<div class="{Full} px-6 py-1.5 flex items-center justify-between text-zinc-400 text-[10px] tracking-wider relative border-b border-zinc-100 ">
		<div class="flex items-center gap-2 select-none">
			<!-- Icon Dispatch/Courier SVG -->
			<svg class="w-3.5 h-3.5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="1" y="3" width="15" height="13" />
				<polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
				<circle cx="5.5" cy="18.5" r="2.5" />
				<circle cx="18.5" cy="18.5" r="2.5" />
			</svg>
			<span class="font-bold tracking-widest text-slate-900 uppercase">FLEET DISPATCH</span>
			<span class="text-zinc-300">/</span>
			<span class="text-zinc-500 font-normal">@{kurir.username}</span>
		</div>

		<div class="flex gap-2 items-center">
			<!-- Indicator ID Kurir -->
			<span class="text-[9px] bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded-xs ">
				ID: #{kurir.id_kurir}
			</span>
			<button type="button" class="cursor-pointer hover:text-slate-900 transition px-1 py-0.5 rounded-xs" title="Opsi Kurir">
				â€¢â€¢â€¢
			</button>
		</div>

		<!-- Scroll Progress Bar Indicator -->
		<div 
			class="absolute bottom-0 left-0 h-[2px] bg-slate-900 transition-all duration-75 ease-out" 
			style="width: {progress}%"
		></div>
	</div>  

	<!-- MAIN HEADER CONTENT -->
	<section class="grid grid-cols-[5%_85%_10%] h-[7.5rem] px-4">
		
		<!-- KOLOM 1 (5%): Navigasi Kembali -->
		<div class="flex items-center justify-start h-full">
			<button 
				onclick={() => goto("/home")}
				type="button" 
				aria-label="Kembali"
				class="p-2 text-zinc-400 hover:text-slate-900 hover:bg-zinc-100 rounded-sm transition duration-200 cursor-pointer"
			>
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
				</svg>
			</button>
		</div>

		<!-- KOLOM 2 (85%): Informasi Operasional Kurir -->
		<div class="grid grid-cols-[20%_30%_50%] h-full items-center border-x border-zinc-100 px-4 gap-2">
			
			<!-- Sub-kolom 1 (20%): Foto Kurir, Badge Verified & Status Online Dot -->
			<div class="flex items-center justify-center">
				<div class="relative w-16 h-16 rounded-full bg-zinc-50 border border-zinc-200 overflow-hidden shrink-0 group">
					<img 
						src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" 
						alt={kurir.nama} 
						class="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
					/>
					
					<!-- Status Online / Offline Dot -->
					<span 
						class="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white 
						{kurir.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-400'}"
						title="Status: {kurir.status}"
					></span>
				</div>
			</div>

			<!-- Sub-kolom 2 (30%): Identitas, Vehicle Badge & Coverage Area -->
			<div class="flex flex-col justify-center min-w-0 pr-3 space-y-1">
				<div class="flex items-center gap-1.5 truncate">
					<h1 class="text-sm font-bold text-slate-900 truncate tracking-tight">
						{kurir.nama}
					</h1>

					<!-- Badge Verified -->
					{#if kurir.verified}
						<span class="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1 py-0.2 rounded-xs  flex items-center gap-0.5 shrink-0" title="Terverifikasi">
							âœ“ Verified
						</span>
					{/if}
				</div>

				<!-- Tipe Kendaraan & Jenis Layanan -->
				<div class="flex items-center gap-1.5 text-[10px] ">
					<span class="bg-slate-900 text-white px-1.5 py-0.5 rounded-xs uppercase tracking-wider font-medium">
						{kurir.tipe_kendaraan}
					</span>
					<span class="bg-zinc-100 text-slate-800 border border-zinc-200 px-1.5 py-0.5 rounded-xs uppercase tracking-wider font-medium">
						{kurir.jenis}
					</span>
				</div>

				<!-- Operational Area Info -->
				<div class="flex items-center gap-1 text-[10px] text-zinc-500  truncate pt-0.5">
					<svg class="w-3 h-3 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					<span class="truncate">{activeBidSession.kota}, {activeBidSession.provinsi}</span>
				</div>
			</div>

			<!-- Sub-kolom 3 (50%): Metrik Operasional Logistics -->
			<div class="grid grid-cols-4 gap-2 border-l border-zinc-100 pl-6 items-center">
				
				<!-- Rating -->
				<div class="flex flex-col">
					<span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
						Rating
					</span>
					<span class="text-xs font-bold  text-slate-900 mt-1 flex items-center gap-1">
						<span class="text-amber-500 text-xs">â˜…</span> {kurir.rating}
					</span>
				</div>

				<!-- Kapasitas Maksimal -->
				<div class="flex flex-col">
					<span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
						Max Load
					</span>
					<span class="text-xs font-bold  text-slate-900 mt-1">
						{activeBidSession.max_kg} <span class="text-[9px] text-zinc-400 font-normal">KG</span>
					</span>
				</div>

				<!-- Slot Tersisa Active Session -->
				<div class="flex flex-col">
					<span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
						Sisa Slot
					</span>
					<span class="text-xs font-bold  text-slate-900 mt-1">
						{activeBidSession.slot_tersisa} <span class="text-[9px] text-zinc-400 font-normal">Sesi</span>
					</span>
				</div>

				<!-- Status Ready Bid -->
				<div class="flex flex-col">
					<span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
						Status Bid
					</span>
					<span class="text-xs font-bold  mt-1 flex items-center gap-1.5 {statusBidActive ? 'text-emerald-600' : 'text-zinc-400'}">
						<span class="w-1.5 h-1.5 rounded-full {statusBidActive ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}"></span>
						{statusBidActive ? 'READY' : 'OFF'}
					</span>
				</div>

			</div>

		</div>

		<!-- KOLOM 3 (10%): Action Controls (Notif & Toggle Ready Bid) -->
		<div class="flex items-center justify-end gap-2 h-full pl-2">
			<!-- Mute / Unmute Notif -->
			<button 
				type="button" 
				onclick={toggleNotif}
				title={isMuted ? "Aktifkan Notifikasi Order" : "Mute Notifikasi Order"}
				class="p-2 border border-zinc-200 hover:border-slate-400 text-slate-600 rounded-xs transition duration-150 cursor-pointer bg-white"
			>
				{#if isMuted}
					<svg class="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M19.5 12l-2.25 2.25M10.5 6a7.5 7.5 0 017.5 7.5v3h1.5m-18 0h16.5M12 21a2.25 2.25 0 002.25-2.25h-4.5A2.25 2.25 0 0012 21z" />
					</svg>
				{:else}
					<svg class="w-4 h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
						<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 01-5.714 0" />
					</svg>
				{/if}
			</button>

			<!-- Toggle Ready/Off Bid Control -->
			
		</div>
	</section>
</header>

<!-- SECONDARY NAV BAR: Courier Tabs Navigation -->
<section 
	id="select-page" 
	class="w-full bg-white border-b border-zinc-200 sticky z-30 selection:bg-slate-900 selection:text-white"
>
	<div class="px-6 lg:px-12 flex items-center justify-between text-xs">
		
		<!-- Tab Buttons Container -->
		<div class="flex items-center gap-1 sm:gap-6">
			{#each tabs as tab}
				<button
					type="button"
					onclick={() => {
						selectTab(tab.id);
						goto(tab.go);
					}}
					class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
					{activeTab === tab.id ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
				>
					<span>{tab.label}</span>

					<!-- Active Indicator Line -->
					{#if activeTab === tab.id}
						<div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Dispatch Status Info (Kanan) -->
		<div class="hidden md:flex items-center gap-2 text-[10px] text-zinc-400  uppercase tracking-widest">
			<span>Mode Delivery:</span>
			<span class="text-slate-900 font-semibold px-2 py-0.5 bg-zinc-100 rounded-xs">
				{activeBidSession.is_ekspedisi ? 'Ekspedisi (HUB)' : 'Direct Pickup / Non-Eks'}
			</span>
		</div>

	</div>
</section>