import React from 'react';
import TweetTile from './TweetTitle';
import Tweets from './Tweets';
import Avatar from './Avatar';
import TweetAction from './tweetAction';
import { MdIosShare } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";


function ProfilTweet({tweets,users}) {
    return (
        <div className="tweets w-full border-y border-gray-800 bg-black ">
            {users.map((data) => (
                <div className="tweet flex  flex-col gap-3 p-8 border-b border-gray-800" key={data.id}>
                    
                    <div>
                        {tweets.map((tweet) => (
                            <div key={tweet.id}>
                                <div className="tweet-avatar flex gap-1 h-12 w-2/3">
                                    <Avatar data={data} />
                                    {tweets? <TweetTile data={data} tweet={tweets}/> :<TweetTile data={data} />}
                                </div>
                                <div className="tweet-text">
                                     <p>{tweet.text}</p>
                                </div>
                                <div className="w-full">
                                    {tweet.media ? <img className="rounded-lg p-4 w-[35rem] h-96 object-fill" src={tweet.media} alt="image du tweet" /> : ""}
                                </div>
                                <div className="tweet-actions flex flex-start items-start gap-24 p-4">
                                    <TweetAction icon={<BiMessageRounded />} counter={tweet.repliesCount} id={tweet.id} />
                                    <TweetAction icon={<FaRetweet />} counter={tweet.retweetCount} id={tweet.id} />
                                    <TweetAction icon={<MdOutlineFavoriteBorder />} counter={tweet.favoriteCount} id={tweet.id} />
                                    <TweetAction icon={<MdIosShare />} counter={tweet.repliesCount} id={tweet.id} />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            ))}

            
            
        </div>
    );
}

export default ProfilTweet;