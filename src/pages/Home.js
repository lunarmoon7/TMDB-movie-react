// item에서 MovieItem, SearchItem 등 안의 구조 컴포넌트화 시키기
// 공통되는 부분은 item.js에 넣고, 다른 부분은 각각의 파일에 넣기 (children 이용)

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import theme from "../libs/theme";
import { MovieList } from "../components/UI/item-list";
import Navbar from "../components/UI/navbar";
import { Section } from "../components/Section";
import Searchbar from "../components/UI/Searchbar";
import MovieContext from "../store/movie-context";

const Home = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const movieCtx = useContext(MovieContext);

  const searchHandler = (enteredKeyword, enteredKeyCode) => {
    if (enteredKeyword.trim().length !== 0 && enteredKeyCode === 13) {
      routePageHandler(enteredKeyword);
    }
  };

  const routePageHandler = (enteredKeyword) => {
    navigate(`/search/${enteredKeyword}`);
    navigate(0);
  };

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="contianer.lg" mt={100}>
        <Container maxW="container.lg">
          <Searchbar searchHandler={searchHandler} />
        </Container>

        <Section heading={"Popular"}>
          <MovieList movies={movieCtx.popularMovies} />
        </Section>

        <Section heading={"Now playing"}>
          <MovieList movies={movieCtx.nowPlaying} />
        </Section>

        <Section heading={"Upcoming"}>
          <MovieList movies={movieCtx.upComing} />
        </Section>
      </Container>
    </ChakraProvider>
  );
};

export default Home;
