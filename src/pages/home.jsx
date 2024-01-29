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




function Home() {
  const selectTweetInput = useSelector((state)=>state.tweet);
  const [dataTweet,setDataTweet] = useState(profildata)
  
  const userProfil ={
    isName :'Judah',
    isPastName:'Mvi',
    isPseudo: '@Jmvi'
  }
 
   useEffect(()=>{
    setDataTweet([...selectTweetInput, ...profildata]);
   },[selectTweetInput])
   
  return (
    <>
    <aside className="left-sidebar bg-black">
      <SideBare />
      <div className='my-title w-22 h-22'>
        <Avatar src={profil} />
        <div>
          <UserProfil title={userProfil} />         
        </div>
      </div>

    </aside>
    <main className="timeline bg-black">
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