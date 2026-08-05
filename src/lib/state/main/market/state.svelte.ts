class State {
    private _statusFilter: 'filtering' | 'unfiltering' = $state<'filtering' | 'unfiltering'>('unfiltering')

    Filtering = ():void => {
        this._statusFilter = "filtering"
    }

    Unfiltering = ():void => {
        this._statusFilter = "unfiltering"
    }

    IsFiltering = (): boolean =>{
        return this._statusFilter == "filtering"
    }

    IsUnfiltering = (): boolean =>{
        return this._statusFilter == "unfiltering"
    } 

    get StatusFilter(){
        return this._statusFilter
    }

    

    private _statusResultType: 'barang' | 'seller' | 'kurir' = $state<'barang' | 'seller' | 'kurir'>('barang')

    ResultBarang = ():void => {
        this._statusResultType = 'barang';
    }

    ResultSeller = (): void => {
        this._statusResultType = 'seller'
    }

    ResultKurir = (): void =>{
        this._statusResultType = 'kurir'
    }

    IsResultBarang = (): boolean =>{
        return this._statusResultType == "barang"
    }

    IsResultSeller = (): boolean =>{
        return this._statusResultType == "seller"
    }

    IsResultKurir = (): boolean =>{
        return this._statusResultType == "kurir"
    }
}

export const MarketPageState = new State()
