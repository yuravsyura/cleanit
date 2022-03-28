import React from 'react';
import "./nav1.css"
import Regularly from './Types/Regularly'

const Nav1 = () => {
    return (
        <div className="rectangle">
            <div className="nav_bar">
                <a href="Types/Regularly.js" className="regularly">Regularly Cleaning</a>
                <a href="Types/Deep.js" className="deep">Deep Cleaning</a>
                <a href="Types/Office.js" className="office">Office Cleaning</a>
                <a href="Types/Windows.js" className="windows">Windows Cleaning</a>
            </div>
            <div className="rectangle2"/>
            <div className="triangle"/>
            <Regularly />
        </div>
    );
};

export default Nav1;