// import styles from './Navbar.module.css';
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation()

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList

        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]


    return (

        <>
            <div className="wrapper__header">
                <header className="container">
                    <nav className="navbar">
                        <Link className="logo" to="/">F<span>oo</span>diesHub</Link>
                        <div className="nav-links">
                            {links.map(link => {
                                return <Link to={link.path} className={location.pathname == link.path ? "nav-link active" : "nav-link"} key={link.name}>{link.name}</Link>
                            })}
                        </div>
                        <div
                            className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
                            onClick={() => setShowSidebar(!showSidebar)} >
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>

                    </nav>
                </header>
            </div>
            {showSidebar && <Sidebar links={links} />
            }
        </>
    )
};

export default Navbar;