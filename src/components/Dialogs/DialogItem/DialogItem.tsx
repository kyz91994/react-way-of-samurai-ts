import React from "react"
import {NavLink} from "react-router-dom";
import c from './DialogItem.module.css';

export type DialogItemPropsType = {
    userName: string
    id: number
    src: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={c.dialog}>
            <NavLink to={'/dialogs/' + props.id}>
                <div>
                    <img className={c.avatar} src={props.src}/>
                    {props.userName}
                </div>

            </NavLink>
        </div>
    )
}

export default DialogItem