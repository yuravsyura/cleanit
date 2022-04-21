import React, {useState} from 'react';
import {Link} from 'react-scroll';

import './nav.css'



const Nav = (props) => {
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)


        return (
            <div className="nav">
                <div className="bar1"><Link to="home" spy={true} smooth={true} offset={-40} duration={500}
                                            className="home" onClick={closeMenu}>Home</Link></div>
                <div className="bar2"><Link to="book" spy={true} smooth={true} offset={710} duration={500}
                                            className="book" onClick={closeMenu}>Book</Link></div>
                <div className="bar3" ><a className="j_o_t" onClick={props.modal1}>Join our team</a></div>
                <div className="btt"><a className="sign_up">
                    <button className="btn" onClick={props.modal}>Sign up</button>
                </a></div>

            </div>


        );
    };

export default Nav;