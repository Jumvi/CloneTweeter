import React, {useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import { useSelector } from 'react-redux';
import TheUserProfil from '../components/TheUserProfil';
import { userData } from '../Data/theUSerData';
import axios from 'axios';

const serverData = 'http://localhost:3000/api/tweet';
    function Profil() {
        const dataId = useSelector((state)=>state.dataId.slice());
        const [tweetListe,setTweetList] = useState([]);
        const [fetchData,setFetchData] =useState([1]);

        

    useEffect(()=>{  
        axios.get(serverData).then((response)=>{
            setFetchData([response.data]);
            // updateData(fetchData)
        })      
    },[])

    const tweetProfil = "";

    // useEffect(()=>{
    //     const updateData = (data)=>{
    //         axios.put(serverData,data).then((response)=>{
    //         })
    //     }
    // },[fetchData])
        return (
            <div className='flex w-full'>
                <aside className='w-1/3'>
                    <SideBare />
                </aside>
                <main className='timeline font-sans border-x border-y border-gray-800 bg-black w-2/3 '>
                    <TheUserProfil user={userData}/>
                    <Tweets user={fetchData}/> 
                </main>
                <aside className='w-1/3 p-1'>
                    <Trends />
                </aside>
            </div>
        );
    }

    export default Profil;