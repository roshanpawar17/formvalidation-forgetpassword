import React, { useEffect, useState } from "react";
import { signUp } from "../services/UserService";

function Signup(){

    const [data, setData]=useState({
        fname:'',
        lname:'',
        email:''
    }) 

    const [success, setSuccess]=useState('')

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    function handleChange(e){
        const value=e.target.value
        setData({
            ...data,
            [e.target.name]:value
        })
    }

    function submithtmlForm(e){
        e.preventDefault();

        signUp(data).then((data)=>{
            // console.log(data)
            // console.log("success data")
            setSuccess("data submitted successfully!")
        }).catch((err)=>{
            console.log(err)
        })

    }

    return (
        <>
            <div className="container text-center mt-5">
                <h3>{success}</h3>
                <form onSubmit={submithtmlForm}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter First name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="fname" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={(e)=>{handleChange(e)}} value={data.fname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter Last name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="lname" aria-describedby="emailHelp" placeholder="Enter Last Name" onChange={(e)=>{handleChange(e)}} value={data.lname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{handleChange(e)}} value={data.email}/>
                        <small id="emailHelp" className="htmlForm-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
                       
            
        </>
    )
}

export default Signup