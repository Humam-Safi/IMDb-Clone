import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrending = createAsyncThunk("films/fetchTrending", async () => {
  const res = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=af0046bf4ceb0ab3ffa6a39fcf1274bd");
  return res.data.results;
});

const trendingSlice = createSlice({
  name: "trendingFilms",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export default trendingSlice.reducer;
