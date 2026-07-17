class FilterBerdasarState {
    public filter: boolean
    constructor(){
        this.filter = $state(false)
    }

    filtering = ():void => {
        this.filter = true
    }

    unfiltering = (): void => {
        this.filter = false
    }
}

export const FilterState = new FilterBerdasarState()