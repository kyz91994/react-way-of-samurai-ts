import React from "react"
import c from './Post.module.css'

type PostPropsType = {
    message: string,
    likes_count: number
}
function Post(props: PostPropsType) {
    return (
        <div className={c.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye8_F5ZHKn2FQ51IdAmOKH3VaIfKkZLXVEA&usqp=CAU'/>
            <span>{props.message}</span>
            <div>
                <span>{props.likes_count} </span>
                <span>like</span>
            </div>
        </div>

    )
}

export default Post