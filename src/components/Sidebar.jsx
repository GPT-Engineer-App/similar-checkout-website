import { useState } from "react";
import { Box, VStack, Link, Text, Divider, Collapse, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaCreditCard, FaInfoCircle, FaTools, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const [isTerminalInfoOpen, setTerminalInfoOpen] = useState(false);
  const [isTerminalManagementOpen, setTerminalManagementOpen] = useState(false);

  const toggleTerminalInfo = () => setTerminalInfoOpen(!isTerminalInfoOpen);
  const toggleTerminalManagement = () => setTerminalManagementOpen(!isTerminalManagementOpen);

  return (
    <Box bg="gray.800" color="white" width="250px" p={4} height="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb={4}>Dspread Web Demo</Text>
      <VStack align="start" spacing={4}>
        <Link as={RouterLink} to="/" display="flex" alignItems="center">
          <FaCreditCard />
          <Text ml={2} fontSize="lg" fontWeight="bold">Transactions</Text>
        </Link>
        <Divider />
        <Box width="100%">
          <Box display="flex" justifyContent="space-between" alignItems="center" onClick={toggleTerminalInfo} cursor="pointer">
            <Box display="flex" alignItems="center">
              <FaInfoCircle />
              <Text ml={2} fontSize="lg" fontWeight="bold">Terminal Info</Text>
            </Box>
            <IconButton
              icon={isTerminalInfoOpen ? <FaChevronUp /> : <FaChevronDown />}
              size="sm"
              variant="ghost"
              aria-label="Toggle Terminal Info"
            />
          </Box>
          <Collapse in={isTerminalInfoOpen}>
            <VStack align="start" spacing={2} pl={4}>
              <Link as={RouterLink} to="/get-device-info">Get Device Info</Link>
              <Link as={RouterLink} to="/get-device-id">Get Device ID</Link>
            </VStack>
          </Collapse>
        </Box>
        <Divider />
        <Box width="100%">
          <Box display="flex" justifyContent="space-between" alignItems="center" onClick={toggleTerminalManagement} cursor="pointer">
            <Box display="flex" alignItems="center">
              <FaTools />
              <Text ml={2} fontSize="lg" fontWeight="bold">Terminal Management</Text>
            </Box>
            <IconButton
              icon={isTerminalManagementOpen ? <FaChevronUp /> : <FaChevronDown />}
              size="sm"
              variant="ghost"
              aria-label="Toggle Terminal Management"
            />
          </Box>
          <Collapse in={isTerminalManagementOpen}>
            <VStack align="start" spacing={2} pl={4}>
              <Link as={RouterLink} to="/update-emv-config">Update EMV Config</Link>
              <Link as={RouterLink} to="/update-device-firmware">Update Device Firmware</Link>
              <Link as={RouterLink} to="/switch-to-serial">Switch to Serial</Link>
            </VStack>
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;