import { useReducer, useEffect } from "react";
import MovieContext from "./movie-context";
import TMDB from "../api/apicall";

const defaultMovieState = {
  popularMovies: [],
  nowPlaying: [],
  upComing: [],
};

const movieReducer = (state, action) => {
  if (action.type === "POPULAR") {
    return {
      ...state,
      popularMovies: action.payload,
    };
  }

  if (action.type === "NOW_PLAYING") {
    return {
      ...state,
      nowPlaying: action.payload,
    };
  }

  if (action.type === "UP_COMING") {
    return {
      ...state,
      upComing: action.payload,
    };
  }
  console.log("error");
  return state;
};

const MovieProvider = (props) => {
  const [movieState, dispatchMovieAction] = useReducer(
    movieReducer,
    defaultMovieState
  );

  const movieContext = {
    popularMovies: movieState.popularMovies,
    nowPlaying: movieState.nowPlaying,
    upComing: movieState.upComing,
  };

  const fetchMovies = async (type) => {
    try {
      const movies =
        type === "POPULAR"
          ? await TMDB.getPopularMovies()
          : type === "NOW_PLAYING"
          ? await TMDB.getNowPlaying()
          : await TMDB.getUpComing();

      dispatchMovieAction({
        type: type,
        payload: movies.results,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovies("POPULAR");
    fetchMovies("NOW_PLAYING");
    fetchMovies("UP_COMING");
  }, []);

  return (
    <MovieContext.Provider value={movieContext}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
