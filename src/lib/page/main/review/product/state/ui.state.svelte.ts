type typePilahReview = 'menunggu-review' | 'telah-di-review'
type typeTelahDiReview = 'edit-ulasan-produk' | 'tidak-edit-ulasan-produk'
type typeMenungguReview = 'berikan-ulasan-produk' | 'tidak-berikan-ulasan-produk'

class State{
    private _statusPilahReview: typePilahReview = $state<typePilahReview>('menunggu-review')

    MenungguReview = (): void => {
        this._statusPilahReview = "menunggu-review"
    }

    TelahDiReview = (): void => {
        this._statusPilahReview = "telah-di-review"
    }

    IsMenungguReview = (): boolean => {
        return this._statusPilahReview == "menunggu-review"
    }

    IsTelahDiReview = (): boolean => {
        return this._statusPilahReview == "telah-di-review"
    }
    


    private _statusTelahDiReview: typeTelahDiReview = $state<typeTelahDiReview>('tidak-edit-ulasan-produk')

    EditUlasanProduk = (): void =>{
        this._statusTelahDiReview = "edit-ulasan-produk"
    }

    TidakEditUlasanProduk = (): void =>{
        this._statusTelahDiReview = "tidak-edit-ulasan-produk"
    }

    IsEditUlasanProduk = (): boolean =>{
        return this._statusTelahDiReview == "edit-ulasan-produk"
    }

    IsTidakEditUlasanProduk = (): boolean =>{
        return this._statusTelahDiReview == "tidak-edit-ulasan-produk"
    }




    private _statusMenungguReview: typeMenungguReview = $state<typeMenungguReview>("tidak-berikan-ulasan-produk")

    BerikanUlasanProduk = (): void => {
        this._statusMenungguReview = "berikan-ulasan-produk"
    }

    TidakBerikanUlasanProduk = (): void => {
        this._statusMenungguReview = "tidak-berikan-ulasan-produk"
    }

    IsBerikanUlasanProduk = (): boolean =>{
        return this._statusMenungguReview == "berikan-ulasan-produk"
    }

    IsTidakBerikanUlasanProduk = (): boolean => {
        return this._statusMenungguReview == "tidak-berikan-ulasan-produk"
    }

}

export const ReviewProductPageState = new State()