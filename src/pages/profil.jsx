import React, { useContext, useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import UsersProfil from '../components/usersProfil';
// import { likeTweetContext } from '../feature/clickContext';
// import TweetTile from '../components/TweetTitle';
import { useSelector } from 'react-redux';
import { profildata } from '../components/profildata';
import Avatar from '../components/Avatar';
import AvatarProfil from '../components/AvatarProfil';
import TheUserProfil from '../components/TheUserProfil';
import { userData } from '../Data/theUSerData';




    function Profil() {
        //  const{likeTweet} =useContext(likeTweetContext);
        //  tweetListe.concat(likeTweet);
        const tweetData = useSelector((state)=>state.tweet.slice());
        const [tweetListe,setTweetList] = useState(tweetData);



        const putOrderOnTweet = (a,b)=>{
            return   -(a.timestamp - b.timestamp);
        }
        
    useEffect(()=>{
        setTweetList((prevTweetListe) => prevTweetListe.sort(putOrderOnTweet));
    },[])
        return (

            <div className='profil'>
                <SideBare />
                <div className='profil-tweet'>
                    <TheUserProfil user={userData}/>
                    <Tweets user={tweetListe}/> 
                    <Tweets user={profildata}/> 
                </div>
                
                <Trends />
            </div>
        );
    }

    export default Profil;