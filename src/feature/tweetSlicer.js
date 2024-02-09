import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tweet:[],
    dataId:"",
    value:0,
    context : 0
};

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers:{
        addTweet:(state,action)=>{
                state.tweet.unshift(action.payload);
            },
        incrementValue:(state)=>{
            state.value +=1;
        },
        incrementContext :(state)=>{
            state.context +=1;
        },
        removeTweet:(state,action)=>{
            state.tweet.pop(action.payload);
        },
        addInput:(state,action)=>{
            state.tweet.unshift({
                text:action.payload.text,
                src:action.payload.src,
                author:action.payload.author,
                like: action.payload.like,
                pseudo:action.payload.pseudo,
                verifiedIcon: action.payload.verifiedIcon,
                imgContent:action.payload.imgContent,
                isCert:action.payload.isCert,
                comment:action.payload.comment,
                share:action.payload.share,
                bookmark:action.payload.bookmark,
                counterLike:action.payload.counterLike
            })
        },
        getId:(state,dataId)=>{
            state.dataId = dataId;
        }
            
        },
});

export const {addTweet,incrementValue,incrementContext,removeTweet, addInput,getId}=tweetSlice.actions;
export default tweetSlice.reducer  