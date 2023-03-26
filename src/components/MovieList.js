import React from "react";
import { Container, Flex, Box, SimpleGrid } from "@chakra-ui/react";

const MovieList = (props) => {
  return (
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
      {props.children}
    </Flex>
  );
};

export default MovieList;
