class State{
    private _pageStatus: 'sign-up' | 'otp' =  $state('sign-up')

    constructor(){
        this._pageStatus = 'sign-up'
    }

    SignUp = ():void => {
        this._pageStatus = 'sign-up'
    }

    Otp = ():void => {
        this._pageStatus = 'otp'
    }

    get Status(): 'sign-up' | 'otp' {
        return this._pageStatus
    }
}

export const SignUpPageState = new State()
