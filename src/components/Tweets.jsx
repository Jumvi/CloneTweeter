import Avatar from "./Avatar";
import TweetTile from "./TweetTitle";
import {  useContext, useEffect, useState } from "react";
import { Await, Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addTweet } from "../feature/tweetSlicer";
import {removeTweet} from "../feature/tweetSlicer";
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
    
    const [serveData,setServerData] = useState([]);
    let [updatedTweet, setUpdatedTweet] = useState({});
    const [isLiked, setIsLiked] = useState(true);
    const { counter, setCounter } = useContext(contextCounter);
    const [myId, setMyId] = useState("");
    const dispatch = useDispatch();
    const valId = useSelector((state) => state.dataId);

    // const fetchData = async() => {
    //    await axios.get(apiData).then((response) => {
    //         const dataUserAndTweet = response.data;
    //     });
    // };

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get(apiData).then((response) => {
    //             const dataUserAndTweet = response.data;
    //             setServerData(dataUserAndTweet);
    //         });
    //     })();
    // }, []);


    function clickAvatar() {
        const tweetId = e.target.id;
         setMyId(tweetId);
         dispatch(getId(myId));
         return myId;
    }



    // function hundelClick(e) {
    //     clickAvatar()
    //     // récupération de l'id de la publication qui a été liké
    //     const likeTweet = serveData.users.find((object) => object.id === myId);

    //     dispatch(getId(myId));

    //     //
        
    //     if (myId === likeTweet.users.id) {
    //         if (isLiked ) {
    //            updatedTweet = {...likeTweet, favoriteCount:likeTweet.twwets.favoriteCount++} // Incrémenter le compteur de likes
    //            dispatch(addTweet(updatedTweet));
    //            setCounter(likeTweet.twwets.favoriteCount++);
    //            setIsLiked(false);
                
    //         } else {
    //             updatedTweet = {...likeTweet, favoriteCount:likeTweet.twwets.favoriteCount--} ,
    //             setCounter(likeTweet.twwets.favoriteCount--);
    //             setIsLiked(true);
    //             dispatch(removeTweet(updatedTweet)); // Supprimer le like
    //         }
    //     }

    //     // Mettre à jour le tweet sur le serveur
    //     axios.put(urlApi + tweetId, likeTweet).then((response) => {
    //         fetchData();    
    //     });
    // }



       
        let mapTweets =[];;
        let mapUsers = [];
        const tweetData = dataTweet;
        let idUser = [] ;
        for (let i = 0; i < dataUserTweet.length; i++) { 
            const user = dataUserTweet.find(user => user.id === i + 1); 
            if (user) {
                idUser.push(user.id);
               const  mapTweet = tweetData.find((tweet)=>tweet.author === user.id) ;
                if( mapTweet){
                    mapTweets.push(mapTweet);
                    mapUsers.push(user);
                } 
               
            }
        }

        console.log({mapTweets,mapUsers});

    if(tweetData){
        

        return (
            <div className="tweets w-full border-y border-gray-800 bg-black ">
                {mapUsers.map((data) => (
                    <div className="tweet flex  flex-col gap-3 p-8 border-b border-gray-800" key={data.id}>
                        <div className="tweet-avatar flex gap-1 h-12 w-2/3">
                            <Link to={`profil/${data.id}`}>
                                <Avatar data={data} avatarClick={clickAvatar} />
                            </Link>
                            <TweetTile data={data} />
                        </div>
                        <div>
                            {mapTweets.map((tweet) => (
                                <div key={tweet.id}>
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
