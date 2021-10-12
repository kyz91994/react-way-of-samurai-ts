import React from "react";
import c from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={c.navbar}>
            <div>
                <a className={c.item}>Profile</a>
            </div>
            <div>
                <a className={`${c.item} ${c.active}`}>Messages</a>
            </div>
            <div>
                <a className={c.item}>Friends</a>
            </div>
            <div>
                <a className={c.item}>Music</a>
            </div>
            <div>
                <a className={c.item}>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar