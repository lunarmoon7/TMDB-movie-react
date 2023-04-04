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
  HStack,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import TMDB from "../api/apicall";
import config from "../api/apikey";
import Movierate from "./Movierate";
import { ImageError } from "./error";
import { MovieModal } from "./Modal";
import theme from "../libs/theme";
import { MovieDetailSection } from "./Section";

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
  onOpen=()=>{},
}) => (
  // onClick={onOpen}
  <Card position="relative" minW="150px" textAlign="center" mr={3} onClick={onOpen}>
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

export const SearchItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MovieItem
        adult={props.adult}
        id={props.id}
        title={props.title}
        overview={props.overview}
        release_date={props.release_date}
        vote_average={props.vote_average}
        vote_count={props.vote_count}
        popularity={props.popularity}
        thumbnail={props.thumbnail}
        onOpen={onOpen}
      />
      {/* <Box position="relative" textAlign="center" onClick={onOpen}>
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
      </Box> */}
      <MovieModal
        onClose={onClose}
        isOpen={isOpen}
        adult={props.adult}
        id={props.id}
        title={props.title}
        overview={props.overview}
        release_date={props.release_date}
        vote_average={props.vote_average}
        vote_count={props.vote_count}
        popularity={props.popularity}
        thumbnail={props.thumbnail}
      />
    </>
  );
};

export const ModalDetailItem = (props) => {
  return (
    <Box>
      <Flex alignItems="center">
        <Box maxW="500px">
          <Image
            src={`${TMDB_POSTER_URL}${props.thumbnail}`}
            alt={props.title}
          />
        </Box>
        <Box mt={5} ml={10}>
          <Flex alignItems="baseline" justifyContent="space-between" mb={3}>
            <Flex
              alignItems="baseline"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Heading mr={2} fontFamily={theme.fonts}>
                {props.title}
              </Heading>
              <Box>
                <Text mr={5}>{props.release_date}</Text>
              </Box>
            </Flex>
          </Flex>
          <Badge borderRadius="full" px="2" colorScheme="teal" mb={3}>
            {props.adult ? "Adult" : "ALL"}
          </Badge>
          <Box
            display="flex"
            alignItems={"baseline"}
            justifyContent="left"
            mb={3}
          >
            <Badge borderRadius="full" px={2} colorScheme="cyan">
              {props.vote_average}
            </Badge>
            <Box as="span" ml="1" color="gray.400" fontSize="sm">
              / {props.vote_count} votes
            </Box>
          </Box>
          <Box fontSize={"lg"}>{props.overview}</Box>
        </Box>
      </Flex>
      <Box mt={5}>Credit Section</Box>
      <Box>Similar Movie Section</Box>
    </Box>
  );
};

export const ModalCreditItem = (props) => {
  return <Box></Box>;
};

export const ModalSimilarMovieItem = (props) => {
  return <Box></Box>;
};
