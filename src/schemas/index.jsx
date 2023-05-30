import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please enter valid email").required("please enter your email"),
    password:Yup.string().min(8, 'Password must be 8 characters long')                        
                        .matches(/[A-Z]/, 'Password requires an uppercase letter')
                        .matches(/[a-z]/, 'Password requires a lowercase letter')
                        .matches(/[^\w]/, 'Password requires a atleast 1 symbol')
                        .matches(/[0-9]/, 'Password requires a number')
                        .required("Please enter your password"),
    cpassword:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match")
})