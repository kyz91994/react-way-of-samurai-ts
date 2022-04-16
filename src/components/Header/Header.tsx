import React from "react";
import c from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "./HeaderContainer";

function Header(props:HeaderContainerType) {
    return (
        <header className={c.header}>
            <img src='https://w7.pngwing.com/pngs/664/103/png-transparent-pbc-cska-moscow-sport-pfc-cska-moscow-boxing-sport-logo-association.png'/>
            <div className={c.login_block}>
                {props.isAuth?
                    <div>{props.login}  <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
export default Header