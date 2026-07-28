<script lang="ts">
	import { goto } from "$app/navigation";

	// Interface Generik Notification / Email
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

	// Mock Data Email / Mailbox Generik
	let notif: NotificationPengguna = $state({
		id_pengguna: 9012,
		pengirim: "SECURITY_TEAM",
		judul: "Deteksi Sesi Login Baru dari Perangkat Tidak Dikenal",
		pesan: "Sistem mendeteksi aktivitas login baru ke akun Anda pada hari ini pukul 20:15 WIB menggunakan Chrome / macOS di Jakarta. Jika ini adalah Anda, tidak ada tindakan lebih lanjut yang diperlukan. Namun jika Anda merasa tidak melakukan aktivitas ini, segera lakukan reset kata sandi dan amankan sesi akun Anda.",
		pop: 0.85,
		archive: false,
		inbox: true,
		activity: false,
		created_at: "2026-07-25T20:15:00Z",
		data: {
			metadata: {
				ip_address: "180.252.12.99",
				device: "Macintosh (macOS 14.5)",
				browser: "Chrome 126.0",
				location: "Jakarta, Indonesia"
			},
			special: {
				risk_level: "MEDIUM",
				require_2fa: false
			}
		}
	});

	// Helper Format Tanggal Email
	function formatDate(isoString: string): string {
		if (!isoString) return "-";
		const d = new Date(isoString);
		return d.toLocaleDateString('id-ID', {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}) + ' â€¢ ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
	}
</script>

<div class="w-full p-4 mx-auto space-y-6 font-sans selection:bg-slate-900 selection:text-white">
	<!-- â”€â”€â”€ 1. MAIL TOOLBAR (BACK & ACTIONS) â”€â”€â”€ -->
	<div class="flex items-center justify-between  pb-3 ">
		<button 
            onclick={() => goto("/inbox")}
			type="button" 
			class="text-xs font-bold text-slate-800 hover:text-slate-950 flex items-center gap-1.5 transition"
		>
			â† KEMBALI KE INBOX
		</button>

		<div class="flex items-center gap-1.5">
			<button 
				type="button" 
				class="text-[11px] px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200  text-slate-800 rounded-2xs transition"
			>
				{notif.archive ? 'Unarchive' : 'Archive'}
			</button>
			<button 
				type="button" 
				class="text-[11px] px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200  text-slate-800 rounded-2xs transition"
			>
				Mark Unread
			</button>
			<button 
				type="button" 
				class="text-[11px] px-2.5 py-1 bg-rose-50 hover:bg-rose-100  text-rose-700 rounded-2xs transition"
			>
				Delete
			</button>
		</div>
	</div>

	<!-- â”€â”€â”€ 2. HEADER EMAIL (SUBJECT & SENDER INFO) â”€â”€â”€ -->
	<section class="space-y-4">
		<!-- Email Subject -->
		<h1 class="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 leading-snug">
			{notif.judul}
		</h1>

		<!-- Sender & Recipient Box -->
		<div class=" bg-zinc-50/50 p-4 rounded-sm space-y-3  text-xs">
			<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2  pb-3">
				<!-- Sender Avatar & Name -->
				<div class="flex items-center gap-2.5">
					<div class="w-8 h-8 rounded-2xs bg-slate-950 text-white font-bold flex items-center justify-center shrink-0">
						{notif.pengirim.charAt(0)}
					</div>
					<div>
						<div class="font-bold text-slate-950 uppercase">{notif.pengirim}</div>
						<div class="text-[10px] text-zinc-400">Ke: User #{notif.id_pengguna}</div>
					</div>
				</div>

				<!-- Date Sent -->
				<div class="text-[11px] text-zinc-500">
					{formatDate(notif.created_at)}
				</div>
			</div>

			<!-- Status Badges & Priority Score -->
			<div class="flex flex-wrap items-center justify-between gap-2 text-[10px]">
				<div class="flex items-center gap-1.5">
					<span class="text-zinc-400 uppercase">FLAGS:</span>
					{#if notif.inbox}
						<span class="px-1.5 py-0.5 bg-blue-50 text-blue-700  rounded-2xs">
							INBOX
						</span>
					{/if}
					{#if notif.activity}
						<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-2xs">
							ACTIVITY
						</span>
					{/if}
					{#if notif.archive}
						<span class="px-1.5 py-0.5 bg-zinc-200 text-zinc-700 rounded-2xs">
							ARCHIVED
						</span>
					{/if}
				</div>

				<!-- Priority Score (POP) -->
				
			</div>

			<!-- Optional Expiration Warning -->
			{#if notif.expired_at}
				<div class="p-2 bg-amber-50 text-amber-900 text-[10px] rounded-2xs flex justify-between">
					<span>â° Pesan/Event ini berlaku sampai:</span>
					<span class="font-bold">{formatDate(notif.expired_at)}</span>
				</div>
			{/if}
		</div>
	</section>

	<!-- â”€â”€â”€ 3. EMAIL BODY CONTENT â”€â”€â”€ -->
	<section class=" sm:p-8 rounded-sm bg-white space-y-4 shadow-2xs">
		<div class="text-sm sm:text-base text-slate-800 leading-relaxed font-sans whitespace-pre-line">
			{notif.pesan}
		</div>
	</section>

	<!-- â”€â”€â”€ 4. ATTACHED DATA / PAYLOAD (OPTIONAL) â”€â”€â”€ -->
	{#if notif.data?.metadata || notif.data?.special}
		<section class="space-y-3 pt-2">
			<div class="border-b border-zinc-950/10 pb-1.5">
				<h2 class="text-xs font-bold tracking-[0.18em] text-slate-950 uppercase ">
					DATA PAYLOAD / SYSTEM ATTACHMENTS
				</h2>
			</div>

			<div class="grid grid-cols-1  gap-4">
				<!-- Metadata -->
				{#if notif.data.metadata}
					<div class="p-4 border border-zinc-950/10 rounded-sm bg-white space-y-2">
						<span class="text-[10px]  font-bold text-zinc-400 uppercase block">
							Metadata Map
						</span>
						<div class="space-y-1.5  text-xs">
							{#each Object.entries(notif.data.metadata) as [key, value]}
								<div class="flex justify-between border-b border-zinc-100 pb-1">
									<span class="text-zinc-500">{key}</span>
									<span class="font-bold text-slate-950">{value}</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Special Object -->
			
			</div>
		</section>
	{/if}

</div>