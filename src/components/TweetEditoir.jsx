
import profil from '../images/profile-photo.png';
import photo from '../images/photos.png';
import gif from '../images/gif.png';
import poll from '../images/stats.png';
import calendar from '../images/calendar.png';
import Avatar from './Avatar';
import { useEffect, useState } from 'react';
import {useDispatch } from 'react-redux';
import { addInput } from '../feature/tweetSlicer';
 




function TweetEditor(){
    const [textInput,setTextInput] = useState("");
    const dispatch = useDispatch()
    
    const handlChange = (e)=>{
        setTextInput(e.target.value);
    }

    const handelClick = ()=>{
        dispatch(addInput({text:textInput}));
        setTextInput('');
        
         
    }

  
    return(
        <div className='tweet-editor'>
            <div >
                <Avatar src={profil} />
            </div>
            <div className='tweet-editor-form'>
                 <div >
                    <input type="text" className='tweet-editor-input' placeholder='What s happenning ' onChange={handlChange}/>
                </div>
                <div className='tweet-editor-buttons'>
                    <div className='tweet-editor-actions' >
                        <img src={photo} alt="" />
                        <img src={gif} alt="" />
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