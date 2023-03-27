import React from "react";
import {
  Container,
  Flex,
  Box,
  SimpleGrid,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { MovieItem, SearchItem } from "./item";
import {ApiError, ImageError} from "./error";
import theme from "../libs/theme";

export const MovieList = (props) => {
  return (
    <Box>
      {!props.movies && <ApiError />}
      {props.movies && (
        <Flex
          color="black"
          textAlign="center"
          overflowX="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {props.movies.map((movie) => (
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
        </Flex>
      )}
    </Box>
  );
};

export const SearchList = (props) => {
  return (
    <Box>
      {!props.searchResult && <ApiError />}
      {props.searchResult && (
          <SimpleGrid minChildWidth="150px" spacingX="40px" spacingY="20px">
            {props.searchResult.map((result) => (
              <SearchItem
                key={result.id}
                title={result.title}
                thumbnail={result.poster_path}
                vote_average={result.vote_average}
              />
            ))}
          </SimpleGrid>
        )}
    </Box>
  );
};
