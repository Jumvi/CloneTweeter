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

const serverData = 'http://localhost:3000/tweet';

function Home() {
  const getId = useSelector((state)=>state.dataId); // récupération de l'Id de la publication liker par le click
  const selectTweetInput = useSelector((state)=>state.tweet);
  const [dataTweet,setDataTweet] = useState([]);

  
  const fetchData = ()=>{ 
    axios.get(serverData).then((response)=>{
      const myData = response.data;
      if (getId ===""){ // ceci permet à éviter une erreur lorsque l'on a pas encore cliquer sur le j'aime d'une application
      setDataTweet([...myData.reverse(),...selectTweetInput]);

      }else{
        //ceci permet  à comparer un id avec celui de la publication liker mais aussi d'increéménter le counter des likes
        const upLoadData = myData.find((tweet)=> tweet.id === getId.payload);
        upLoadData.couter++;
        setDataTweet([...myData.reverse(),...selectTweetInput]);
      }
     
      
    })
  }
  
  const userProfil ={
    isName :'judah',
    isPastName:'Mvi',
    isPseudo: '@Jmvi'
  }
 
   useEffect(()=>{
    fetchData();  // cette fonction permet la syncronisation des post et get afin que celà se passe sans attendre le rechargement de la page.

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
    <main className="timeline font-sans border-x border-y border-gray-800 bg-black ">
      <Header />
      <TweetEditor onFetch={fetchData} /> 
      <Tweets user={dataTweet}/>  
    </main>
    <aside className="right-sidebar bg-black">
      <Trends />
    </aside>
    
    </>
    
  )
}

export default Home;