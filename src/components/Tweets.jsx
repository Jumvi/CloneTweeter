import Avatar from "./Avatar";
import TweetTile from "./TweetTitle";
import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addTweet } from "../feature/tweetSlicer";
import {removeTweet} from "../feature/tweetSlicer";
import { contextCounter } from "../index.jsx";
import axios from "axios";
import { getId } from "../feature/tweetSlicer";
import { addArray } from '../feature/tweetSlicer';

const urlApi = 'http://localhost:3000/tweet/';
const apiData = 'http://localhost:3000/tweet';

function Tweets({user,OngetId}){ 

    const [userData, setUserData] = useState();
    let [updatedTweet,setUpdatedTweet] =useState({});
    let [isLiked,setIsLiked] = useState(true);
    const { counter, setCounter } = useContext(contextCounter);
    let [myId,setMyId]= useState("");
    const dispatch = useDispatch();  

    const fetchData = ()=>{ 
        axios.get(apiData).then((response)=>{
          const myData = response.data;
          dispatch(addArray(myData));
        })
      }
 

    useEffect(() => {
        (async ()=>{
            const response = await axios.get(apiData).then((response)=>{
                setUserData(response.data)
            })
       
        })();
       
    }, [])

    function hundelClick(e){
        setMyId(myId=e.target.id); 
         // récupération de l'id de la publication qui a été liké
        let likeTweet = userData.find((object) => object.id === myId);
        dispatch(getId(myId));
        if( likeTweet ){
            if(myId === e.target.id && isLiked && likeTweet.counterLike  <1) {
               setUpdatedTweet( { ...likeTweet, counterLike: likeTweet.counterLike++ }); //création d'un nouvel objet qui permet de modifier la valeur de counterLike directement car cette valeur est imuable dans likeTweet et ne peut être diréctement modifiée
               setIsLiked(false)
               dispatch(addTweet(updatedTweet));
            } else{
                setUpdatedTweet( { ...likeTweet, counterLike: likeTweet.counterLike-- }); 
                setIsLiked(true);
                dispatch(removeTweet(updatedTweet)); //on utilise l'action du reducer pour supprimer un tweet doublement liker dans home
            }

            axios.put(urlApi + myId,updatedTweet).then((response)=>{
                fetchData();
            })  
                .catch((error)=>{
                        console.error('error:',error);
                })    
       
        }
             
    }
  function clickAvatar(){
    return getId;
  } 
  
  
  
    return(
        <div className="tweets w-full border-y border-gray-800 bg-black ">
            {user.map((users,key)=> (
                    <div className="tweet flex  flex-col gap-3 p-8 border-b border-gray-800" key={key}>
                        <div className="tweet-avatar flex gap-1 h-12 w-2/3"> 
                           <Link to={`profil/${users.id}`} >
                                <Avatar src={users.src}  id={users.id} avatarClick={clickAvatar} />
                            </Link>
                            <TweetTile user={users} />
               
                        </div>
                        
                        <div className="tweet-content ">
                            
                            <div className="tweet-text">
                                <p>{users.text}</p>
                            </div>
                            <div className="tweet-image ">
                                <img className="rounded p-4 w-full object-fill" src={users.imgContent} alt="" />
                            </div>
                            <div className="tweet-actions flex flex-start items-start gap-24 p-4">
                                <div>   
                                    <img className="hover:cursor-pointer" src={users.comment}  alt="" />
                                </div>
                                <div>
                                <p>{users.counterLike}</p>
                                    <img  className=" hover:cursor-pointer active:text-red  " src={users.like} onClick={hundelClick}  id={users.id} alt="" />
                                </div><div>
                                    <img className="hover:cursor-pointer" src={users.share} alt="" />
                                </div><div>
                                    <img className="hover:cursor-pointer" src={users.bookmark} alt="" />
                                </div>
                            </div>
                            {/* <AllIcons onClick={hundelClick} value={count} click={hundleIncrement} increment={increment} onOpen={hundelOpen } istrue={openComment} close={hundelClose} />  */}                         
                        </div>                       
                    </div>
            ))}
        </div>
    )
    
     
}

export default Tweets;
