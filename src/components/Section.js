import { motion } from "framer-motion";
import theme from "../libs/theme";

import {
  chakra,
  shouldForwardProp,
  Heading,
  Container,
} from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

export const Section = ({ children, delay = 0, styles = {}, heading }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
    style={styles}
  >
    <Container maxW="container.lg" pt={70}>
      <Heading as="h4" variant="page-title" mb={3} fontFamily={theme.fonts}>
        {heading}
      </Heading>
      {children}
    </Container>
  </StyledDiv>
);

export const SearchSection = ({
  children,
  delay = 0,
  styles = {},
  heading,
}) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
    style={styles}
  >
    <Container maxW="container.lg" pt={70}>
      <Heading as="h4" variant="page-title" mb={5} fontFamily={theme.fonts}>
        Found {heading} movies!
      </Heading>
      {children}
    </Container>
  </StyledDiv>
);
