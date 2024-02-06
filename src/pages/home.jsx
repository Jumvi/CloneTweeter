import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditoir';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Avatar from '../components/Avatar';
import profil from '../images/profile-photo.png';
import UserProfil from '../components/UserProfil';
import { profildata } from '../components/profildata';
import Trends from '../components/trends';
import { useSelector } from 'react-redux';
import  axios  from 'axios';

const serverData = 'http://localhost:3000/tweet';

function Home() {
  const selectTweetInput = useSelector((state)=>state.tweet);
  const [dataTweet,setDataTweet] = useState([])
  
  const userProfil ={
    isName :'judah',
    isPastName:'Mvi',
    isPseudo: '@Jmvi'
  }
 
   useEffect(()=>{
    axios.get(serverData).then((response)=>{
      setDataTweet(response.data.reverse());
    })
   },[])
   
  return (
    <>
    <aside className="left-sidebar bg-black">
      <SideBare />
      <div className='my-title w-22 h-22 flex  ml-16 mt-16'>
        <Avatar src={profil} />
        <div>
          <UserProfil title={userProfil} />         
        </div>
      </div>

    </aside>
    <main className="timeline font-sans border-x border-r border-gray-800 bg-black">
      <Header />
      <TweetEditor /> 
        <Tweets user={dataTweet}/>  
    </main>
    <aside className="right-sidebar bg-black">
      <Trends />
    </aside>
    
    </>
    
  )
}

export default Home;