import React, {useRef} from "react";
import { useUserContext } from "../../../../../context/userContext";


const Signin = () => {
    const emailRef = useRef();
    const psdRef = useRef();
    const { signInUser} = useUserContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = psdRef.current.value;
        if (email && password) signInUser(email, password);
    };
    // const [index, setIndex] = useState(false);
    // const toggleIndex = () => {
    //     setIndex((prevState) => !prevState);
    // };
    // const forgotPasswordHandler = () => {
    //     const email = emailRef.current.value;
    //     if (email)
    //         forgotPassword(email).then(() => {
    //             emailRef.current.value = "";
    //         });
    // };

    return (
        <div className="form--1">
            <h2> Login </h2>
            <form onSubmit={onSubmit}>
                <input placeholder="Email" type="email" ref={emailRef} />
                <input placeholder="Password" type="password" ref={psdRef} />
                <button className="btn8" type="submit">Sign In</button>
                {/*{!index ? Signin  : <ForgotPass/>}*/}
                {/*<p onClick={toggleIndex}>*/}
                {/*    {!index ? "Forgot password?" : "Back"}*/}
                {/*</p>*/}
            </form>
        </div>
    );
};

export default Signin;