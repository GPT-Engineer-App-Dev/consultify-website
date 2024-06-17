import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Consulting Services
        </Heading>
        <Text fontSize="lg" textAlign="center">
          We provide expert consulting services to help your business thrive. Our team of experienced professionals is here to guide you every step of the way.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
        <Box boxSize="sm">
          <Image src="/images/consulting.jpg" alt="Consulting" />
        </Box>
        <Flex direction="column" align="center" justify="center" p={10}>
          <Heading size="lg" mb={4}>Our Services</Heading>
          <Text fontSize="md" textAlign="center" mb={4}>
            We offer a wide range of consulting services tailored to your needs, including business strategy, financial planning, and technology solutions.
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;