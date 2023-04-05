import {Link} from 'react-router-dom'
function NavComponent(){
    return(
        <>
                    <div className="bg-[#319D8E] text-white">
                <div className="container mx-auto w-4/5">
                    <div className="nav flex justify-between h-16 items-center">
                        <div className=" w-1/2 logo">
                            <img className="logoImg" src="" alt="" />
                            <span className="logoName">Logo</span>
                        </div>
                        <div className="hamburger">
                            
                        </div>
                        <ul className="w-1/2 flex justify-between ">
                            <li>About Us</li>
                            <li>Find Tutor</li>
                            <li>Become a Tutor</li>
                            <li><Link to="/login">Log In</Link></li>
                            <li><Link to="/register" className='font-semibold px-4 py-2 bg-white text-[#009193] rounded-full'>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavComponent