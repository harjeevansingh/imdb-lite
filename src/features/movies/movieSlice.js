import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import apiKey from "../../common/apis/MovieApiKey";

const initialState = {
  movies: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const reponse = await movieApi.get(
      `?apikey=${apiKey}&s=${movieText}&type=movie`
    );
    return reponse.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");
    //   state.movies = payload;
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: ()=>{
        console.log("Rejected");
    }
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMoveis = (state) => state.movies.movies;
export default movieSlice.reducer;
