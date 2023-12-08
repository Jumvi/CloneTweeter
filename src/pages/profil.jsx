import React, { useEffect, useState } from 'react';
import Tweets from '../components/Tweets';
import { profildata } from '../components/profildata';
import SideBare from '../components/SideBare';
import Trends from '../components/trends';
import UsersProfil from '../components/usersProfil';
import { useParams } from 'react-router-dom';

function Profil() {
     const [data,setData] = useState(profildata);
     const {id: paramsId}  = useParams();

     const getUserData = ()=> {
        const userData = profildata.find(({id})=> id === parseInt(paramsId))
        console.log({userData, paramsId})
        if(userData) setData(userData)
     }
     useEffect(() => {
        getUserData()
      }, []);
    return (
        <div className='profil'>
            <SideBare />
            <div className='profil-tweet'>
                <UsersProfil data={data} />
            </div>
            
            <Trends />
        </div>
    );
}

export default Profil;