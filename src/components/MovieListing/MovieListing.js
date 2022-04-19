import React from "react";
import { getAllMoveis, getAllShows } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMoveis);
  const shows = useSelector(getAllShows);
  const renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie}/>;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

    const renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show}/>;
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.error}</h3>
      </div>
    );

  return (
    <div className="movies-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
