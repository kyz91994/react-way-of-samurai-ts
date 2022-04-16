import React, {ReactNode} from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus:(status:string)=> void
    isAuth: boolean
}

function Profile(props: ProfilePropsType) {
    // if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile