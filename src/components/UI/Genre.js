import { Badge, Box } from "@chakra-ui/react";

const genres = {
  28: { type: "Action", color: "teal" },
  12: { type: "Adventure", color: "blue" },
  16: { type: "Animation", color: "yellow" },
  35: { type: "Comedy", color: "purple" },
  80: { type: "Crime", color: "red" },
  99: { type: "Documentary", color: "gray" },
  18: { type: "Drama", color: "yellow" },
  10751: { type: "Family", color: "pink" },
  14: { type: "Fantasy", color: "purple" },
  36: { type: "History", color: "yellow" },
  27: { type: "Horror", color: "gray" },
  10402: { type: "Music", color: "yellow" },
  9648: { type: "Mystery", color: "purple" },
  10749: { type: "Romance", color: "pink" },
  878: { type: "SF", color: "cyan" },
  10770: { type: "TV Movie", color: "whiteAlpha" },
  53: { type: "Thriller", color: "red" },
  10752: { type: "War", color: "yellow" },
  37: { type: "Western", color: "yellow" },
};

export const Genre = (props) => (
  <Box>
    <Badge
      borderRadius="full"
      px="3"
      variant="outline"
      colorScheme={genres[props.id]["color"]}
    >
      {genres[props.id]["type"]}
    </Badge>
  </Box>
);
