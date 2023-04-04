import config from "./apikey";

const TMDB_API_KEY = config.TMDB_API_KEY;
const TMDB_BASE_URL = config.TMDB_BASE_URL;
const TMDB_POSTER_URL = config.TMDB_POSTER_URL;
const TMDB_SEARCH_URL = config.TMDB_SEARCH_URL;

const TMDB = {
  getPopularMovies: async () => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/popular?api_key=${TMDB_API_KEY}`
    );
    const popularMovies = await resp.json();
    
    return popularMovies.results;
  },

  getDetails: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}?api_key=${TMDB_API_KEY}`
    );
    const details = await resp.json();

    return details.results;
  },

  getImages: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/images?api_key=${TMDB_API_KEY}`
    );
    const images = await resp.json();

    return images.results;
  },

  getRecommendations: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/recommendations?api_key=${TMDB_API_KEY}`
    );
    const recommendations = await resp.json();

    return recommendations.results;
  },

  getSimilarMovies: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/similar?api_key=${TMDB_API_KEY}`
    );
    const similarMovies = await resp.json();

    return similarMovies.results;
  },

  getUpComing: async () => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/upcoming?api_key=${TMDB_API_KEY}`
    );
    const upcoming = await resp.json();

    return upcoming.results;
  },

  getTopRated: async () => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/top_rated?api_key=${TMDB_API_KEY}`
    );
    const topRated = await resp.json();
    return topRated.results;
  },

  getNowPlaying: async () => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/now_playing?api_key=${TMDB_API_KEY}`
    );
    const nowPlaying = await resp.json();
    return nowPlaying.results;
  },

  getLatestMovies: async () => {
    const resp = await fetch(`${TMDB_BASE_URL}/latest?api_key=${TMDB_API_KEY}`);
    const latestMovies = await resp.json();

    return latestMovies.results;
  },

  getTranslations: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/translations?api_key=${TMDB_API_KEY}`
    );
    const translations = await resp.json();

    return translations.results;
  },

  getReviews: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/reviews?api_key=${TMDB_API_KEY}`
    );
    const reviews = await resp.json();

    return reviews.results;
  },

  getKeywords: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/keywords?api_key=${TMDB_API_KEY}`
    );
    const keywords = await resp.json();

    return keywords.results;
  },

  getCredits: async (movie_id) => {
    // get cast and crew whose popularity is greater than 15
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/credits?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const credits = await resp.json();
    return credits;
  },

  getSearchMovies: async (keyword) => {
    const resp = await fetch(
      `${TMDB_SEARCH_URL}/movie?api_key=${TMDB_API_KEY}&query=${keyword}`
    );
    const searches = await resp.json();

    return searches.results;
  },
};


export default TMDB;