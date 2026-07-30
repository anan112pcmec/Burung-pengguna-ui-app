<script lang="ts">
    // Styling constants sesuai standar design system
    const footerHeaders = "text-[10px] font-bold tracking-[0.18em] text-slate-950/60 uppercase mb-3";
    const footerLinks = "text-slate-600 hover:text-slate-950 transition-colors block mb-1.5 text-xs font-medium tracking-tight";

    // Mock Data Pengguna
    const user = {
        nama: "Hafidz Al-Faruq",
        username: "hafidz_al",
        id_user: 452,
        email: "hafidz.faruq@gmail.com",
        status: "Online",
        bergabung: "Juni 2025"
    };
</script>

<footer class="w-full mt-20 bg-white border-t border-zinc-200 selection:bg-slate-900 selection:text-white font-sans">
    
    <!-- SEKSI 1: USER ACCOUNT FOOTER (Top Level) -->
    <div class="border-b border-zinc-100 bg-zinc-50/40">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 px-8 lg:px-12 py-8 items-start">
            
            <!-- Profil Singkat Pengguna (Col: 5) -->
            <div class="md:col-span-5 space-y-3">
                <div class="flex items-center gap-3">
                    <!-- Foto Avatar -->
                    <div class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 text-xs font-bold border border-zinc-200 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
                            alt={user.nama}
                            class="w-full h-full object-cover opacity-90"
                        />
                    </div>
                    <div>
                        <h3 class="text-xs font-bold tracking-tight text-slate-900 uppercase flex items-center gap-1.5">
                            {user.nama}
                            <span class="text-[9px] bg-slate-900 text-white px-1 py-0.2 rounded-xs font-normal">
                                #{user.id_user}
                            </span>
                        </h3>
                        <span class="text-[10px] text-zinc-400 block font-mono">
                            @{user.username} • {user.email}
                        </span>
                    </div>
                </div>

                <p class="text-slate-500 text-xs leading-relaxed font-light pr-4">
                    Akun personal terverifikasi. Nikmati kemudahan pengelolaan transaksi, lacak pengiriman secara real-time, dan atur preferensi akun Anda.
                </p>

                <!-- Status Keanggotaan Badge -->
                <div class="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-100 rounded-xs text-[10px] text-slate-600 font-mono">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Status: {user.status} • Bergabung Sejak {user.bergabung}</span>
                </div>
            </div>

            <!-- Ringkasan Aktivitas Akun (Col: 3) -->
            <div class="md:col-span-3 space-y-2 border-l border-zinc-200/60 pl-6 hidden md:block">
                <h4 class={footerHeaders}>Aktivitas Akun</h4>
                <div class="space-y-1.5 text-xs">
                    <div class="flex justify-between items-center pr-4">
                        <span class="text-zinc-400 text-[11px]">Total Transaksi:</span>
                        <span class="font-bold text-slate-900">28 Pesanan</span>
                    </div>
                    <div class="flex justify-between items-center pr-4">
                        <span class="text-zinc-400 text-[11px]">Voucher Aktif:</span>
                        <span class="font-bold text-slate-900">3 Voucher</span>
                    </div>
                    <div class="flex justify-between items-center pr-4">
                        <span class="text-zinc-400 text-[11px]">Level Keanggotaan:</span>
                        <span class="font-bold text-emerald-600">Gold Member</span>
                    </div>
                </div>
            </div>

            <!-- Protokol Keamanan & Bantuan (Col: 4) -->
            <div class="md:col-span-4 space-y-2 lg:pl-6 lg:border-l lg:border-zinc-200/60">
                <h4 class={footerHeaders}>Keamanan & Privasi</h4>
                <div class="space-y-1 text-xs text-slate-600">
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-zinc-400"></span>
                        <span>Autentikasi PIN & Enkripsi Aktif</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-zinc-400"></span>
                        <span>Perlindungan Data Konsumen UU PDP</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-[10px] text-zinc-400"></span>
                        <span>Respon Layanan Pelanggan 24/7</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

</footer>