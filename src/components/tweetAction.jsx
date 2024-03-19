import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getId } from '../feature/tweetSlicer';
import { removeTweet } from '../feature/tweetSlicer';

function TweetAction({ icon, counter, id }) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();

    function onClick(e) {
        if (!isLiked && id) {
            setIsLiked(true);
            dispatch(getId(id));

        } else {
            setIsLiked(false);
            dispatch(removeTweet(id));
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
