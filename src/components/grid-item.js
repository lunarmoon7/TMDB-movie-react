import { Center, Flex, Box, Text, LinkBox, LinkOverlay, Image } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import TMDB from "../api/apicall";
import config from "../api/apikey";

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
  <Box minW="150px" textAlign="center" mr={3}>
    <LinkBox cursor="pointer">
      <Image
        w="100%"
        objectFit="contain"
        src={`${TMDB_POSTER_URL}${thumbnail}`}
        alt={title}
        borderRadius='lg'
      />
    </LinkBox>
  </Box>
);
