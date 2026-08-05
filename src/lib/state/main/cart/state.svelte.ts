class State{
    private _statusHapusKeranjang: 'hapus-keranjang' | 'tidak-hapus-keranjang' = $state<'hapus-keranjang' | 'tidak-hapus-keranjang'>("tidak-hapus-keranjang")
    
    HapusKeranjang = (): void => {
        this._statusHapusKeranjang = "hapus-keranjang"
    }

    TidakHapusKeranjang = (): void => {
        this._statusHapusKeranjang = "tidak-hapus-keranjang"
    }

    IsHapusKeranjang = (): boolean => {
        return this._statusHapusKeranjang == "hapus-keranjang"
    }

    IsTidakHapusKeranjang = (): boolean => {
        return this._statusHapusKeranjang == "tidak-hapus-keranjang"
    }
}

export const CartPageState = new State()