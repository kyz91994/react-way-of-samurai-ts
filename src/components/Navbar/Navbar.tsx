import React from "react";
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css';
import {SideBarPageType} from "../../redux/store";
type NavBarPropsType = {
    sideBarPage: SideBarPageType
}

function Navbar(props:NavBarPropsType) {
            let state = props.sideBarPage

            const sideBar = state.links.map(l => <div key={l.id} className={c.item}>
                <NavLink to={l.navLink} activeClassName={c.activeLink}>{l.tittle}</NavLink>
            </div>)

            const friends = state.friends.map(f => <div key={f.id}
                style={{
                    display: "inline-block",
                    margin: '5px',
                }}>
                <NavLink to={'/dialogs/' + f.id}>
                    <img width={'30px'} src={f.img}/>
                    <div>{f.userName}</div>
                </NavLink></div>)

            return (
                <nav className={c.navbar}>
                    <div>
                        {sideBar}
                    </div>
                    <div>
                        {friends}
                    </div>
                </nav>
            )

}

export default Navbar