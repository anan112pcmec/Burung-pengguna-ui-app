<script lang="ts">
    import { goto } from "$app/navigation";
	import { page } from "$app/state";
    import { SellerGeneralPageState } from "$lib/state/seller/general/state.svelte";

    let pageName = $derived(
    page.url.pathname.split('/').filter(Boolean).pop() ?? ''
  );
</script>

<section 
    id="select-page" 
    class="w-full bg-white border-b border-zinc-200 sticky z-30 selection:bg-slate-900 selection:text-white"
>
    <div class="px-6 lg:px-12 flex items-center justify-between text-xs">
        
        <!-- Tab Buttons Container (Hardcoded) -->
        <div class="flex items-center gap-1 sm:gap-6">
            
            <!-- Tab 1: Beranda Toko -->
            <button
                type="button"
                onclick={() => {
                    SellerGeneralPageState.SellerOverview();
                    goto('/seller-overview');
                }}
                class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                {SellerGeneralPageState.IsSellerOverview() ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
            >
                <span>Beranda Toko</span>
                {#if SellerGeneralPageState.IsSellerOverview()}
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                {/if}
            </button>

            <!-- Tab 2: Cari Produk -->
            <button
                type="button"
                onclick={() => {
                    SellerGeneralPageState.CariProduk();
                    goto('/cari-produk');
                }}
                class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                {SellerGeneralPageState.IsCariProduk() ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
            >
                <span>Cari Produk</span>
                {#if SellerGeneralPageState.IsCariProduk()}
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                {/if}
            </button>

             <button
                type="button"
                onclick={() => {
                    SellerGeneralPageState.CariEtalase();
                    goto('/cari-etalase');
                }}
                class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                {SellerGeneralPageState.IsCariEtalase() ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
            >
                <span>Cari Etalase</span>
                {#if SellerGeneralPageState.IsCariEtalase()}
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                {/if}
            </button>

            <button
                type="button"
                onclick={() => {
                    SellerGeneralPageState.CariDiskon();
                    goto('/cari-diskon');
                }}
                class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                {SellerGeneralPageState.IsCariDiskon() ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
            >
                <span>Cari-Diskon</span>
                {#if SellerGeneralPageState.IsCariDiskon()}
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                {/if}
            </button>


            <!-- Tab 3: Statistik & Detail -->
            <button
                type="button"
                onclick={() => {
                    SellerGeneralPageState.StatistikDetail();
                    goto('/statistik-detail');
                }}
                class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                {SellerGeneralPageState.IsStatistikDetail() ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
            >
                <span>Statistik & Detail</span>
                {#if SellerGeneralPageState.IsStatistikDetail()}
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                {/if}
            </button>
            

             <button
                type="button"
                class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                {SellerGeneralPageState.IsDetail() ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
            >
                <span>
                    Details{#if SellerGeneralPageState.IsDetail()}
                    /{pageName}
                    {/if}
                </span>
                {#if SellerGeneralPageState.IsDetail()}
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                {/if}
            </button>

        </div>

        <!-- Quick Filter / Display Info (Kanan) -->
        <div class="hidden md:flex items-center gap-2 text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
            <span>Tampilan:</span>
            <span class="text-slate-900 font-semibold px-2 py-0.5 bg-zinc-100 rounded-xs">
                {SellerGeneralPageState.IsSellerOverview() ? 'Katalog Utama' : SellerGeneralPageState.IsCariProduk() ? 'Katalog Pencarian' : 'Rincian Performa'}
            </span>
        </div>

    </div>
</section>