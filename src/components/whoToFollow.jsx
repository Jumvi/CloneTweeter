import React from 'react';
import Avatar from './Avatar';

function WhoToFollow({ fallow }) {
  return (
    <div className='follow'>
      {
        fallow.map((fallows, key) => (
          <div className='whoToFallow' key={key}>
            <div className='layoutFallower'>
              <div className='fallow-button'>
                <Avatar src={fallows.src} />
              </div>
              <div className='otherUser'>
                <h3>{fallows.titleName}</h3>
                <span>{fallows.pseudo}</span>
              </div>
            </div>
            <button className='follow-me'>
              <h4>fallow</h4>
            </button>

          </div>
        ))
      }
    </div>
  );
}

export default WhoToFollow;