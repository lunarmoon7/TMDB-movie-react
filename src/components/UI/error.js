import { Box, Text, Center, Heading, Container } from "@chakra-ui/react";
import theme from "../../libs/theme";

export const ApiError = (props) => {
  return (
    <Box h="200px" border="0.3px solid gray" borderRadius="10px">
      <Center h="100%">
        <Text color={"gray"} fontFamily={theme.fonts} fontSize="3xl">
          There is no movie..
        </Text>
      </Center>
    </Box>
  );
};

export const ImageError = (props) => {
  return (
    <Box w="100%" h="100%" border="0.3px solid gray" borderRadius="10px">
      <Center h="100%">
        <Text color={"gray"} fontFamily={theme.fonts} fontSize="2xl">
          No Image
        </Text>
      </Center>
    </Box>
  );
};
