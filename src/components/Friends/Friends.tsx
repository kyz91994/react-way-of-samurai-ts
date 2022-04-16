import React from "react";
import {SideBarPageType, StateType} from "../../redux/store";
import c from './Friends.module.css'

type FriendsPropsType = {
    sideBarPage: SideBarPageType
}
export const Friends = (props:FriendsPropsType) => {

    const friendsList = props.sideBarPage.friends.map(f => <div key={f.id}>
        <img className={c.avatar} src={f.img}/>
        <div>{f.userName}</div>
    </div>)

    return (
        <div>
            {friendsList}
        </div>
    )
}

