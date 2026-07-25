class FilterBerdasarState {
    public filter: boolean
    constructor(){
        this.filter = $state<boolean>(false)
    }

    filtering = ():void => {
        this.filter = true
    }

    unfiltering = (): void => {
        this.filter = false
    }
}

export const FilterState = new FilterBerdasarState()

class UrutkanBerdasarState {
    public urutkan: boolean 
    constructor(){
        this.urutkan = $state<boolean>(false)
    }

    action = (): void =>{
        this.urutkan = !this.urutkan
    }
}

export const UrutkanState = new UrutkanBerdasarState()