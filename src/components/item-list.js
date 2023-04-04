import React from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { ModalCreditItem, MovieItem, SearchItem } from "./item";
import { ApiError } from "./error";

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
              adult={result.adult}
              id={result.id}
              title={result.title}
              overview={result.overview}
              release_date={result.release_date}
              vote_average={result.vote_average}
              vote_count={result.vote_count}
              popularity={result.popularity}
              thumbnail={result.poster_path}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export const CreditList = (props) => {
  return (
    <Box>
      {!props.creditResult && <ApiError />}
      {props.creditResult && (
        <SimpleGrid minChildWidth="100px" spacingX="35px" spacingY="20px">
          {props.creditResult.map(
            (credit) =>
              credit.popularity >= 15 && (
                <ModalCreditItem
                  key={credit.id}
                  thumbnail={credit.profile_path}
                  name={credit.name}
                  character={credit.character}
                  popularity={credit.popularity}
                />
              )
          )}
        </SimpleGrid>
      )}
    </Box>
  );
};
