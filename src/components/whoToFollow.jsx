import React from 'react';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';

function WhoToFollow({fallow}) {
    return (
        <div className='follow'>
            {
                fallow.map((fallows,key)=>(
                    <div className='whoToFallow flex justify-between' key={key}>
                        <div className='layoutFallower flex gap-1'>
                            <div className='fallow-button rounded-2xl w-8 h-8 border-none '>
                                <Avatar src={fallows.src}/>
                            </div>
                            <div className='otherUser '>
                                <h3>{fallows.titleName}</h3>
                                <span>{fallows.pseudo}</span>
                            </div>
                        </div>
                        <button className='follow-me rounded-2xl pointer'>
                            <h4>fallow</h4>
                        </button>
                            
                    </div>
                ))
            }   
        </div>
    );
}

export default WhoToFollow;