import React from 'react';
import TMDB from '../api/apicall';

const MovieContext = React.createContext({
    popularMovies: [],
    nowPlaying: [],
    upComing: [],
});

export default MovieContext;