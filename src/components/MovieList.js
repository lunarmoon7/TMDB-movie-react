import React from "react";
import {
  Container,
  Flex,
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { MovieItem } from "./Movieitem";
import ApiError from "./Apierror";

const MovieList = (props) => {
  return (
    <Box>
      {!props.movies && <ApiError />}
      {props.movies && <Flex
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
}
    </Box>
  );
};

export default MovieList;
