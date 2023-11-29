import React from 'react';
import comment from '../images/comment.png';
import retweet from '../images/Retweet.png';
import coeur from '../images/coeur.png';
import share from '../images/Share.png'
import TweetImage from './TweetImage';

function AllIcons({onClick,value}) {
    return (
        <div className='tweet-actions'>
<button onClick={onClick}><img className='tweet-action' src={comment} alt="comment" />{value}</button>
<button onClick={onClick}><img className='tweet-action' src={retweet} alt="retweet" />{value}</button>
<button onClick={onClick}><img className='tweet-action' src={coeur} alt="healt" />{value}</button>
<button onClick={onClick}><img className='tweet-action' src={share} alt="share" />{value}</button>
            
        </div>
    );
}

export default AllIcons;