import { Flex, Box, Text, LinkBox, LinkOverlay, Image } from "@chakra-ui/react";
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
  <Box minW="150px" textAlign="center" ml={3}>
    {/* <Flex direction="row" w="100%" h={7} mb={3} alignItems="center" justifyContent="center"> */}
      {/* <Box>{release_date}</Box> */}
    {/* </Flex> */}
    <LinkBox cursor="pointer">
      <Image
        w="100%"
        h="300px"
        objectFit="contain"
        src={`${TMDB_POSTER_URL}${thumbnail}`}
        alt={title}
      />
    </LinkBox>
    {/* <Text>{overview}</Text> */}
  </Box>
);
