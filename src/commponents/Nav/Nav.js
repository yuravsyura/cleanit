import React, {useState} from 'react';
import {Link} from 'react-scroll';
import './nav.css'

const Nav = () => {
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <div className="nav">
           <div className="bar1"><Link to="home" spy={true} smooth={true} offset={-40} duration={500} className="home" onclick={closeMenu}>Home</Link></div>
            <div className="bar2"><Link to="book" spy={true} smooth={true} offset={710} duration={500} className="book" onclick={closeMenu}>Book</Link></div>
            <div className="bar3"><a href="#j_o_t" className="j_o_t">Join our team</a></div>
            <div className="btt"><a className="sign_up"><button className="btn">Sign up</button></a></div>

        </div>


    );
};

export default Nav;