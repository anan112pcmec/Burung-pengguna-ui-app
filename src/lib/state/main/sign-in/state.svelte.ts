import { AppState } from "../../../../state/state.svelte"

class State{
    public _loginStatus: 'login' | 'logged-out' | '' = $state<'login' | 'logged-out' | ''>("")

    constructor(){
        if (AppState.isIdentitasPengguna()) {
            this._loginStatus = 'login'
        } else {
            this._loginStatus = 'logged-out'
        }
    }

    Login = (): void => {
        this._loginStatus = "login"
    }

    LoggedOut = (): void => {
        this._loginStatus = "logged-out"
    }

    isLoggedOut = (): boolean =>{
        return this._loginStatus == "logged-out"
    }

    isLogin = (): boolean => {
        return this._loginStatus == "login"
    }
    
}

export const SignInPageState = new State()