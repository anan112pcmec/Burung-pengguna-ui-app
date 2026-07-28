<script lang="ts">
	// State Filter & Search
	let searchQuery = $state("");
	let statusFilter = $state("Semua"); // 'Semua' | 'Sudah Dibaca' | 'Belum Dibaca'
	let senderFilter = $state("Semua"); // 'Semua' | 'Seller' | 'Sistem'

	// Prop / State Angka Total Inbox
	let totalInbox = $state(24);
</script>

<section id="inbox-heading" class="mb-5 p-5 grid grid-rows-[30%_70%] h-[8rem] border-b border-zinc-950/10 pb-2">
	<!-- Row 1: Search Bar -->
	<div class="flex items-center pt-1">
		<div class="relative w-full h-full">
			<input 
				type="text" 
				bind:value={searchQuery}
				placeholder="Cari berdasarkan judul" 
				class="w-full h-full px-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs font-sans text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
			/>
		</div>
	</div>

	<!-- Row 2: Filter & Total Count Grid -->
	<div class="grid grid-cols-[40%_40%_20%]">
		<!-- Col 1: Filter Status & Pengirim -->
		<div class="flex items-center gap-2 pr-2">
			<!-- Status Filter -->
			<select 
				bind:value={statusFilter}
				class="w-full  px-2 text-[11px]  bg-white border border-zinc-950/10 rounded-2xs text-slate-800 focus:outline-none focus:border-slate-950 cursor-pointer"
			>
				<option value="Semua">Status: Semua</option>
				<option value="Sudah Dibaca">Sudah Dibaca</option>
				<option value="Belum Dibaca">Belum Dibaca</option>
			</select>

			<!-- Pengirim Filter -->
			<select 
				bind:value={senderFilter}
				class="w-full  px-2 text-[11px]  bg-white border border-zinc-950/10 rounded-2xs text-slate-800 focus:outline-none focus:border-slate-950 cursor-pointer"
			>
				<option value="Semua">Pengirim: Semua</option>
				<option value="Seller">Seller</option>
				<option value="Sistem">Sistem</option>
			</select>
		</div>

		<!-- Col 2: Jarak / Spacer -->
		<div></div>

		<!-- Col 3: Angka Total Inbox -->
		<div class="flex items-center justify-end ">
			<div class="text-right">
				<span class="text-[9px] text-zinc-400 block leading-none tracking-wider uppercase">TOTAL INBOX</span>
				<span class="text-xl font-bold text-slate-950 leading-tight">{totalInbox}</span>
			</div>
		</div>
	</div>
</section>