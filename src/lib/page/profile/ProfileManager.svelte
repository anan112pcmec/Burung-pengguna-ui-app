<script lang="ts">
    import { LeftOpsiState } from "$lib/state/profile/state.svelte";
</script>

<section class="grid grid-cols-[36%_64%] w-full h-[27rem] border border-zinc-950/10 rounded-sm bg-white">
    <!-- LEFT SIDEBAR: Navigasi Opsi -->
    <div class="grid grid-rows-7 pl-4 pr-4 border-r border-zinc-950/10 py-2">
        <!-- Tombol 1: Aktifitas -->
       <!-- Tombol 1: Aktifitas -->
<button 
    onclick={() => LeftOpsiState.setAktifitas()}
    class="w-full grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isAktifitas() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Aktifitas</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 2: Ubah Profil -->
<button 
    onclick={() => LeftOpsiState.setUbahProfil()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isUbahProfil() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Ubah Profil</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 3: Daftar Alamat -->
<button 
    onclick={() => LeftOpsiState.setDaftarAlamat()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isDaftarAlamat() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Daftar Alamat</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 4: Keamanan Akun -->
<button 
    onclick={() => LeftOpsiState.setKeamananAkun()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isKeamananAkun() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Keamanan Akun</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 5: Notifikasi -->
<button 
    onclick={() => LeftOpsiState.setNotifikasi()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isNotifikasi() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Notifikasi</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 6: Privasi Akun -->
<button 
    onclick={() => LeftOpsiState.setPrivasiAkun()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isPrivasiAkun() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Privasi Akun</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 7: Penautan -->
<button 
    onclick={() => LeftOpsiState.setPenautan()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isPenautan() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Penautan</span> 
    <span class="text-right text-zinc-400">-></span>
</button>
    </div>

    <!-- RIGHT CONTENT: Area Isi Data -->
    <div class="p-6 overflow-y-auto scrollbar-none h-full bg-white flex flex-col min-h-0">
        
        {#if LeftOpsiState.isAktifitas()}
            <!-- TAB: AKTIFITAS -->
            <div class="flex flex-col space-y-6">
                <div class="border-b border-zinc-950/10 pb-3">
                    <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">RANGKUMAN AKTIFITAS</h3>
                </div>
                <!-- Grid Pengeluaran -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="border border-zinc-950/10 p-3 rounded-sm">
                        <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Hari Ini</span>
                        <span class="text-sm font-bold text-slate-900">Rp 150.000</span>
                    </div>
                    <div class="border border-zinc-950/10 p-3 rounded-sm">
                        <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Minggu Ini</span>
                        <span class="text-sm font-bold text-slate-900">Rp 1.250.000</span>
                    </div>
                    <div class="border border-zinc-950/10 p-3 rounded-sm">
                        <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Bulan Ini</span>
                        <span class="text-sm font-bold text-slate-900">Maret — Rp 4.800.000</span>
                    </div>
                    <div class="border border-zinc-950/10 p-3 rounded-sm">
                        <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Tahun Ini</span>
                        <span class="text-sm font-bold text-slate-900">2026 — Rp 14.200.000</span>
                    </div>
                </div>
            </div>

        {:else if LeftOpsiState.isUbahProfil()}
            <!-- TAB: UBAH PROFIL (Mengikuti struct Pengguna) -->
            <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
                <div class="overflow-y-auto scrollbar-none space-y-4 pr-1">
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Username</span>
                        <input type="text" placeholder="Masukkan username" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nama Lengkap</span>
                        <input type="text" placeholder="Masukkan nama" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Email</span>
                        <input type="email" placeholder="nama@domain.com" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                </div>
                <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center">
                    <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                        Simpan Perubahan
                    </button>
                </div>
            </form>

        {:else if LeftOpsiState.isDaftarAlamat()}
            <!-- TAB: DAFTAR ALAMAT (Mengikuti struct AlamatPengguna) -->
            <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
                <div class="overflow-y-auto scrollbar-none space-y-4 pr-1">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Panggilan Alamat</span>
                            <input type="text" placeholder="Contoh: Rumah / Kantor" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nomor Telepon</span>
                            <input type="text" placeholder="08xxxx" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alamat Lengkap</span>
                        <input type="text" placeholder="Nama jalan, gedung, nomor rumah" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Provinsi</span>
                            <input type="text" placeholder="Provinsi" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kota</span>
                            <input type="text" placeholder="Kota" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kode Pos</span>
                            <input type="text" placeholder="Kode Pos" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Deskripsi Catatan (Opsional)</span>
                        <input type="text" placeholder="Warna pagar, instruksi kurir, dsb" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                </div>
                <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center">
                    <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                        Tambah Alamat
                    </button>
                </div>
            </form>

        {:else if LeftOpsiState.isKeamananAkun()}
            <!-- TAB: KEAMANAN AKUN -->
            <form class="flex flex-col space-y-5 h-full justify-between">
                <div class="space-y-4">
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Ubah Password Baru</span>
                        <input type="password" placeholder="••••••••" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Ubah PIN Keamanan (6 Digit)</span>
                        <input type="password" maxlength="6" placeholder="••••••" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                </div>
                <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center">
                    <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                        Perbarui Keamanan
                    </button>
                </div>
            </form>

        {:else if LeftOpsiState.isNotifikasi()}
            <!-- TAB: NOTIFIKASI -->
            <div class="flex flex-col space-y-6">
                <div class="border-b border-zinc-950/10 pb-3">
                    <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">PENGATURAN PUSH NOTIFICATION</h3>
                </div>
                <div class="space-y-4">
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Notifikasi Transaksi & Pembayaran</span>
                        <input type="checkbox" checked class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Notifikasi Aktivitas Login Akun</span>
                        <input type="checkbox" checked class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Promo, Flash Sale & Info Logistik</span>
                        <input type="checkbox" class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                </div>
            </div>

        {:else if LeftOpsiState.isPrivasiAkun()}
            <!-- TAB: PRIVASI AKUN -->
            <div class="flex flex-col space-y-6">
                <div class="border-b border-zinc-950/10 pb-3">
                    <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">VISIBILITAS PUBLIK</h3>
                </div>
                <div class="space-y-4">
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Sembunyikan daftar transaksi saya dari publik</span>
                        <input type="checkbox" class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Gunakan nama samaran (anonim) saat ulasan produk</span>
                        <input type="checkbox" checked class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                </div>
            </div>

        {:else if LeftOpsiState.isPenautan()}
            <!-- TAB: PENAUTAN (Mengikuti struct EntitySocialMedia) -->
            <div class="flex flex-col space-y-5 h-full justify-between">
                <div class="space-y-4">
                    <div class="border-b border-zinc-950/10 pb-2 mb-4">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">MEDIA SOSIAL TERHUBUNG</span>
                    </div>
                    
                    <!-- Whatsapp -->
                    <div class="flex items-center justify-between py-1 border-b border-zinc-950/5 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">WhatsApp</span>
                            <span class="text-[10px] text-slate-800/50">+62 812-3456-7890</span>
                        </div>
                        <button class="text-[10px] tracking-widest text-slate-800/60 border border-slate-900/20 px-2 py-0.5 hover:border-slate-950 hover:bg-slate-50 transition rounded-sm uppercase">Putus</button>
                    </div>

                    <!-- Instagram -->
                    <div class="flex items-center justify-between py-1 border-b border-zinc-950/5 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">Instagram</span>
                            <span class="text-[10px] text-slate-800/40">Belum ditautkan</span>
                        </div>
                        <button class="text-[10px] tracking-widest bg-slate-950 text-white px-2 py-0.5 hover:bg-slate-800 transition rounded-sm uppercase">Tautkan</button>
                    </div>

                    <!-- Facebook -->
                    <div class="flex items-center justify-between py-1 border-b border-zinc-950/5 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">Facebook</span>
                            <span class="text-[10px] text-slate-800/40">Belum ditautkan</span>
                        </div>
                        <button class="text-[10px] tracking-widest bg-slate-950 text-white px-2 py-0.5 hover:bg-slate-800 transition rounded-sm uppercase">Tautkan</button>
                    </div>

                    <!-- TikTok -->
                    <div class="flex items-center justify-between py-1 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">TikTok</span>
                            <span class="text-[10px] text-slate-800/40">Belum ditautkan</span>
                        </div>
                        <button class="text-[10px] tracking-widest bg-slate-950 text-white px-2 py-0.5 hover:bg-slate-800 transition rounded-sm uppercase">Tautkan</button>
                    </div>
                </div>
            </div>
        {/if}

    </div>
</section>