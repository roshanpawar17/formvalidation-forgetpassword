import React, { useState } from "react";
import { verifyOtp } from "../services/UserService";
import { NavLink } from "react-router-dom";

function EnterOtp(){

    const [changePass, setChangePass]=useState(false)
    const [error, setError]=useState()

    const [otp, setOtp]=useState({
        votp:''
    })

    function verifyOTP(e){
        e.preventDefault();
        verifyOtp(otp).then((data)=>{
            console.log(data)
            if(data.ok){
                setChangePass(true);
            }else{
                if(data.status === 404){
                    setError(data)
                }else{
                    setError(data)
                }
            } 
            

        }).catch((err)=>{
            setError("something went wrong")
        })
    }

    function handleOtp(e){
        setOtp({votp:e.target.value})
    }

    return (
        <>
            <form onSubmit={verifyOTP}>
                <h2>{error}</h2>
                    <div class="form-group" >
                        <label for="otp">Enter OTP</label>
                        <input type="number" name="otp" class="form-control" id="otp" aria-describedby="emailHelp" placeholder="Enter OTP" onChange={(e)=>{handleOtp(e)}} value={otp.votp}/>
                       
                    </div>
                    
                    {changePass?<NavLink to={"/forget-password/change-password"}><button type="submit" class="btn btn-success">Next</button></NavLink>:<button type="submit" class="btn btn-success">Verify</button>}
            </form>
        </>
    )
}

export default EnterOtp;