import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet:[],
};

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers:{
        addTweet:(state,action)=>{
            // const ifTweetEsxist = state.tweet.find((object)=>isPlainObject.id === action.payload.id)
            // if(ifTweetEsxist !==){
            //     return state.tweet
                
               
            // }else{
                state.tweet.push(action.payload)
            }
            
        },
});

export const {addTweet}=tweetSlice.actions;
export default tweetSlice.reducer