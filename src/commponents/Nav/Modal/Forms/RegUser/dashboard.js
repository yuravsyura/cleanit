import React from "react";
import {useUserContext} from "../../../../../context/userContext";

const Dashboard = () => {
    const { user, logoutUser } = useUserContext();
    return (
        <div>
            <h1>Dashboard </h1>
            <h2>Name : {user.displayName}</h2>
            <h2>Email : {user.email}</h2>
            <button className="btn7" onClick={logoutUser}>Log out</button>
        </div>
    );
};

export default Dashboard;