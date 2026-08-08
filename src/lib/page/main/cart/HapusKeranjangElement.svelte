<script lang="ts">
	import { CartPageState } from "$lib/page/main/cart/state/ui.state.svelte";

	// Props Svelte 5 & Mock Data
	let {
		isOpen = true,
		item = {
			id_cart: 101,
			nama_seller: "OFFICIAL STORE NIKE",
			nama_barang: "Sepatu Running Nike Air Zoom",
			varian: "Hitam / 42",
			harga: 150000,
			foto: "src/constant/hm-removebg-preview.png"
		}
	}: {
		isOpen?: boolean;
		item?: {
			id_cart: number;
			nama_seller: string;
			nama_barang: string;
			varian: string;
			harga: number;
			foto: string;
		};
	} = $props();
</script>

{#if isOpen}
	<!-- Backdrop Overlay Terpusat (Centering & Soft Blur) -->
	<section 
		id="hapus-keranjang-element" 
		class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 backdrop-blur-xs p-4"
	>
		<!-- Modal Dialog Box Container -->
		<div class="w-full max-w-sm bg-white border border-zinc-200 rounded-xs p-5 shadow-sm space-y-4 font-sans animate-in fade-in zoom-in-95 duration-150">
			
			<!-- Header Modal -->
			<div class="flex items-center justify-between border-b border-zinc-100 pb-2.5">
				<div class="flex items-center gap-2">
					<svg class="justify-end" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.99902 4.25C7.99902 3.00736 9.00638 2 10.249 2H13.749C14.9917 2 15.999 3.00736 15.999 4.25V5H18.498C19.7407 5 20.748 6.00736 20.748 7.25C20.748 8.28958 20.043 9.16449 19.085 9.42267C18.8979 9.4731 18.7011 9.5 18.498 9.5H5.5C5.29694 9.5 5.10016 9.4731 4.91303 9.42267C3.95503 9.16449 3.25 8.28958 3.25 7.25C3.25 6.00736 4.25736 5 5.5 5H7.99902V4.25ZM14.499 5V4.25C14.499 3.83579 14.1632 3.5 13.749 3.5H10.249C9.83481 3.5 9.49902 3.83579 9.49902 4.25V5H14.499Z" fill="#343C54"/><path d="M4.97514 10.4578L5.54076 19.8848C5.61205 21.0729 6.59642 22 7.78672 22H16.2113C17.4016 22 18.386 21.0729 18.4573 19.8848L19.0229 10.4578C18.8521 10.4856 18.6767 10.5 18.498 10.5H5.5C5.32131 10.5 5.146 10.4856 4.97514 10.4578ZM10.774 13.4339L10.9982 17.9905C11.0185 18.4042 10.6996 18.7561 10.2859 18.7764C9.8722 18.7968 9.52032 18.4779 9.49997 18.0642L9.27581 13.5076C9.25546 13.0938 9.57434 12.742 9.98805 12.7216C10.4018 12.7013 10.7536 13.0201 10.774 13.4339ZM14.0101 12.7216C14.4238 12.742 14.7427 13.0938 14.7223 13.5076L14.4982 18.0642C14.4778 18.4779 14.1259 18.7968 13.7122 18.7764C13.2985 18.7561 12.9796 18.4042 13 17.9905L13.2241 13.4339C13.2445 13.0201 13.5964 12.7013 14.0101 12.7216Z" fill="#343C54"/></svg>

					<h3 class="text-xs font-bold uppercase tracking-wider text-zinc-950">
						HAPUS DARI KERANJANG
					</h3>
				</div>
				<button 
					onclick={() =>{
                        CartPageState.TidakHapusKeranjang()
                    }} 
					type="button" 
					class="text-zinc-400 hover:text-zinc-950 transition text-xs p-0.5 cursor-pointer "
					title="Tutup Modal"
				>
					✕
				</button>
			</div>

			<!-- Kartu Ringkasan Informasi Barang -->
			<div class="flex items-center gap-3 p-2.5 bg-zinc-50/60 border border-zinc-200 rounded-2xs">
				<div class="w-12 h-12 bg-white rounded-2xs overflow-hidden shrink-0 border border-zinc-200">
					<img 
						src={item.foto} 
						alt={item.nama_barang} 
						class="w-full h-full object-cover" 
					/>
				</div>
				<div class="min-w-0 flex-1 space-y-0.5">
					<p class="text-[9px] text-zinc-400 uppercase tracking-wider truncate">
						{item.nama_seller}
					</p>
					<h4 class="text-xs font-semibold text-zinc-900 truncate leading-tight">
						{item.nama_barang}
					</h4>
					<p class="text-[10px] text-zinc-500 truncate">
						{item.varian} <span class="text-zinc-300">•</span> <span class=" text-zinc-950 font-bold">Rp {item.harga.toLocaleString('id-ID')}</span>
					</p>
				</div>
			</div>

			<!-- Pesan Konfirmasi Minimalis -->
			<p class="text-[11px] text-zinc-500 leading-relaxed">
				Apakah kamu yakin ingin mengeluarkan produk ini dari daftar belanjaanmu?
			</p>

			<!-- Tombol Aksi (Grid 2 Kolom) -->
			<div class="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-100">
				<button 
					type="button" 
					onclick={() => {
                        CartPageState.TidakHapusKeranjang()
                    }}
					class="w-full py-2 px-3 text-[10px] rounded-xs font-bold uppercase border border-zinc-200 text-zinc-700 bg-white hover:border-zinc-950 hover:bg-zinc-950 hover:text-white rounded-2xs transition-all duration-150 cursor-pointer text-center"
				>
					Batal
				</button>
				<button 
					type="button" 
					onclick={() =>{
                         CartPageState.TidakHapusKeranjang()
                    }}
					class="w-full rounded-xs py-2 px-3 text-[10px] font-bold uppercase bg-slate-950 text-white hover:bg-rose-600 rounded-2xs transition-all duration-150 cursor-pointer text-center"
				>
					Ya, Hapus
				</button>
			</div>

		</div>
	</section>
{/if}