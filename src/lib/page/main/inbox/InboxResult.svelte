<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Action } from "svelte/action";

	// Tipe data berdasarkan Go struct NotificationPengguna
	interface NotificationPengguna {
		id_pengguna: number;
		pengirim: string;
		judul: string;
		pesan: string;
		pop: number;
		archive: boolean;
		inbox: boolean;
		activity: boolean;
		created_at: string;
		expired_at?: string;
		data?: {
			metadata?: Record<string, any>;
			special?: any;
		};
	}

	// Mock Data Notification Mail Stack
	const notifications: NotificationPengguna[] = [
		{
			id_pengguna: 88,
			pengirim: "DISPATCH_SYSTEM",
			judul: "Penugasan Rute Baru #R-8921",
			pesan: "Kamu mendapatkan alokasi rute penjemputan baru di area Jakarta Selatan. Harap konfirmasi penerimaan sebelum batas waktu expired habis.",
			pop: 0.95,
			archive: false,
			inbox: true,
			activity: true,
			created_at: "2026-07-25T19:45:00Z",
			expired_at: "2026-07-25T20:45:00Z",
			data: {
				metadata: { origin: "Hub Kebayoran", total_items: 4, weight_kg: 12.5 }
			}
		},
		{
			id_pengguna: 88,
			pengirim: "FLEET_MONITOR",
			judul: "Peringatan Cuaca Hujan Deras Area Rute",
			pesan: "Laporan BMKG menunjukkan potensi hujan deras disertai angin di Kecamatan Cilandak. Harap gunakan pelindung terpal tambahan pada muatan.",
			pop: 0.60,
			archive: false,
			inbox: true,
			activity: false,
			created_at: "2026-07-25T18:30:00Z",
			data: {
				metadata: { severity: "HIGH", zone: "JKT-SEL-04" }
			}
		},
		{
			id_pengguna: 88,
			pengirim: "CUSTOMER_CARE",
			judul: "Ulasan Baru Dari Penerima Order #R-8810",
			pesan: "Penerima memberikan rating ★ 5.0 dengan catatan: 'Kurir sangat ramah, barang rentan dilapisi bubble wrap rapi'.",
			pop: 0.30,
			archive: false,
			inbox: true,
			activity: true,
			created_at: "2026-07-25T15:10:00Z",
			data: {
				metadata: { rating: 5, user_id: "USR-9921" }
			}
		},
		{
			id_pengguna: 88,
			pengirim: "SYSTEM_AUDIT",
			judul: "Laporan Pemeliharaan Kendaraan Mingguan",
			pesan: "Jadwal servis rutin sepeda motor milikmu dijadwalkan besok pagi di Bengkel Mitra Hub Barat.",
			pop: 0.10,
			archive: true,
			inbox: false,
			activity: false,
			created_at: "2026-07-24T09:00:00Z"
		}
	];

	// State untuk tracking item yang sedang di-expand preview-nya
	let expandedId: string | null = null;

	function toggleExpand(id: string) {
		expandedId = expandedId === id ? null : id;
	}

	// Helper Format Tanggal/Waktu Sederhana
	function formatTime(isoString: string): string {
		const date = new Date(isoString);
		return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
	}

    const InboxClickAction: Action = (node) => {
        const inboxData: NodeListOf<HTMLDivElement> = node.querySelectorAll('[class*="inbox-res"]') as NodeListOf<HTMLDivElement>
        const handlers: {element: HTMLDivElement, e: (e: PointerEvent) => void}[] = []

        for (const inboxEl of inboxData){
            const event = (e: PointerEvent):void => {
                e.preventDefault();
                e.stopPropagation();
                goto("/details/inbox");
            }

            inboxEl.addEventListener("click", (e) => event(e))
            handlers.push({element: inboxEl, e: event})
        }

        return {
            destroy(){
                for (const d of handlers){
                    d.element.removeEventListener("click", d.e)
                }
            }
        }
    }
</script>

