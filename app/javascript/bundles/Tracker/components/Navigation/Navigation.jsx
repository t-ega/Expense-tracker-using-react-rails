import React from "react"
import {Link, NavLink} from 'react-router-dom';

import { NavStyled} from "../../styles/app-syle";
import {menuItems} from "../../utils/menu-items";
import {signout} from "../../utils/icons";
import convertStringToUrl from "../../utils/convert-to-url";
import {useGlobalContext} from "../../Context/globalContext";

export const Navigation = ({ active }) => {
    const { user, appData }= useGlobalContext()
    const { csrf_token } = appData;
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.submit();
    };

    return (
        <NavStyled>
            <div className="user-con">
                <img src="/images/avatar.png" alt="avatar-i" />
                <div className="text">
                    <h2>{user}</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">

                {menuItems.map(item => {
                    return (
                        <a
                            key={item.id}
                            href={`/${convertStringToUrl(item.title)}`}
                            className={active === item.id ? "active" : ""} >
                            {item.icon}
                            <span>
                            {item.title}
                        </span>
                        </a>
                    )
                })}
            </ul>
            <div className="bottom-nav">
                <form action={"/users/sign_out"} id={"signoutForm"} method={'post'}>
                    <div className="input-control">
                        <input
                            type="hidden"
                            value={ csrf_token }
                            name={"authenticity_token"}
                        />
                        <input type="hidden" name="_method" value="delete"/>
                    </div>

                    <li onClick={() => document.getElementById('signoutForm').submit()}>
                        {signout}
                        Sign Out
                    </li>
                </form>
            </div>
        </NavStyled>
    )
}