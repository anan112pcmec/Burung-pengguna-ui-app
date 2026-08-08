class State{
    private _statusOpsiDipilih: 'aktifitas' | 'ubah-profil' | 'daftar-alamat' | 'keamanan-akun' | 'notifikasi' |'privasi-akun' | 'penautan' = $state<'aktifitas' | 'ubah-profil' | 'daftar-alamat' | 'keamanan-akun' | 'notifikasi' |'privasi-akun' | 'penautan'>('ubah-profil')

    Aktifitas = () => {
        this._statusOpsiDipilih = 'aktifitas'
    }

    IsAktifitas = (): boolean =>{
        return this._statusOpsiDipilih == 'aktifitas'
    }

    Profil =() => {
        this._statusOpsiDipilih = 'ubah-profil'
    }

    IsProfil = (): boolean =>{
       return this._statusOpsiDipilih == 'ubah-profil'
    }

    DaftarAlamat = () =>{
        this._statusOpsiDipilih = 'daftar-alamat'
    }

    IsDaftarAlamat = (): boolean =>{
        return this._statusOpsiDipilih == 'daftar-alamat'
    }

    KeamananAkun = () =>{
        this._statusOpsiDipilih = 'keamanan-akun'
    }

    IsKeamananAkun = (): boolean =>{
        return this._statusOpsiDipilih == 'keamanan-akun'
    }

    Notifikasi = () =>{
        this._statusOpsiDipilih = 'notifikasi'
    }
    
    IsNotifikasi= (): boolean =>{
      return this._statusOpsiDipilih == 'notifikasi'
    }

    PrivasiAkun = () =>{
        this._statusOpsiDipilih = 'privasi-akun'
    }

    IsPrivasiAkun = (): boolean =>{
       return this._statusOpsiDipilih == 'privasi-akun'
    }

    Penautan = () => {
        this._statusOpsiDipilih = "penautan"
    }

    IsPenautan = (): boolean =>{
        return this._statusOpsiDipilih == 'penautan'
    }

    private _statusUbahProfil: 'ubah' | 'tidak' = $state<'ubah' | 'tidak'>('tidak')

    Profil__UbahProfil = (): void => {
        this._statusUbahProfil = "ubah"
    } 

    Profil__TidakUbahProfil = (): void =>{
        this._statusUbahProfil = "tidak"
    }

    Profil__IsUbahProfil = (): boolean => {
        return this._statusUbahProfil == "ubah"
    }

    Profil__IsTidakUbahProfil = (): boolean =>{
        return this._statusUbahProfil == "tidak"
    }

    private _statusDaftarAlamat: 'edit' | 'default' | 'audit' = $state<'edit' | 'default' | 'audit'>('default')

    DaftarAlamat__EditAlamat = (): void => {
        this._statusDaftarAlamat  = "edit"
    }

    DaftarAlamat__DefaultAlamat = (): void =>{
        this._statusDaftarAlamat = "default"
    }

    DaftarAlamat__AuditAlamat = (): void => {
        this._statusDaftarAlamat = 'audit'
    }

    DaftarAlamat__IsAuditAlamat = (): boolean =>{
        return this._statusDaftarAlamat == 'audit'
    }

    DaftarAlamat__IsEditAlamat = (): boolean => {
        return this._statusDaftarAlamat == "edit"
    }

    DaftarAlamat__IsDefaultAlamat = (): boolean =>{
        return this._statusDaftarAlamat == "default"
    }

   


}

export const SettingsPageState = new State()