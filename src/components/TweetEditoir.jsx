
import profil from '../images/profile-photo.png';
import photo from '../images/photos.png';
import gif from '../images/gif.png';
import poll from '../images/stats.png';
import calendar from '../images/calendar.png';
import Avatar from './Avatar';
import {  useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { addInput } from '../feature/tweetSlicer';
import coeur from '../images/coeur.png';
import verified from '../images/Verified.png';
import { incrementContext } from '../feature/tweetSlicer';
 
function TweetEditor(){
    const [textInput,setTextInput] = useState("");
    const dispatch = useDispatch();
    const [imageTweet,setImageTweet]=useState(null)
    const contextNumber = useSelector((state)=>state.context)
    
    const handlChange = (e)=>{
        if(e.target.type === "text"){
            setTextInput(e.target.value);
         }else if (e.target.type=== 'file' && e.target.files.length > 0 ) { 
            setImageTweet(e.target.files[0]);
      
        }
        }
    const handelClick = ()=>{
        if(imageTweet){
            dispatch(addInput({text:textInput,
                src:profil,
                author:"Propriétaire du compte",
                like:coeur,
                pseudo:'@Jmvi',
                verifiedIcon:verified,
                imgContent:URL.createObjectURL(imageTweet),//ceci permet de ne recupéré que l'url du file et non toutes les données.
                isCert:true,
                // comment: <FaRegComment />,
                // share:<IoShareOutline />,
                // bookmark:<CiBookmark />
    
                })); 
            //  setNumberOfTWeet(numberOtweet +1)
             dispatch(incrementContext(contextNumber +1))
        }else if (textInput ){
            dispatch(addInput({text:textInput,
                src:profil,
                author:"Propriétaire du compte",
                like:coeur,
                pseudo:'@Jmvi',
                verifiedIcon:verified,
                isCert:true,
                // comment: <FaRegComment />,
                // share:<IoShareOutline />,
                // bookmark:<CiBookmark />
    
                })); 
                console.log(contextNumber)
                dispatch(incrementContext(contextNumber +1))
                console.log(`modi ${contextNumber +1}`);
        }else{
            return false
        }
           
        setTextInput("");
        setImageTweet(null)
        // a
       
    }
    useEffect(()=>{
        
       },[handelClick]) 
  
    return(
        <div className='tweet-editor'>
            <div >
                <Avatar src={profil} />
            </div>
            <div className='tweet-editor-form'>
                 <div >
                    <input type="text" value={textInput} className='tweet-editor-input' placeholder='What s happenning ' onChange={handlChange}/>
                </div>
                <div className='tweet-editor-buttons'>
                    <div className='tweet-editor-actions' >
                    <label htmlFor="image-input">
                        <input type="file" accept="image/jpeg,image/png" id='image-input'  onChange={handlChange}/>
                        <img src={photo} alt="" />    
                    </label>
                    {/* <label htmlFor="image-input">
                        <img src={gif} alt="" />
                    </label> */}
                        
                        <img src= {poll} alt="" />
                        <img src= {calendar} alt="" />
                    </div>
                    <div>
                        <button className='button' onClick={handelClick} >Tweet</button>
                    </div>
                </div>
            
            </div>
        </div>
    )
  
}

export default TweetEditor;