import * as Yup from 'yup'

export const RegisterSchema=Yup.object({
    email:Yup.string().email().required("Please enter a valid email"),
    password:Yup.string().min(6).required("Please enter correct password"),
    // confirm_password:Yup.string().required.oneOf([Yup.ref("password"),null],"Password must match")
})