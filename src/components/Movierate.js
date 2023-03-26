import { Badge, Box } from "@chakra-ui/react";

const Movierate = (props) => {
  return (
    <Box position="absolute" zIndex="1" top='2%' right='5%'>
      <Badge borderRadius="full" px="2" bg='blackAlpha.700' color='white'>
        {props.vote_average}
      </Badge>
    </Box>
  );
};

export default Movierate;
