import { Box, Center, Text } from "@chakra-ui/react";
import { HoverSection } from "../Section";
import theme from "../../libs/theme";

export const Hover = (props) => {
  return (
    <Center
      borderRadius={"lg"}
      position="absolute"
      w={"100%"}
      h={'100%'}
      opacity={props.onHover ? "1" : "0"}
      bottom={props.onHover ? "0%" : "-30%"}
      bg="blackAlpha.700"
      transition={"bottom ease 0.5s"}
      textAlign={"center"}
      textOverflow={"ellipsis"}
      cursor="pointer"
      backdropFilter="auto"
      backdropBlur="5px"
    >
      <Text
        fontFamily={theme.fonts}
        fontWeight={"bold"}
        color={"white"}
        padding={"10px"}
      >
        {props.title}
      </Text>
    </Center>

    // <HoverSection>
    //     <Box>{props.title}</Box>
    // </HoverSection>
  );
};
