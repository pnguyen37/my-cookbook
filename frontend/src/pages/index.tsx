import {
  Center,
  Heading,
  Button,
  Container,
  HStack,
  Spacer,
  Text,
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from 'next/link'
import NewPostModal from "@/components/RatingModal";
import Post from "@/components/RecipeCard";
import axios from "axios";
import { StyleProps } from "@chakra-ui/system";
import background from "@/images/anne-sophie-benoit-Fan_HlAfpu0-unsplash.jpg"

const backgroundImage: StyleProps = {
  backgroundImage: `${background.src}`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

export default function Home() {
  return (
    <Box sx={backgroundImage}>
      <Center h="100vh" gap="1rem">
        <VStack>
          <Heading paddingTop="100px" size="4xl">Welcome to Cookbook.</Heading>
          <Text fontSize="3xl">What would you like to do?</Text>
          <HStack gap={3}>
            <Button>
              <Link href="/recipes">Browse Recipes</Link>
            </Button>
            <Button>
              <Link href="/ratings">View Ratings</Link>
            </Button>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
}
