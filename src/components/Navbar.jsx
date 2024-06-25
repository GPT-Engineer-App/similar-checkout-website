import { Box, Flex, Button, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex alignItems="center">
        <Link as={RouterLink} to="/" fontSize="lg" fontWeight="bold" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" fontSize="lg" fontWeight="bold" mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" fontSize="lg" fontWeight="bold">
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