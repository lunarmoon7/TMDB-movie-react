import { ChakraProvider, Box, Flex, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import theme from "./libs/theme";
import ThemeToggleButton from "./components/theme-toggle-button";
import TMDB from "./api/apicall";

const API_KEY = "69bea4bb33d62c0bf6b991c1b63dbbae";
const URL = "https://api.themoviedb.org/3/movie/";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // const getMovies = async () => {
  //   const json = await (await fetch(`${URL}popular?api_key=${API_KEY}`)).json();

  //   setMovies(json);
  //   setLoading(false);
  //   console.log(json);
  // };

  useEffect(() => {
    const json = TMDB.getPopularMovies();
    setMovies(json);
    console.log(json);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Container textAlign='center'fontSize={50}>TMDB</Container>
      <ThemeToggleButton />
      {/* <Flex
        boxSize={40}
        m={2}
        bg="tomato"
        borderColor="gray.200"
        align="center"
        justify="space-around"
      >
        <Box as="button" borderRadius="md" bg="teal.100" color="white" boxSize={10}>
          A
        </Box>
        <Box as="button" borderRadius="md" bg="gray.500" color="white" boxSize={10}>
          B
        </Box>
      </Flex> */}
    </ChakraProvider>
  );
};

export default App;
