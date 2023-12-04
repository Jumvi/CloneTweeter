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


function Home() {
  const userProfil ={
    isName :'Judah',
    isPastName:'Mvi',
    isPseudo: '@Jmvi'
  }
  const title =[{
    text: 'je suis l\'auteur de ce tweet de la france à la rdc je suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdcje suis l\'auteur de ce tweet de la france à la rdc',
    src:phoprofil,
    pseudo:'@cnn1',
    author:'CNN',
    verifiedIcon:verified,
    hour:'il ya 1h',
    imgContent:null,
    isCert:false
   },
   {
    text: 'je suis l\'auteur de ce tweet',
    src:phoprofil,
    pseudo:'@cnn1',
    author:'CNN',
    verifiedIcon:verified,
    hour:'il ya 1h',
    imgContent:tweetimage,
    isCert: true
   },
   {
    text: 'je suis l\'auteur de ce tweet',
    src:phoprofil,
    pseudo:'@cnn1',
    author:'CNN',
    verifiedIcon:verified,
    hour:'il ya 1h',
    imgContent:tweetimage,
    isCert:true
   },
   {
    text: 'je suis l\'auteur de ce tweet',
    src:phoprofil,
    pseudo:'@cnn1',
    author:'CNN',
    verifiedIcon:verified,
    hour:'il ya 1h',
    imgContent:tweetimage,
    isCert:false
   }];

   
  
  return (
    <>
    <aside className="left-sidebar">
      <SideBare />
      <div className='my-title'>
        <Avatar src={profil} />
        <div>
          <UserProfil title={userProfil} />
        </div>
      </div>

    </aside>
    <main className="timeline">
      <Header />
      <TweetEditor />
     
      <Tweets user={title}/>
      
      
    </main>

    <aside className="left-sidebar">
      <SideBare />
      

    </aside>
    
    </>
    
  )
}

export default Home;