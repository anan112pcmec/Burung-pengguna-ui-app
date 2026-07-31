import type { IdentitasPengguna } from "../data/IdentityUser";

class State{
    constructor(){
        this.identitasPengguna = <IdentitasPengguna>{
            id: 12,
            username:"Faiz Hannan Hakim",
            email:"ananlol152@gmail.com",
        } 
    }

    private _identitasPengguna?: IdentitasPengguna = $state<IdentitasPengguna>()
  
    set identitasPengguna(ip: IdentitasPengguna){
        this._identitasPengguna = ip
    }

    get identitasPengguna(): IdentitasPengguna{
        return this.identitasPengguna
    }

    isIdentitasPengguna =(): boolean => {
        if(this._identitasPengguna == null){
            return false
        }

         if(this._identitasPengguna.id == 0){
            return false
        }


        if(this._identitasPengguna.username == ""){
            return false
        }

         if(this._identitasPengguna.email == ""){
            return false
        }


        return true
    }
}

export const AppState = new State()

