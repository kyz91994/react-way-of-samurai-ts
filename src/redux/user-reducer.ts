import {ActionsTypes} from "./store";
import {userAPI} from "../api/api";

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
        case 'SET-USERS':
            return {
                ...state, users: action.users
            }
        case  'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }

        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state, currentPage: action.page
            }
        }
        case 'SET-TOTAL-USER-COUNT': {
            return {
                ...state, totalUsersCount: action.usersCount
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
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
export const onFollowButton = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const onUnFollowButton = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (page: number) => ({type: 'SET-CURRENT-PAGE', page} as const)
export const setTotalUsersCount = (usersCount: number) => ({type: 'SET-TOTAL-USER-COUNT', usersCount} as const)
export const setToggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    userId
} as const)

export type dispatchType = (action: ActionsTypes) => void
export type thunkType = (thunk: dispatchType) => void
export type getUsersThunkCreatorType = (currentPage: number, pageSize: number) => thunkType

export const getUsersThunkCreator: getUsersThunkCreatorType = (currentPage: number, pageSize: number): thunkType => {
    return (dispatch: dispatchType) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage((currentPage)))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const unFollowUserThunkCreator = (userId: number): thunkType => {
    return (dispatch: dispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(onUnFollowButton(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const followUserThunkCreator = (userId: number): thunkType => {
    return (dispatch: dispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(onFollowButton(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

