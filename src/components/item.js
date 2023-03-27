import {
  Center,
  Flex,
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import TMDB from "../api/apicall";
import config from "../api/apikey";
import Movierate from "./Movierate";
import { ImageError } from "./error";

const TMDB_POSTER_URL = config.TMDB_POSTER_URL;

export const MovieItem = ({
  adult,
  id,
  title,
  overview,
  release_date,
  vote_average,
  vote_count,
  popularity,
  thumbnail,
}) => (
  <Box position="relative" minW="150px" textAlign="center" mr={3}>
    <Movierate vote_average={vote_average} />
    <LinkBox cursor="pointer" h="100%">
      <Image
        w="100%"
        objectFit="contain"
        src={`${TMDB_POSTER_URL}${thumbnail}`}
        alt={title}
        borderRadius="lg"
      />
    </LinkBox>
  </Box>
);

export const SearchItem = ({ id, title, thumbnail, vote_average }) => (
  <Box position="relative" textAlign="center">
    <Movierate vote_average={vote_average} />
    <LinkBox cursor="pointer" h="100%">
      {thumbnail && (
        <Image
          w="100%"
          objectFit="cover"
          src={`${TMDB_POSTER_URL}${thumbnail}`}
          alt={title}
          borderRadius="lg"
        />
      )}
      {thumbnail === null && <ImageError />}
    </LinkBox>
  </Box>
);
