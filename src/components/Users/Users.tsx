import React from "react";
import { UserType} from "../../redux/user-reducer";
import photoUser from "../../asserts/images/pngtree-users-vector-icon-png-image_3725294.jpeg";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
    users: UserType[]
    isFetching: boolean
    isFollowingInProgress: number[]
    unFollowUserThunkCreator: (userId: number) => void
    followUserThunkCreator: (userId: number) => void

}
export const Users = ({totalUsersCount,pageSize, currentPage, onPageChange, users, ...props }: UsersPropsType) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} portionSize={10}/>
            {users.map((u: UserType) => <User  key={u.id} user={u} isFollowingInProgress={props.isFollowingInProgress}
                                              unFollowUserThunkCreator={props.unFollowUserThunkCreator}
                                              followUserThunkCreator={props.followUserThunkCreator}/>

            )}
        </div>)
}