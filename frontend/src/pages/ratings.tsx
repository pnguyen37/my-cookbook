import RatingCard from "@/components/RatingCard";
import {
  Center,
  Heading,
  Button,
  Container,
  HStack,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Recipe } from "@/interfaces/responses";

export default function ratings() {
  const [ratings, setRatings] = useState<Recipe[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get<Recipe[]>(`http://localhost:8080/ratings`)
      .then(function (response) {
        setRatings(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setError("Error loading recipes.");
      });
  }, []);

  return (
    <Container marginTop={10} maxW="container.lg">
      <VStack gap={3}>
        <Heading size="lg">Top 20 Highest-Rated Recipes</Heading>
        {ratings.map((rating, index) => (
          <RatingCard
            image={rating.image}
            meal={rating.meal}
            instructions={rating.instructions}
            rating={rating.rating}
            ranking={index + 1}
          />
        ))}
      </VStack>
    </Container>
  );
}
