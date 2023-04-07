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
import { UpcomingDate } from "./upcomingDate";
import { Genre } from './Genre';

const TMDB_POSTER_URL = config.TMDB_POSTER_URL;

export const Item = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box position="relative" w="150px" minW="150px" textAlign="center" onClick={onOpen}>
        {/* {props.maxinum && props.minimum && (
          <UpcomingDate maximum={props.maximum} minimum={props.minimum}/>
        )} */}
        <Movierate vote_average={props.vote_average} />
        <Box h='100%'>
          <LinkBox cursor="pointer" h="100%">
            {props.thumbnail && (
              <Image
                w="100%"
                objectFit="cover"
                src={`${TMDB_POSTER_URL}${props.thumbnail}`}
                alt={props.title}
                borderRadius="lg"
              />
            )}
            {props.thumbnail === null && <ImageError />}
          </LinkBox>
        </Box>
      </Box>

      <MovieModal
        onClose={onClose}
        isOpen={isOpen}
        adult={props.adult}
        id={props.id}
        title={props.title}
        genres={props.genres}
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
          <Box display='flex' flexWrap={'wrap'} gap='5px' mb={5}>
            {props.genres.map((genre) => (
              <Genre key={genre} id={genre}/>
            ))}
          </Box>
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
    </Box>
  );
};

export const ModalCreditItem = (props) => {
  return (
    <Box display="flex" flexDirection="column">
      <Card maxW="130px" textAlign="center">
        <CardBody p={0}>
          <LinkBox cursor="pointer">
            <Image
              w="100%"
              objectFit="cover"
              src={`${TMDB_POSTER_URL}${props.thumbnail}`}
              alt={props.name}
              borderRadius="lg"
            />
          </LinkBox>
        </CardBody>
      </Card>
      <Box maxW={"130px"} mt={2}>
        <Text fontFamily={theme.fonts} color="gray.200">
          {props.name}
        </Text>
        <Text fontFamily={theme.fonts} color="gray.400" fontSize={"sm"}>
          ({props.character})
        </Text>
      </Box>
    </Box>
  );
};

export const ModalSimilarMovieItem = (props) => {
  return <Box></Box>;
};
