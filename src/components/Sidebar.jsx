import { Box, VStack, Link, Text, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCreditCard, FaInfoCircle, FaCog, FaExchangeAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" width="250px" p={4} height="100vh">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Dspread Web Demo</Text>
      <VStack align="start" spacing={4}>
        <Link as={RouterLink} to="/" display="flex" alignItems="center">
          <FaCreditCard />
          <Text ml={2}>Transactions</Text>
        </Link>
        <Divider />
        <Box>
          <Text fontSize="lg" fontWeight="bold">Terminal Info</Text>
          <VStack align="start" spacing={2} pl={4}>
            <Link as={RouterLink} to="/get-device-info">Get Device Info</Link>
            <Link as={RouterLink} to="/get-device-id">Get Device ID</Link>
          </VStack>
        </Box>
        <Divider />
        <Box>
          <Text fontSize="lg" fontWeight="bold">Terminal Management</Text>
          <VStack align="start" spacing={2} pl={4}>
            <Link as={RouterLink} to="/update-emv-config">Update EMV Config</Link>
            <Link as={RouterLink} to="/update-device-firmware">Update Device Firmware</Link>
            <Link as={RouterLink} to="/switch-to-serial">Switch to Serial</Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;