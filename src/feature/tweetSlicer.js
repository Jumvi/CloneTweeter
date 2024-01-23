import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet:[],
    value:0
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
        }
            
        },
});

export const {addTweet,incrementValue,decrementValue,removeTweet}=tweetSlice.actions;
export default tweetSlice.reducer  