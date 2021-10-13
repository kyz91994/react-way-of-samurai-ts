import React from "react"
import c from './Mypost.module.css'
import Post from "./Post/Post";

function MyPost(){
    return(
        <div className={c.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hi, how are you' likes_count={0}/>
                <Post message='I`m learning React' likes_count={10}/>
            </div>
        </div>
    )
}
export default MyPost