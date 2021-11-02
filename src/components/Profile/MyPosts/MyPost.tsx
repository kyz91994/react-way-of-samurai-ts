import React, { RefObject} from "react"
import c from './Mypost.module.css'
import Post from "./Post/Post";
import {addPostType, PostsDataType} from "../../../redux/state";




type MyPostPropsType = {
    posts: PostsDataType
    addPost:addPostType
}

function MyPost(props:MyPostPropsType) {
    let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newTextElementRef:RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>()
   const addPost = () => {
        if(newTextElementRef.current){
            props.addPost(newTextElementRef.current.value)
        }
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