import Avatar from "./Avatar";
import TweetTile from "./TweetTitle";
import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { contextCounter } from "../index.jsx";
import axios from "axios";
import { getId } from "../feature/tweetSlicer";
import { addArray } from '../feature/tweetSlicer';
import { MdIosShare } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import TweetAction from "./tweetAction.jsx";


const urlApi = 'http://localhost:3000/api/tweet/';
const apiData = 'http://localhost:3000/api/tweet';



function Tweets({dataUserTweet , dataTweet}) {
    const { counter, setCounter } = useContext(contextCounter);
    const [myId, setMyId] = useState("");
    const dispatch = useDispatch();
    const valId = useSelector((state) => state.dataId);

    

    

    function clickAvatar(e) {
        const tweetId = e.target.id;
         setMyId(tweetId);
         dispatch(getId(myId));
         return myId;
    }
       
        let mapTweets =[];;
        let mapUsers = [];
        const tweetData = dataTweet;
        let idUser = [] ;
        for (let i = 0; i < dataUserTweet.length; i++) { 
            const user = dataUserTweet.find(user => user.id === i + 1);
            if (user.id <=8) {
                idUser.push(user.id);
               const  mapTweet = tweetData.find((tweet)=>tweet.author === user.id) ;
                if( mapTweet){
                    mapTweets.push(mapTweet);
                    mapUsers.push(user);
                } 
               
            }
        }
        // afin de n'afficher qu'un seul tweet pour chaque user, on crée un objet qui stoke les tweet par auteur 
        const tweetsByUser = {};
        for (const tweet of mapTweets) {
            // Si l'utilisateur n'a pas encore de tweet, on l'ajoute dans l'objet avec un utilisateur
            if (!tweetsByUser[tweet.author]) {
                tweetsByUser[tweet.author] = tweet;
            }
        }

        
    if(tweetData){
        return (
            <div className="tweets w-full border-y border-gray-800 bg-black ">
                {mapUsers.map((data) => (
                    <div className="tweet flex  flex-col gap-3 p-8 border-b border-gray-800" key={data.id}>
                        <div className="tweet-avatar flex gap-1 h-12 w-2/3">
                            <Link to={`profil/${data.id}`}>
                                <Avatar data={data} avatarClick={clickAvatar} />
                            </Link>
                            {tweetData? <TweetTile data={data} tweet={tweetData}/> :<TweetTile data={data} />}
                        </div>
                        <div>
                            {tweetsByUser[data.id] && (
                                <div>
                                    <div className="tweet-text">
                                        <p>{tweetsByUser[data.id].text}</p>
                                    </div>
                                    <div className="w-full">
                                        {tweetsByUser[data.id].media && (
                                            <img className="rounded p-4 w-[35rem] h-96 object-fill" src={tweetsByUser[data.id].media} alt="image du tweet" />
                                        )}
                                    </div>
                                    <div className="tweet-actions flex flex-start items-start gap-24 p-4">
                                        <TweetAction icon={<BiMessageRounded />} counter={tweetsByUser[data.id].repliesCount} id={tweetsByUser[data.id].id} />
                                        <TweetAction icon={<FaRetweet />} counter={tweetsByUser[data.id].retweetCount} id={tweetsByUser[data.id].id} />
                                        <TweetAction icon={<MdOutlineFavoriteBorder />} counter={tweetsByUser[data.id].favoriteCount} id={tweetsByUser[data.id].id} />
                                        <TweetAction icon={<MdIosShare />} counter={tweetsByUser[data.id].repliesCount} id={tweetsByUser[data.id].id} />
                                    </div>
                                </div>
                            )}
    
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div>Not found</div>
        )
    }
   
}

export default Tweets;
