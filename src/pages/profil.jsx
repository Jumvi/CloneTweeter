import React, {useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import { useSelector } from 'react-redux';
import { profildata } from '../components/profildata';
import TheUserProfil from '../components/TheUserProfil';
import { userData } from '../Data/theUSerData';
import axios from 'axios';

const serverData = 'http://localhost:3000/tweet';
    function Profil() {
        const tweetData = useSelector((state)=>state.tweet.slice());
        const [tweetListe,setTweetList] = useState(tweetData);

        const putOrderOnTweet = (a,b)=>{
            return   -(a.timestamp - b.timestamp);
        }    
    useEffect(()=>{  
        axios.get(serverData).then((response)=>{
            setTweetList(response.data.reverse());
        })
          
    },[tweetListe])
        return (

            <div className='profil flex justify-between'>
                <SideBare />
                <div className='profil-tweet'>
                    <TheUserProfil user={userData}/>
                    <Tweets user={tweetListe}/> 
                </div>
                
                <Trends />
            </div>
        );
    }

    export default Profil;