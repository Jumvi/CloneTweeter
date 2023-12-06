import React from 'react';
import { CiSearch } from "react-icons/ci";
import { TrendsData } from './trendsData';
import TrendsForYou from './trendsForYou';
import { NavLink } from 'react-router-dom';
import { CiSettings } from "react-icons/ci";
import { followData } from './whoToFollowData';
import WhoToFollow from './whoToFollow';

function Trends() {
    return (
        <div className='trends'>
            <div className='search'>
               <div className='search-icone'><CiSearch /></div> <input type="text" placeholder='Search Tweeter' />
            </div>
            <div className='trends-for-you'>
                <div className='tfyou-title'>
                    <h3>Trends for you</h3>
                    <CiSettings />
                </div>
               <TrendsForYou trend={TrendsData} />
               <NavLink to= "/" ><h4>show more</h4></NavLink>
            </div>
            <div className='who-to-follow'>
                <h3 className='fello-title'>Who to follow</h3>
                <WhoToFollow fallow={followData} />
                <NavLink to="/"><h4>See more</h4></NavLink>
            </div>
        </div>
    );
}

export default Trends;