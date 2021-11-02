import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css';
import {SideBarPageType} from "../../redux/state";
type NavBarPropsTyp = {
    state:SideBarPageType
}

function Navbar(props:NavBarPropsTyp) {
    return (
        <nav className={c.navbar}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs' activeClassName={c.activeLink}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news' activeClassName={c.activeLink}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' activeClassName={c.activeLink}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/settings' activeClassName={c.activeLink}>Settings</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/friends' activeClassName={c.activeLink}>
                    Friends
                    <div>
                        <NavLink to='/dialogs/1'>
                        <img width={'30px'} src={props.state.friends[0].img}/>
                        <div>{props.state.friends[0].userName}</div>
                        </NavLink>
                    </div>

                </NavLink>

            </div>
        </nav>
    )
}

export default Navbar