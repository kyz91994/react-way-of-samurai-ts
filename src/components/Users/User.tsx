import {NavLink} from "react-router-dom";
import photoUser from "../../asserts/images/pngtree-users-vector-icon-png-image_3725294.jpeg";
import React from "react";
import {UserType} from "../../redux/user-reducer";
type UserPropsType = {
    user: UserType
    isFollowingInProgress: number[]
    unFollowUserThunkCreator: (userId: number) => void
    followUserThunkCreator: (userId: number) => void
}

export const User = ({user,isFollowingInProgress, unFollowUserThunkCreator, followUserThunkCreator }: UserPropsType) => {
    return (
        <div style={{padding: '10px'}}>
            <div>
                <NavLink to={'profile/' + user.id}>
                    <img alt={'avatar'} style={{width: '100px'}}
                         src={user.photos.small ? user.photos.small : photoUser}/>
                </NavLink>
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>Russia</div>
            <div>
                {user.followed
                    ? <button disabled={isFollowingInProgress.some((id: number) => id === user.id)} onClick={() => {
                        unFollowUserThunkCreator(user.id)
                    }}>Unfollow</button>
                    : <button disabled={isFollowingInProgress.some((id: number) => id === user.id)} onClick={() => {
                        followUserThunkCreator(user.id)

                    }}
                    >Follow</button>}
            </div>
        </div>
    )
}