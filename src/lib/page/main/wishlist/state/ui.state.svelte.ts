class State {
    private _statusAksiWishlist: 'tambah-kategori' | 'hapus-kategori' |'idle' = $state<'tambah-kategori' | 'hapus-kategori' | 'idle'>("idle")

    TambahKategori = (): void =>{
        this._statusAksiWishlist = "tambah-kategori"
    }

    HapusKategori = (): void => {
        this._statusAksiWishlist = "hapus-kategori"
    }

    Idle = (): void => {
        this._statusAksiWishlist = "idle"
    }

    IsTambahKategori = (): boolean => {
        return this._statusAksiWishlist == "tambah-kategori"
    }

    IsHapusKategori = (): boolean => {
        return this._statusAksiWishlist == "hapus-kategori"
    }

    IsIdle = (): boolean => {
        return this._statusAksiWishlist == "idle"
    }

}

export const WishlistPageState = new State()