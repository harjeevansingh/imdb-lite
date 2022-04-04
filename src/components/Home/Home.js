import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import apiKey from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const reponse = await movieApi
        .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log("Error : ", error);
        });
      // console.log("The Response from API - ", reponse);
      dispatch(addMovies(reponse.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banned-img"></div>
      <MovieListing></MovieListing>
    </div>
  );
};

export default Home;
