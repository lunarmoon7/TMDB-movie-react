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
    const recommendations = resp.json();

    return recommendations;
  },

  getSimilarMovies: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/similar?api_key=${TMDB_API_KEY}`
    );
    const similarMovies = resp.json();

    return similarMovies;
  },

  getUpComing: async () => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/upcoming?api_key=${TMDB_API_KEY}`
    );
    const upcoming = resp.json();

    return upcoming;
  },

  getTopRated: async () => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/top_rated?api_key=${TMDB_API_KEY}`
    );
    const topRated = await resp.json();
    return topRated;
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
    const latestMovies = resp.json();

    return latestMovies.results;
  },

  getTranslations: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/translations?api_key=${TMDB_API_KEY}`
    );
    const translations = resp.json();

    return translations;
  },

  getReviews: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/reviews?api_key=${TMDB_API_KEY}`
    );
    const reviews = resp.json();

    return reviews;
  },

  getKeywords: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/keywords?api_key=${TMDB_API_KEY}`
    );
    const keywords = resp.json();

    return keywords;
  },

  getCredits: async (movie_id) => {
    const resp = await fetch(
      `${TMDB_BASE_URL}/${movie_id}/credits?api_key=${TMDB_API_KEY}`
    );
    const credits = resp.json();

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

// const call = {
//     getPopularMovies: async (TMDB_BASE_URL, TMDB_API_KEY) => {
//       const popularMovies = await (
//         await fetch(`${TMDB_BASE_URL}/popular?TMDB_API_KEY=${TMDB_API_KEY}`)
//       ).json();

//       return popularMovies;
//     },

//     getDetails: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const details = await (await fetch(`${TMDB_BASE_URL}/${movie_id}`)).json();

//       return details;
//     },

//     getImages: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const images = await (await fetch(`${TMDB_BASE_URL}/${movie_id}/images`)).json();

//       return images;
//     },

//     getRecommendations: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const recommendations = await (
//         await fetch(`${TMDB_BASE_URL}/${movie_id}/recommendations`)
//       ).json();

//       return recommendations;
//     },

//     getSimilarMovies: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const similarMovies = await (
//         await fetch(`${TMDB_BASE_URL}/${movie_id}/similar`)
//       ).json();

//       return similarMovies;
//     },

//     getUpComing: async (TMDB_BASE_URL, TMDB_API_KEY) => {
//       const upcoming = await (await fetch(`${TMDB_BASE_URL}/upcoming`)).json();

//       return upcoming;
//     },

//     getTopRated: async (TMDB_BASE_URL, TMDB_API_KEY) => {
//       const topRated = await (await fetch(`${TMDB_BASE_URL}/top_rated`)).json();

//       return topRated;
//     },

//     getNowPlaying: async (TMDB_BASE_URL, TMDB_API_KEY) => {
//       const nowPlaying = await (await fetch(`${TMDB_BASE_URL}/now_playing`)).json();

//       return nowPlaying;
//     },

//     getLatestMovies: async (TMDB_BASE_URL, TMDB_API_KEY) => {
//       const latestMovies = await (await fetch(`${TMDB_BASE_URL}/latest`)).json();

//       return latestMovies;
//     },

//     getTranslations: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const translations = await (
//         await fetch(`${TMDB_BASE_URL}/${movie_id}/translations`)
//       ).json();

//       return translations;
//     },

//     getReviews: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const reviews = await (
//         await fetch(`${TMDB_BASE_URL}/${movie_id}/reviews`)
//       ).json();

//       return reviews;
//     },

//     getKeywords: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const keywords = await (
//         await fetch(`${TMDB_BASE_URL}/${movie_id}/keywords`)
//       ).json();

//       return keywords;
//     },

//     getCredits: async (TMDB_BASE_URL, TMDB_API_KEY, movie_id) => {
//       const credits = await (
//         await fetch(`${TMDB_BASE_URL}/${movie_id}/credits`)
//       ).json();

//       return credits;
//     },
//   };
