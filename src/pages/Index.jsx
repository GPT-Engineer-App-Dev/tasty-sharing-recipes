import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, SimpleGrid, Divider, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = ({ recipes }) => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">Recipe Share</Heading>
            <HStack spacing={8}>
              <Link href="/" fontSize="lg">Home</Link>
              <Link href="#" fontSize="lg">Recipes</Link>
              <Link href="/submit" fontSize="lg">Submit a Recipe</Link>
              <Link href="#" fontSize="lg">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Section */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={6} textAlign="center">
          <Heading>Welcome to Recipe Share</Heading>
          <Text fontSize="lg">Discover and share amazing recipes from around the world. Whether you're a seasoned chef or a home cook, you'll find something to inspire your culinary adventures.</Text>
        </VStack>
      </Container>

      {/* Recipes Section */}
      <Container maxW="container.lg" py={10}>
        <Heading as="h2" size="xl" mb={6}>Latest Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{recipe.title}</Heading>
              {recipe.image && <Image src={recipe.image} alt={recipe.title} mt={4} />}
              <Text mt={4}>{recipe.ingredients}</Text>
              <Text mt={4}>{recipe.instructions}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; {new Date().getFullYear()} Recipe Share. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook size="24" /></Link>
              <Link href="#"><FaTwitter size="24" /></Link>
              <Link href="#"><FaInstagram size="24" /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;