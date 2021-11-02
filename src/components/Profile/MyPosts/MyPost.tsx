import React, {LegacyRef, RefObject} from "react"
import c from './Mypost.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";



type MyPostPropsType = {
    posts: PostsDataType
}

function MyPost(props:MyPostPropsType) {
    let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newTextElementRef:RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
       let text =  newTextElementRef.current?.value
        alert(text)
    }
    return (
        <div className={c.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newTextElementRef}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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