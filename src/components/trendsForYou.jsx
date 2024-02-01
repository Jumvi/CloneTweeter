import React from 'react';
import { NavLink } from 'react-router-dom';



function TrendsForYou({trend}) {
    return (
        <div className='tfyou'>
           
            {trend.map((trends,key )=>(
               <div className='trends-affichage mb-1 flex justify-between p-1' key={key}>
                    <div>
                        <p className='trend-title'>{trends.title}</p>
                        <h4>{trends.name}</h4>
                        <span>{trends.numberOfTweet}</span>
                    </div>
                    <div>
                        <NavLink to ="/"><h5>...</h5></NavLink>
                        
                    </div>
                   
               </div>
            ))}
        </div>
    );
}

export default TrendsForYou;