import React from 'react';
import './bottom_column.css'
import LOGO from "../../img/logo.png";
// import MyCalendar from "./MyCalendar";


const BottomColumn = () => {
    return (
        <div>
            <div className="rectangle3">
                <div className="book_now"><a className="book_now">Book now</a></div>
                <div className="choose_time"><a className="choose_time">Choose available expert and time:</a></div>
                    <div className="box">
                        <select className="choice">
                            <option>Regularly Cleaning</option>
                            <option>Deep Cleaning</option>
                            <option>Office Cleaning</option>
                            <option>Windows Cleaning</option>
                         </select>
                        <div className="c_a_d"><a className="c_a_d">Choose available dates:</a></div>
                        <div className="rectangle4">

                        </div>
                        <div className="rectangle5"></div>
                    </div>
                {/*<MyCalendar/>*/}
            </div>
            <div className="logo1">
                <img src={LOGO} alt="logo"/>
            </div>
            <div className="description3">
                <a className="desc5">
                    Plaut,<br/>
                    10 Science Park<br/>
                    76706, Rehovot<br/>
                    Israel
                    <p/>
                    Phone: 054-56-99-350<br/>
                    E-mail: go@tel-ran.com
                </a>
            </div>
        </div>
    );
};

export default BottomColumn;