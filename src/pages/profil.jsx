import React, {useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import { useSelector } from 'react-redux';
import { profildata } from '../components/profildata';
import TheUserProfil from '../components/TheUserProfil';
import { userData } from '../Data/theUSerData';


    function Profil() {
        const tweetData = useSelector((state)=>state.tweet.slice());
        const [tweetListe,setTweetList] = useState(tweetData);

        const putOrderOnTweet = (a,b)=>{
            return   -(a.timestamp - b.timestamp);
        }    
    useEffect(()=>{  
        setTweetList((prevTweetListe) => prevTweetListe.sort(putOrderOnTweet));    
    },[tweetListe])
        return (

            <div className='profil flex justify-between'>
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