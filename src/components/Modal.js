import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { ModalItem } from "./item";

export const MovieModal = (props) => {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen} size="xl">
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="auto"
        backdropBlur="10px"
      />
      <ModalContent bg='blackAlpha.700' minW='900px'>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalItem
            adult={props.adult}
            id={props.id}
            title={props.title}
            overview={props.overview}
            release_date={props.release_date}
            vote_average={props.vote_average}
            vote_count={props.vote_count}
            popularity={props.popularity}
            thumbnail={props.thumbnail}
          />
        </ModalBody>
        <ModalFooter>
          {/* <Button onClick={props.onClose}>Close</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
