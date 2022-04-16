import React from "react";
import { UserType} from "../../redux/user-reducer";
import photoUser from "../../asserts/images/pngtree-users-vector-icon-png-image_3725294.jpeg";
import {NavLink} from "react-router-dom";

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
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <span key={p} className={(props.currentPage === p) ? 'selected' : ''} onClick={() => {
                    props.onPageChange(p)
                }}>{p}</span>)}
            </div>
            {props.users.map((u: UserType) => <div style={{padding: '10px'}} key={u.id}>

                    <div>
                        <NavLink to={'profile/' + u.id}>
                            <img alt={'avatar'} style={{width: '100px'}} src={u.photos.small ? u.photos.small : photoUser}/>
                        </NavLink>
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>u.address.city</div>
                    <div>
                        {u.followed
                            ? <button disabled={props.isFollowingInProgress.some(id=> id ===u.id)} onClick={() => {
                                props.unFollowUserThunkCreator(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // userAPI.unFollowUser(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.onUnFollowButton(u.id)}
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                            }}>Unfollow</button>
                            : <button disabled={props.isFollowingInProgress.some(id=> id ===u.id)} onClick={() => {
                                props.followUserThunkCreator(u.id)
                                // props.toggleFollowingProgress(true, u.id)
                                // userAPI.followUser(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.onFollowButton(u.id)
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //     })
                            }}
                            >Follow</button>}
                    </div>
                </div>
            )}
        </div>)
}