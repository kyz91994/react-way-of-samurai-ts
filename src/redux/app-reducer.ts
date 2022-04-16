import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
export type InitializedType = {
    initialized: boolean
}
const initialState = {
    initialized: false
}

export const appReducer = (state: InitializedType = initialState, action: ActionsTypes): InitializedType => {
    switch (action.type) {
        case 'INITIALIZE-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const setInitialized = () => ({type: 'INITIALIZE-SUCCESS',} as const)


export const initializeApp = () => (dispatch: Dispatch) => {
    dispatch<any>(getAuthUserData())
        .then(()=>{
            dispatch(setInitialized())
        })
}
