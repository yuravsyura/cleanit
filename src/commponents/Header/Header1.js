import React from 'react';
import "./header1.css"


const Header1 = () => {
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
            <div><a href="#book_now" className="book_now"><button className="btn1">Book now</button></a></div>
        </div>
    );
};

export default Header1;