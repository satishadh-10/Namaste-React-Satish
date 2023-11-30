import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

   const [btnNameReact,setBtnNameReact] = useState("Login")
   const onlineStatus = useOnlineStatus();

    return (
    <div className=" h-55 flex justify-between bg-pink-200 ">
 
    <div className="logo-container">
       <img className="w-32 " src={LOGO_URL}></img>
    </div>
 
      
    <div className="flex items-center">
       <ul className="flex p-4 m-4">
         <li className=" px-4 font-bold">
             Online Status: {onlineStatus ? "🟢" : "🔴"}
         </li>
          <li className=" px-4 font-bold hover:font-extrabold">
            <Link to="/">
            Home
            </Link>
         </li>
          <li className=" px-4 font-bold hover:font-extrabold">
            <Link to= "/about">
            About Us
            </Link>
         </li>
          <li className=" px-4 font-bold hover:font-extrabold">
            <Link to= "/contact">
            Contact Us
            </Link>
         </li>
          <li className=" px-4 font-bold hover:font-extrabold">
            <Link to= "/grocery">
            Grocery
            </Link>
         </li>
          <li className=" px-4 font-bold hover:font-extrabold">Cart</li>
          <button className="log-btn font-bold hover:font-extrabold px-4" onClick={() => {
            btnNameReact === "Login" 
            ? setBtnNameReact("Logout") 
            : setBtnNameReact("Login")
          }}>
            {btnNameReact}
            </button>
       </ul>
    </div>
 
    </div>
    )
 }

 export default Header;