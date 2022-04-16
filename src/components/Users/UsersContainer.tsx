import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

import {
    followUserThunkCreator,
    getUsersThunkCreator,
    unFollowUserThunkCreator,
    UserType
} from "../../redux/user-reducer";

import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching, getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount, getUsersReSelector,

} from "../../redux/user-selector";

export type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}
export type mapDispatchToProps = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unFollowUserThunkCreator: (userId: number) => void,
    followUserThunkCreator: (userId: number) => void
}
export type UsersPropsType = MapStatePropsType & mapDispatchToProps


class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (page: number) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                    users={this.props.users}
                    isFetching={this.props.isFetching}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    unFollowUserThunkCreator={this.props.unFollowUserThunkCreator}
                    followUserThunkCreator={this.props.followUserThunkCreator}
                />
            </>
        )

    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersReSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersThunkCreator, unFollowUserThunkCreator, followUserThunkCreator
    })
)(UsersAPIComponent)

