import React, {useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import { useSelector } from 'react-redux';
import TheUserProfil from '../components/TheUserProfil';
import { userData } from '../Data/theUSerData';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProfilTweet from '../components/profilTweet';

const serverTweetData = 'http://localhost:3000/api/tweet';
const serverUsersData = 'http://localhost:3000/api/users';

    function Profil() {
        const dataId = useSelector((state)=>state.dataId);
        const [tweetListe,setTweetList] = useState([]);
        const [fetchDataUser,setFetchDataUser] =useState([]);
        const [allUser,setAllUser] = useState([]);
        const [getId,setGetId] = useState(dataId);
        const {userId} = useParams();


console.log({getId});

        

        async function fetchTweetData (){
            try{
              const response = await axios.get(`http://localhost:3000/api/tweet/userId/${userId}`)
              setTweetList(response.data);
             
            }catch(error){
              console.error(error);
            }
            
           }
          
           async function fetchUsersData (){
            try{
              const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
              setFetchDataUser(response.data);
            }catch(error){
              console.error(error);
            }
           
           }

           //fetcher les données des tous les users qui vont être affiché lorsque l'utilisateur like un tweet

           async function fetchAllUsersData (){
            try{
              const response = await axios.get(`http://localhost:3000/api/users`);
              setAllUser(response.data);
            }catch(error){
              console.error(error);
            }
           
           }
           
              // cette fonction permet la syncronisation des post et get afin que celà se passe sans attendre le rechargement de la page.
          
           const fectData = async()=>{
            try{
             await fetchTweetData();
             await fetchUsersData();
             await fetchAllUsersData();
            }catch(error){
              console.error("Erreur", error);
            }
           }
             useEffect(()=>{
               
             fectData();
             },[userId])


           const tweetData = tweetListe.find((tweet)=> tweet.author == dataId);



           const tweetAutor = tweetListe.map((tweet) =>tweet.author);

           const userTweet = allUser.filter(user => tweetListe.some(tweet => tweet.author === user.id));

          const userArray = [];
          const tweetArray = [];
          if(userTweet){ 
            userArray.push(userTweet);
            for(let i =0;i<tweetListe.length +1; i++){
              const tweet = tweetListe.filter(tweet =>tweet.author === userTweet.id );
              if (tweet) {
                  tweetArray.push(userTweet);
              }
            }

          } else{
            userArray.push(fetchDataUser)
          };
        

    // if(tweetData){
    //     setTweetList([tweetData,...tweetListe])
    //     takeData()

    // }


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
                  <TheUserProfil user={fetchDataUser}/> 
                  {userArray.map((user,keys) => (
                    
                    <div key={keys}>
                     <ProfilTweet users={user} tweets={tweetListe}/>
                       
                    </div>
                  ))}
                </main>
                <aside className='w-1/3 p-1'>
                    <Trends />
                </aside>
            </div>
        );
    }

    export default Profil;