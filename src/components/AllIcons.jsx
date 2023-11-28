import React from 'react';
import comment from '../images/comment.png';
import retweet from '../images/Retweet.png';
import coeur from '../images/coeur.png';
import share from '../images/Share.png'

function AllIcons() {
    return (
        <div className='tweet-actions'>
            <img className='tweet-action' src={comment} alt="comment" />
            <img className='tweet-action' src={retweet} alt="retweet" />
            <img className='tweet-action' src={coeur} alt="healt" />
            <img className='tweet-action' src={share} alt="share" />
            
        </div>
    );
}

export default AllIcons;