import Avatar from "./Avatar";
import cnn from '../images/tweet-profile-photo.png'
import TweetTile from "./TweetTitle";
import verifiedIcon from '../images/Verified.png'
import TweetImage from "./TweetImage";
import AllIcons from "./AllIcons";
import { createContext, useEffect, useState,useSelector } from "react";
import { NavLink,useParams } from "react-router-dom";
import { profildata } from "./profildata";
import { useContext } from "react";
import {useDispatch } from "react-redux";
import { addTweet } from "../feature/tweetSlicer";






function Tweets({user}){
    const [count, setCount]=useState(0);
   let [increment, setIncrement] = useState(0);
   let [openComment,setOpenComment] = useState(false);
   let [myId,setMyId]= useState("");
   const [publication,setPublication] = useState(profildata);
   const dispatch = useDispatch()  ;

    function hundelOpen(){
        setOpenComment(true);
            
    }

    function hundelClose(e){
        e.preventDefault();
        let comment = [];
        comment.push(e.target.value);

        useEffect(()=>{
            setOpenComment(false)
        },[])

    }
    
    function hundleIncrement(){
        setIncrement(increment+1)
    }
    function hundelClick(e){

        // récupération de l'id de la publication qui a été liké
       setMyId(myId=e.target.id);
       const likeTweet = profildata.find((object) => object.id === parseInt(myId));
       dispatch(addTweet(likeTweet))
     
       //incrémentation de la valeur du like de 1
        setCount(count+1)
        if(count==1){
            setCount(count -1)
        }

        // mise à jour de la valeur de likeTweet

        // const {setLikeTweet}=useContext(likeTweetContext);
        // setLikeTweet(likeTweet)

    }

  function clickAvatar(){
    return getId;
  }  
  
  

 
    

      
    return(
        <div className="tweets">
            {user.map((users,key)=> (
                    <div className="tweet" key={key}>
                        <div className="tweet-avatar"> 
                           <NavLink to={`profil/${users.id}`} ><Avatar src={users.src}  id={users.id} avatarClick={clickAvatar} /></NavLink> 
                        </div>
                        <div className="tweet-content">
                            <div className="tweet-title">
                                <TweetTile user={users} />
                            </div>
                            <div className="tweet-text">
                                <p>{users.text}</p>
                            </div>
                            <div className="tweet-image">
                                <img src={users.imgContent} alt="" />
                            </div>
                            <div className="ic">
                                <div>
                                    <p>{count}</p>
                                    <img src={users.like} onClick={hundelClick}  id={users.id} alt="" />
                                </div>
                                <div>
                                    <img src={users.like} alt="" />
                                </div><div>
                                    <img src={users.like} alt="" />
                                </div><div>
                                    <img src={users.like} alt="" />
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
