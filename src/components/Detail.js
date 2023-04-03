import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export const Detail = (props) => {
  
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen} size='xl' isCentered>
      <ModalOverlay bg='blackAlpha.600' backdropFilter='auto' backdropBlur='10px' />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{props.overview}</ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
