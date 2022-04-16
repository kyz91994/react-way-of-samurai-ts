import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfileTC, setUserStatusTC, updateUserStatusTC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapProfileStateToPropsType = {
    profile: ProfileType
    status: string
    isAuth: boolean
    authorizedUserId: number
}
export type MapProfileDispatchToPropsType = {
    setUserProfileTC: (userId: string) => void
    setUserStatusTC:(userId:string)=> void
    updateUserStatusTC:(status:string)=>void
}
type ProfileContainerType = MapProfileStateToPropsType & MapProfileDispatchToPropsType
type PathParamType = {
    userId?: string
}
type ProfilePropsType = RouteComponentProps<PathParamType> & ProfileContainerType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId.toString()
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.setUserProfileTC(userId)
        this.props.setUserStatusTC(userId)
    }

    render() {
        return (

                <Profile isAuth={this.props.isAuth} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatusTC}/>

        )
    }
}

const mapStateToProps = (state: AppStateType): MapProfileStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id
})
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfileTC,setUserStatusTC, updateUserStatusTC}),
    withRouter
)(
    ProfileContainer
)
