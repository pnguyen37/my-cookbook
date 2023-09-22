import {
  Card,
  CardBody,
  Image,
  VStack,
  Heading,
  Text,
  Flex,
  Stack,
  Collapse,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  image: string;
  meal: string;
  instructions: string;
  rating: number;
  ranking: number;
}

const RecipeCard = ({ image, meal, instructions, rating, ranking }: Props) => {
  const [instructOpened, setInstructOpened] = useState(false);

  return (
    <Card width="100%">
      <CardBody px={"48px"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex gap={"48px"} width="80%" alignItems={"center"}>
            <Heading size="xl">{ranking}</Heading>
            <Stack justifyContent={"left"}>
              <Heading textAlign={"left"} size="md">
                {meal}
              </Heading>
              <Text
                onClick={() => setInstructOpened(!instructOpened)}
                cursor="pointer"
              >
                Instructions
              </Text>
              <Collapse in={instructOpened}>
                <Text>{instructions}</Text>
              </Collapse>
            </Stack>
          </Flex>
          <Heading size="lg">{rating}</Heading>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
