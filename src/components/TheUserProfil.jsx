import React, { useContext } from 'react';
import imgProfil from '../images/profile-photo.png';
import AvatarProfil from './AvatarProfil';
import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux';


function TheUserProfil({user}) {
    const contextNumber = useSelector((state)=>state.context);

    


    return (
        <div>
            <div className=''>
            <div className=" flex justify-between bg-gray-800 text-white p-8" style={{ backgroundImage: `url(${user.profileBackground})` }}>
                    <AvatarProfil src={user.profilePicture}/>
                    <button className='user-button1 self-end'>Edite profil</button>
                </div>
                
            </div>

            <div className='p-1'>
                        <div className='flex gap-1'>
                            <span>{user.name}</span>
                            <span>{user.handle}</span>
                        </div>
                        <div>
                            <span>{user.location}</span>
                            <p>{user.website}</p>
                            <p>{user.createdAt}</p>
                            <p>{user.bio}</p>
                        </div>
                        <div className='flex gap-4'>
                            <span>fallowers {user.followersCount}</span>
                            <span>fallowing {user.followingCount}</span>
                            
                        </div>
                       
            </div>
                        <div className='user-navigation'>
                            <NavLink to="/" >About</NavLink>
                            <NavLink to="/" >Tweets{contextNumber}</NavLink>
                            <NavLink to="/" >Other</NavLink>
                            <NavLink to="/" >me</NavLink>
                        </div>
        </div>
        
        
    );
}

export default TheUserProfil;