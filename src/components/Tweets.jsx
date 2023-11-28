import Avatar from "./Avatar";
import cnn from '../images/tweet-profile-photo.png'
import TweetTile from "./TweetTitle";
import verifiedIcon from '../images/Verified.png'
import TweetImage from "./TweetImage";
import AllIcons from "./AllIcons";



function Tweets({user}){

    

           

    return(
        // <div className="tweet">
        //     {/* <Avatar src={user.src} />
        //     <div className="tweet-content">
        //         <div className="tweet-body">
        //             <TweetTile author={user.author} pseudo={user.pseudo} src={user.verifiedIcon} hour={user.hour} />
        //             <div className="tweet-text">
        //                 <p>
        //                     {user.textContent}
        //                 </p>
        //                 <img className="tweet-image" src={user.imgContent} alt="photo du tweet" />

        //             </div>
        //         </div> */}
               
        //        <AllIcons />
        //     {/* </div> */}
        // </div>

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
                            <AllIcons /> 
                            
                                
                        </div>
                        
                        
                    </div>
            ))}
        </div>
    )
    
     
}

export default Tweets;