import React from "react"
import c from './Mypost.module.css'
import Post, {PostPropsType} from "./Post/Post";

type PostsDataType = Array<PostPropsType>;

let postsData: PostsDataType = [
    {message: 'Hi, how are you', likesCount: 12},
    {message: 'I`d like to drink', likesCount: 111},
    {message: 'Go to it-incubator', likesCount: 112},
]
let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

function MyPost() {
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