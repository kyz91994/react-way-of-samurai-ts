import React from "react"
import c from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";

function Profile(){
    return(
        <div>
            <div>
                <img src='https://img.championat.com/s/735x490/news/big/o/j/stadion-finala-evro-serdce-futbola_16260263101386131676.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPost/>
        </div>
    )
}
export default Profile