import React from "react"
import c from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(){
    return(
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}
export default Profile