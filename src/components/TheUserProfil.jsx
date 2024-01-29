import React, { useContext } from 'react';
import imgProfil from '../images/profile-photo.png';
import AvatarProfil from './AvatarProfil';
import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux';


function TheUserProfil({user}) {
    const contextNumber = useSelector((state)=>state.context);
    console.log(contextNumber )

    return (
        <div>
            <div className='bg-profil'>
                <div className='profilIdentity'>
                    <AvatarProfil src={imgProfil}/>
                    <button className='user-button1'>Edite profil</button>
                </div>
                
            </div>

            <div className='auther-certification'>
                        <div className='author-title'>
                            <h4>{user.author}</h4>
                            {
                                user.isCert ? (
                                    <img src={user.verifiedIcon} alt="certification" />
                                ): 
                                null
                            }
                            <span>{user.pseudo}</span>
                        </div>
                        <p>{user.description}</p>
                        <div className='user-follow'>
                            <span>{user.following}</span>
                            <span>{user.follower}</span>
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