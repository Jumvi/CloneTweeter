import React from 'react';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';

function WhoToFollow({fallow}) {
    return (
        <div className='follow'>
            {
                fallow.map((fallows,key)=>(
                    <div className='whoToFallow' key={key}>
                        <div className='layoutFallower'>
                            <div>
                                <Avatar src={fallows.src}/>
                            </div>
                            <div className='otherUser'>
                                <h3>{fallows.titleName}</h3>
                                <span>{fallows.pseudo}</span>
                            </div>
                        </div>
                        <button>
                            <h4>fallow</h4>
                        </button>
                            
                    </div>
                ))
            }   
        </div>
    );
}

export default WhoToFollow;