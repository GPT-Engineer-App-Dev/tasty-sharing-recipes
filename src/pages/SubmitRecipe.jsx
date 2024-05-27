import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SubmitRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      instructions,
      image: image ? URL.createObjectURL(image) : null,
    };
    addRecipe(newRecipe);
    navigate("/");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} textAlign="center">
        <Heading>Submit a Recipe</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Recipe Title</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id="ingredients" isRequired>
              <FormLabel>Ingredients</FormLabel>
              <Textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </FormControl>
            <FormControl id="instructions" isRequired>
              <FormLabel>Instructions</FormLabel>
              <Textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Upload Image</FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Recipe Image"
                  mt={4}
                  boxSize="200px"
                  objectFit="cover"
                />
              )}
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Submit Recipe
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;