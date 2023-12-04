import React from 'react';
import { TbHome2 } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import x from '../images/imagetweeter-removebg-preview.png';
import { NavLink } from 'react-router-dom';




function SideBare() {
    return (
        <div className='sidebare'>
         <nav className='navigation'>
            <ul className='my-nave'>
               <li><NavLink to="/">
                     <button className="top-tweets"> <img src={x} alt="icone tweeter" /> </button>
                  </NavLink>
               </li>
               <li><NavLink to ="/"> <TbHome2 color='white' /> home</NavLink></li>
               <li><NavLink to ="/explore" color='white'> # Explore</NavLink></li>
               <li><NavLink to ="/notifications"> <IoIosNotificationsOutline color='white' /> Notifications</NavLink></li>
               <li><NavLink to ="/message"> <CiMail color='white'/> Message</NavLink></li>
               <li>
                  <NavLink to ="/bookmakers"> <CiBookmark color='white' /> Bookmakers</NavLink>
               </li>
               <li>
                  <NavLink to ="/lists"> <FaRegListAlt color='white' /> Lists</NavLink>
               </li>
               <li>
                  <NavLink to ="/profil"> <FaRegUser color='white' /> Profil</NavLink>
               </li>                
               <li>
                  <NavLink to ="/more">   <CiCircleMore color='white' /> More</NavLink> 
               </li>
            </ul>              
         </nav>   
             <div>
                <button className='button'>
                    Tweet
                </button>
             </div>

        </div>
    );
}

export default SideBare;