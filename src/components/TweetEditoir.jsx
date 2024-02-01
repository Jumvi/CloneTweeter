
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
import { useForm } from 'react-hook-form';

function TweetEditor(){
    let [textInput,setTextInput] = useState("");
    const dispatch = useDispatch();
    let [imageTweet,setImageTweet]=useState(null)
    const contextNumber = useSelector((state)=>state.context);

    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm()
    
    const handelClick = (data)=>{
        setImageTweet(imageTweet =data.myFile);
        setTextInput(textInput= data.myInput);
        if(imageTweet){
            dispatch(addInput({text:textInput,
                src:profil,
                author:"Propriétaire du compte",
                like:coeur,
                pseudo:'@Jmvi',
                verifiedIcon:verified,
                imgContent:data.myFile,//ceci permet de ne recupéré que l'url du file et non toutes les données.
                isCert:true,
                // comment: <FaRegComment />,
                // share:<IoShareOutline />,
                // bookmark:<CiBookmark />
    
                })); 
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
        }   
        setTextInput("");
        setImageTweet(null)
       
    }

    const onSubmit = (data)=>{
        handelClick(data);
    }
    useEffect(()=>{
        
       },[handelClick]) 
  
    return(
        <div className='tweet-editor flex items-start justify-start gap-5 p-4 border-b border-gray-800 '>
            <div >
                <Avatar src={profil} />
            </div>
            <form action="post" onSubmit={handleSubmit(data =>onSubmit(data))}>
                <div className='tweet-editor-form  flex-auto'>
                    <input type="text" className='tweet-editor-input h-10 min-w-full border-0 outline-none text-xl bg-black text-white resize-none px-2 mx-2' placeholder='What s happenning ' {...register('myInput',{required:true})}/>
                    {errors.myInput && <h4> ce champs est obligatoire</h4>}
                    <div className='tweet-editor-buttons flex itemes-center justify-between'>
                        <div className='tweet-editor-actions flex items-center flex-start' >
                            <label htmlFor="image-input">
                                <input type="file" accept="image/jpeg,image/png,image/*" id='image-input'  {...register('myFile',{required:false})}/>
                                <img src={photo} alt="" />    
                            </label>
                            {/* <label htmlFor="image-input">
                                 <img src={gif} alt="" />
                                </label> */}
                        
                            <img src= {poll} alt="" />
                            <img src= {calendar} alt="" />
                        </div>
                        <input type="submit" className='button bg-indigo-700 capitalize p-2 w-24 rounded border-none' placeholder='Tweet' />
                    </div>
            
                </div>

            </form>
            
        </div>
    )
  
}

export default TweetEditor;