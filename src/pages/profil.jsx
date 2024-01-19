import React, { useContext, useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import { profildata } from '../components/profildata';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import UsersProfil from '../components/usersProfil';
import { useParams } from 'react-router-dom';
import { likeTweetContext } from '../feature/clickContext';
import TweetTile from '../components/TweetTitle';


function Profil() {
     const{likeTweet} =useContext(likeTweetContext);
     const tweetListe =[];
     tweetListe.concat(likeTweet);
     tweetListe.sort(putOrderOnTweet);


    const putOrderOnTweet = (a,b)=>{
        return a.timestamp - b.timestamp;
    }
    

     

    return (
        <div className='profil'>
            <SideBare />
            <div className='profil-tweet'>
                <UsersProfil data={data} />
                {
                    tweetListe.map((tweet)=>{
                        <div>
                            <Tweets user={tweet}/>
                        </div>
                        
                    })
                }
            </div>
            
            <Trends />
        </div>
    );
}

export default Profil;