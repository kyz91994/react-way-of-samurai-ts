import {ActionsTypes, PostType, ProfilePageType} from "./store";
import {profileApi} from "../api/api";
import {dispatchType, thunkType} from "./user-reducer";

export type ProfileType = {
    aboutMe?: string,
    contacts?: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob?: boolean,
    lookingForAJobDescription?: string,
    fullName?: string,
    userId?: number,
    photos?: {
        small: string,
        large: string
    }
}
const initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'I`d like to drink', likesCount: 111},
        {id: 3, message: 'Go to it-incubator', likesCount: 112},
    ],
    status: '',
    profile: {
        // aboutMe: "я круто чувак 1001%",
        // contacts: {
        //     facebook: "facebook.com",
        //     website: null,
        //     vk: "vk.com/dimych",
        //     twitter: "https://twitter.com/@sdf",
        //     instagram: "instagra.com/sds",
        //     youtube: null,
        //     github: "github.com",
        //     mainLink: null
        // },
        // lookingForAJob: true,
        // lookingForAJobDescription: "не ищу, а дурачусь",
        // fullName: "samurai dimych",
        // userId: 2,
        // photos: {
        //     small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        //     large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        // }}
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case  'SAMURAI-NET/PROFILE/ADD-POST':
            const newPost: PostType = {
                id: 5, message: action.newPostBody, likesCount: 12
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        case 'SAMURAI-NET/PROFILE/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile

            }
        case 'SAMURAI-NET/PROFILE/SET-USER-STATUS':
            return {
                ...state,
                status: action.status

            }
        default:
            return state
    }
}
export const addPostActionCreator = (newPostBody: string) => ({
    type: 'SAMURAI-NET/PROFILE/ADD-POST',
    newPostBody} as const)
export const setUserProfile = (profile: ProfileType) => ({
    type: 'SAMURAI-NET/PROFILE/SET-USER-PROFILE',
    profile} as const)
export const setUserStatus = (status: string) => ({type: 'SAMURAI-NET/PROFILE/SET-USER-STATUS', status} as const)

export const setUserProfileTC = (userId: string): thunkType => async (dispatch: dispatchType) => {
    let data = await profileApi.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const setUserStatusTC = (userId: string): thunkType => async (dispatch: dispatchType) => {
    let data = await profileApi.getUserStatus(userId)
    dispatch(setUserStatus(data))
}
export const updateUserStatusTC = (status: string): thunkType => async (dispatch: dispatchType) => {
    let response = await profileApi.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
