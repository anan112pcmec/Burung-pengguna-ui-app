<script lang="ts">
    let activeTab: string = $state<string>('password') ;
</script>

{#snippet UbahPassword()}
    <form class="flex flex-col space-y-5 h-full justify-between">
        <div class="space-y-4">
            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Password Lama</span>
                <input
                    type="password"
                    placeholder="••••••••"
                    class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70"
                />
            </div>

            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Password Baru</span>
                <input
                    type="password"
                    placeholder="••••••••"
                    class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70"
                />
            </div>

            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alasan Mengubah</span>
                <textarea
                    rows="2"
                    placeholder="Jelaskan alasan perubahan keamanan ini..."
                    class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70 resize-none"
                ></textarea>
            </div>

            <div class="flex flex-col space-y-2 pt-1">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Metode Verifikasi</span>
                <div class="grid grid-cols-2 gap-2">
                    <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                        <input type="radio" name="verification_method" value="email" class="accent-slate-950 cursor-pointer text-slate-900" checked />
                        <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">OTP via Email</span>
                    </label>
                    <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                        <input type="radio" name="verification_method" value="pin" class="accent-slate-950 text-slate-900  cursor-pointer" />
                        <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">Via PIN Security</span>
                    </label>
                </div>
            </div>

            <div class="pt-2">
                <label class="flex items-start gap-2.5 cursor-pointer select-none group">
                    <input type="checkbox" required class="mt-0.5 accent-slate-950 rounded-xs cursor-pointer" />
                    <span class="text-[10px] text-slate-900/70 leading-normal group-hover:text-slate-950">
                        Saya menyetujui dan mematuhi seluruh <span class="font-bold underline text-slate-950">aturan & ketentuan keamanan</span> yang berlaku.
                    </span>
                </label>
            </div>
        </div>

        <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center mt-4">
            <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                Perbarui Keamanan
            </button>
        </div>
    </form>
{/snippet}

{#snippet UbahPin()}
    <form class="flex flex-col space-y-5 h-full justify-between">
        <div class="space-y-4">
            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">PIN Lama</span>
                <input
                    type="password"
                    maxlength="6"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    placeholder="••••••"
                    class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70  tracking-[0.3em]"
                />
            </div>

            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">PIN Baru (6 Angka)</span>
                <input
                    type="password"
                    maxlength="6"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    placeholder="••••••"
                    class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70  tracking-[0.3em]"
                />
            </div>

            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Konfirmasi PIN Baru</span>
                <input
                    type="password"
                    maxlength="6"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    placeholder="••••••"
                    class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70  tracking-[0.3em]"
                />
            </div>

            <div class="flex flex-col space-y-2 pt-1">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Metode Verifikasi</span>
                <div class="grid grid-cols-2 gap-2">
                    <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                        <input type="radio" name="pin_verification_method" value="email" class="accent-slate-950 cursor-pointer text-slate-900" checked />
                        <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">OTP via Email</span>
                    </label>
                    <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                        <input type="radio" name="pin_verification_method" value="password" class="accent-slate-950 cursor-pointer text-slate-900" />
                        <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">Via Password</span>
                    </label>
                </div>
            </div>

            <div class="pt-2">
                <label class="flex items-start gap-2.5 cursor-pointer select-none group">
                    <input type="checkbox" required class="mt-0.5 accent-slate-950 rounded-xs cursor-pointer" />
                    <span class="text-[10px] text-slate-900/70 leading-normal group-hover:text-slate-950">
                        Saya mengerti bahwa PIN ini digunakan untuk <span class="font-bold underline text-slate-950">otorisasi transaksi penting</span>.
                    </span>
                </label>
            </div>
        </div>

        <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center mt-4">
            <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                Perbarui PIN
            </button>
        </div>
    </form>
{/snippet}

<div class="grid grid-cols-2 w-fit justify-center gap-1 border-b border-zinc-950/10 pb-1">
    <button
        type="button"
        onclick={() => activeTab = 'password'}
        class="px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-all duration-200 select-none rounded-sm"
        style="
        background-color: {activeTab === 'password' ? '#020617' : 'transparent'};
        color: {activeTab === 'password' ? '#ffffff' : 'rgba(2, 6, 23, 0.5)'};
        border: {activeTab === 'password' ? '1px solid #020617' : '1px solid transparent'};
        "
    >
        Ubah Password
    </button>

    <button
        type="button"
        onclick={() => activeTab = 'pin'}
        class="px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-all duration-200 select-none rounded-sm"
        style="
        background-color: {activeTab === 'pin' ? '#020617' : 'transparent'};
        color: {activeTab === 'pin' ? '#ffffff' : 'rgba(2, 6, 23, 0.5)'};
        border: {activeTab === 'pin' ? '1px solid #020617' : '1px solid transparent'};
        "
    >
        Ubah Pin
    </button>
</div>

<div class="mt-4">
    {#if activeTab === 'password'}
        {@render UbahPassword()}
    {:else if activeTab === 'pin'}
        {@render UbahPin()}
    {/if}
</div>