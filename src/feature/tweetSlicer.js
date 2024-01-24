import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet:[],
    value:0,
};

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers:{
        addTweet:(state,action)=>{
                state.tweet.push(action.payload);
            },
        incrementValue:(state)=>{
            state.value +1;
        },
        decrementValue:(state)=>{
            state.value -1;
        },
        removeTweet:(state,action)=>{
            state.tweet.pop(action.payload);
        },
        addInput:(state,action)=>{
            state.tweet.push({
                text:action.payload.text,
                image:action.payload.image
            })
        },
            
        },
});

export const {addTweet,incrementValue,decrementValue,removeTweet, addInput}=tweetSlice.actions;
export default tweetSlice.reducer  