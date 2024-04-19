import React from 'react'
import './Navbar.css'
import logo from './logo.ico';
import SearchBar from './SearchBar/SearchBar';
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
//import { GoogleLogin } from "react-google-login";

import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar({ toggleDrawer}) {
  //const CurrentUser = null;
     const CurrentUser = {
         result: {
          email: "abzxy50312@gmail.com",
         joinedOn: "2222-07-15T09:57:23.489Z",
         },
        };
   return (
    <div className='Container_Navbar'>
      <div className='Burger_Logo_Navbar'>
        <div className='burger' onClick={() => toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>

        <Link to={"/"} className="logo_div_Navbar">
          <img src={logo} alt="" />
          <p className='logo_title_Navbar'>YouTube</p>
          </Link>
    </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
      <div className="Auth_cont_Navbar">
       {CurrentUser ? (
         <>
         <Link to={"/login"} className='Chanel_logo_App'>
          <p className='fstChar_logo_App'>
            {
              CurrentUser?.result.name ?(
                <>
                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                </>
              ) : (
                <>
                {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>

            )}
          </p>

         </Link>
         </>
           ) : (
            <>
            <p className='Auth_Btn'>
            <BiUserCircle size={22} />
                  <b>Sign in</b>
            </p>
            </>
           )}
       </div>
        </div>
         
       );
       
       }

       export default Navbar;



        
  

  


       


     