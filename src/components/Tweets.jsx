import Avatar from "./Avatar";
import cnn from '../images/tweet-profile-photo.png'
import TweetTile from "./TweetTitle";
import verifiedIcon from '../images/Verified.png'
import TweetImage from "./TweetImage";
import AllIcons from "./AllIcons";
import { useState } from "react";



function Tweets({user}){
    const [count, setCount]=useState(0);
    function hundelClick(){
        setCount(count+1)
    }

      
    return(
        <div className="tweets">
            {user.map((users,key)=> (
                    <div className="tweet" key={key}>
                        <div className="tweet-avatar"> 
                            <Avatar src={users.src} />
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
                            <AllIcons onClick={hundelClick} value={count}  /> 
                            
                                
                        </div>
                        
                        
                    </div>
            ))}
        </div>
    )
    
     
}

export default Tweets;