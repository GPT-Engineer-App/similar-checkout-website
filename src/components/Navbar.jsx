import { Box, Flex, Button, Link, Spacer, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, List, ListItem, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [devices, setDevices] = useState([]);

  const handleConnect = async () => {
    try {
      const bluetoothDevices = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      setDevices([bluetoothDevices]);
      onOpen();
    } catch (error) {
      console.error("Error scanning devices:", error);
      alert("Failed to scan for Bluetooth devices. Please ensure Bluetooth is enabled and try again.");
    }
  };

  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex alignItems="center">
        <Button variant="ghost" display={{ base: "block", md: "none" }} mr={4}>
          <Box as="span" fontSize="2xl">&#9776;</Box>
        </Button>
        <Spacer />
        <Button colorScheme="blue" size="md" onClick={handleConnect}>
          Connect
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Available Devices</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              {devices.map((device, index) => (
                <ListItem key={index}>
                  <Text>{device.name || "Unnamed Device"}</Text>
                  <Button size="sm" colorScheme="blue" mt={2}>
                    Connect
                  </Button>
                </ListItem>
              ))}
            </List>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;