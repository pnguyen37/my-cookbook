import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
import axios from "axios";

interface Props {
  recipeID: string;
  isOpen: boolean;
  onClose: () => void;
}

const NewPostModal = ({ recipeID, isOpen, onClose }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(5);

  function handleSubmit(e: any) {
    // Block the default form handler behavior.
    e.preventDefault();

    // Set isLoading to true while we make the API request.
    setIsLoading(true);

    axios
      .patch(`http://localhost:8080/recipes/${recipeID}`, {
        rating: sliderValue,
      })
      .then(function (response) {
        // handle success
        console.log(e.target.value)
        onClose();
        window.location.reload();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        setIsLoading(false);
      });
  }

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader>Tried this recipe? Share your opinion.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={12}>
              {/* <Input required name="title" placeholder="Rating" /> */}
              <VStack spacing={6} width="100%">
                <Text>  Rating: {sliderValue} </Text>
                <Slider
                  min={0}
                  max={10}
                  step={0.1}
                  value={sliderValue}
                  onChange={(newValue) => setSliderValue(newValue)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </VStack>
              <Textarea name="body" placeholder="Reason (Optional)" />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default NewPostModal;
