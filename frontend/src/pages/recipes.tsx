import {
  Heading,
  Button,
  Container,
  HStack,
  Input,
  VStack,
  Box,
  Tooltip
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { Recipe } from "../interfaces/responses";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

export default function recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [likedMode, setLikedMode] = useState(false);

  async function fetchData() {
    await axios
      .get<Recipe[]>(`http://localhost:8080/recipes/`)
      .then(function (response) {
        setRecipes(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setError("Error loading recipes.");
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = () => {
    async function searchData() {
      await axios
        .get<Recipe[]>(`http://localhost:8080/recipes/${query}`)
        .then(function (response) {
          setRecipes(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setError("Error loading recipes.");
        });
      setQuery("");
    }
    searchData();
  };

  const showLiked = () => {
    setLikedMode(!likedMode)
    fetchData();
  };

  return (
    <div>
      <Container marginTop={10} maxW="container.lg">
        <VStack gap={3}>
          <Heading size="md">
            Look up recipes to your favorite dishes by searching below.
          </Heading>
          <HStack>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              w="500px"
              border={"2px solid lightgrey"}
              placeholder="Ex: tacos"
            />
            <Button onClick={handleSubmit}>Submit</Button>
            <Tooltip hasArrow label="Show Liked Recipes" >
              <StarIcon
                color={likedMode ? "yellow.600" : "lightgrey"}
                cursor="pointer"
                onClick={showLiked}
                fontSize="lg"
              />
            </Tooltip>
          </HStack>
          <Heading size="sm">
            To rate a recipe, click on the current rating.
          </Heading>
        </VStack>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={4}
          marginTop="40px"
        >
          {recipes.map((recipe, index) => (
            <RecipeCard
              recipeID={recipe._id}
              image={recipe.image}
              meal={recipe.meal}
              instructions={recipe.instructions}
              rating={recipe.rating}
              likedMode={likedMode}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
}
