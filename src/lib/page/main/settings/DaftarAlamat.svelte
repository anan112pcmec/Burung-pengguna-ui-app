<script lang="ts">
	import { SettingsPageState } from '$lib/state/main/settings/state.svelte';
	import type { Action } from 'svelte/action';
	import { SvelteMap } from 'svelte/reactivity';


 const AlamatEditAction: Action = (node) => {
    const alamatList = node.querySelectorAll('[class*="card-alamat"]') as NodeListOf<HTMLDivElement>;
    const handlers: { alamat: HTMLDivElement; handler: (el: MouseEvent) => void }[] = [];
    
    const alamatCountClick = new SvelteMap<HTMLDivElement, number>();
    const alamatTimers = new SvelteMap<HTMLDivElement, ReturnType<typeof setTimeout>>();
    const alamatMarked = new SvelteMap<string, HTMLDivElement>();

    for (const alamat of alamatList) {
        const eventmain = (el: MouseEvent) => {
            el.stopPropagation();
            el.preventDefault();

            const IdAlamat = Array.from(alamat.classList).find((cls) => cls.startsWith("card-alamat-")) || "";

            if (alamatMarked.has(IdAlamat)) {
                alamat.className = alamat.className
                    .replace("border-slate-950", "border-zinc-950/10")
                    .replaceAll("text-slate-900", "text-slate-800/60")
                    .replaceAll("text-slate-950", "text-slate-800/60");
                
                alamatMarked.delete(IdAlamat);
            } else {
                alamat.className = alamat.className
                    .replace("border-zinc-950/10", "border-slate-950")
                    .replaceAll("text-slate-800/60", "text-slate-950")
                    .replaceAll("text-slate-800/70", "text-slate-900")
                    .replaceAll("text-slate-800/40", "text-slate-800");
                
                alamatMarked.set(IdAlamat, alamat);
            }
    
            const currentCount = (alamatCountClick.get(alamat) ?? 0) + 1;
            alamatCountClick.set(alamat, currentCount);

            const existingTimer = alamatTimers.get(alamat);
            if (existingTimer) clearTimeout(existingTimer);

            if (currentCount === 2) {
                alamatCountClick.set(alamat, 0);
                alamatTimers.delete(alamat);
                
                SettingsPageState.DaftarAlamat__EditAlamat();
                return;
            }

            const timer = setTimeout(() => {
                alamatCountClick.set(alamat, 0);
                alamatTimers.delete(alamat);
            }, 400);
            
            alamatTimers.set(alamat, timer);
            
        if (alamatMarked.size != 0 && !SettingsPageState.DaftarAlamat__IsAuditAlamat()){
            SettingsPageState.DaftarAlamat__AuditAlamat()
        }

        if (alamatMarked.size == 0 && SettingsPageState.DaftarAlamat__IsAuditAlamat()){
            SettingsPageState.DaftarAlamat__DefaultAlamat()
        }
        };

        alamat.addEventListener("click", eventmain);
        handlers.push({ alamat, handler: eventmain });

    }

    return {
        destroy() {
            for (const timer of alamatTimers.values()) {
                clearTimeout(timer);
            }
            for (const item of handlers) {
                item.alamat.removeEventListener("click", item.handler);
            }
        }   
    };
};

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
            
            <div class="flex items-center gap-2">
                <button type="button" class="text-xs tracking-wide text-slate-500 hover:text-slate-950 px-4 py-2 transition uppercase font-medium" onclick={() => {SettingsPageState.DaftarAlamat__DefaultAlamat()}}>
                    Batal
                </button>
                <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition rounded-sm uppercase font-medium">
                    Simpan
                </button>
            </div>
        </div>
    </form>
{/snippet}

