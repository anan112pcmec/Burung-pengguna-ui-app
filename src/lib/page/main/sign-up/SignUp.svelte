<script lang="ts">
	// Pure UI State Mockup
	let nama = $state("");
	let username = $state("");
	let email = $state("");
	let password = $state("");
	let pin = $state("");
</script>

<div class="min-h-screen w-full bg-white text-slate-900 flex items-center justify-center p-4 font-sans selection:bg-slate-900 selection:text-white">
	
	<!-- Card Mockup -->
	<div class="w-full max-w-md border border-zinc-950/10 bg-white p-6 sm:p-8 rounded-sm space-y-6">
		
		<!-- Header -->
		<div class="border-b border-zinc-950/10 pb-4">
			<span class="text-[9px]  font-bold tracking-[0.2em] text-zinc-400 uppercase block">
				AUTHENTICATION
			</span>
			<h1 class="text-xl font-bold  tracking-tight text-slate-950 mt-0.5">
				SIGN UP PENGGUNA
			</h1>
		</div>

		<!-- Form Fields -->
		<form onsubmit={(e) => e.preventDefault()} class="space-y-4 text-xs">
			
			<!-- Nama -->
			<div class="space-y-1">
				<label for="nama" class="text-[10px] text-zinc-500 uppercase font-bold block">
					NAMA LENGKAP
				</label>
				<input 
					id="nama"
					type="text" 
					bind:value={nama}
					placeholder="Nama Lengkap" 
					class="w-full h-10 px-3 bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
				/>
			</div>

			<!-- Username -->
			<div class="space-y-1">
				<label for="username" class="text-[10px] text-zinc-500 uppercase font-bold block">
					USERNAME
				</label>
				<input 
					id="username"
					type="text" 
					bind:value={username}
					placeholder="username" 
					class="w-full h-10 px-3 bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
				/>
			</div>

			<!-- Email -->
			<div class="space-y-1">
				<label for="email" class="text-[10px] text-zinc-500 uppercase font-bold block">
					EMAIL
				</label>
				<input 
					id="email"
					type="email" 
					bind:value={email}
					placeholder="nama@email.com" 
					class="w-full h-10 px-3 bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
				/>
			</div>

			<!-- Password -->
			<div class="space-y-1">
				<label for="password" class="text-[10px] text-zinc-500 uppercase font-bold block">
					PASSWORD
				</label>
				<input 
					id="password"
					type="password" 
					bind:value={password}
					placeholder="••••••••" 
					class="w-full h-10 px-3 bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
				/>
			</div>

			<!-- PIN (Optional Field) -->
			<div class="space-y-1 pt-1">
				<div class="flex items-center justify-between">
					<label for="pin" class="text-[10px] text-zinc-500 uppercase font-bold block">
						PIN (OPSIONAL)
					</label>
				</div>
				<input 
					id="pin"
					type="password" 
					maxlength="6"
					bind:value={pin}
					placeholder="123456" 
					class="w-full h-10 px-3 bg-zinc-50 border border-zinc-950/10 rounded-2xs text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 focus:bg-white transition"
				/>
			</div>

			<!-- Submit Button -->
			<div class="pt-2">
				<button 
					type="submit" 
					class="w-full h-10 bg-slate-950 text-white font-bold hover:bg-slate-800 border border-slate-950 rounded-2xs transition cursor-pointer flex items-center justify-center gap-2"
				>
					<span>DAFTAR</span>
					<span>&rarr;</span>
				</button>
			</div>

		</form>

		<!-- Footer Link -->
		<div class="border-t border-zinc-950/10 pt-4 text-center text-[11px]">
			<span class="text-zinc-500">Sudah ada akun?</span>
			<a href="/login" class="font-bold text-slate-950 hover:underline ml-1">
				MASUK
			</a>
		</div>

	</div>

</div>