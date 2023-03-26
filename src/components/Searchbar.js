import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon, Search2Icon } from "@chakra-ui/icons";

const Searchbar = (props) => {
  return (
    <InputGroup size='lg'>
      <InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.300'/>}/>
      <Input type='text' placeholder="Search here..." borderRadius={50}/>
    </InputGroup>
  );
};

export default Searchbar;
