import React from "react"
import c from './Messages.module.css';

export type MessagePropsType = {
    message: string
    id: number
}

function Message(props: MessagePropsType) {
    return (
        <div className={c.message}>{props.message}</div>
    )
}


export default Message