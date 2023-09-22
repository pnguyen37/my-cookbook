import { Flex, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      px={20}
      py={8}
      height="60px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      alignItems={"center"}
      zIndex={2}
      position="sticky"
    >
      <Flex justifyContent="space-between" width="100%">
        <Text fontSize="xl" fontWeight="bold">
          <Link href="/">Cookbook</Link>
        </Text>
        <Flex justifyContent="right" width="50%" gap={4}>
          <Text fontSize="xl" >
            <Link href="recipes">Browse Recipes</Link>
          </Text>
          <Divider orientation="vertical" border="1px solid lightgrey" />
          <Text fontSize="xl" >
            <Link href="/ratings">View Ratings</Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
