import React from 'react';
import comment from '../images/comment.png';
import retweet from '../images/Retweet.png';
import coeur from '../images/coeur.png';
import share from '../images/Share.png'
import TweetImage from './TweetImage';
import { CiBookmark } from "react-icons/ci";



function TweetcallToActionIcons({onClick,value,click,increment,onOpen,istrue, close}) {
    return (
        <div className='tweet-actions'>
            <button onClick={onOpen} className='my-button'>
                <div className='comment'>
                    <img className='tweet-action' src={comment} alt="comment" />
                    {
                        istrue ?  (
                            <div>
                                <input type="text" placeholder='Entrez votre commentaire' name='comment' />
                                    <button type='submit' onClick={click} >
                                         envoyer
                                     </button> 
                            </div> )
                        : 
                            null
                    }
                    {increment}

                </div>
                <p>comment</p>
            </button>
            <button className='my-button'>
                <img className='tweet-action' src={retweet} alt="retweet" />
                <p>retweet</p>
            </button>
            <button onClick={onClick} className='my-button'>
                <div className='healt'>
                    <img className='tweet-action' src={coeur} alt="healt" />
                    {value}
                </div>
                <p>like</p>
            </button>
            <button className='my-button' >
                <img className='tweet-action' src={share} alt="share" />
                <p>share</p>
            </button>
            <button className='my-button' >
                <CiBookmark color='white' size={40}/>
                <p>BookMaker</p>
            </button>

            
        </div>
    );
}

export default TweetcallToActionIcons;