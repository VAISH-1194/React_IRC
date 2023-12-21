import React, { useState } from 'react';
import "../Assets/CSS/sidebar.css";
import {
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RiFundsBoxFill, Ri24HoursLine, RiTrophyFill } from 'react-icons/ri'; // Import the Remixicon

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <RiFundsBoxFill /> 
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />  
        },
        {
            path: "/analytics",
            name: "Today's Deal",
            icon: <Ri24HoursLine />
        },
        {
            path: "/awarwinning",
            name: "Award Winning",
            icon: <RiTrophyFill />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/review",
            name: "Review",
            icon: <FaCommentAlt />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo1">YEHDU++</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
