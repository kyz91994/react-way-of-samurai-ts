import React from "react"
import c from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
}


function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.state.postsData}/>
        </div>
    )
}

export default Profile