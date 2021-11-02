import React from "react";
import { SideBarPageType} from "../../redux/state";
import c from './Friends.module.css'
type FriendsPropsType = {
    state: SideBarPageType
}
export const Friends = (props:FriendsPropsType ) => {
    const friendsList = props.state.friends.map(
        f => <div key={f.id}>
            <img className={c.avatar} src={f.img}/>
            <div>{f.userName}</div>
        </div> )
    return(
        <div>
        {
            friendsList
        }
        </div>
    )

}