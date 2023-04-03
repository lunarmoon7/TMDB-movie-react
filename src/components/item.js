import {
  Center,
  Flex,
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  Card,
  CardBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import TMDB from "../api/apicall";
import config from "../api/apikey";
import Movierate from "./Movierate";
import { ImageError } from "./error";
import { Detail } from "./Detail";
import { useState } from "react";

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
  // onClick={onOpen}
  <Card position="relative" minW="150px" textAlign="center" mr={3}>
    <Movierate vote_average={vote_average} />
    <CardBody p={0}>
      <LinkBox cursor="pointer" h="100%">
        <Image
          w="100%"
          objectFit="cover"
          src={`${TMDB_POSTER_URL}${thumbnail}`}
          alt={title}
          borderRadius="lg"
        />
      </LinkBox>
    </CardBody>
  </Card>
);

export const SearchItem = ({
  adult,
  id,
  title,
  overview,
  release_date,
  vote_average,
  vote_count,
  popularity,
  thumbnail,
}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="relative" textAlign="center" onClick={onOpen}>
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
      <Detail
        onClose={onClose}
        isOpen={isOpen}
        adult={adult}
        id={id}
        title={title}
        overview={overview}
        release_date={release_date}
        vote_average={vote_average}
        vote_count={vote_count}
        popularity={popularity}
      />
    </>
  );
};
