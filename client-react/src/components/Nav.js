import React from "react";
import logo from '../assets/logo.svg';

import { NavLink } from "react-router-dom";
//import LoginBadge from './LoginBadge';

export default function Nav() {

    const data = { isActive: false }

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3 className="title is-size-5">Be Happy</h3>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" className="{'is-active': isActive }" click="isActive = !isActive" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu" className="{'is-active': isActive }">
                <div className="navbar-start">
                    <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="/" exact>
                        Home
                    </NavLink>

                    <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="/feed" >
                        Feed
                    </NavLink>

                    <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="/about" >
                        Documentation
                    </NavLink>

                    <div className="navbar-item has-dropdown is-hoverable" >
                        <a className="navbar-link" >
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="about" >
                                About
                            </NavLink>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <login-badge />
                    </div>
                </div>
            </div>
        </nav>

    )
}