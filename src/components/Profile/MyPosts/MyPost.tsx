import React from "react"
import c from './Mypost.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../state";


// type PostsDataType = Array<PostPropsType>;
//
// let postsData: PostsDataType = [
//     {message: 'Hi, how are you', likesCount: 12},
//     {message: 'I`d like to drink', likesCount: 111},
//     {message: 'Go to it-incubator', likesCount: 112},
// ]
type MyPostPropsType = {
    posts: PostsDataType
}

function MyPost(props:MyPostPropsType) {
    let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={c.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={c.postsBlock}>
                {
                    posts
                }
            </div>
        </div>
    )
}

export default MyPost