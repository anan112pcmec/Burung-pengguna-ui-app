<script lang="ts"></script>

<section id="likes-heading">
    <div class="grid grid-cols-[20%_60%_20%] w-full h-full items-center pt-3">
		
		<!-- Col 1: Title & Total Items -->
		<div class="pl-4 border-r border-zinc-950/10 h-full flex flex-col justify-center">
			<span class="text-[9px]  font-bold tracking-[0.18em] text-zinc-400 uppercase block">
				LIKES RESULT
			</span>
			<h1 class="text-xl font-bold  text-slate-950 tracking-tight mt-0.5">
				HASIL (20)
			</h1>
		</div>

		<!-- Col 2: Search Bar & Search Action Button -->
		<div class="px-4 h-full flex items-center">
			<div class="grid grid-cols-[1fr_auto] gap-2 w-full items-center">
				<!-- Input Search -->
				<div class="relative w-full">
					<input 
						type="text" 
						
						placeholder="Cari Nama Barang..." 
						class="w-full h-10 px-3 text-xs font-sans bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
					/>
				</div>

				<!-- Search Trigger Button -->
				<button 
					type="button" 
					class="h-10 px-3.5 bg-slate-950 text-white hover:bg-slate-800 border border-slate-950 rounded-2xs flex items-center justify-center transition cursor-pointer shrink-0"
					title="Cari"
				>
					<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Col 3: Quick Action (Tambah Wishlist Baru / Folder Icon) -->
		<div class="pr-4 pl-2 border-l border-zinc-950/10 h-full flex items-center justify-end gap-3">
			<div class="relative flex items-center">
                <svg class="w-3.5 h-3.5 text-zinc-400 absolute left-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <select 
                    class="h-10 pl-8 pr-3 text-xs bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-950 transition cursor-pointer uppercase appearance-none"
                >
                    <option value="all">SEMUA</option>
                    <option value="public">Terbaru</option>
                    <option value="private">Terlama</option>
                </select>
            </div>
		</div>

	</div>
</section>