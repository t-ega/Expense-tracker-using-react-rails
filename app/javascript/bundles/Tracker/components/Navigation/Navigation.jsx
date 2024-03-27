import React from "react"
import {Link, NavLink} from 'react-router-dom';

import { NavStyled} from "../../styles/app-syle";
import {menuItems} from "../../utils/menu-items";
import {signout} from "../../utils/icons";

export const Navigation = ({ active, setActive }) => {

    return (
        <NavStyled>
            <div className="user-con">
                <img src="/images/avatar.png" alt="avatar-i" />
            <div className="text">
                <h2>Mike</h2>
                <p>Your Money</p>
            </div>
            </div>
            <ul className="menu-items">

                {menuItems.map(item => {
                    return (
                    <li
                        key={item.id}
                        className={active === item.id ? "active" : ""}
                        onClick={() => setActive(item.id)} >
                        {item.icon}
                        <span>
                            {item.title}
                        </span>
                    </li>
                    )
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}