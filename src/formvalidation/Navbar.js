import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import EnterOtp from "./EnterOtp";
import ChangePassword from "./ChangePassword";

function Navbar(){
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Registration/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/forget-password" element={<ForgetPassword/>} />
                <Route exact path="/forget-password/enter-otp" element={<EnterOtp/>} />
                <Route exact path="/forget-password/change-password" element={<ChangePassword/>} />
            </Routes>
        </>
    )
}

export default Navbar;