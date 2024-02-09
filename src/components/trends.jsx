import React from 'react';
import { CiSearch } from "react-icons/ci";
import { TrendsData } from './trendsData';
import TrendsForYou from './trendsForYou';
import { Link } from 'react-router-dom';
import { CiSettings } from "react-icons/ci";
import { followData } from './whoToFollowData';
import WhoToFollow from './whoToFollow';

function Trends() {
    return (
        <aside className='trends m-2 w-full'>
            <div className='search flex gap-5 bg-gray-900 rounded-2xl ml-2 p-1'>
               <div className='search-icone'><CiSearch /></div> <input className='bg-transparent border-none border-transparent rounded-2xl ' type="text" placeholder='Search Tweeter' />
            </div>
            <div className='trends-for-you bg-gray-900 mt-1 rounded-2xl p-1 ml-2'>
                <div className='tfyou-title flex justify-between m-2.5'>
                    <h3>Trends for you</h3>
                    <CiSettings />
                </div>
               <TrendsForYou trend={TrendsData} />
               <Link to= "/" className='m-1 decoration-none'  ><h4>show more</h4></Link>
            </div>
            <div className='who-to-follow flex flex-col justify-center bg-gray-900 rounded-2xl m-1 p-1'>
                <h3 className='fello-title'>Who to follow</h3>
                <div className='flex justify-between m-2.5 flex-col'>
                    <WhoToFollow fallow={followData} />
                    <Link to="/" className='m-1 decoration-none' ><h4>See more</h4></Link>
                </div>
               
            </div>
        </aside>
    );
}

export default Trends;