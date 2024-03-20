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
        <aside className='sidebare flex flex-col items-center w-full '>
         <nav className='navigation flex flex-col items-center'>
            <ul className='my-nave  leading-[3rem] '>
               <li className='list-none hover:list-none text-white border-none'><NavLink to="/">
                     <button className="top-tweets"> <img className='w-6' src={x} alt="icone tweeter" /> </button>
                  </NavLink>
               </li>
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink  className="flex gap-2 decoration-none items-center " to ="/"> 
                    <TbHome2 color='white' />
                    <h6 className='self-auto'>home</h6>
                  </NavLink>
               </li>
               <li className='list-none hover:list-none text-white border-none'><NavLink className="flex gap-2 decoration-none items-center " to ="/explore" color='white'> # Explore</NavLink></li>
               <li className='list-none hover:list-none text-white border-none'><NavLink className="flex gap-2 decoration-none items-center " to ="/notifications"> <IoIosNotificationsOutline color='white' /> Notifications</NavLink></li>
               <li className='list-none hover:list-none text-white border-none'><NavLink className="flex gap-2 decoration-none items-center " to ="/message"> <CiMail color='white'/> Message</NavLink></li>
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex gap-2 decoration-none items-center " to ="/bookmakers"> <CiBookmark color='white' /> Bookmakers</NavLink>
               </li>
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex gap-2 decoration-none items-center " to ="/lists"> <FaRegListAlt color='white' /> Lists</NavLink>
               </li>
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex gap-2 decoration-none items-center " to ="/profilUser"> <FaRegUser color='white' /> Profil</NavLink>
               </li>                
               <li className='list-none hover:list-none text-white border-none'>
                  <NavLink className="flex gap-2 decoration-none items-center " to ="/more">   <CiCircleMore color='white' /> More</NavLink> 
               </li>
            </ul>              
         </nav>   
             <div className='side-button'>
                <button className='bg-blue-800 w-32 h-8 rounded-2xl mt-2' >
                    Tweet
                </button>
             </div>

        </aside>
    );
}

export default SideBare;