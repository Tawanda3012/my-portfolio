import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
  
   
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => { // Define Sidebar component
  const [isOpen, setIsOpen] = useState(false); // Initialize state for sidebar open/close
  const toggle = () => setIsOpen(!isOpen); // Define function to toggle sidebar

  const menuItems = [ // Define array of menu items
    { path: "/", name: "Home", icon: <FaTh /> }, // Home menu item
    { path: "/about", name: "About", icon: <FaUserAlt /> }, // About menu item
    { path: "/contact", name: "Contact", icon: <FaRegChartBar /> }, // Contact menu item
    { path: "/testimonials", name: "Testimonials", icon: <FaCommentAlt /> }, // Testimonials menu item
  ];

  return ( // Return JSX for Sidebar component
    <div className="container"> {/* Container for sidebar */}
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar"> {/* Sidebar with dynamic width */}
        <div className="top_section"> {/* Top section of sidebar */}
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1> {/* Logo with dynamic display */}
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars"> {/* Bars with dynamic margin */}
            <FaBars onClick={toggle} /> {/* Toggle button */}
          </div>
        </div>
        {menuItems.map((item, index) => ( // Map through menu items
          <NavLink to={item.path} key={index} className="link" activeClassName="active"> {/* NavLink for each menu item */}
            <div className="icon">{item.icon}</div> {/* Icon for menu item */}
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div> {/* Text for menu item with dynamic display */}
          </NavLink>
        ))}
      </div>
      <main>{children}</main> {/* Main content */}
    </div>
  );
};

export default Sidebar;