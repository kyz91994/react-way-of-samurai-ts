import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./user-reducer";

export const getUsersSelector = (state: AppStateType) => (state.userPage.users)
export const getUsersReSelector = createSelector(getUsersSelector, (users:UserType[])=> users.filter(u=>true))
export const getPageSize = (state: AppStateType) => (state.userPage.pageSize)
export const getTotalUsersCount = (state: AppStateType) => (state.userPage.totalUsersCount)
export const getCurrentPage = (state: AppStateType) => (state.userPage.currentPage)
export const getIsFetching = (state: AppStateType) => (state.userPage.isFetching)
export const getIsFollowingInProgress = (state: AppStateType) => (state.userPage.isFollowingInProgress)
