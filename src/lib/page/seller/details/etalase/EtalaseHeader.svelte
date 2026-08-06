<script lang="ts">
	import UrutkanBerdasar from "$lib/GeneralComponent/MicroComponent/UrutkanBerdasar.svelte";

	// Interface mengikuti struct GORM Go
	interface MediaEtalaseFoto {
		id_media_etalase_foto: number;
		id_etalase: number;
		key: string;
		format: string;
		created_at: string;
		updated_at: string;
	}

	interface Etalase {
		id_etalase: number;
		id_seller_etalase: number;
		nama_etalase: string;
		deskripsi_etalase: string;
		jumlah_barang: number;
		created_at: string;
		updated_at: string;
		media_foto?: MediaEtalaseFoto[];
	}

	// Props dengan fallback dummy data untuk preview
	let { etalase }: { etalase?: Etalase } = $props();

	// Fallback data jika props belum disupply
	const data: Etalase = etalase ?? {
		id_etalase: 101,
		id_seller_etalase: 12,
		nama_etalase: "Komponen & Microcontroller",
		deskripsi_etalase: "Koleksi khusus modul IoT, mikrokontroler ESP32/Arduino, serta sensor presisi tinggi original dengan garansi toko.",
		jumlah_barang: 24,
		created_at: "2026-05-10T08:00:00Z",
		updated_at: "2026-08-01T12:30:00Z",
		media_foto: [
			{
				id_media_etalase_foto: 1,
				id_etalase: 101,
				key: "https://picsum.photos/800/400?random=50",
				format: "webp",
				created_at: "2026-05-10T08:00:00Z",
				updated_at: "2026-05-10T08:00:00Z"
			},
			{
				id_media_etalase_foto: 2,
				id_etalase: 101,
				key: "https://picsum.photos/400/400?random=51",
				format: "webp",
				created_at: "2026-05-10T08:00:00Z",
				updated_at: "2026-05-10T08:00:00Z"
			},
			{
				id_media_etalase_foto: 3,
				id_etalase: 101,
				key: "https://picsum.photos/400/400?random=52",
				format: "webp",
				created_at: "2026-05-10T08:00:00Z",
				updated_at: "2026-05-10T08:00:00Z"
			}
		]
	};

	// Helper format tanggal
	const formatDate = (dateStr: string) => {
		return new Date(dateStr).toLocaleDateString("id-ID", {
			month: "short",
			year: "numeric"
		});
	};
</script>

<section id="etalase-header" class="w-full bg-white border border-zinc-200 rounded-xs shadow-2xs">
	
	<!-- ─── MEDIA GALERI / BANNER ETALASE ─── -->
	{#if data.media_foto && data.media_foto.length > 0}
		<div class="w-full bg-zinc-900 border-b border-zinc-200 overflow-hidden">
			{#if data.media_foto.length === 1}
				<!-- Single Banner Layout -->
				<div class="h-48 md:h-56 w-full relative">
					<img 
						src={data.media_foto[0].key} 
						alt={data.nama_etalase} 
						class="w-full h-full object-cover" 
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
				</div>
			{:else}
				<!-- Multi Photo Grid Layout -->
				<div class="grid grid-cols-3 gap-0.5 h-44 md:h-52 bg-zinc-200">
					<div class="col-span-2 h-full relative overflow-hidden group">
						<img 
							src={data.media_foto[0].key} 
							alt="{data.nama_etalase} - 1" 
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
						/>
					</div>
					<div class="col-span-1 grid grid-rows-2 gap-0.5 h-full">
						{#each data.media_foto.slice(1, 3) as foto, index}
							<div class="h-full overflow-hidden relative group">
								<img 
									src={foto.key} 
									alt="{data.nama_etalase} - {index + 2}" 
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
								/>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/if}

	<!-- ─── DETAIL INFORMASI ETALASE ─── -->
	<div class="p-5 md:p-6 flex flex-col gap-4">
		
		<!-- Meta Tag & Kuantitas -->
		<div class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-2">
				<span class="text-[9px] font-mono font-bold bg-slate-950 text-white px-2 py-0.5 rounded-xs uppercase tracking-wider">
					ETALASE TOKO
				</span>
				<span class="text-[10px] font-mono text-zinc-400">
					Dibuat: {formatDate(data.created_at)}
				</span>
			</div>

			<!-- Badge Total Barang -->
			<div class="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-xs text-slate-900 font-mono text-xs font-semibold">
				<svg class="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
				</svg>
				<span>{data.jumlah_barang} Produk</span>
			</div>
		</div>

		<!-- Judul & Deskripsi -->
		<div class="flex flex-col gap-1.5">
			<h1 class="text-xl md:text-2xl font-bold text-slate-950 tracking-tight leading-snug">
				{data.nama_etalase}
			</h1>
			
			{#if data.deskripsi_etalase}
				<p class="text-xs md:text-sm text-zinc-600 font-light leading-relaxed max-w-3xl">
					{data.deskripsi_etalase}
				</p>
			{/if}
		</div>

		<!-- ─── ACTION BAR (SEARCH & ACTIONS) ─── -->
		 <div class="relative flex-1 w-full">
				<svg class="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
				<input 
					type="text" 
					placeholder="Cari di etalase ini..." 
					class="w-full bg-zinc-50 border border-zinc-200 rounded-xs pl-8 pr-3 py-1.5 text-xs text-slate-950 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 transition"
				/>
			</div>
		<div class="pt-3 border-t border-zinc-100 flex items-center justify-between gap-4">
			<!-- Search Bar Produk di Etalase Ini -->
			
			<UrutkanBerdasar Kriteria={[
					{nama: "Terbaru", fun: (): void =>{}},
					{nama: "Harga Termurah", fun: (): void =>{}},
					{nama: "Harga Tertinggi", fun: (): void =>{}}
				]}/>

			<!-- Quick Actions -->
			<div class="flex items-center gap-2">
				<button class="p-1.5 border border-zinc-200 rounded-xs text-zinc-600 hover:text-slate-950 hover:border-zinc-400 transition" title="Bagikan Etalase">
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0-10.628a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0 10.628a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
					</svg>
				</button>
			</div>
		</div>

	</div>
</section>