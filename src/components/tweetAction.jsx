import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getId } from '../feature/tweetSlicer';
import { removeTweet } from '../feature/tweetSlicer';

function TweetAction({ icon, counter, id }) {
    const [isLiked, setIsLiked] = useState(true);
    const dispatch = useDispatch();

    function onClick(e) {
        if (isLiked && id) {
            setIsLiked(false);
            dispatch(getId(id));
            console.log('jai cliqué', isLiked,{id});

        } else {
            setIsLiked(true);
            dispatch(removeTweet(id));
            console.log('je click encore', isLiked);
        }
    }

    isLiked? counter = counter +1 -1 : counter  = counter-1;

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
