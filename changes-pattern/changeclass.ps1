Set-Location -Path 'c:\Burung_App\Project_Source\Backend-1'

$files = @(
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\kurir\general\KurirFootProfile.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\kurir\general\KurirHeadProfile.svelte'
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\kurir\kurir-overview\KurirOverview.Svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\kurir\kurir-statistik\KurirStatistik.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\cart\CartHeader.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\cart\ListCart.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\cart\TotalBelanja.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\details\inbox\InboxDetail.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\details\pengiriman-ekspedisi\DetailsPengirimanEkspedisi.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\details\pengiriman-non-ekspedisi\DetailsPengirimanNonEkspedisi.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\details\produk\DetailProduk.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\details\produk\SaranProduk.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\details\transaksi\DetailsTransaksi.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\following\FollowingHeader.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\following\FollowingResult.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\inbox\InboxHeading.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\inbox\InboxResult.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\market\SearchingResult.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\transaksi\ListTransaksiResult.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\transaksi-dibatalkan\ListTransaksiDibatalkanResult.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\wishlist\HeadingWishlistResult.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\main\wishlist\ResultWishlist.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\seller-overview\DiskonSection.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\ChatPerformance.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\EfektivitasPromosi.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\LoyalitasDemografi.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\ManajemenStok.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\MetricCardsEngagement.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\PerformancePopularity.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\ReputasiRisiko.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\ReputasiRisiko.svelte',
   'C:\Burung_App\Project_Source\front-end-user\src\lib\page\seller\statistik-detail\TraffikData.svelte'





)

foreach ($file in $files) {
    if (Test-Path -Path $file) {
        $content = Get-Content -Raw -Path $file
        
        # Regex pola durasi angka 1-10 dikali dengan time.Second
        # $pattern = '(([1-9]|10)\s*\*\s*time\.Second|time\.Second\s*\*\s*([1-9]|10))'
        
        $content = $content -replace 'font-mono', ''
        
        # PERBAIKAN: Langsung lempar variable $file ke WriteAllText tanpa dibungkus Resolve-Path
        [System.IO.File]::WriteAllText($file, $content, (New-Object System.Text.UTF8Encoding($false)))
        
        Write-Host "Updated $file" -ForegroundColor Green
    } else {
        Write-Warning "File tidak ditemukan: $file"
    }
}

Write-Host "Proses selesai!" -ForegroundColor Cyan