import React, { useState } from 'react';
import Tweets from '../components/Tweets';
import { profildata } from '../components/profildata';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import UsersProfil from '../components/usersProfil';

function Profil() {
     const [data,setData] = useState(profildata);
    return (
        <div className='profil'>
            <SideBare />
            <div className='profil-tweet'>
                <UsersProfil data={profildata} />
            </div>
            
            <Trends />
        </div>
    );
}

export default Profil;