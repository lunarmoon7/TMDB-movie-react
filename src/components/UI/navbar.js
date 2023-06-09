import React from "react";
import {
  Container,
  Box,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../theme-toggle-button";
import theme from "../../libs/theme";
const LinkItem = ({ href, path, children }) => {
  const active = href === path;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <LinkBox href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </LinkBox>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      // position="fixed"
      as="nav"
      w="100%"
      pt={2}
      pb={2}
      mb={30}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading
            as="h1"
            size="lg"
            letterSpacing={"tighter"}
            fontFamily={theme.fonts}
          >
            <Link href="/">TMDB</Link>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          gap={"10px"}
        >
          <Link href="/upcoming">Upcoming</Link>
          <Link href="/toprated">Top Rated</Link>
          <Link href="/latest">Latest</Link>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link href="#">
                  <MenuItem as={Link}>Upcoming</MenuItem>
                </Link>
                <Link href="#">
                  <MenuItem as={Link}>Top Rated</MenuItem>
                </Link>
                <Link href="#">
                  <MenuItem as={Link}>Latest</MenuItem>
                </Link>
                <Link href="#">
                  <MenuItem as={Link}>View Source</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
