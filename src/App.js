import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/TopRated";
import Latest from "./pages/Latest";
import SearchResult from "./pages/SearchResult";
import { useEffect } from "react";
import MovieProvider from "./store/MovieProvider";
const App = () => {
  // const getPopularMovies = async () => {
  //   const resp = await fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=69bea4bb33d62c0bf6b991c1b63dbbae
  //     `
  //   );
  //   const popularMovies = await resp.json();

  //   console.log(popularMovies.results);
  // };
  // useEffect(() => {
  //   getPopularMovies();
  // }, [])
  return (
    <Router>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<SearchResult />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/latest" element={<Latest />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
};

export default App;
