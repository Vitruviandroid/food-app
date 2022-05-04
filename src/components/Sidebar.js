// import styles from './Sidebar.module.css';
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Sidebar = ({ links }) => {
    const location = useLocation()
    return (
        <div className="sidebar">
            {links.map((link) => (
                <Link
                    className={location.pathname == link.path ? "sidebar-link active" : "sidebar-link"}
                    to={link.path}
                    key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    )
};

export default Sidebar;