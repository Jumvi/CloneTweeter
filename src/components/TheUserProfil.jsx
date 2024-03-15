import React, { useContext } from 'react';
import imgProfil from '../images/profile-photo.png';
import AvatarProfil from './AvatarProfil';
import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux';


function TheUserProfil({user}) {
    const contextNumber = useSelector((state)=>state.context);

    return (
        <div>
            <div className='bg-profil'>
                <div className='profilIdentity'>
                    <AvatarProfil src={user.users.profilePicture}/>
                    <button className='user-button1'>Edite profil</button>
                </div>
                
            </div>

            <div className=''>
                        <div className='author-title'>
                            <span>{user.users.name}</span>
                            <span>{user.users.handle}</span>
                        </div>
                        <p>{user.description}</p>
                        <div className='user-follow'>
                            <span>{user.users.followersCount}</span>
                            <span>{user.users.followingCount}</span>
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