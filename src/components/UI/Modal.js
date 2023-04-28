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

import { useState, useEffect } from "react";
import { ModalCreditItem, ModalDetailItem } from "./item";
import {
  ModalCreditSection,
  ModalDetailSection,
  ModalSection,
  ModalSimilarMovieSection,
} from "../Section";
import { CreditList, SimilarList } from "../UI/item-list";

import TMDB from "../../api/apicall";
import config from "../../api/apikey";

const TMDB_POSTER_URL = config.TMDB_POSTER_URL;

export const MovieModal = (props) => {
  const [credits, setCredits] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const promiseHandler = (callType, setStateType) => {
    callType.then((data) => {
      if (setStateType === setCredits) {
        setStateType((prev) => {
          return [...data["cast"]];
        });
      } else if (setStateType === setSimilarMovies) {
        setStateType((prev) => {
          return [...data];
        });
      }
    });
  };

  useEffect(() => {
    promiseHandler(TMDB.getCredits(props.id), setCredits);
    promiseHandler(TMDB.getSimilarMovies(props.id), setSimilarMovies);
    // console.log(similarMovies);
  }, []);

  return (
    <Modal onClose={props.onClose} size="xl" isOpen={props.isOpen}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="auto"
        backdropBlur="10px"
      />
      <ModalContent bg="blackAlpha.700" maxW="1000px">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalSection>
            <ModalDetailSection>
              <ModalDetailItem
                adult={props.adult}
                id={props.id}
                title={props.title}
                genres={props.genres}
                overview={props.overview}
                release_date={props.release_date}
                vote_average={props.vote_average}
                vote_count={props.vote_count}
                popularity={props.popularity}
                thumbnail={props.thumbnail}
              />
            </ModalDetailSection>
            <ModalCreditSection heading={"Credits"}>
              <CreditList creditResult={credits} />
            </ModalCreditSection>
            <ModalSimilarMovieSection heading={"Similar Movies"}>
              <SimilarList similarMovies={similarMovies} />
            </ModalSimilarMovieSection>
          </ModalSection>
        </ModalBody>
        <ModalFooter>
          {/* <Button onClick={props.onClose}>Close</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
