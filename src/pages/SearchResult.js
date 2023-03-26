import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import TMDB from "../api/apicall";

const SearchResult = (props) => {
  const { keyword } = useParams();
  const [ret, setRet] = useState();

  const promiseHandler = (callType, setStateType) => {
    callType.then((data) => {
      setStateType((prev) => {
        return [...data];
      });
    });
  };

  useEffect(() => {
      promiseHandler(TMDB.getSearchMovies(keyword), setRet);
  }, []);

//   데이터 확인용
  useEffect(() => {
    console.log(ret);
  }, [ret]);

  return (
    <Box>
      <Text></Text>
    </Box>
  );
};

export default SearchResult;
