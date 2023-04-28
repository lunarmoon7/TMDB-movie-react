import { Badge, Box } from "@chakra-ui/react";

const Movierate = (props) => {
  return (
    <Box position="absolute" zIndex="1" top="2%" right="5%">
      <Badge borderRadius="full" px="2" bg="blackAlpha.700" color="white">
        {Math.ceil(props.vote_average * 10) / 10}
      </Badge>
    </Box>
  );
};

export default Movierate;
