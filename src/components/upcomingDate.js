import { Badge, Box } from "@chakra-ui/react";

export const upcomingDate = (props) => (
  <Box position="absolute" zIndex="1" top="2%" right="5%">
    <Badge borderRadius="full" px="2" bg="blackAlpha.700" color="white">
        {props.minimum} ~ {props.maximum}
    </Badge>
  </Box>
);
