import React from 'react';
import { Link } from 'react-router-dom';

function UserTitle({data,tweet}) {

    return (
        <div className="tweet-title flex flex-start items-start gap-1 self-center">
            <div className="flex gap-1">
                <Link to={`/profil/${data.id}`}>
                    <h5 className="text-white">{data.name}</h5>
                </Link>
                <span className="text-white">{data.handle}</span>
                {
                    tweet.map((tweet)=>{
                        <div key={tweet.id}>
                            <span className="text-white">{tweet.createdAt}</span>  
                        </div>
                    })
                }  
                {/* Assurez-vous que la propriété `createdAt` est correctement définie dans votre objet `tweet` */}
            </div>
               
            
        </div>
    );
}
export default UserTitle;