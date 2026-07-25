class ProfilingManagerOpen{
    public OpsiDipilih: 'Aktifitas' | 'Ubah Profil' | 'Daftar Alamat' | 'Keamanan Akun' | 'Notifikasi' |'Privasi Akun' | 'Penautan'

    constructor(){
        this.OpsiDipilih = $state<'Aktifitas' | 'Ubah Profil' | 'Daftar Alamat' | 'Keamanan Akun' | 'Notifikasi' |'Privasi Akun' | 'Penautan'>('Aktifitas')
    }

    setAktifitas = () => {
        this.OpsiDipilih = 'Aktifitas'
    }

    isAktifitas = (): boolean =>{
        if (this.OpsiDipilih == 'Aktifitas'){
            return true
        } else {
            return false
        }

    }

    setUbahProfil =() => {
        this.OpsiDipilih = 'Ubah Profil'
    }

    isUbahProfil = (): boolean =>{
        if (this.OpsiDipilih == 'Ubah Profil'){
            return true
        } else {
            return false
        }
    }


    setDaftarAlamat = () =>{
        this.OpsiDipilih = 'Daftar Alamat'
    }

    isDaftarAlamat = (): boolean =>{
        if (this.OpsiDipilih == 'Daftar Alamat'){
            return true
        } else {
            return false
        }
    }


    setKeamananAkun = () =>{
        this.OpsiDipilih = 'Keamanan Akun'
    }

    isKeamananAkun = (): boolean =>{
        if (this.OpsiDipilih == 'Keamanan Akun'){
            return true
        } else {
            return false
        }
    }

    setNotifikasi = () =>{
        this.OpsiDipilih = 'Notifikasi'
    }
    
    isNotifikasi= (): boolean =>{
        if (this.OpsiDipilih == 'Notifikasi'){
            return true
        } else {
            return false
        }
    }

    setPrivasiAkun = () =>{
        this.OpsiDipilih = 'Privasi Akun'
    }

    isPrivasiAkun = (): boolean =>{
        if (this.OpsiDipilih == 'Privasi Akun'){
            return true
        } else {
            return false
        }
    }


    setPenautan = () => {
        this.OpsiDipilih = "Penautan"
    }

    isPenautan = (): boolean =>{
        if (this.OpsiDipilih == 'Penautan'){
            return true
        } else {
            return false
        }
    }

}

export const LeftOpsiState = new ProfilingManagerOpen()