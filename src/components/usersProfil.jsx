import React from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import Avatar from './Avatar';

function UsersProfil({data}) {
    const {id} =useParams()
    return (
        <div className='Users-profils'>
            {
                {id} == data.id ? (
                    <div>
                        <div className='profil-users'>
                            <Avatar src={data.src} avatarClick={handlAvatar} />
                            <button>Edite profil</button>
                        </div>
                        <div className='auther-certification'>
                            <h4>{data.author}</h4>
                            {
                                data.isCert ? (
                                    <img src={data.verified} alt="certification" />
                                ): 
                                null
                            }
                        </div>
                        <div>
                            <NavLink to="/" >About</NavLink>
                            <NavLink to="/" >Tweets</NavLink>
                            <NavLink to="/" >Other</NavLink>
                            <NavLink to="/" >me</NavLink>
                        </div>
                    </div>
                    
                )
                :
                <p>id nom correspondant</p>
            }
            <div></div>
        </div>
    );
}

export default UsersProfil;