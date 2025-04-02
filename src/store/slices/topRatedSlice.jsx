import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopRated = createAsyncThunk("films/fetchTopRated" , async ()=>{
  const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=af0046bf4ceb0ab3ffa6a39fcf1274bd")
  return res.data.results
})
const topRatedSlice = createSlice({
  name:"topRatedFilms" ,
  initialState:[],
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchTopRated.fulfilled , (state , action)=>{
      return action.payload
    })
  }
})
export default topRatedSlice.reducer