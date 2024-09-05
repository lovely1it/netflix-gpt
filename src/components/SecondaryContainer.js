import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="  -mt-80 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Recently Added"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Recommended"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Added Last Year"} movies={movies.nowPlayingMovies} />
        </div>
       
      </div>
    )
  );
};

export default SecondaryContainer;
