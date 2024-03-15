import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getId } from '../feature/tweetSlicer';
import {removeTweet} from "../feature/tweetSlicer";




function TweetAction({icon,counter,id}) {

    const [isLiked,setIsLiked] = useState(true);
    const dispatch = useDispatch();

    function onClick(e){
        id = e.target.id;
        
        if(isLiked && id){
            counter +1;
            setIsLiked(false);
            dispatch(getId(id))
        }else{
            counter -1;
            setIsLiked(true);
            dispatch(removeTweet(id));
        }
    }

    return (
        <div>
            <div className='flex gap-1 text-white'>
                <span className='cursor-pointer' onClick={onClick} id= {id} >{icon}</span>
                <span>{counter}</span>
            </div>   
        </div>
    );
}

export default TweetAction;