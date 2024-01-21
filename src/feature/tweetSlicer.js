import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet:[],
};

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers:{
        addTweet:(state,action)=>{
            const ifTweetEsxist = state.tweet.findIndex((object)=>isPlainObject.id === action.payload.id)
            if(ifTweetEsxist !== -1){
                state.tweet.splice(ifTweetEsxist, 1)
            }else{
                state.tweet.push(action.payload)
            }
            
        },
    },
});

export const {addTweet}=tweetSlice.actions;
export default tweetSlice.reducer