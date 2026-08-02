type typePilahUlasan = 'menunggu-diulas-pengiriman' | 'diulas-pengiriman'
type typeUlasanSelesai = 'edit-ulasan-pengiriman' | 'tidak-edit-ulasan-pengiriman'
type typeMenungguDiulas = 'berikan-ulasan-pengiriman' | 'tidak-berikan-ulasan-pengiriman'

class State {
    private _statusPilahUlasan: typePilahUlasan = $state<typePilahUlasan>('menunggu-diulas-pengiriman')

    MenungguDiulas = (): void => {
        this._statusPilahUlasan = "menunggu-diulas-pengiriman"
    }

    Diulas = (): void => {
        this._statusPilahUlasan = "diulas-pengiriman"
    }

    IsMenungguDiulas = (): boolean => {
        return this._statusPilahUlasan == "menunggu-diulas-pengiriman"
    }

    IsDiulas = (): boolean => {
        return this._statusPilahUlasan == "diulas-pengiriman"
    }



    private _statusUlasanSelesai: typeUlasanSelesai = $state<typeUlasanSelesai>('tidak-edit-ulasan-pengiriman')

    EditUlasan = (): void => {
        this._statusUlasanSelesai = "edit-ulasan-pengiriman"
    }

    TidakEditUlasan = (): void => {
        this._statusUlasanSelesai = "tidak-edit-ulasan-pengiriman"
    }

    IsEditUlasan = (): boolean => {
        return this._statusUlasanSelesai == "edit-ulasan-pengiriman"
    }

    IsTidakEditUlasan = (): boolean => {
        return this._statusUlasanSelesai == "tidak-edit-ulasan-pengiriman"
    }

    

    private _statusMenungguDiulas: typeMenungguDiulas = $state<typeMenungguDiulas>("tidak-berikan-ulasan-pengiriman")

    BerikanUlasan = (): void => {
        this._statusMenungguDiulas = "berikan-ulasan-pengiriman"
    }

    TidakBerikanUlasan = (): void => {
        this._statusMenungguDiulas = "tidak-berikan-ulasan-pengiriman"
    }

    IsBerikanUlasan = (): boolean => {
        return this._statusMenungguDiulas == "berikan-ulasan-pengiriman"
    }

    IsTidakBerikanUlasan = (): boolean => {
        return this._statusMenungguDiulas == "tidak-berikan-ulasan-pengiriman"
    }

}

export const ReviewPengirimanPageState = new State()