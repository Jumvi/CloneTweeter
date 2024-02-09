import React, {useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import { useSelector } from 'react-redux';
import TheUserProfil from '../components/TheUserProfil';
import { userData } from '../Data/theUSerData';
import axios from 'axios';

const serverData = 'http://localhost:3000/tweet';
    function Profil() {
        const tweetData = useSelector((state)=>state.tweet.slice());
        const [tweetListe,setTweetList] = useState(tweetData);
        const [fetchData,setFetchData] =useState([]);
           
    useEffect(()=>{  
        axios.get(serverData).then((response)=>{
            setFetchData([...tweetListe,...response.data.reverse()]);
        })
          
    },[tweetListe])

    console.log(tweetListe);
        return (

            <div className='profil flex justify-between'>
                <SideBare />
                <div className='profil-tweet'>
                    <TheUserProfil user={userData}/>
                    <Tweets user={fetchData}/> 
                </div>
                
                <Trends />
            </div>
        );
    }

    export default Profil;