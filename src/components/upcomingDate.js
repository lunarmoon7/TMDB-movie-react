import { Badge, Box } from "@chakra-ui/react";

export const UpcomingDate = (props) => (
  <Box position="absolute" zIndex="1" top="2%" left="5%">
    <Badge borderRadius="full" px="2" bg="blackAlpha.700" color="white">
        {props.minimum} ~ {props.maximum}
    </Badge>
  </Box>
);
