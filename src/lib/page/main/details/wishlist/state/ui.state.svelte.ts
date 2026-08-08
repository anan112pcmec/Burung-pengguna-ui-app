class State{
    private _statusEditWishlist: 'edit-wishlist' | 'static' = $state<'edit-wishlist'|'static'>("static")

    EditWishlist = (): void => {
        this._statusEditWishlist = "edit-wishlist"
    }

    Static = (): void => {
        this._statusEditWishlist = "static"
    }

    IsEditWishlist = (): boolean => {
        return this._statusEditWishlist == "edit-wishlist"
    }

    IsStatic = (): boolean =>{
        return this._statusEditWishlist == "static"
    }
}

export const DetailsWishlistPageState = new State()