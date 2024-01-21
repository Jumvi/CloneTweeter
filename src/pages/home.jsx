import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditoir';
import Tweets from '../components/Tweets';
import tweetimage from '../images/tweet-image.png';
import phoprofil from '../images/tweet-profile-photo.png';
import verified from '../images/Verified.png';
import SideBare from '../components/SideBare';
import Avatar from '../components/Avatar';
import profil from '../images/profile-photo.png';
import UserProfil from '../components/UserProfil';
import { profildata } from '../components/profildata';
import Trends from '../components/trends';
// import { LikeTweetProvider } from '../feature/clickContext';



function Home() {
  const userProfil ={
    isName :'Judah',
    isPastName:'Mvi',
    isPseudo: '@Jmvi'
  }
 
   
  
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
      {/* <LikeTweetProvider> */}
        <Tweets user={profildata}/>  
      {/* </LikeTweetProvider>     */}
    </main>
    <aside className="right-sidebar bg-black">
      <Trends />
    </aside>
    
    </>
    
  )
}

export default Home;