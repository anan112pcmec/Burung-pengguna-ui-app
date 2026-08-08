<script lang="ts">
	import { SignUpPageState } from "$lib/page/main/sign-up/state/ui.state.svelte";

	// Pure UI State Mockup
	let nama = $state("");
	let username = $state("");
	let email = $state("");
	let password = $state("");
	let pin = $state("");
</script>

<div class="h-[40rem] w-full bg-white text-slate-900 flex items-center justify-center p-4 font-sans selection:bg-slate-900 selection:text-white">
	
	<!-- Card Mockup -->
	<div class="w-full max-w-md border border-zinc-950/10 bg-white p-6 sm:p-8 rounded-sm space-y-3">
        
        <!-- Header -->
        <div class="border-b border-zinc-950/10 pb-2">
            <span class="text-[9px]  font-bold tracking-[0.2em] text-zinc-400 uppercase block">
                AUTHENTICATION
            </span>
            <h1 class="text-lg font-bold  tracking-tight text-slate-950 mt-0.5">
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

            <!-- Terms & Conditions Checkbox -->
            <div class="flex items-start space-x-2 pt-1">
                <input 
                    id="terms"
                    type="checkbox" 
                    class="mt-0.5 h-4 w-4 rounded-2xs border border-zinc-950/10 bg-zinc-50 text-slate-950 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-slate-950"
                />
                <label for="terms" class="text-[10px] text-zinc-500 leading-tight cursor-pointer select-none">
                    Dengan ini saya menyatakan setuju untuk mematuhi segala aturan, ketentuan, dan tata tertib yang berlaku di platform ini.
                </label>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
                <button 
                    onclick={(e) => {
                        e.preventDefault();
                        SignUpPageState.Otp()
                        }}
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