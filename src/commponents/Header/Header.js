import React from 'react';
import LOGO from '../../img/logo.png'
import GRADIENT from '../../img/gradient.png'
import WET_F from '../../img/wet_f.png'
import './header.css'
import Nav from "../Nav/Nav";
import Header1 from "./Header1";
import Nav1 from "../Nav1/Nav1";

const Header = () => {
    return (

        <div className="container">
            <div className="gradient">
                <img src={GRADIENT} alt="gradient"/>
            </div>
            <Nav />
            <div className="logo">
                <img src={LOGO} alt="logo"/>
            </div>
            <div className="wet_f">
                <img src={WET_F} alt="wet-f"/>
            </div>
            <Header1/>
            <Nav1/>




        </div>

    );
};

export default Header;