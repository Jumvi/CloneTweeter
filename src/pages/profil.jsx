import React, { useState } from 'react';
import Tweets from '../components/Tweets';
import { profildata } from '../components/profildata';
import SideBare from '../components/SideBare';

function Profil() {
     const [data,setData] = useState(profildata);
    return (
        <div className='profil'>
            <SideBare />
            <div className='profil-tweet'>
                <Tweets user={data}  />
            </div>
            
            <SideBare />
        </div>
    );
}

export default Profil;