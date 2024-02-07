
import profil from '../images/profile-photo.png';
import photo from '../images/photos.png';
import gif from '../images/gif.png';
import poll from '../images/stats.png';
import calendar from '../images/calendar.png';
import Avatar from './Avatar';
import {  useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import coeur from '../images/coeur.png';
import verified from '../images/Verified.png';
import { incrementContext } from '../feature/tweetSlicer';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function TweetEditor({onFetch}){
    const [textInput,setTextInput] = useState("");
    const dispatch = useDispatch();
    const [imageTweet,setImageTweet]=useState(null)
    const contextNumber = useSelector((state)=>state.context);

    const urlApi = 'http://localhost:3000/tweet';

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm()
    
    const hundleClick = (data)=>{
        let updateData = data.myInput;
        const inputObject = {
            text:updateData,
            src:'src/images/profile-photo.png',
            author:"Propriétaire du compte",
            like:coeur,
            pseudo:'@Jmvi',
            verifiedIcon:verified,
            imgContent:URL.createObjectURL(data.picture[0]),//ceci permet de ne recupéré que l'url du file et non toutes les données.
            isCert:true,
            comment: "src/images/coeur.png",
            share: "src/images/coeur.png",
            bookmark: "src/images/coeur.png"
        }
        axios.post(urlApi,inputObject).then((response)=>{
            onFetch();
        })  
            .catch((error)=>{
                    console.error('error:',error);
            })
        dispatch(incrementContext(contextNumber));
        reset();
    }

    const onSubmit = (data)=>{
        hundleClick(data);
    }
    useEffect(()=>{
        
       },[]) 
  
    return(
        <div className='tweet-editor flex items-start justify-between gap-5 p-4 border-b border-gray-800  '>
            <div >
                <Avatar src={profil} />
            </div>
            <form action="post" onSubmit={handleSubmit(data =>onSubmit(data))} className='w-full'>
                <div className='tweet-editor-form  flex flex-col w-full'>
                    <input type="text" className='tweet-editor-input h-10 min-w-full border-0 outline-none text-xl bg-black text-white resize-none px-2 mx-2' placeholder='What s happenning ' {...register('myInput',{required:true})}/>
                        {errors.myInput && <h4> ce champs est obligatoire</h4>}
                    <div className='tweet-editor-buttons flex justify-between w-full'>
                        <div className='tweet-editor-actions flex items-center flex-start' >
                            <label htmlFor="image-input">
                                <input type="file"  id='image-input'  {...register("picture")} className='w-[500px]'/>
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