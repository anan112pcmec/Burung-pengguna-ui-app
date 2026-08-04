<script lang="ts">
	// ─── TIPE DATA SESUAI JSON BACKEND + FOTO PROFIL ───
	export interface KomentarChildData {
		id_komentar_child: number;
		id_komentar: number;
		id_entity: number;
		jenis_entity: string;
		isi_komentar: string;
		is_seller_komentar: boolean;
		mention_komentar: string;
		foto_profil?: string; // 👈 URL Foto Profil dari backend/join
		created_at: string;
	}

	export interface KomentarData {
		id_komentar: number;
		id_barang_induk: number;
		id_entity: number;
		jenis_entity: string;
		isi_komentar: string;
		is_seller: boolean;
		dibalas_komentar: number;
		foto_profil?: string; // 👈 URL Foto Profil dari backend/join
		created_at: string;
		komentar_child?: KomentarChildData[];
	}

	// ─── PROPS & STATE ───
	let { comments = [] }: { comments?: KomentarData[] } = $props();

	let isExpanded = $state(false);
	let expandedChildren = $state<Record<number, boolean>>({});

	// Mock Data Sesuai Format Backend

    const dummyComments: KomentarData[] = [
	{
		id_komentar: 101,
		id_barang_induk: 1,
		id_entity: 88,
		jenis_entity: "user",
		foto_profil: "https://picsum.photos/100/100?random=1",
		isi_komentar: "Jahitan presisi dan bahannya kaku solid. Sangat sesuai dengan ekspektasi gaya minimalis.",
		is_seller: false,
		dibalas_komentar: 2,
		created_at: "2026-08-04T10:00:00Z",
		komentar_child: [
			{
				id_komentar_child: 501,
				id_komentar: 101,
				id_entity: 1,
				jenis_entity: "seller",
				foto_profil: "https://picsum.photos/100/100?random=10",
				isi_komentar: "Terima kasih mas! Bahan memang kami impor khusus jenis heavy-canvas.",
				is_seller_komentar: true,
				mention_komentar: "user_88",
				created_at: "2026-08-04T10:15:00Z"
			},
			{
				id_komentar_child: 502,
				id_komentar: 101,
				id_entity: 88,
				jenis_entity: "user",
				foto_profil: "https://picsum.photos/100/100?random=1",
				isi_komentar: "Siap, ditunggu rilis warna slate nya mas!",
				is_seller_komentar: false,
				mention_komentar: "seller_store",
				created_at: "2026-08-04T10:20:00Z"
			}
		]
	},
	{
		id_komentar: 102,
		id_barang_induk: 1,
		id_entity: 92,
		jenis_entity: "user",
		foto_profil: "https://picsum.photos/100/100?random=2",
		isi_komentar: "Pengiriman cepat, packing rapi tanpa pembungkus berlebih. Rekomendasi seller!",
		is_seller: false,
		dibalas_komentar: 0,
		created_at: "2026-08-04T08:30:00Z"
	},
	{
		id_komentar: 103,
		id_barang_induk: 1,
		id_entity: 45,
		jenis_entity: "user",
		foto_profil: "https://picsum.photos/100/100?random=3",
		isi_komentar: "Untuk tinggi 175cm berat 70kg mending ambil size M atau L ya? Takut agak sempit di dada.",
		is_seller: false,
		dibalas_komentar: 2,
		created_at: "2026-08-04T07:12:00Z",
		komentar_child: [
			{
				id_komentar_child: 503,
				id_komentar: 103,
				id_entity: 1,
				jenis_entity: "seller",
				foto_profil: "https://picsum.photos/100/100?random=10",
				isi_komentar: "Halo Kak! Disarankan ambil Size L agar bagian dada tetap fit rileks.",
				is_seller_komentar: true,
				mention_komentar: "user_45",
				created_at: "2026-08-04T07:30:00Z"
			},
			{
				id_komentar_child: 504,
				id_komentar: 103,
				id_entity: 45,
				jenis_entity: "user",
				foto_profil: "https://picsum.photos/100/100?random=3",
				isi_komentar: "Oke pesan L, terimakasih info cepatnya admin!",
				is_seller_komentar: false,
				mention_komentar: "seller_store",
				created_at: "2026-08-04T07:35:00Z"
			}
		]
	},
	{
		id_komentar: 104,
		id_barang_induk: 1,
		id_entity: 12,
		jenis_entity: "user",
		foto_profil: "https://picsum.photos/100/100?random=4",
		isi_komentar: "Warna aslinya sedikit lebih gelap dibanding pencahayaan foto produk, tapi malah makin keren keliatan industrial banget.",
		is_seller: false,
		dibalas_komentar: 0,
		created_at: "2026-08-03T19:40:00Z"
	},
	{
		id_komentar: 105,
		id_barang_induk: 1,
		id_entity: 1,
		jenis_entity: "seller",
		foto_profil: "https://picsum.photos/100/100?random=10",
		isi_komentar: "PENGUMUMAN: Untuk restock batch 2 varian Charcoal Grey sudah dibuka ya kak. Silakan checkout!",
		is_seller: true,
		dibalas_komentar: 3,
		created_at: "2026-08-03T14:00:00Z",
		komentar_child: [
			{
				id_komentar_child: 505,
				id_komentar: 105,
				id_entity: 77,
				jenis_entity: "user",
				foto_profil: "https://picsum.photos/100/100?random=5",
				isi_komentar: "Langsung amankan Size M!",
				is_seller_komentar: false,
				mention_komentar: "seller_store",
				created_at: "2026-08-03T14:05:00Z"
			},
			{
				id_komentar_child: 506,
				id_komentar: 105,
				id_entity: 63,
				jenis_entity: "user",
				foto_profil: "https://picsum.photos/100/100?random=6",
				isi_komentar: "Varian Navy kapan min?",
				is_seller_komentar: false,
				mention_komentar: "seller_store",
				created_at: "2026-08-03T14:10:00Z"
			},
			{
				id_komentar_child: 507,
				id_komentar: 105,
				id_entity: 1,
				jenis_entity: "seller",
				foto_profil: "https://picsum.photos/100/100?random=10",
				isi_komentar: "Navy estimasi minggu depan ya kak!",
				is_seller_komentar: true,
				mention_komentar: "user_63",
				created_at: "2026-08-03T14:15:00Z"
			}
		]
	},
	{
		id_komentar: 106,
		id_barang_induk: 1,
		id_entity: 34,
		jenis_entity: "user",
		foto_profil: "https://picsum.photos/100/100?random=7",
		isi_komentar: "Kalo dicuci pakai mesin cuci aman ga ya? Atau disarankan dry clean aja?",
		is_seller: false,
		dibalas_komentar: 1,
		created_at: "2026-08-02T11:20:00Z",
		komentar_child: [
			{
				id_komentar_child: 508,
				id_komentar: 106,
				id_entity: 1,
				jenis_entity: "seller",
				foto_profil: "https://picsum.photos/100/100?random=10",
				isi_komentar: "Disarankan cuci tangan pelan-pelan pakai air dingin kak agar serat kain tidak kaku.",
				is_seller_komentar: true,
				mention_komentar: "user_34",
				created_at: "2026-08-02T11:45:00Z"
			}
		]
	},
	{
		id_komentar: 107,
		id_barang_induk: 1,
		id_entity: 99,
		jenis_entity: "user",
		foto_profil: "https://picsum.photos/100/100?random=8",
		isi_komentar: "Minimalis, jahitan simetris, kancing besi matte solid. Pembelian kedua dan selalu puas.",
		is_seller: false,
		dibalas_komentar: 0,
		created_at: "2026-08-01T09:10:00Z"
	}
];
	let dataList = $derived(comments.length > 0 ? comments : dummyComments);

	function formatTime(dateStr: string) {
		if (!dateStr) return '';
		const date = new Date(dateStr);
		return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

	function toggleChild(id: number) {
		expandedChildren[id] = !expandedChildren[id];
	}
</script>

<!-- ==========================================
     SNIPPET: ITEM BALASAN (KOMENTAR CHILD)
=========================================== -->
{#snippet ChildItem(child: KomentarChildData)}
	<div class="flex gap-2.5 pt-3 pb-2 text-xs font-sans">
		<!-- Foto Profil Balasan (Bulat Halus) -->
		<img 
			src={child.foto_profil || "https://picsum.photos/100/100?random=99"} 
			alt={child.jenis_entity} 
			class="w-7 h-7 rounded-full object-cover shrink-0 border border-zinc-200 grayscale opacity-90" 
		/>

		<div class="flex flex-col gap-1 w-full">
			<!-- Header Child -->
			<div class="flex items-center gap-1.5 flex-wrap">
				<span class="font-semibold text-slate-900 text-[11px]">
					{child.jenis_entity}_{child.id_entity}
				</span>

				{#if child.is_seller_komentar}
					<span class="text-[8px] font-mono bg-slate-950 text-white px-1 py-0.2 rounded-xs font-bold tracking-wider uppercase">
						Seller
					</span>
				{/if}

				<span class="text-zinc-300 text-[10px]">·</span>
				<span class="text-zinc-400 text-[10px]">{formatTime(child.created_at)}</span>
			</div>

			<!-- Teks Balasan dengan Mention -->
			<p class="text-slate-700 text-xs leading-relaxed font-normal">
				{#if child.mention_komentar}
					<span class="text-slate-900 font-medium bg-zinc-100 px-1 py-0.5 rounded-xs mr-0.5">
						@{child.mention_komentar}
					</span>
				{/if}
				{child.isi_komentar}
			</p>
		</div>
	</div>
{/snippet}

<!-- ==========================================
     SNIPPET: ITEM KOMENTAR UTAMA (PARENT)
=========================================== -->
{#snippet KomentarParent(item: KomentarData)}
	<div class="p-4 border-b border-zinc-100 last:border-b-0 bg-white hover:bg-zinc-50/50 transition-colors">
		<div class="flex gap-3">
			<!-- Foto Profil Utama (Bulat Halus) -->
			<img 
				src={item.foto_profil || "https://picsum.photos/100/100?random=99"} 
				alt={item.jenis_entity} 
				class="w-9 h-9 rounded-full object-cover shrink-0 border border-zinc-200 grayscale opacity-90" 
			/>

			<!-- Detail Komentar Utama -->
			<div class="flex flex-col gap-1 w-full font-sans">
				<div class="flex items-center gap-1.5 flex-wrap text-xs">
					<span class="font-semibold text-slate-900">
						{item.jenis_entity}_{item.id_entity}
					</span>

					{#if item.is_seller}
						<span class="text-[8px] font-mono bg-slate-950 text-white px-1 py-0.2 rounded-xs font-bold tracking-wider uppercase">
							Seller
						</span>
					{/if}

					<span class="text-zinc-300 text-[10px]">·</span>
					<span class="text-zinc-400 text-[11px]">{formatTime(item.created_at)}</span>
				</div>

				<p class="text-slate-700 text-xs leading-relaxed font-normal mt-0.5">
					{item.isi_komentar}
				</p>

				<!-- Baris Aksi & Toggle Balasan -->
				<div class="flex items-center gap-4 mt-2 text-zinc-400 text-[11px]">
					<button class="hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1">
						<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.398-.279.885-.386 1.353-.342.394.037.794.056 1.202.056Z" />
						</svg>
						<span>Balas</span>
					</button>

					{#if item.komentar_child && item.komentar_child.length > 0}
						<button 
							onclick={() => toggleChild(item.id_komentar)}
							class="text-slate-900 font-medium hover:underline transition-all cursor-pointer flex items-center gap-1"
						>
							<span>
								{expandedChildren[item.id_komentar] ? 'Sembunyikan balasan' : `Lihat ${item.komentar_child.length} balasan`}
							</span>
						</button>
					{/if}
				</div>

				<!-- Thread Balasan (Child Comments) -->
				{#if item.komentar_child && item.komentar_child.length > 0 && expandedChildren[item.id_komentar]}
					<div class="mt-2 ml-1 pl-3 border-l-2 border-zinc-200 flex flex-col gap-1">
						{#each item.komentar_child as child}
							{@render ChildItem(child)}
						{/each}
					</div>
				{/if}

			</div>
		</div>
	</div>
{/snippet}

<!-- ==========================================
     SECTION: KOMENTAR PRODUK CONTAINER
=========================================== -->
<section id="komentar-produk" class="w-full bg-white border-y border-zinc-200">
	<button 
		onclick={() => isExpanded = !isExpanded} 
		class="w-full flex items-center justify-between py-3.5 px-4 md:px-6 group cursor-pointer bg-white"
	>
		<div class="flex items-center gap-2">
			<span class="text-xs font-semibold text-slate-800 tracking-tight group-hover:text-slate-950 transition-colors">
				Komentar
			</span>
			<span class="text-[10px] bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 rounded-full text-zinc-600 font-medium">
				{dataList.length}
			</span>
		</div>

		<div class="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
			<span class="group-hover:text-slate-950 transition-colors">
				{isExpanded ? 'Sembunyikan' : 'Lihat semua'}
			</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-zinc-400 group-hover:text-slate-950 transition-transform duration-300 {isExpanded ? 'rotate-180' : ''}">
				<path d="m6 9 6 6 6-6"/>
			</svg>
		</div>
	</button>

	{#if isExpanded}
		<div class="border-t border-zinc-100 bg-white">
			{#each dataList as item (item.id_komentar)}
				{@render KomentarParent(item)}
			{/each}
		</div>
	{/if}
</section>