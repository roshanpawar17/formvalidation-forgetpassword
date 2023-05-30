import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { signUp } from "../services/UserService";
import { FormGroup,Input } from "reactstrap";
import {NavLink } from "react-router-dom";

const initialValues={
    name:'',
    email:'',
    password:'',
    cpassword:''
}

function Registration(){

    const [successMsg, setSuccessMsg]=useState()

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues: initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values,action)=>{
            signUp(values).then((data)=>{
                // console.log(data)
                setSuccessMsg("Registration Successfull..!")
            }).catch((err)=>{
                console.log(err)
            })
            action.resetForm();
        }
    })

    const style={
        color: "red"
    }

    // console.log(errors)

    return (
        <>
            <div className="container text-center mt-5">
                <h3 style={{color: "green"}}>{successMsg}</h3>
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <FormGroup>
                            <label htmlFor="exampleInputEmail1">Enter Name</label>
                            <Input type="text" className="form-control"  name="name" aria-describedby="emailHelp" placeholder="Enter First Name" value={values.name} onChange={handleChange} onBlur={handleBlur} invalid={errors.name && touched.name?true:false} valid={values.name?true:false}/>
                            { errors.name && touched.name? <small style={style}>{errors.name}</small>: null}
                        </FormGroup>
                    </div>

                    <div className="form-group">
                        <FormGroup>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <Input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={values.email.toLowerCase()} onChange={handleChange} onBlur={handleBlur} invalid={errors.email && touched.email?true:false} valid={values.email?true:false}/>
                            <small>Please enter valid email. OTP is send on email</small><br/>
                            { errors.email && touched.email? <small style={style}>{errors.email}</small>: null}
                        </FormGroup>
                    </div>

                    <div className="form-group">
                        <FormGroup>
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <Input type="password" className="form-control" autoComplete="true" name="password" aria-describedby="emailHelp" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} invalid={errors.password && touched.password?true:false} valid={values.password?true:false}/>
                            { errors.password && touched.password? <small style={style}>{errors.password}</small>: null}
                        </FormGroup>
                    </div>

                    <div className="form-group">
                        <FormGroup>
                            <label htmlFor="exampleInputEmail1">Confirm Password</label>
                            <Input type="password" className="form-control" autoComplete="true" name="cpassword" aria-describedby="emailHelp" placeholder="Enter Confirm Password" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} invalid={errors.cpassword && touched.cpassword?true:false} valid={values.cpassword?true:false}/>
                            { errors.cpassword && touched.cpassword? <small style={style}>{errors.cpassword}</small>: null}
                        </FormGroup>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form><br/>

                <NavLink to={"/login"} >Login</NavLink>
                                            
            </div>
            
        </>
    )
}

export default Registration