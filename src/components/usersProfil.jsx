import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { incrementContext } from '../feature/tweetSlicer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProfilTweet from './profilTweet';
import axios from 'axios';
import TheUserProfil from './TheUserProfil';
import SideBare from './SideBare';
import Trends from './trends';
import TweetTile from './TweetTitle';
import TweetAction from './tweetAction';
import { MdIosShare } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import UserTitle from './userTitle';





function UsersProfil() {
    const  incrementContext = useSelector((state)=>state.context);
    const [userOwner,setUserOwner] = useState({});
    const [userTweet,setUserTweet] = useState([]);


    async function fetchTweetData (){
            try{
                const response = await axios.get(`http://localhost:3000/api/users`)
                setUserOwner(response.data.find((user)=>user.id === 8));
         
            }catch(error){
                console.error(error);
            }
       
       }
      
       async function fetchUsersData (){
        try{
          const response = await axios.get(` http://localhost:3000/api/tweet`);
          setUserTweet(response.data);
        }catch(error){
          console.error(error);
        }
       
       }

       useEffect(()=>{
        const fectData = async()=>{
            await fetchTweetData();
            await fetchUsersData()
        }

        fectData()
       },[])

       
       const filterTweet = userTweet.filter((tweet)=>tweet.author === userOwner.id);
       const tweet = filterTweet.reverse()


    return (
        <div className='flex w-full'>
                <aside className='w-80 '>
                    <SideBare />
                </aside>
                <main className='timeline font-sans border-x border-y border-gray-800 bg-black w-2/3 '>
                  <TheUserProfil user={userOwner}/> 
                  {tweet.map((tweet) => (
                    <div key={tweet.id} className=' border-y border-gray-800 p-2'>
                        <div className="tweet-avatar flex gap-1 h-12 ">
                            <Avatar data={userOwner} />
                            <UserTitle data={userOwner} tweet={filterTweet}/>
                        </div>
                        <div className="tweet-text">
                            <p>{tweet.text}</p>
                        </div>
                        <div className="w-full">
                            {tweet.media ? <img className="rounded p-4 w-[35rem] h-96 object-fill" src={tweet.media} alt="image du tweet" /> : ""}
                        </div>
                        <div className="tweet-actions flex flex-start items-start gap-24 p-4">
                            <TweetAction icon={<BiMessageRounded />} counter={tweet.repliesCount} id={tweet.id} />
                            <TweetAction icon={<FaRetweet />} counter={tweet.retweetCount} id={tweet.id} />
                            <TweetAction icon={<MdOutlineFavoriteBorder />} counter={tweet.favoriteCount} id={tweet.id} />
                            <TweetAction icon={<MdIosShare />} counter={tweet.repliesCount} id={tweet.id} />
                        </div>
                       
                    </div>
                  ))}
                </main>
                <aside className='w-80'>
                    <Trends />
                </aside>
            </div>
    );
}

export default UsersProfil;
