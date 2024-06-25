import { Container, Box, VStack, HStack, Text, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { FaCreditCard, FaUser, FaCalendarAlt, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Transactions</Text>
      <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg" mb={4}>
        <VStack spacing={4} align="stretch">
          <Text fontSize="xl" fontWeight="bold">Start to do trade</Text>
          <FormControl id="currency">
            <FormLabel>Currency</FormLabel>
            <Select placeholder="Select currency">
              <option value="CNY">CNY</option>
              <option value="USD">USD</option>
            </Select>
          </FormControl>
          <FormControl id="transactionType">
            <FormLabel>Transaction Type</FormLabel>
            <Select placeholder="Select transaction type">
              <option value="GOODS">GOODS</option>
              <option value="SERVICES">SERVICES</option>
            </Select>
          </FormControl>
          <FormControl id="transactionAmount">
            <FormLabel>Transaction Amount</FormLabel>
            <Input placeholder="Enter Amount" />
          </FormControl>
          <Button colorScheme="blue" size="lg" width="100%">Payment</Button>
        </VStack>
      </Box>
      <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg" mb={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>Terminal Info</Text>
        <Text>There will show the terminal info</Text>
      </Box>
      <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Text fontSize="xl" fontWeight="bold" mb={4}>Terminal Management</Text>
        <Text>There will show the terminal update process and result</Text>
      </Box>
    </Container>
  );
};

export default Index;