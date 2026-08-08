<script lang=ts>
	import { SettingsPageState } from "./state/ui.state.svelte";

</script>

{#if SettingsPageState.Profil__IsTidakUbahProfil()}
    <!-- TAMPILAN PROFIL DETAIL (Ketika tidak sedang mengubah) -->
    <div class="flex flex-col space-y-6 h-full grid grid-rows-[82%_18%]">
        <div class="overflow-y-auto scrollbar-none space-y-6 pr-1">

            <!-- Section Foto Profil & Metadata Dasar -->
            <div class="flex items-center space-x-4 border-b border-zinc-950/10 pb-5">
                <!-- Bingkai Foto Kaku Khas Lu -->
                <div class="w-16 h-16 bg-zinc-100 border border-zinc-950/10 rounded-sm overflow-hidden flex items-center justify-center">
                    <img src="src/constant/avatar-placeholder.png" alt="Avatar" class="w-full h-full object-cover grayscale" />
                </div>
                <div class="flex flex-col space-y-1">
                    <h2 class="text-sm font-semibold text-slate-950 tracking-wide">@username_anda</h2>
                    <!-- Status Pengguna (Online/Offline) dari Struct Go -->
                    <div class="flex items-center space-x-1.5">
                        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        <span class="text-[10px] text-slate-800/60 uppercase tracking-wider font-medium">Online</span>
                    </div>
                </div>
            </div>

            <!-- Detail Informasi Berdasarkan Data Struct -->
            <div class="space-y-4">
                <!-- Field: ID Pengguna -->
                <div class="flex flex-col space-y-1">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">ID USER</span>
                    <span class="text-xs text-slate-900  font-medium">#10293847</span>
                </div>

                <!-- Field: Nama Lengkap -->
                <div class="flex flex-col space-y-1">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nama Lengkap</span>
                    <span class="text-xs text-slate-900 font-medium">Nama Pengguna Asli</span>
                </div>

                <!-- Field: Email -->
                <div class="flex flex-col space-y-1">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alamat Email</span>
                    <span class="text-xs text-slate-900">nama@domain.com</span>
                </div>

                <!-- Field: Waktu Dibuat -->
                <div class="flex flex-col space-y-1">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Bergabung Sejak</span>
                    <span class="text-xs text-slate-900/70">20 Maret 2026</span>
                </div>
            </div>
        </div>

        <!-- Bagian Footer Aksi untuk Pindah ke Mode Ubah Profil -->
        <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center">
            <button
                type="button"
                onclick={() => SettingsPageState.Profil__UbahProfil()}
                class="text-xs tracking-wide border border-slate-900/20 px-4 py-2 hover:border-slate-950 hover:bg-slate-50 transition duration-300 rounded-sm uppercase font-medium text-slate-800">
                Ubah Data Profil
            </button>
        </div>
    </div>

{:else if SettingsPageState.Profil__IsUbahProfil()}
    <!-- Form Ubah Profil Lu Bawaan Sebelumnya -->
   <form class="flex flex-col space-y-4 h-full grid grid-rows-[85%_15%]">
    <div class="overflow-y-auto scrollbar-none space-y-4 pr-1">
        
        <!-- Foto Profil: Layout Kompak & Asimetris -->
        <div class="p-3 border border-slate-900/10 rounded-sm bg-slate-50/50 flex items-center gap-4">
            <div class="w-16 h-16 rounded-sm border border-slate-900/20 bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-sm text-slate-400 text-xs">
                <span>Foto</span>
            </div>
            <div class="flex flex-col space-y-1.5 w-full">
                <span class="text-[9px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Foto Profil</span>
                <div class="flex items-center gap-2">
                    <label class="cursor-pointer border border-slate-900/20 px-3 py-1 text-[11px] text-slate-800 bg-white hover:border-slate-950 hover:bg-slate-100 transition duration-300 rounded-sm uppercase font-medium">
                        Unggah Baru
                        <input type="file" accept="image/*" class="hidden" />
                    </label>
                    <span class="text-[10px] text-slate-400">JPG, PNG (Maks. 2MB)</span>
                </div>
            </div>
        </div>

        <!-- Username & Nama Lengkap (Grid 2 Kolom Kompak) -->
        <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col space-y-1.5">
                <span class="text-[9px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Username</span>
                <input type="text" placeholder="username" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
            </div>
            <div class="flex flex-col space-y-1.5">
                <span class="text-[9px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nama Lengkap</span>
                <input type="text" placeholder="Nama lengkap" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
            </div>
        </div>

        <!-- Email -->
        <div class="flex flex-col space-y-1.5">
            <span class="text-[9px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Email</span>
            <input type="email" placeholder="nama@domain.com" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
        </div>
    </div>

    <!-- Footer Aksi -->
    <div class="border-t border-zinc-950/10 pt-2 flex justify-end items-center gap-2">
        <button
            type="button"
            onclick={() => SettingsPageState.Profil__TidakUbahProfil()}
            class="text-xs tracking-wide border border-transparent text-slate-500 hover:text-slate-950 px-3 py-1.5 transition duration-300 rounded-sm uppercase font-medium">
            Batal
        </button>
        <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-3 py-1.5 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
            Simpan Perubahan
        </button>
    </div>
</form>
{/if}