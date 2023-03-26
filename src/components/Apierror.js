import { Box, Text, Center, Heading} from "@chakra-ui/react";
import theme from '../libs/theme'

const ApiError = (props) => {
  return (
    <Box h='200px' border="0.3px solid gray" borderRadius='10px'>
      <Center h='100%'>
        <Text color={'gray'} fontFamily={theme.fonts} fontSize='3xl'>There is no movie..</Text>
      </Center>
    </Box>
  );
};

export default ApiError;
