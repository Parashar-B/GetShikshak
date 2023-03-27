import '../NavComponent/NavComponent.css'
function NavComponent(){
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <img className="logoImg" src="" alt="" />
                <span className="logoName">Logo</span>
            </div>
            <ul className="links">
                    <li>Find Tutor</li>
                    <li>Become a Tutor</li>
                    <li>Sign up</li>
                    <li>Log In</li>
            </ul>
        </div>
        
        </>
    )
}

export default NavComponent