import Button from './Button'
import {MdOutlineEmail} from 'react-icons/md';
import {ImGoogle3} from 'react-icons/im'
import InputBox from './InputBox'
import {Form, useFormik} from 'formik'
import {RegisterSchema} from '../schemas/formValidation'
import axios from 'axios'

const initialValues={
    email:"",
    password:""
}


function LoginSignUp(props){
    const Formik= useFormik({
        initialValues:initialValues,
        validationSchema:RegisterSchema,
        onSubmit:async (values,action)=>{
            let response= await axios({
                url:"http://localhost:3000/auth/register",
                method:"POST",
                data:values,
                headers:{
                    "content-type":"application/json"
                }
            })
            let data = await response.data;
            console.log(data)
            action.resetForm();
        },
    })
    // console.log(Formik.errors)
    return(
        <div className="lg:w-[70%]">
        <h1 className='text-[30px] font-bold'>{props.title}</h1>
        <h4 className='my-1 mb-3'>{props.additionalText}<span className='cursor-pointer font-bold text-red-700 mx-2 underline'>{props.redirectingBtn}</span></h4>
        <form onSubmit={Formik.handleSubmit} className='flex flex-col my-4' action="" >
            <label className=' font-semibold' htmlFor="email" >Email</label>
            <InputBox 
            type="email" 
            placeholder="name@gmail.com" 
            name="email" 
            value={Formik.values.email} 
            handleChange={Formik.handleChange}
            />
            {Formik.errors.email && Formik.touched.email ?(<p className='text-red-500 my-2'>{Formik.errors.email}</p>):null}
            <label className='font-semibold' htmlFor="password" >Password</label>
            <InputBox 
            type="password" 
            placeholder="6+ Characters" 
            name="password" 
            value={Formik.values.password} 
            handleChange={Formik.handleChange}
            />
            {Formik.errors.password && Formik.touched.password ?(<p className='text-red-500 my-2'>{Formik.errors.password}</p>):null}

            <Button 
            type="submit" 
            icon={<MdOutlineEmail size="2rem"/>} 
            text={props.firstBtnText} 
            bgcolor="bg-blue-500"
            />
        </form>
        <div className='flex items-center justify-center my-3'>
            <span className='font-bold'>OR</span>
        </div>
        <Button icon={<ImGoogle3 size="2rem"/>} text={props.secondBtnText} bgcolor="bg-primary-color"/>
        </div>
    )
}

export default LoginSignUp