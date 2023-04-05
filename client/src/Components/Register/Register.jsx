import registerImage from '../../assets/register.svg'
import InputBox from '../InputBox'
import { useLottie } from "lottie-react";
import loginLoti from '../../assets/login-loty.json'
function Register(){
    const options = {
        animationData: loginLoti,
        loop: true
      };
      const { View } = useLottie(options);

    return(
     <div className=' h-[100vh]'>
        <div className="container mx-auto py-12 lg:w-[70vw]">
         <div className="register flex shadow-xl flex-col items-center justify-around lg:justify-center lg:flex-row">
            <div className="left w-1/2 bg-[#9fe4da] justify-center items-center rounded-l-lg hidden lg:flex lg:h-[80vh]">
                    <img src={registerImage} alt="" className='h-2/3'/>
            </div>
            <div className='w-2/4 lg:hidden'>{View}</div>
            <div className="right rounded-r-lg flex justify-center my-8 lg:w-1/2">
                <div className="form ">
                        <h1 className='text-[30px] font-bold'>Sign up to GetShikSha</h1>
                        <h4 className='my-1 mb-7'>Already a member? <span className='font-bold text-primary-color'>Log in</span></h4>
                        <form className='flex flex-col' action="">
                            <label className=' font-semibold' htmlFor="email">Email</label>
                           <InputBox type="text" placeholder="name@gmail.com"/>
                            <label className='font-semibold' htmlFor="password">Password</label>
                            <InputBox type="password" placeholder="6+ Characters"/>
                        </form>
                        <div className='flex items-center justify-center mb-4'>
                            <span className='font-bold'>OR</span>
                        </div>
                        <button className='p-4 border-1 w-full text-white font-semibold bg-primary-color rounded-xl'>Sign in with Google</button>
                </div>
            </div>
        </div>
       </div>
     </div>
    )
}
export default Register