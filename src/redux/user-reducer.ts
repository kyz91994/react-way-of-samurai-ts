import {ActionsTypes} from "./store";
import {userAPI} from "../api/api";
import {genericMap} from "../utils/map-helper";

export type UserType = {
    id: number
    name: string
    photos:
        {
            small: string
            large: string
        }
    followed: boolean
    status: string
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
}

export const userReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'SAMURAI-NET/USER/SET-USERS':
            return {
                ...state, users: action.users
            }
        case  'SAMURAI-NET/USER/UNFOLLOW':
            return {
                ...state,
                users: genericMap(state.users,action.userId, 'id', {followed: false})
            }

        case 'SAMURAI-NET/USER/FOLLOW':
            return {
                ...state,
                users: genericMap(state.users,action.userId, 'id', {followed: true})
            }
        case 'SAMURAI-NET/USER/SET-CURRENT-PAGE': {
            return {
                ...state, currentPage: action.page
            }
        }
        case 'SAMURAI-NET/USER/SET-TOTAL-USER-COUNT': {
            return {
                ...state, totalUsersCount: action.usersCount
            }
        }
        case 'SAMURAI-NET/USER/TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'SAMURAI-NET/USER/TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
export const onFollowButton = (userId: number) => ({type: 'SAMURAI-NET/USER/FOLLOW', userId} as const)
export const onUnFollowButton = (userId: number) => ({type: 'SAMURAI-NET/USER/UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({type: 'SAMURAI-NET/USER/SET-USERS', users} as const)
export const setCurrentPage = (page: number) => ({type: 'SAMURAI-NET/USER/SET-CURRENT-PAGE', page} as const)
export const setTotalUsersCount = (usersCount: number) => ({
    type: 'SAMURAI-NET/USER/SET-TOTAL-USER-COUNT',
    usersCount
} as const)
export const setToggleIsFetching = (isFetching: boolean) => ({
    type: 'SAMURAI-NET/USER/TOGGLE-IS-FETCHING',
    isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'SAMURAI-NET/USER/TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId
} as const)

export type dispatchType = (action: ActionsTypes) => void
export type thunkType = (thunk: dispatchType) => void
export type getUsersThunkCreatorType = (currentPage: number, pageSize: number) => thunkType

export const getUsersThunkCreator: getUsersThunkCreatorType = (currentPage: number, pageSize: number): thunkType => {
    return async (dispatch: dispatchType) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage((currentPage)))
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setToggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
export const unFollowUserThunkCreator = (userId: number): thunkType => async (dispatch: dispatchType) => {
      followUnfollowUserThunkCreator(dispatch, userId,userAPI.unFollowUser.bind(userAPI),onUnFollowButton )
}

export const followUserThunkCreator = (userId: number): thunkType => async (dispatch: dispatchType) =>{
      followUnfollowUserThunkCreator(dispatch, userId,userAPI.followUser.bind(userAPI),onFollowButton )
}

export const followUnfollowUserThunkCreator = async (dispatch: dispatchType,userId: number, apiMethod: (id:number)=>Promise<any>, action:(id: number)=>ActionsTypes  ) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await apiMethod(userId)

        if (data.resultCode === 0) {
            dispatch(action(userId))
        }
    dispatch(toggleFollowingProgress(false, userId))
}