{#if !SettingsPageState.DaftarAlamat__IsEditAlamat()}
    <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
        <div class="overflow-y-auto scrollbar-none space-y-5 pr-1">

            <!-- CAROUSEL HORIZONTAL: Daftar Alamat Terdaftar -->
            <div class="flex flex-col space-y-2">
                <div class="flex items-center justify-between w-full p-3">
    <!-- Judul di Kiri -->
    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">Alamat Terdaftar</span>
    
    <!-- Tombol Aksi Full di Kanan -->
    {#if SettingsPageState.DaftarAlamat__IsAuditAlamat()}
        <div class="flex items-center gap-2.5">
            <!-- Tombol Hapus Alamat -->
            <button 
                type="button" 
                class="flex items-center gap-2 px-3 py-1.5 border border-zinc-950/10 rounded-sm bg-white hover:border-slate-950 hover:bg-zinc-50 transition-all cursor-pointer group"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99902 4.25C7.99902 3.00736 9.00638 2 10.249 2H13.749C14.9917 2 15.999 3.00736 15.999 4.25V5H18.498C19.7407 5 20.748 6.00736 20.748 7.25C20.748 8.28958 20.043 9.16449 19.085 9.42267C18.8979 9.4731 18.7011 9.5 18.498 9.5H5.5C5.29694 9.5 5.10016 9.4731 4.91303 9.42267C3.95503 9.16449 3.25 8.28958 3.25 7.25C3.25 6.00736 4.25736 5 5.5 5H7.99902V4.25ZM14.499 5V4.25C14.499 3.83579 14.1632 3.5 13.749 3.5H10.249C9.83481 3.5 9.49902 3.83579 9.49902 4.25V5H14.499Z" fill="currentColor"/>
                    <path d="M4.97514 10.4578L5.54076 19.8848C5.61205 21.0729 6.59642 22 7.78672 22H16.2113C17.4016 22 18.386 21.0729 18.4573 19.8848L19.0229 10.4578C18.8521 10.4856 18.6767 10.5 18.498 10.5H5.5C5.32131 10.5 5.146 10.4856 4.97514 10.4578ZM10.774 13.4339L10.9982 17.9905C11.0185 18.4042 10.6996 18.7561 10.2859 18.7764C9.8722 18.7968 9.52032 18.4779 9.49997 18.0642L9.27581 13.5076C9.25546 13.0938 9.57434 12.742 9.98805 12.7216C10.4018 12.7013 10.7536 13.0201 10.774 13.4339ZM14.0101 12.7216C14.4238 12.742 14.7427 13.0938 14.7223 13.5076L14.4982 18.0642C14.4778 18.4779 14.1259 18.7968 13.7122 18.7764C13.2985 18.7561 12.9796 18.4042 13 17.9905L13.2241 13.4339C13.2445 13.0201 13.5964 12.7013 14.0101 12.7216Z" fill="currentColor"/>
                </svg>
                <span class="text-[10px] font-medium text-slate-800/70 group-hover:text-slate-950 uppercase tracking-wider">Hapus</span>
            </button>

            <!-- Tombol Jadikan Utama -->
            <button 
                type="button" 
                class="flex items-center gap-2 px-3 py-1.5 border border-zinc-950/10 rounded-sm bg-white hover:border-slate-950 hover:bg-zinc-50 transition-all cursor-pointer group"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5071 10.5245C15.8 10.2316 15.8 9.75674 15.5071 9.46384C15.2142 9.17095 14.7393 9.17095 14.4464 9.46384L10.9649 12.9454L9.55359 11.5341C9.2607 11.2412 8.78582 11.2412 8.49293 11.5341C8.20004 11.827 8.20004 12.3019 8.49294 12.5947L10.4346 14.5364C10.7275 14.8293 11.2023 14.8292 11.4952 14.5364L15.5071 10.5245Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z" fill="currentColor"/>
                </svg>
                <span class="text-[10px] font-medium text-slate-800/70 group-hover:text-slate-950 uppercase tracking-wider">Jadikan Utama</span>
            </button>
        </div>
    {/if}
</div>

               
                <div use:AlamatEditAction class="flex space-x-3 overflow-x-auto scrollbar-none pb-2 snap-x snap-mandatory">
                    <!-- Card Alamat 1 (Aktif / Utama) -->
                    <!-- Card Alamat 1 (Default / Belum Terpilih) -->
                    <div class="card-alamat-1 flex-none w-56 snap-start border border-zinc-950/10 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none hover:border-slate-400 transition cursor-pointer">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-[9px] font-bold tracking-[0.12em] text-slate-800/60 uppercase">Rumah Utama</span>
                                <span class="text-[8px] tracking-wider text-white bg-slate-950 px-1 py-0.5 rounded-xs uppercase font-medium">Utama</span>
                            </div>
                            <p class="text-[10px] text-slate-800/70 line-clamp-2 leading-tight">Jl. Sudirman No. 45, Gedung B Lantai 3, Karet Semanggi</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-zinc-950/5 pt-1.5 mt-2">
                            <span class="text-[9px] text-slate-800/40">081234567890</span>
                            <span class="text-[9px] text-slate-800/40">12930</span>
                        </div>
                    </div>

                    <!-- Card Alamat 2 -->
                    <div class="card-alamat-2 flex-none w-56 snap-start border border-zinc-950/10 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none hover:border-slate-400 transition cursor-pointer">
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
                    <div class="card-alamat-3 flex-none w-56 snap-start border border-zinc-950/10 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none hover:border-slate-400 transition cursor-pointer">
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