import React, { useState } from "react";
import { forgetPassword } from "../services/UserService";
import EnterOtp from './EnterOtp'
import {NavLink } from "react-router-dom";

function ForgetPassword(){

    const [email, setEmail]=useState({
        emailTo:''
    })

    const [yes,setYes]=useState(false)
    const [success, setSuccess]=useState()

    const [err, setErr]=useState(false)
    const [error, setError]=useState()

    const [e,setE]=useState()

    const [clicked, setClicked]=useState(false)

    function handleEmail(e){
        const value=e.target.value;
        setEmail({
            emailTo:value
        })
    }

    function submitEmail(e){
        e.preventDefault();

        forgetPassword(email).then((data)=>{
            // console.log(data)
            if(data.ok){
                setSuccess(data)
                setYes(true)
            }else{
                setError(data)
                setErr(true)
            }
            
        }).catch((err)=>{
            // console.log(err)
            setE("something went wrong")
        })

        setClicked(true)
    }

    return (
        <>
            <div className="container text-center mt-5">
                {yes?<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> {success}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>:null}
                {
                   err?<div class="alert alert-success alert-dismissible fade show" role="alert">
                   <strong>Success!</strong> {error}
                   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>:null} 
                {e}
                <form onSubmit={submitEmail}>
                    <div class="form-group">
                        {/* <h3>{email.emailTo}</h3> */}
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>handleEmail(e)} value={email.emailTo}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                
                    <button type="submit" class="btn btn-success">Send OTP</button>
     
                </form><br />

                {clicked ?<EnterOtp/>:null}

            </div>
        </>
    )
}

export default ForgetPassword