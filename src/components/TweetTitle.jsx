
function getTimeSinceTweet(tweetTime) {
    const now = new Date();
    const difference = now - tweetTime;

    // Conversion en millisecondes
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    // Détermination du texte à afficher
    let timeAgo;
    if (seconds < 60) {
      timeAgo = `now`;
    } else if (minutes < 60) {
      timeAgo = `${minutes} min ago`;
    } else if (hours < 24) {
      timeAgo = `${hours} h ago`;
    } else if (days < 7) {
      timeAgo = `${days} j ago`;
    } else {
      timeAgo;
    }
  
    return timeAgo;
  }


function TweetTile({user}){
const tweetTime = getTimeSinceTweet(user.hour);

    return(
        <div className="tweet-title flex flex-start items-start gap-1 self-center">
            <div className="tweet-title-author">
                <h5>{user.author}</h5>                        
            </div>
            <div>
                {
                    user.isCert ?(
                        <img src={ user.verifiedIcon} alt="icon de virification" />     
                    )
                            :
                    null
                }
            
               
                
            </div>
            
            <div className="tweet-title-details">
                <span >{user.pseudo}</span><span >.</span><span  >{tweetTime}</span>
            </div>   
           
            

        </div>
    )
             
}

export default TweetTile;