import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getId } from '../feature/tweetSlicer';
import { removeTweet } from '../feature/tweetSlicer';

function TweetAction({ icon, counter, id }) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();

    function onClick(e) {
        if (!isLiked && id) {
            dispatch(getId(id));
    console.log({id});

            setIsLiked(true);


        } else {
            setIsLiked(false);
            dispatch(removeTweet(id));
        }
    }


    if (isLiked) {
        counter = counter +1 -1;//evite le saut d'incrémentation de 2
    } else {
                                             // permet de gérer le cas au counter = 0
        counter = counter > 0 ? counter - 1 : counter +1;
    }
    
    

    return (
        <div>
            <div className='flex gap-1 text-white' onClick={onClick} id={id}>
                <span className='cursor-pointer'>{icon}</span>
                <span>{counter}</span>
            </div>
        </div>
    );
}

export default TweetAction;
