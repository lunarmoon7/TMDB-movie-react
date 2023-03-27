import { InputGroup, Input, InputLeftElement, Box } from "@chakra-ui/react";
import { SearchIcon, Search2Icon } from "@chakra-ui/icons";
import TMDB from "../api/apicall";
import { useRef, useState } from "react";

const Searchbar = (props) => {
  const keywordRef = useRef();
  const [enteredKeyword, setEnteredKeyword] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setEnteredKeyword(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.searchHandler(enteredKeyword, e.keyCode);
      setEnteredKeyword("");
    }
  };

  return (
    <Box>
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search here..."
          borderRadius={50}
          onChange={changeHandler}
          onKeyDown={enterHandler}
          ref={keywordRef}
        />
      </InputGroup>
    </Box>
  );
};

export default Searchbar;
