import { myAxios } from "./Helper";

export function signUp(user){
    return myAxios.post("/adduser",user).then((response)=>{
        return response.data
    })
}

export function forgetPassword(email){
    return myAxios.post("/forgetPassword",email).then((response)=>{
        return response.data
    })
}

export function verifyOtp(otp){
    return myAxios.post("/verifyotp",otp).then((response)=>{
        return response.data
    })
}



export function getUsers(){
    return myAxios.get("/getUsers").then((response)=>{
        return response.data
    })
}