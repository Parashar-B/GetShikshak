import { Link } from "react-router-dom";
import "./style.css";
function NavComponent() {
  return (
    <>
      <div className="nav flex justify-around items-center bg-primary-color text-white h-16">

        <div className=" logo">
          <img className="logoImg" src="" alt="" />
          <span className="logoName tracking-wider">
            <Link to="/">GETSHIKSHAK</Link>
          </span>
        </div>

        {/* <div className="hamburger">

        </div> */}

        <div className=" w-1/4">
          <ul className="flex flex-row justify-around">
            <li><a href="#about-section">About Us</a></li>
            <li><link to="/dashboard">Find Tutor</link></li>
            <li>Become a Tutor</li>
          </ul>
        </div>

        <div className=" w-[10rem]">
          <ul className="flex flex-row justify-around">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link
                to="/register"
                className="font-semibold px-4 py-2 bg-white text-[#009193] rounded-xl"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default NavComponent;
