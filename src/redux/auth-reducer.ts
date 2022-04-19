import {ActionsTypes} from "./store";
import {authAPI} from "../api/api";

import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
    // isFetching: boolean
}
const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    // isFetching: false
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case 'SAMURAI-NET/AUTH/SET-USER-DATA':
            return {
                ...state,
                ...action.data,
            }
        // case 'SAMURAI-NET/AUTH/TOGGLE-IS-FETCHING': {
        //     return {
        //         ...state, isFetching: action.isFetching
        //     }
        // }

        default:
            return state
    }
}
export const setAuthUser = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: 'SAMURAI-NET/AUTH/SET-USER-DATA',
    data: {id, email, login, isAuth}
} as const)
// export const setToggleIsFetchingLogin = (isFetching: boolean) => ({
//     type: 'SAMURAI-NET/AUTH/TOGGLE-IS-FETCHING',
//     isFetching
// } as const)


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(setAuthUser(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    let res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch<any>(getAuthUserData())

    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}
export const logout = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUser(0, '', '', false))
    }
}
