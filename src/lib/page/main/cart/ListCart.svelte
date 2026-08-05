<script lang="ts">
	import { CartPageState } from "$lib/state/main/cart/state.svelte";
	import { Full } from "../../../../constant/UiConstant";

    const ulang: number = 5
</script>

{#snippet CartItem(id: number)}
    <div class="flex items-center h-[8rem] gap-3.5 p-3  border-b border-b-zinc-800/20 bg-white hover:border-zinc-800/40 transition cart-item-{id} w-full">
        
        <input 
            type="checkbox" 
            checked 
            class="accent-slate-950 text-slate-900 rounded-xs cursor-pointer shrink-0 w-3.5 h-3.5" 
        />

        <div class="relative w-16 h-16 bg-zinc-400/15 rounded-sm overflow-hidden shrink-0 border border-zinc-950/5">
            <img 
                src="src\constant\hm-removebg-preview.png" 
                alt="Product" 
                class="w-full h-full object-cover" 
            />
        </div>

        <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5 space-y-1">
            <div class="text-slate-900/50 text-[9px] uppercase tracking-[0.18em] font-medium truncate">
                Nama Seller
            </div>

            <h4 class="text-xs font-semibold text-slate-800 tracking-[-0.01em] truncate leading-tight">
                Nama Barang Induk  - Nama Kategori Barang
            </h4>
            

            <div class="text-slate-700/60 text-[10px] font-light tracking-wide truncate">
                Hitam / XL &bull; Ready Stock
            </div>

            <div class="text-slate-700/60 text-[10px] font-light tracking-wide truncate">
                Ditambahkan: <span>12-08-2026</span>
            </div>
        </div>

        <div class="flex flex-col items-end justify-between self-stretch shrink-0 py-0.5 gap-2">
            
            <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-900 ">
                    Rp 150.000
                </span>
            </div>

           <div class="grid grid-cols-2">
                   <div class=" justify-items-end mr-2">
                     <button 
                        onclick={() => {
                            CartPageState.HapusKeranjang()
                        }}
                        aria-label="Hapus Barang"
                        class="w-5 h-5 flex justify-end text-[10px] text-right text-slate-700  hover:text-white transition"
                    >
                        <svg class="justify-end" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M7.99902 4.25C7.99902 3.00736 9.00638 2 10.249 2H13.749C14.9917 2 15.999 3.00736 15.999 4.25V5H18.498C19.7407 5 20.748 6.00736 20.748 7.25C20.748 8.28958 20.043 9.16449 19.085 9.42267C18.8979 9.4731 18.7011 9.5 18.498 9.5H5.5C5.29694 9.5 5.10016 9.4731 4.91303 9.42267C3.95503 9.16449 3.25 8.28958 3.25 7.25C3.25 6.00736 4.25736 5 5.5 5H7.99902V4.25ZM14.499 5V4.25C14.499 3.83579 14.1632 3.5 13.749 3.5H10.249C9.83481 3.5 9.49902 3.83579 9.49902 4.25V5H14.499Z" fill="#343C54"/><path d="M4.97514 10.4578L5.54076 19.8848C5.61205 21.0729 6.59642 22 7.78672 22H16.2113C17.4016 22 18.386 21.0729 18.4573 19.8848L19.0229 10.4578C18.8521 10.4856 18.6767 10.5 18.498 10.5H5.5C5.32131 10.5 5.146 10.4856 4.97514 10.4578ZM10.774 13.4339L10.9982 17.9905C11.0185 18.4042 10.6996 18.7561 10.2859 18.7764C9.8722 18.7968 9.52032 18.4779 9.49997 18.0642L9.27581 13.5076C9.25546 13.0938 9.57434 12.742 9.98805 12.7216C10.4018 12.7013 10.7536 13.0201 10.774 13.4339ZM14.0101 12.7216C14.4238 12.742 14.7427 13.0938 14.7223 13.5076L14.4982 18.0642C14.4778 18.4779 14.1259 18.7968 13.7122 18.7764C13.2985 18.7561 12.9796 18.4042 13 17.9905L13.2241 13.4339C13.2445 13.0201 13.5964 12.7013 14.0101 12.7216Z" fill="#343C54"/></svg>
                    </button>
                   </div>
                 <div class="flex items-center border border-slate-900/20 rounded-md overflow-hidden">
                    <button 
                        type="button" 
                        class="w-5 h-5 flex items-center justify-center text-[10px]  text-slate-700 hover:bg-slate-900 hover:text-white transition"
                    >
                        -
                    </button>
                    <span class="px-2 text-[10px] font-bold  text-slate-900 border-x border-slate-900/20 min-w-[20px] text-center">
                        1
                    </span>
                    <button 
                        type="button" 
                        class="w-5 h-5 flex items-center justify-center text-[10px]  text-slate-700 hover:bg-slate-900 hover:text-white transition"
                    >
                        +
                    </button>
                </div>
           </div>

        </div>
    </div>
{/snippet}

<section class="overflow-y-scroll scrollbar-none {Full}">
    {#each Array(ulang) as i, _}
    {@render CartItem(i)}
    {/each}
</section>