import React from 'react';
import './fillform.css'
import PERSON1 from "../../../img/person1.png";
import PERSON2 from "../../../img/person2.png";
import PERSON3 from "../../../img/person3.png";
import PERSON4 from "../../../img/person4.png";


const FillForm = (props) => {


    // =============SCROLL========================================


    // const imgArr = ['./img/person1.png', './img/person2.png', './img/person3.png', './img/person4.png'];



        return (

            <div className="ff">
                <form >
                <table className="form01">
                    <tr>
                        <td>
                            <div className="person1">
                                <img src={PERSON1} className="person01" alt="person1"/>

                            </div>
                            <a className="albina">Albina</a>
                            <a className="dp_clean">Deep Cleaning Expert</a>
                            <table className="form001">
                                <tr>
                                    <td >09.00</td>
                                    <td>15.00</td>
                                </tr>
                                <tr>
                                    <td>12.00</td>
                                    <td>17.00</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="person2">
                                <img src={PERSON2} className="person02" alt="person2"/>
                            </div>
                            <a className="kate">Kate</a>
                            <a className="wd_clean">Window Cleaning Expert</a>
                            <table className="form002">
                                <tr>
                                    <td>09.00</td>
                                    <td>15.00</td>
                                </tr>
                                <tr>
                                    <td>12.00</td>
                                    <td>17.00</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="person3">
                                <img src={PERSON3} className="person03" alt="person3"/>
                            </div>
                            <a className="giselle">Giselle</a>
                            <a className="rg_clean">Regular Cleaning Expert</a>
                            <table className="form003">
                                <tr>
                                    <td>09.00</td>
                                    <td>15.00</td>
                                </tr>
                                <tr>
                                    <td>12.00</td>
                                    <td>17.00</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="person4">
                                <img src={PERSON4} className="person04" alt="person4"/>
                            </div>
                            <a className="megan">Megan</a>
                            <a className="oc_clean">Office Cleaning Expert</a>
                            <table className="form004">
                                <tr>
                                    <td>09.00</td>
                                    <td>15.00</td>
                                </tr>
                                <tr>
                                    <td>12.00</td>
                                    <td>17.00</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                </form>
            </div>

        );

}

export default FillForm;