import React from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { ModalCreditItem, MovieItem, SearchItem } from "./item";
import { ApiError } from "./error";
import { Item } from "./item";

export const MovieList = (props) => {
  return (
    <Box>
      {!props.movies && <ApiError />}
      {props.movies && (
        <Box
          display='flex'
          color="black"
          textAlign="center"
          overflowX="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          gap="20px"
        >
          {props.movies.map((movie) => (
            <Item
              key={movie.id}
              adult={movie.adult}
              id={movie.id}
              title={movie.title}
              genres={movie.genre_ids}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              popularity={movie.popularity}
              thumbnail={movie.poster_path}
              // maximum={props.maximum ? props.maximum : null}
              // minimum={props.minimum ? props.minimum : null}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export const SearchList = (props) => {
  return (
    <Box>
      {!props.searchResult && <ApiError />}
      {props.searchResult && (
        <Box display="flex" flexWrap="wrap" gap="20px">
          {props.searchResult.map((result) => (
            <Item
              key={result.id}
              adult={result.adult}
              id={result.id}
              title={result.title}
              genres={result.genre_ids}
              overview={result.overview}
              release_date={result.release_date}
              vote_average={result.vote_average}
              vote_count={result.vote_count}
              popularity={result.popularity}
              thumbnail={result.poster_path}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export const CreditList = (props) => {
  return (
    <Box>
      {!props.creditResult && <ApiError />}
      {props.creditResult && (
        <Box display="flex" flexWrap="wrap" gap="20px">
          {/* <SimpleGrid minChildWidth='130px' spacingX="15px" spacingY="20px"> */}
          {props.creditResult.map(
            (credit) =>
              credit.popularity >= 10 && (
                <ModalCreditItem
                  key={credit.id}
                  thumbnail={credit.profile_path}
                  name={credit.name}
                  character={credit.character}
                  popularity={credit.popularity}
                />
              )
          )}
          {/* </SimpleGrid> */}
        </Box>
      )}
    </Box>
  );
};
