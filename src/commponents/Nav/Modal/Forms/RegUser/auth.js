import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import ForgotPass from "./forgotPass";
import './regis.css'


const Auth = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
    };
    const [index1, setIndex1] = useState(false);
    const toggleIndex1 = () => {
        setIndex1((prevState1) => !prevState1);
    };
    // if(!index1){
    //     return <ForgotPass/>;}
    // else if (!index) {
    //     return <Signup />;}
    //  else {
    //     <Signin/>}
    //


    return (
        <div className="container1">


            {!index1 ? <Signin/>  : <ForgotPass/>}
            <p onClick={toggleIndex1}>
                {!index1 ? "Forgot password?" : "Back"}
            </p>



            {/*{!index ? <Signin /> : <Signup />}*/}
            <p onClick={toggleIndex}>
                {!index ? "New user? Click here " : "Already have an account?"}
            </p>
        </div>
    );
};

export default Auth;