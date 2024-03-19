import { Link } from "react-router-dom";

function getTimeSinceTweet(data) {
      const tweetTime =new Date(data) ;
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


  function TweetTile({ data,tweet }) {
    const takeId = tweet.map((tweet)=>tweet.id);

    const takeCreated = tweet.map(tweet => new Date(tweet.createdAt));
    const takeTimeServer =  takeCreated[0];

   const temps = getTimeSinceTweet(takeTimeServer);


    

   

    // Recherche de l'utilisateur avec l'ID 8
    if(!data)return(<div>not found user</div>)
    return (
        <div className="tweet-title flex flex-start items-start gap-1 self-center">
            <div className="flex gap-1">
                <Link to={`/profil/${data.id}`}>
                    <h5 className="text-white">{data.name}</h5>
                </Link>
                <span className="text-white">{data.handle}</span>
                {/* <span className="text-white">{takeCreated}</span>    */}
                {/* Assurez-vous que la propriété `createdAt` est correctement définie dans votre objet `tweet` */}
            </div>
               
            
        </div>
    );
}

export default TweetTile;
