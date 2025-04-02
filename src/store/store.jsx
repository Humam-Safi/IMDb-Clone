import { configureStore } from "@reduxjs/toolkit";
import trendingSlice from "./slices/trendingSlice"
import topRatedSlice from "./slices/topRatedSlice"

const redusers = {
  trendingFilms : trendingSlice,
  topRatedFilms: topRatedSlice,
}

export const store = configureStore({
  reducer: redusers
})