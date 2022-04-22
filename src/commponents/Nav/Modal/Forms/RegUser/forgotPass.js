import React, {useRef} from 'react';
import {useUserContext} from "../../../../../context/userContext";
import './regis.css'

const ForgotPass = () => {
    const emailRef = useRef();
    const { forgotPassword } = useUserContext();


    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (email) forgotPassword(email);


    };
    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (email)
            forgotPassword(email).then(() => {
                emailRef.current.value = "";
            });
    };
    return (
        <div className="container1">
            <h2> Forgot Password </h2>
            <form onSubmit={onSubmit}>
                <input placeholder="Email" type="email" ref={emailRef} />
                <button className="btn7" onClick={forgotPasswordHandler}>Send</button>
                </form>
        </div>
    );
};

export default ForgotPass;