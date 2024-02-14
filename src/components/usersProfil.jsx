import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { incrementContext } from '../feature/tweetSlicer';
import { useSelector } from 'react-redux';




function UsersProfil({data}) {
    incrementContext = useSelector((state)=>state.context)
    return (
        <div className='Users-profils'>
            
                <div>
                    <div className='profil-users bg-no-repeat h-40 '>
                        <div className='user-layout'>
                            <Avatar id={data.id} src={data.src} />
                            <button className='user-button1'>Edite profil</button>
                        </div>
                        
                    </div>
                    <div className='auther-certification'>
                        <h4>{data.author}</h4>
                            {
                                data.isCert ? (
                                    <img src={data.verifiedIcon} alt="certification" />
                                ): 
                                null
                            }
                        <span>{data.pseudo}</span>
                        <p>{data.description}</p>
                        <div className='user-follow'>
                            <span>{data.following}</span>
                            <span>{data.follower}</span>
                        </div>
                       
                    </div>
                        <div className='user-navigation'>
                            <NavLink to="/" >About</NavLink>
                            <NavLink to="/" >Tweets{incrementContext}</NavLink>
                            <NavLink to="/" >Other</NavLink>
                            <NavLink to="/" >me</NavLink>
                        </div>
                    </div>
                    
               
            
            <div>
                {/* <Tweets user={profildata} /> */}
            </div>
        </div>
    );
}

export default UsersProfil;
