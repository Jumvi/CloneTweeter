import React, { useRef } from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import Avatar from './Avatar';
import Tweets from './Tweets';
import { profildata } from './profildata';



function UsersProfil({data}) {
    return (
        <div className='Users-profils'>
            
                <div>
                    <div className='profil-users'>
                        <div className='user-layout'>
                            <Avatar id={data.id} src={data.src} />
                            <button className='user-button1'>Edite profil</button>
                        </div>
                        
                    </div>
                    <div className='auther-certification'>
                        <h4>{data.author}</h4>
                            {
                                data.isCert ? (
                                    <img src={data.verifiedIcon} alt="certification" />
                                ): 
                                null
                            }
                        <span>{data.pseudo}</span>
                        <p>{data.description}</p>
                        <div className='user-follow'>
                            <span>{data.following}</span>
                            <span>{data.follower}</span>
                        </div>
                       
                    </div>
                        <div className='user-navigation'>
                            <NavLink to="/" >About</NavLink>
                            <NavLink to="/" >Tweets</NavLink>
                            <NavLink to="/" >Other</NavLink>
                            <NavLink to="/" >me</NavLink>
                        </div>
                    </div>
                    
               
            
            <div>
                {/* <Tweets user={profildata} /> */}
            </div>
        </div>
    );
}

export default UsersProfil;
