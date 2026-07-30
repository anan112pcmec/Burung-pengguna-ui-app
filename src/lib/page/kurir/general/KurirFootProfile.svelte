<script lang="ts">
	import { Full } from "../../../../constant/UiConstant";

	// Styling constants sesuai standar design system
	const footerHeaders = "text-[10px] font-bold tracking-[0.18em] text-slate-950/60 uppercase mb-3 ";
	const footerLinks = "text-slate-600 hover:text-slate-950 transition-colors block mb-1.5 text-xs font-medium tracking-tight";

	// Mock Data dari Struct Kurir & BidKurirData
	const kurir = {
		nama: "Budi Pratama",
		username: "cargo_budi",
		id_kurir: 88,
		deskripsi: "Mitra kurir area Jakarta Selatan & Barat. Mengutamakan kecepatan dan keamanan barang rentan pecah.",
		tipe_kendaraan: "Motor",
		jenis_layanan: "Reguler & SameDay",
		status_operasional: "Aktif Melayani"
	};

	// Active Logistics Session Data
	const activeBidSession = {
		provinsi: "DKI Jakarta",
		kota: "Jakarta Selatan",
		max_kg: 20,
		total_rute_selesai: 1420
	};
</script>

<footer class="w-full mt-20 bg-white border-t border-zinc-200 selection:bg-slate-900 selection:text-white font-sans">
	
	<!-- SEKSI 1: COURIER OPERATIONAL FOOTER (Top Level) -->
	<div class="border-b border-zinc-100 bg-zinc-50/40">
		<div class="grid grid-cols-1 md:grid-cols-12 gap-6 px-8 lg:px-12 py-8 items-start">
			
			<!-- Profil Kurir & Foto (Col: 5) -->
			<div class="md:col-span-5 space-y-3">
				<div class="flex items-center gap-3">
					<!-- Foto Kurir -->
					<div class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0  text-xs font-bold border border-zinc-200 overflow-hidden">
						<img 
							src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
							alt={kurir.nama}
							class="w-full h-full object-cover opacity-90"
						/>
					</div>
					<div>
						<h3 class="text-xs font-bold tracking-tight text-slate-900 uppercase  flex items-center gap-1.5">
							{kurir.nama}
							<span class="text-[9px] bg-slate-900 text-white px-1 py-0.2 rounded-xs  font-normal">
								#{kurir.id_kurir}
							</span>
						</h3>
						<span class="text-[10px] text-zinc-400  block">
							@{kurir.username} &bull; Mitra Kurir Terverifikasi
						</span>
					</div>
				</div>

				<p class="text-slate-500 text-xs leading-relaxed font-light pr-4">
					{kurir.deskripsi}
				</p>

				<!-- Status Operational Area Badge -->
				<div class="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-100 rounded-xs text-[10px]  text-slate-600">
					<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
					<span>Area Operasional: {activeBidSession.kota}, {activeBidSession.provinsi}</span>
				</div>
			</div>

			<!-- Ringkasan Logistik & Armada (Col: 3) -->
			<div class="md:col-span-3 space-y-2 border-l border-zinc-200/60 pl-6 hidden md:block">
				<h4 class={footerHeaders}>Ringkasan Armada</h4>
				<div class="space-y-1.5  text-xs">
					<div class="flex justify-between items-center pr-4">
						<span class="text-zinc-400 text-[11px]">Kendaraan:</span>
						<span class="font-bold text-slate-900">{kurir.tipe_kendaraan}</span>
					</div>
					<div class="flex justify-between items-center pr-4">
						<span class="text-zinc-400 text-[11px]">Beban Max:</span>
						<span class="font-bold text-slate-900">{activeBidSession.max_kg} KG</span>
					</div>
					<div class="flex justify-between items-center pr-4">
						<span class="text-zinc-400 text-[11px]">Total Pengantaran:</span>
						<span class="font-bold text-emerald-600">{activeBidSession.total_rute_selesai} Rute</span>
					</div>
				</div>
			</div>

			<!-- Quick Logistics Protocol & Info (Col: 4) -->
			<div class="md:col-span-4 space-y-2 lg:pl-6 lg:border-l lg:border-zinc-200/60">
				<h4 class={footerHeaders}>Protokol Pengiriman</h4>
				<div class="space-y-1 text-xs  text-slate-600">
					<div class="flex items-center gap-1.5">
						<span class="text-[10px] text-zinc-400">ðŸ›¡ï¸</span>
						<span>Asuransi Barang Kategori Rentan</span>
					</div>
					<div class="flex items-center gap-1.5">
						<span class="text-[10px] text-zinc-400">âš¡</span>
						<span>Layanan {kurir.jenis_layanan}</span>
					</div>
					<div class="flex items-center gap-1.5">
						<span class="text-[10px] text-zinc-400">ðŸ“</span>
						<span>Tracking Real-Time GPS Active</span>
					</div>
				</div>
			</div>

		</div>
	</div>

	<!-- SEKSI 2: GENERAL PLATFORM FOOTER (Bottom Level) -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-12 py-10">
		
		<!-- Platform Branding & Mascot -->
		<div class="space-y-3">
			<div class="flex items-center gap-2">
				<svg class="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M16 7n-4 4 4 4" />
					<path d="M22 6c-3-1-7 1-10 4-3 3-5 7-6 11 3-1 7-3 10-6 3-3 5-7 6-9z" />
					<path d="M6 18c-2 1-4 1-5 0 0-2 1-4 2-5" />
				</svg>
				<h3 class="text-xs font-bold tracking-widest text-slate-950 uppercase ">BURUNG LOGISTICS</h3>
			</div>
			<p class="text-slate-500 text-xs leading-relaxed font-light">
				Jaringan armada penjemputan dan pengantaran independen dengan penetapan rute berbasis batching & bidding system.
			</p>
		</div>

		<!-- Links Navigasi Kurir & Hub -->
		<div>
			<h4 class={footerHeaders}>Navigasi Armada</h4>
			<ul class="space-y-1">
				<li><a href="/courier/dispatch" class={footerLinks}>Papan Antrean (Dispatch)</a></li>
				<li><a href="/courier/bids" class={footerLinks}>Sesi Lelang Slot</a></li>
				<li><a href="/courier/history" class={footerLinks}>Riwayat Pengiriman</a></li>
				<li><a href="/courier/hub" class={footerLinks}>Lokasi Drop Point (Hub)</a></li>
			</ul>
		</div>

		<div>
			<h4 class={footerHeaders}>Bantuan & Operasional</h4>
			<ul class="space-y-1">
				<li><a href="/help/courier-guide" class={footerLinks}>Panduan Kurir</a></li>
				<li><a href="/help/claim" class={footerLinks}>Klaim Kendala Ruang/Beban</a></li>
				<li><a href="/privacy" class={footerLinks}>Kebijakan Privasi Data Lokasi</a></li>
				<li><a href="/terms/courier" class={footerLinks}>Ketentuan Layanan Mitra</a></li>
			</ul>
		</div>

		<!-- Status Dispatch Emergency Contact -->
		<div class="space-y-3 lg:pl-6 lg:border-l lg:border-zinc-200/60">
			<h4 class={footerHeaders}>PUSAT KENDALI FLEET</h4>
			<p class="text-slate-500 text-xs leading-relaxed font-light">
				Butuh bantuan darurat kendala rute atau kurir breakdown di lapangan?
			</p>
			
			<a 
				href="/dispatch/emergency"
				class="block w-full bg-slate-950 text-white text-[10px]  font-medium tracking-[0.18em] py-2.5 px-4 text-center hover:bg-slate-800 transition duration-300 rounded-xs uppercase cursor-pointer"
			>
				HUBUNGI DISPATCHER â†’
			</a>
		</div>

	</div>

	<!-- COPYRIGHT & CREDITS -->
	<div class="border-t border-zinc-200/60 bg-zinc-50 py-3.5 px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between text-[10px]  text-zinc-400 gap-2">
		<div>
			&copy; 2026 BURUNG LOGISTICS GROUP. ALL RIGHTS RESERVED.
		</div>
		<div class="flex items-center gap-3 text-zinc-400">
			<span>DESIGNED BY FAIZ HANNAN HAKIM</span>
			<span>.</span>
			<span class="text-slate-600 font-semibold">JAKARTA, ID</span>
		</div>
	</div>

</footer>