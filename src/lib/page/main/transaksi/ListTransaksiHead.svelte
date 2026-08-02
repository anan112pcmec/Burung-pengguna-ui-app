<script lang="ts">
	// Pure hardcoded UI tanpa state
	const categories = [
		"Semua Barang", "Pakaian & Fashion", "Kosmetik & Kecantikan", 
		"Elektronik & Gadget", "Buku & Media", "Makanan & Minuman", 
		"Ibu & Bayi", "Mainan", "Olahraga & Outdoor", "Otomotif & Sparepart", 
		"Rumah Tangga", "Alat Tulis", "Perhiasan & Aksesoris", "Produk Digital", 
		"Bangunan & Perkakas", "Musik & Instrumen", "Film & Broadcasting"
	];

	const statuses = [
		{
			nama: "Semua",
			icon: `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>`
		},
		{
			nama: "Dibayar",
			icon: `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m5-13a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
		},
		{
			nama: "Diproses",
			icon: `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>`
		},
		{
			nama: "Waiting",
			icon: `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
		},
		{
			nama: "Dikirim",
			icon: `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>`
		},
		{
			nama: "Selesai",
			icon: `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`
		},
		{
			nama: "Dibatalkan",
			icon: `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`
		},
	];
</script>

<section class="w-full bg-white border-b border-zinc-200 p-6 lg:p-6 space-y-6">
	<!-- Header Title -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-xl font-semibold text-slate-900">
				DAFTAR TRANSAKSI
			</h1>
			<p class="text-xs text-slate-500 mt-0.5">
				Pantau dan kelola riwayat pesanan Anda
			</p>
		</div>
		
		<span class="text-xs text-slate-500 border border-zinc-200 px-2.5 py-1 rounded-sm bg-zinc-50">
			Total: 12 Transaksi
		</span>
	</div>

	<!-- Baris 1: Search, Kategori, Tanggal -->
	<div class="grid grid-cols-1 md:grid-cols-[40%_30%_30%] gap-4 items-center">
		<!-- Search Input -->
		<div class="relative flex items-center focus-within:border-slate-900 transition-colors pb-1.5">
			<svg class="w-4 h-4 text-slate-400 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input 
				type="text" 
				placeholder="Cari Nama Barang / Seller" 
				class="w-full bg-transparent text-xs text-slate-900 placeholder-slate-400 outline-none"
			/>
		</div>

		<!-- Dropdown Kategori -->
		<div class="relative  focus-within:border-slate-900 transition-colors pb-1.5">
			<select class="w-full bg-transparent text-xs text-slate-700 outline-none cursor-pointer appearance-none pr-6">
				{#each categories as category}
					<option value={category} class="bg-white text-slate-800 text-xs py-1">
						{category}
					</option>
				{/each}
			</select>
			<!-- Chevron Custom -->
			<svg class="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</div>

		<!-- Date Picker -->
		<div class="relative focus-within:border-slate-900 transition-colors pb-1.5">
			<input 
				type="date" 
				class="w-full bg-transparent text-xs text-slate-700 outline-none cursor-pointer"
			/>
		</div>
	</div>

	<!-- Baris 2: Status Tabs & Reset Filter -->
	<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
		<!-- Status Tabs (Horizontally Scrollable) -->
		<div class="flex items-center gap-2 overflow-x-auto scrollbar-none w-full sm:w-auto pb-1 sm:pb-0">
			<span class="text-xs font-medium text-slate-400 mr-1 shrink-0">
				Status:
			</span>
			
			{#each statuses as status, i}
				<button 
					type="button" 
					class="shrink-0 text-xs px-3 py-1 rounded-sm transition duration-200 cursor-pointer flex items-center gap-1.5
					{i === 0 
						? 'bg-slate-900 text-white font-medium' 
						: 'border border-zinc-200 text-slate-600 hover:border-zinc-400 hover:text-slate-900 bg-white'}"
				>
					{@html status.icon}
					{status.nama}
				</button>
			{/each}
		</div>

		<!-- Reset Filter Button -->
		<button 
			type="button" 
			class="shrink-0 text-xs font-medium text-slate-500 hover:text-red-600 transition duration-200 flex items-center gap-1 cursor-pointer self-end sm:self-auto"
		>
			<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
			Reset filter
		</button>
	</div>
</section>