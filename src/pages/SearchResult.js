import React, { useEffect, useState } from "react";
import { Box, Text, ChakraProvider, Container } from "@chakra-ui/react";
import {
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
  setSearchParams,
} from "react-router-dom";
import TMDB from "../api/apicall";
import { SearchSection } from "../components/Section";
import { SearchList } from "../components/item-list";
import theme from "../libs/theme";
import Navbar from "../components/navbar";
import Searchbar from "../components/Searchbar";

const SearchResult = (props) => {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();

  const promiseHandler = (callType, setStateType) => {
    callType.then((data) => {
      setStateType((prev) => {
        return [...data];
      });
    });
  };

  const searchHandler = (enteredKeyword, enteredKeyCode) => {
    if (enteredKeyword.trim().length !== 0 && enteredKeyCode === 13) {
      routePageHandler(enteredKeyword);
    }
  };

  const routePageHandler = (enteredKeyword) => {
    navigate(`/search/${enteredKeyword}`);
    navigate(0);
  };

  useEffect(() => {
    promiseHandler(TMDB.getSearchMovies(keyword), setSearchResult);
  }, []);

  // 데이터 확인용
  useEffect(() => {
    console.log(searchResult);
    console.log(keyword);
  }, [searchResult]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="contianer.lg" mt={100}>
        <Container maxW="container.lg">
          <Searchbar searchHandler={searchHandler} />
        </Container>
        <SearchSection heading={searchResult.length}>
          <SearchList searchResult={searchResult} />
        </SearchSection>
      </Container>
    </ChakraProvider>
  );
};

export default SearchResult;
