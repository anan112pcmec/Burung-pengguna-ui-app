<script lang="ts">
import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";

</script>

<section id="kelebihan-app" class="w-full mt-20 h-[24rem] p-4  grid grid-cols-[45%_10%_45%]">
     <div class="">
        <DotLottieSvelte
            src="src\constant\Shopping_Cart_Loader.json"
            autoplay={true}
            loop={true}
            speed={1}
        />
    </div>
    <div></div>

    <div class="">
        <h1>Tanpa Data Verbose</h1>
        <br>
        <b>Kami menyajikan data cepat, aktual, dan ringkas, sehingga setiap keputusan belanja kamu jadi mudah dan tepat.</b>
        <ul>
            <li>
                – Data Produk Ringkas
                <p>Harga, stok, dan detail penting langsung terlihat tanpa harus scroll panjang.</p>
            </li>
            <li>
                – Data Penjual Jelas
                <p>Informasi penjual dan reputasi mudah dipahami, langsung bisa jadi pertimbangan.</p>
            </li>
            <li>
                – Data Pengiriman Tersaji
                <p>Status, estimasi waktu, dan riwayat pengiriman terlihat sekilas, cepat dimengerti.</p>
            </li>
            <br>
            <div class="grid grid-cols-[80%_20%]">
                <div></div>
                <div> <button class="">
                Lanjut
            </button></div>
            </div>
        </ul>
    </div>
</section>