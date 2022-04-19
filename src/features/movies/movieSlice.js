import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import apiKey from "../../common/apis/MovieApiKey";

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
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

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const seriesText = "Friends";
    const reponse = await movieApi.get(
      `?apikey=${apiKey}&s=${seriesText}&type=series`
    );
    return reponse.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const reponse = await movieApi.get(`?apikey=${apiKey}&i=${id}&Plot=full`);
    return reponse.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    removeSelectedMovieOrShow: (state)=>{
      state.selectedMovieOrShow = {};
    }
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
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMoveis = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShowDetail = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
