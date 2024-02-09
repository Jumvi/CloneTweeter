import Avatar from "./Avatar";
import TweetTile from "./TweetTitle";
import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profildata } from "./profildata";
import {useDispatch} from "react-redux";
import { addTweet } from "../feature/tweetSlicer";
import {incrementValue} from "../feature/tweetSlicer";
import {removeTweet} from "../feature/tweetSlicer";
import { contextCounter } from "../index.jsx";
import axios from "axios";
import { getId } from "../feature/tweetSlicer";

const apiData = 'http://localhost:3000/tweet/';

function Tweets({user,OngetId}){ 

    const [userData, setUserData] = useState();
    const [isLiked, setIsLiked]= useState(true);
    const { counter, setCounter } = useContext(contextCounter);
    let [myId,setMyId]= useState("");
    const dispatch = useDispatch();  
 
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
        const likeTweet = userData.find((object) => object.id === myId);
        console.log(myId)
        dispatch(getId(myId));
        if( isLiked && counter < 1){ //counter < 1 empêche la valeur de counter de s'incrémenter à une valeur supérieur à 1 lors du changement des pages
            if(myId === e.target.id) {
                // setCounter(counter +1);
                console.log(` moi ${likeTweet}`, likeTweet  );
            }else{
                return false;
            }
        
        dispatch(addTweet(likeTweet));
        
        //incrémentation de la valeur du like de 1
       dispatch(incrementValue());
       setIsLiked(false )
       
        }else{
            dispatch(removeTweet(likeTweet)); //on utilise l'action du reducer pour supprimer un tweet doublement liker dans home
            setCounter(counter -1);
            setIsLiked(true) //remet la valeur de isLiked à true afin d'éviter une exécution infinie du else
        }      
    }
  function clickAvatar(){
    return getId;
  } 
  
  
  
    return(
        <div className="tweets w-full border-y border-gray-800 bg-black ">
            {user.reverse().map((users,key)=> (
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
                                <p>{users.couter}</p>
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
