import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  Text,
  ChakraProvider,
  Box,
  Flex,
  Container,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import theme from "../libs/theme";
import ThemeToggleButton from "../components/theme-toggle-button";
import TMDB from "../api/apicall";
import { MovieItem } from "../components/Movieitem";
import MovieList from "../components/MovieList";
import Navbar from "../components/navbar";
import Section from "../components/Section";
import Searchbar from "../components/Searchbar";

const Home = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlaying, setNowPlayingMovies] = useState([]);
  const [inputText, setInputText] = useState("");

  const promiseHandler = (callType, setStateType) => {
    callType.then((data) => {
      setStateType(data);
    });
  };

  const searchHandler = (enteredKeyword, enteredKeyCode) => {
    if (enteredKeyword.trim().length !== 0 && enteredKeyCode === 13) {
      routePageHandler(enteredKeyword);
    }
  };

  const routePageHandler = (enteredKeyword) => {
    navigate(`/search/${enteredKeyword}`);
  };

  useEffect(() => {
    promiseHandler(TMDB.getPopularMovies(), setPopularMovies);
    promiseHandler(TMDB.getNowPlaying(), setNowPlayingMovies);
    console.log(nowPlaying);

  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Container maxW="contianer.lg" mt={100}>
        <Container maxW="container.lg">
          <Searchbar searchHandler={searchHandler} />
        </Container>

        <Section heading={"Popular"}>
          <MovieList movies={popularMovies} />
        </Section>

        <Section heading={"Now playing"}>
          <MovieList movies={nowPlaying} />
        </Section>
      </Container>
    </ChakraProvider>
  );
};

export default Home;
