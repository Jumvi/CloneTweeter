



function TweetTile({user}){
    return(
        <div className="tweet-title">
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
                <span >{user.pseudo}</span><span >.</span><span  >{user.hour}</span>
            </div>   
           
            

        </div>
    )
             
}

export default TweetTile;