import React, { useContext, useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import { profildata } from '../components/profildata';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import UsersProfil from '../components/usersProfil';
import { useParams } from 'react-router-dom';
// import { likeTweetContext } from '../feature/clickContext';
// import TweetTile from '../components/TweetTitle';
import { useSelector } from 'react-redux';
import TweetTile from '../components/TweetTitle';


function Profil() {
    //  const{likeTweet} =useContext(likeTweetContext);
    //  tweetListe.concat(likeTweet);
    const tweetData = useSelector((state)=>state.tweet);
     const [tweetListe,setTweetList] = useState(tweetData);



    const putOrderOnTweet = (a,b)=>{
        return a.timestamp - b.timestamp;
    }
    
useEffect(()=>{
    setTweetList(tweetData);
    console.log(tweetListe)
},[])

     

    return (

        <div className='profil'>
            <SideBare />
            <div className='profil-tweet'>
                <Tweets user={tweetListe}/>
            </div>
            
            <Trends />
        </div>
    );
}

export default Profil;