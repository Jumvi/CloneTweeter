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
        <div className='sidebare flex flex-col items-center w-64 '>
         <nav className='navigation flex flex-col items-center'>
            <ul className='my-nave  leading-[3rem]'>
               <li className='list-none hover:list-none text-white border-none'><NavLink to="/">
                     <button className="top-tweets"> <img className='w-6' src={x} alt="icone tweeter" /> </button>
                  </NavLink>
               </li>
               <li className='list-none hover:list-none text-white border-none'><NavLink  className="flex decoration-none " to ="/"> <TbHome2 color='white' /> <h6 >home</h6></NavLink></li>
               <li className='list-none hover:list-none text-white border-none'><NavLink className="flex decoration-none" to ="/explore" color='white'> # Explore</NavLink></li>
               <li className='list-none hover:list-none text-white border-none'><NavLink className="flex decoration-none" to ="/notifications"> <IoIosNotificationsOutline color='white' /> Notifications</NavLink></li>
               <li className='list-none hover:list-none text-white border-none'><NavLink className="flex decoration-none" to ="/message"> <CiMail color='white'/> Message</NavLink></li>
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex decoration-none" to ="/bookmakers"> <CiBookmark color='white' /> Bookmakers</NavLink>
               </li>
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex decoration-none" to ="/lists"> <FaRegListAlt color='white' /> Lists</NavLink>
               </li>
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex decoration-none" to ="/profil"> <FaRegUser color='white' /> Profil</NavLink>
               </li>                
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex decoration-none" to ="/more">   <CiCircleMore color='white' /> More</NavLink> 
               </li>
            </ul>              
         </nav>   
             <div className='side-button  ml-8'>
                <button className='bg-blue-800 w-32 h-8 rounded-2xl' >
                    Tweet
                </button>
             </div>

        </div>
    );
}

export default SideBare;