import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditoir';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Avatar from '../components/Avatar';
import profil from '../images/profile-photo.png';
import UserProfil from '../components/UserProfil';
import Trends from '../components/trends';
import { useSelector } from 'react-redux';
import  axios  from 'axios';
import { addArray } from '../feature/tweetSlicer';
import { useDispatch } from 'react-redux';


const serverData = 'http://localhost:3000/tweet';

function Home() {
  const arrayData = useSelector((state)=>state.tweetArray);
  const dispatch = useDispatch();
    
  const fetchData = ()=>{ 
    axios.get(serverData).then((response)=>{
      const myData = response.data;
      dispatch(addArray(myData));
    })
  }
  
  const userProfil ={
    isName :'judah',
    isPastName:'Mvi',
    isPseudo: '@Jmvi'
  }
 
   useEffect(()=>{
    // cette fonction permet la syncronisation des post et get afin que celà se passe sans attendre le rechargement de la page.
    fetchData();
   },[])
   
  return (
    <main className='flex justify-between w-full'>
      <aside className="left-sidebar bg-black">
        <SideBare />
          <div className='my-title w-22 h-22 flex  ml-16 mt-16'>
            <Avatar src={profil} />
            <div>
              <UserProfil title={userProfil} />         
            </div>
          </div>

      </aside>
      <main className="timeline font-sans border-x border-y border-gray-800 bg-black w-2/3 ">
        <Header />
        <TweetEditor onFetch={fetchData} /> 
        <Tweets user={arrayData}/>  
      </main>
      <aside className="right-sidebar bg-black">
        <Trends />
      </aside>
    
    </main>
    
  )
}

export default Home;