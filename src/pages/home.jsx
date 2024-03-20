import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditoir';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Avatar from '../components/Avatar';
import profil from '../images/profile-photo.png';
import Trends from '../components/trends';
import  axios  from 'axios';
import { addTweet } from '../feature/tweetSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { Await } from 'react-router-dom';


const urlTweetsData = 'http://localhost:3000/api/tweet';
const urlUsersData = 'http://localhost:3000/api/users';




function Home() {
  const idLikeData = useSelector((state)=>state.dataId);
  const [profilData,setProfilData] = useState([]);
  const dispatch = useDispatch();
  const [tweetData,setTweetData]=useState([]);
  const [usersData,setUsersData]=useState([]);
    
 
  


 async function fetchTweetData (){
  try{
    const response = await axios.get(urlTweetsData)
    const tweet = response.data
    setTweetData(response.data)
   
  }catch(error){
    console.error(error);
  }
  
 }

 async function fetchUsersData (){
  try{
    const response = await axios.get(urlUsersData);
    const user = response.data;
    setUsersData(response.data);
  }catch(error){
    console.error(error);
  }
 
 }
 
    // cette fonction permet la syncronisation des post et get afin que celà se passe sans attendre le rechargement de la page.

 const fectData = async()=>{
  try{
   await fetchTweetData();
   await fetchUsersData();
  }catch(error){
    console.error("Erreur", error);
  }
 }
   useEffect(()=>{
     
   fectData();
   },[])

   
const combineObject = {
  users:usersData,
  tweets:tweetData
}
const combineData = [];

combineData.push(combineObject);

// les données de l'utilisateur propriétaire du compte
const ownerUser = usersData.find((data)=>data.id === 8);


// stockage de la liste des tweets likées dans un tableau afin de les envoyés au composant profil du owner
useEffect(()=>{
  const tweetLike = tweetData.find((tweet)=>tweet.id === idLikeData.payload);
  setProfilData([tweetLike,...profilData]);
  dispatch(addTweet(profilData));
},[idLikeData])

   
 if(!combineData) return <div>chargement</div>
else
  return (
    <main className='flex justify-between w-full '>
       <aside className="left-sidebar bg-black w-1/3">
        <SideBare />
          <div className='my-title  h-22 flex  ml-16 mt-16'>
            <Avatar src={profil} />
            <div>
             {/* {serverData&& <UserProfil title={userProfil} />   }       */}
            </div>
          </div>

      </aside>
      <main className="timeline font-sans border-x border-y border-gray-800 bg-black w-2/3 ">
        <Header />
        <TweetEditor onFetch={fectData} user={ownerUser} /> 
       {combineData&& <Tweets dataUserTweet={usersData} dataTweet={tweetData}/>}  
      </main>
      <aside className="right-sidebar bg-black w-1/3">
        <Trends />
      </aside>
     
    </main>
    
  )
}

export default Home;