<div class="w-full w-full mx-auto space-y-4 font-sans selection:bg-slate-900 selection:text-white">

	<!-- HEADER & CONTROL BAR -->
	<div class="flex pl-5 items-center justify-between border-b border-zinc-950/10 pb-3 font-mono">
		<div class="flex items-center gap-2">
			<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase">
				KOTAK MASUK NOTIFIKASI
			</h2>
			<span class="text-[10px] bg-slate-950 text-white px-2 py-0.5 rounded-2xs">
				{notifications.filter(n => n.inbox).length} BARU
			</span>
		</div>
		<div class="text-[10px] text-zinc-400">
			STACK: TOP-TO-BOTTOM
		</div>
	</div>

	<!-- MAIL STACK LIST (TOP TO BOTTOM) -->
	<div use:InboxClickAction class="border border-zinc-950/10 rounded-sm divide-y divide-zinc-950/10 bg-white overflow-hidden">
		{#each notifications as notif, i}
			{@const notifKey = `${notif.created_at}-${i}`}
			{@const isExpanded = expandedId === notifKey}

			<div 
				class="inbox-res-{i} transition duration-150 hover:bg-zinc-50/80 cursor-pointer p-3.5 sm:p-4
				{notif.inbox ? 'bg-white' : 'bg-zinc-50/40 opacity-75'}"
				on:click={() => toggleExpand(notifKey)}
				on:keydown={(e) => e.key === 'Enter' && toggleExpand(notifKey)}
				role="button"
				tabindex="0"
			>
				<!-- LINE 1: SENDER, BADGES, & TIMESTAMP -->
				<div class="flex items-center justify-between gap-2 mb-1.5 font-mono text-[10px]">
					<div class="flex items-center gap-2 truncate">
						<!-- Priority / Pop Level Indicator -->
						{#if notif.pop >= 0.8}
							<span class="w-2 h-2 rounded-full bg-rose-500 shrink-0" title="High Priority (Pop >= 0.8)"></span>
						{:else if notif.pop >= 0.4}
							<span class="w-2 h-2 rounded-full bg-amber-500 shrink-0" title="Medium Priority"></span>
						{:else}
							<span class="w-2 h-2 rounded-full bg-zinc-300 shrink-0" title="Low Priority"></span>
						{/if}

						<!-- Sender Name -->
						<span class="font-bold tracking-wider text-slate-950 uppercase">
							{notif.pengirim}
						</span>

						<!-- Status Badges -->
						<div class="flex items-center gap-1">
							{#if notif.activity}
								<span class="px-1.5 py-0.2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-2xs text-[9px]">
									ACTIVITY
								</span>
							{/if}
							{#if notif.archive}
								<span class="px-1.5 py-0.2 bg-zinc-100 text-zinc-500 border border-zinc-200 rounded-2xs text-[9px]">
									ARCHIVED
								</span>
							{/if}
						</div>
					</div>

					<!-- Time -->
					<div class="text-zinc-400 shrink-0">
						{formatTime(notif.created_at)} WIB
					</div>
				</div>

				<!-- LINE 2: JUDUL NOTIFIKASI -->
				<h3 class="text-xs font-bold text-slate-900 tracking-tight mb-1">
					{notif.judul}
				</h3>

				<!-- LINE 3: PESAN SNIPPET (Truncated 1 line) -->
				<p class="text-xs text-slate-500 font-light line-clamp-1 leading-relaxed">
					{notif.pesan}
				</p>

				<!-- EXPANDED DETAIL VIEW (MODULAR METADATA) -->
				{#if isExpanded}
					<div class="mt-3 pt-3 border-t border-dashed border-zinc-200 space-y-2 text-xs font-mono bg-zinc-50/80 p-3 rounded-2xs">
						<div class="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
							Detail Pesan Lengkap:
						</div>
						<p class="text-slate-700 font-sans leading-normal">
							{notif.pesan}
						</p>

						{#if notif.expired_at}
							<div class="text-[10px] text-rose-600 bg-rose-50 border border-rose-200 p-1.5 rounded-2xs">
								⏳ Batas Waktu Response: {new Date(notif.expired_at).toLocaleString('id-ID')}
							</div>
						{/if}

						{#if notif.data?.metadata}
							<div class="pt-1">
								<span class="text-[10px] text-zinc-400 block mb-1">METADATA PAYLOAD:</span>
								<div class="bg-slate-950 text-zinc-200 p-2 rounded-2xs text-[10px] overflow-x-auto">
									<pre>{JSON.stringify(notif.data.metadata, null, 2)}</pre>
								</div>
							</div>
						{/if}
					</div>
				{/if}

			</div>
		{/each}
	</div>

	<!-- FOOTER INFO -->
	<div class="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1">
		<span>Klik item untuk melihat detail payload</span>
	</div>

</div>