import {ActionsTypes} from "./store";
import {authAPI} from "../api/api";

import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}
export const setAuthUser = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    data: {id, email, login, isAuth}
} as const)


export const getAuthUserData = () => (dispatch: Dispatch) => {
       return authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUser(id, email, login, true))
                }
            })
    }
export const login = (email:string, password: string, rememberMe: boolean) => (dispatch:Dispatch) =>{
    authAPI.login(email, password, rememberMe)
        .then((res)=>{
            if(res.data.resultCode === 0){
                dispatch<any>(getAuthUserData())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login',{_error: message}))
            }
        })
}
export const logout = () => (dispatch:Dispatch) =>{
    authAPI.logout()
        .then((res)=>{
            if(res.data.resultCode === 0){
                dispatch(setAuthUser(0, '', '', false))
            }
        })
}
