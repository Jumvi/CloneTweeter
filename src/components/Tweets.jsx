import Avatar from "./Avatar";
import TweetTile from "./TweetTitle";
import {  useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { profildata } from "./profildata";
import {useDispatch } from "react-redux";
import { addTweet } from "../feature/tweetSlicer";
import {incrementValue} from "../feature/tweetSlicer";
import {removeTweet} from "../feature/tweetSlicer";
import { contextCounter } from "../index.jsx";



function Tweets({user}){

    const [isLiked, setIsLiked]= useState(true);
    const { counter, setCounter } = useContext(contextCounter);
    let [myId,setMyId]= useState("");
    const dispatch = useDispatch()  ;

    // function hundelOpen(){
    //     setOpenComment(true);
            
    // }

    // function hundelClose(e){
    //     e.preventDefault();
    //     let comment = [];
    //     comment.push(e.target.value);
    //     useEffect(()=>{
    //         setOpenComment(false)
    //     },[])

    // }

    

    
    function hundelClick(e){
        setMyId(myId=e.target.id);  // récupération de l'id de la publication qui a été liké
        const likeTweet = profildata.find((object) => object.id === parseInt(myId));
        if( isLiked && counter < 1){ //counter < 1 empêche la valeur de counter de s'incrémenter à une valeur supérieur à 1 lors du changement des pages
        setCounter(counter +1)
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
                                    <p>{counter}</p>
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
