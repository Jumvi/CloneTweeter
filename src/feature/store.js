
import { configureStore } from '@reduxjs/toolkit';
import tweetSlice from './tweetSlicer';


const store = configureStore({
  reducer: tweetSlice,
});

export default store;
