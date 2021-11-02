import React from "react"
import c from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    state: ProfilePageType
    addPost: addPostType
}


function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile