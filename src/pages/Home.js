// item에서 MovieItem, SearchItem 등 안의 구조 컴포넌트화 시키기
// 공통되는 부분은 item.js에 넣고, 다른 부분은 각각의 파일에 넣기 (children 이용) 

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
import { MovieItem } from "../components/item";
import { MovieList } from "../components/item-list";
import Navbar from "../components/navbar";
import { Section } from "../components/Section";
import Searchbar from "../components/Searchbar";

const Home = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlaying, setNowPlayingMovies] = useState([]);
  const [inputText, setInputText] = useState("");
  const [upComing, setUpComingMovies] = useState({
    dates: {},
    results: [],
  });

  const promiseHandler = (callType, setStateType) => {
    callType.then((data) => {
      if (typeof data === Object) {
        setStateType((prev) => {
          return { ...prev, dates: data.dates, results: data.results };
        });
      } else {
        setStateType(data);
      }
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
    promiseHandler(TMDB.getUpComing(), setUpComingMovies);
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

        <Section heading={"Upcoming"}>
          <MovieList movies={upComing['results']} />
        </Section>
      </Container>
    </ChakraProvider>
  );
};

export default Home;
