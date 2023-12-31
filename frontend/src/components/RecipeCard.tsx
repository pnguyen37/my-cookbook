import {
  Card,
  CardBody,
  Image,
  VStack,
  Heading,
  Text,
  Collapse,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import RatingModal from "./RatingModal";

interface Props {
  recipeID: string;
  image: string;
  meal: string;
  instructions: string;
  rating: number;
  likedMode: boolean
}

const RecipeCard = ({ recipeID, image, meal, instructions, rating, likedMode }: Props) => {
  const [instructOpened, setInstructOpened] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (likedMode && !isLiked) {
    return null;
  }

  return (
    <Card maxW="sm">
      <StarIcon
        color={isLiked ? "yellow.500" : "lightgrey"}
        margin="1"
        position="absolute"
        bottom="3"
        right="3"
        onClick={() => setIsLiked(!isLiked)}
        cursor="pointer"
      />
      <CardBody p="3">
        <VStack spacing={1}>
          {image !== "none" && (
            <Image
              src={image}
              objectFit={"cover"}
              borderRadius="10px"
              width="100%"
              height="200px"
            />
          )}
          <Heading paddingTop={2} size="md">
            {meal}
          </Heading>
          <Text
            onClick={() => setInstructOpened(!instructOpened)}
            cursor="pointer"
            lineHeight={0.7}
          >
            Instructions
          </Text>
          <Collapse in={instructOpened}>
            <Text>{instructions}</Text>
          </Collapse>
          <Text cursor="pointer" onClick={() => setRatingOpen(true)}>
            {rating}
          </Text>
          <RatingModal
            recipeID={recipeID}
            isOpen={ratingOpen}
            onClose={() => setRatingOpen(false)}
          />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
