import { Container, Box, Text, VStack, HStack, Button, Heading, Image, IconButton, Flex, Spacer, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" bg="blue.600" color="white" p={4} align="center">
        <Heading size="lg">Chemtech Labs</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" id="home" bg="gray.100" p={10} textAlign="center">
        <VStack spacing={4}>
          <Heading size="2xl">Welcome to Chemtech Labs</Heading>
          <Text fontSize="lg">Your trusted partner in chemical testing and analysis.</Text>
          <Button colorScheme="blue" size="lg">
            Learn More
          </Button>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box as="section" id="services" p={10}>
        <Heading size="xl" mb={6} textAlign="center">
          Our Services
        </Heading>
        <HStack spacing={8} justify="center">
          <VStack spacing={4} p={4} borderWidth={1} borderRadius="md">
            <Image src="https://images.unsplash.com/photo-1627817471035-3333a9ece240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMGFuYWx5c2lzfGVufDB8fHx8MTcxNTgwNDgxNHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
            <Heading size="md">Chemical Analysis</Heading>
            <Text>High-quality chemical analysis services for various industries.</Text>
          </VStack>
          <VStack spacing={4} p={4} borderWidth={1} borderRadius="md">
            <Image src="https://images.unsplash.com/photo-1583911860071-a2638580e8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwdGVzdGluZ3xlbnwwfHx8fDE3MTU4MDQ4MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
            <Heading size="md">Environmental Testing</Heading>
            <Text>Comprehensive environmental testing to ensure compliance and safety.</Text>
          </VStack>
          <VStack spacing={4} p={4} borderWidth={1} borderRadius="md">
            <Image src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXRlcmlhbCUyMHRlc3Rpbmd8ZW58MHx8fHwxNzE1ODA0ODE1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
            <Heading size="md">Material Testing</Heading>
            <Text>Reliable material testing services for quality assurance.</Text>
          </VStack>
        </HStack>
      </Box>

      {/* About Section */}
      <Box as="section" id="about" bg="gray.100" p={10} textAlign="center">
        <VStack spacing={4}>
          <Heading size="xl">About Us</Heading>
          <Text fontSize="lg">Chemtech Labs is a leading provider of chemical testing and analysis services. With over 20 years of experience, we are committed to delivering accurate and reliable results to our clients.</Text>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" p={10} textAlign="center">
        <VStack spacing={4}>
          <Heading size="xl">Contact Us</Heading>
          <Text fontSize="lg">Have questions? Get in touch with us!</Text>
          <Button colorScheme="blue" size="lg">
            Contact Now
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" bg="blue.600" color="white" p={4} align="center" justify="center">
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
        </HStack>
        <Spacer />
        <Text>&copy; 2023 Chemtech Labs. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;
