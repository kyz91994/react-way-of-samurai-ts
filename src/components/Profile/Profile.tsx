import React from "react"
import c from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../state";
type ProfilePropsType = {
    posts: PostsDataType
}




function Profile(props: ProfilePropsType){
    return(
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts}/>
        </div>
    )
}
export default Profile