import {
  Center,
  Text,
  ChakraProvider,
  Box,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import theme from "./libs/theme";
import ThemeToggleButton from "./components/theme-toggle-button";
import TMDB from "./api/apicall";
import { MovieItem } from "./components/grid-item";
import MovieList from "./components/MovieList";
import Navbar from "./components/navbar";
import Section from "./components/Section";
import Searchbar from "./components/Searchbar";

const API_KEY = "69bea4bb33d62c0bf6b991c1b63dbbae";
const URL = "https://api.themoviedb.org/3/movie/";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const promiseHandler = (callType, setStateType) => {
    callType.then((data) => {
      setStateType(data);
    });
  };

  useEffect(() => {
    promiseHandler(TMDB.getPopularMovies(), setMovies);
    console.log(movies);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Container maxW='contianer.lg' mt={100}>
        <Section styles={{ marginTop: "50px" }}>
          <Container maxW="container.lg">
            <Searchbar />
          </Container>
        </Section>

        <Section>
          <Container maxW="container.lg" pt={70}>
            <MovieList>
              {movies.map((movie) => (
                <MovieItem
                  key={movie.id}
                  adult={movie.adult}
                  id={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  vote_count={movie.vote_count}
                  popularity={movie.popularity}
                  thumbnail={movie.poster_path}
                />
              ))}
            </MovieList>
          </Container>
        </Section>
      </Container>
    </ChakraProvider>
  );
};

export default App;
