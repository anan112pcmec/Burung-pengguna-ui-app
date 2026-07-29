<script>
    let EditAlamat2 = false;
</script>

{#snippet EditAlamat()}
    <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
        <!-- Scroll Area Konten -->
        <div class="overflow-y-auto scrollbar-none space-y-5 pr-1">

            <!-- Header Ringkas -->
            <div class="flex items-center justify-between border-b border-zinc-950/10 pb-3">
                <div class="flex flex-col space-y-0.5">
                    <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">EDIT ALAMAT</h3>
                    <span class="text-xs font-bold text-slate-950 ">#DUMMY-123</span>
                </div>
                <span class="text-[8px] tracking-widest text-white bg-slate-950 px-1.5 py-0.5 rounded-xs uppercase font-semibold">Utama</span>
            </div>

            <!-- Field 1: Nama & Panggilan -->
            <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Panggilan Alamat</span>
                    <input type="text" value="Rumah Utama" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                </div>
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nama Lengkap</span>
                    <input type="text" value="John Doe" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                </div>
            </div>

            <!-- Field 2: Telepon -->
            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nomor Telepon</span>
                <input type="text" value="081234567890" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
            </div>

            <!-- Field 3: Alamat -->
            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alamat Lengkap</span>
                <input type="text" value="Jl. Jendral Sudirman No. 21, Kavling 4" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
            </div>

            <!-- Field 4: Regional -->
            <div class="grid grid-cols-3 gap-2">
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Provinsi</span>
                    <input type="text" value="DKI Jakarta" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                </div>
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kota</span>
                    <input type="text" value="Jakarta Selatan" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                </div>
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kode Pos</span>
                    <input type="text" value="12930" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900 " />
                </div>
            </div>

            <!-- Field 5: Catatan -->
            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Deskripsi Catatan</span>
                <input type="text" value="Pagar hitam besar, samping warung kopi." class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
            </div>
        </div>

        <!-- Sticky Footer Tombol Aksi -->
        <div class="border-t border-zinc-950/10 pt-3 flex justify-between items-center bg-white">
            <button type="button" class="text-xs tracking-wide text-red-600/60 hover:text-red-600 transition uppercase font-medium">
                Hapus
            </button>
            <div class="flex items-center gap-2">
                <button type="button" class="text-xs tracking-wide text-slate-500 hover:text-slate-950 px-4 py-2 transition uppercase font-medium" onclick={() => {EditAlamat2 = false}}>
                    Batal
                </button>
                <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition rounded-sm uppercase font-medium">
                    Simpan
                </button>
            </div>
        </div>
    </form>
{/snippet}

{#if EditAlamat2 == false}
    <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
        <div class="overflow-y-auto scrollbar-none space-y-5 pr-1">

            <!-- CAROUSEL HORIZONTAL: Daftar Alamat Terdaftar -->
            <div class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">Alamat Terdaftar</span>

                <div class="flex space-x-3 overflow-x-auto scrollbar-none pb-2 snap-x snap-mandatory">
                    <!-- Card Alamat 1 (Aktif / Utama) -->
                    <div class="card-alamat flex-none w-56 snap-start border border-slate-950 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-[9px] font-bold tracking-[0.12em] text-slate-950 uppercase">Rumah Utama</span>
                                <span class="text-[8px] tracking-wider text-white bg-slate-950 px-1 py-0.5 rounded-xs uppercase font-medium">Utama</span>
                            </div>
                            <p class="text-[10px] text-slate-900 line-clamp-2 leading-tight">Jl. Sudirman No. 45, Gedung B Lantai 3, Karet Semanggi</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-zinc-950/10 pt-1.5 mt-2">
                            <span class="text-[9px]  text-slate-800/60">081234567890</span>
                            <span class="text-[9px]  text-slate-800/60">12930</span>
                        </div>
                    </div>

                    <!-- Card Alamat 2 -->
                    <div class="card-alamat flex-none w-56 snap-start border border-zinc-950/10 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none hover:border-slate-400 transition cursor-pointer">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-[9px] font-medium tracking-[0.12em] text-slate-800/60 uppercase">Kantor</span>
                            </div>
                            <p class="text-[10px] text-slate-800/70 line-clamp-2 leading-tight">Mega Kuningan Kawasan E.3.3 Telkom Hub, Kuningan Timur</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-zinc-950/5 pt-1.5 mt-2">
                            <span class="text-[9px]  text-slate-800/40">089876543210</span>
                            <span class="text-[9px]  text-slate-800/40">12950</span>
                        </div>
                    </div>

                    <!-- Card Alamat 3 -->
                    <div class="card-alamat flex-none w-56 snap-start border border-zinc-950/10 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none hover:border-slate-400 transition cursor-pointer">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-[9px] font-medium tracking-[0.12em] text-slate-800/60 uppercase">Apartemen</span>
                            </div>
                            <p class="text-[10px] text-slate-800/70 line-clamp-2 leading-tight">Tower Noord, Unit 12B, Jl. Antasari No. 8, Cilandak</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-zinc-950/5 pt-1.5 mt-2">
                            <span class="text-[9px]  text-slate-800/40">081122334455</span>
                            <span class="text-[9px]  text-slate-800/40">12430</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="border-t border-zinc-950/10" />

            <!-- FORM INPUT: Tambah Alamat Baru -->
            <div class="space-y-4">
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
        </div>

        <!-- FOOTER FORM -->
        <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center">
            <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                Tambah Alamat
            </button>
        </div>
    </form>
{:else}
    {@render EditAlamat()}
{/if}