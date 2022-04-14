import React, {useState} from 'react';
import "./header1.css"
import {Link} from 'react-scroll';


const Header1 = () => {
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <div className="description">
            <a className="always_clean">always clean</a>
            <div className="home_office1"><a className="home_office">HOME & OFFICE</a></div>
            <div className="desc1"><a className="desc">
                It’s hard to find someone who enjoys cleaning. It takes a
                lot of energy, time, and you always have to do it when
                there are so many other things to do around you.
                <p/>
                Is it possible to make it so that your surroundings are clean,
                but not to create a constant torture of cleaning? Of course it is!</a></div>
            <div><Link to="book_now" spy={true} smooth={true} offset={-40} duration={500}  className="book_now1" onclick={closeMenu}><button className="btn1">Book now</button></Link></div>
        </div>
    );
};

export default Header1;