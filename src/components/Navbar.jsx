import { Box, Flex, Button, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex alignItems="center">
        <Button variant="ghost" display={{ base: "block", md: "none" }} mr={4}>
          <Box as="span" fontSize="2xl">&#9776;</Box>
        </Button>
        <Link as={RouterLink} to="/" fontSize="md" fontWeight="bold" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" fontSize="md" fontWeight="bold" mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" fontSize="md" fontWeight="bold">
          Contact
        </Link>
        <Spacer />
        <Button colorScheme="blue" size="md">
          Connect
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;