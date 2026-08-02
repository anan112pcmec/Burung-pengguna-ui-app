class State {
    private _statusTambahKategori: 'tambah' |'tidak' = $state<'tambah' | 'tidak'>("tidak")

    TambahKategori = (): void =>{
        this._statusTambahKategori = "tambah"
    }

    TidakTambahKategori = (): void => {
        this._statusTambahKategori = "tidak"
    }

    IsTambahKategori = (): boolean => {
        return this._statusTambahKategori == "tambah"
    }

    IsTidakTambahKategori = (): boolean =>{
        return this._statusTambahKategori == "tidak"
    }
    
}