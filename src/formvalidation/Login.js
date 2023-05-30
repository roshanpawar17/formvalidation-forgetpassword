import React from "react";
import { NavLink } from "react-router-dom";

function Login(){
    return (
        <>
            <div className="container text-center mt-5">
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form><br />
                <NavLink to={"/"} >Registartion</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to={"/forget-password"} >Forget Password</NavLink><br />
            </div>
            
        </>
    )
}

export default Login;