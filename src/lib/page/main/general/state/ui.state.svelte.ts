class State {
    private _headerStatus :'searching' | 'unsearch' = $state('unsearch')

    Searching = (): void =>{
        this._headerStatus = "searching"
    }

    Unsearch = (): void =>{
        this._headerStatus = "unsearch"
    }

    IsSearching = (): boolean =>{
        return this._headerStatus == 'searching'
    }

    IsUnsearch = (): boolean => {
        return this._headerStatus == "unsearch"
    }

    get headerStatus(): 'searching' | "unsearch" {
        return this._headerStatus
    }

    constructor(){
        this._headerStatus = "unsearch"
    }
}

export const GeneralPageState = new State();