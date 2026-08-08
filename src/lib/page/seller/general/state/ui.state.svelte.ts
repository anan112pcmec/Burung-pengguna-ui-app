class State{
    private _statusOpenPage: 'seller-overview' | 'cari-produk' | 'cari-etalase' | 'statistik-detail' | 'cari-diskon' | 'detail' = $state<'seller-overview' | 'cari-produk' | 'cari-etalase' | 'statistik-detail' | 'cari-diskon' | 'detail'>("seller-overview")

    SellerOverview = ():void => {
        this._statusOpenPage = "seller-overview"
    }

    CariProduk = (): void =>{
        this._statusOpenPage = "cari-produk"
    }

    CariEtalase = (): void => {
        this._statusOpenPage = "cari-etalase"
    }

    StatistikDetail = (): void => {
        this._statusOpenPage = "statistik-detail"
    }

    CariDiskon = (): void =>{
        this._statusOpenPage = "cari-diskon"
    }

    Detail = (): void => {
        this._statusOpenPage = "detail"
    }

    IsSellerOverview = (): boolean => {
        return this._statusOpenPage == "seller-overview"
    }

    IsCariProduk = (): boolean => {
        return this._statusOpenPage == "cari-produk"
    }

    IsCariEtalase = (): boolean => {
        return this._statusOpenPage == "cari-etalase"
    }

    IsStatistikDetail = (): boolean => {
        return this._statusOpenPage == "statistik-detail"
    }

    IsDetail = (): boolean =>{
        return this._statusOpenPage == "detail"
    }

    IsCariDiskon = (): boolean =>{
        return this._statusOpenPage == "cari-diskon"
    }

}

export const SellerGeneralPageState = new State()