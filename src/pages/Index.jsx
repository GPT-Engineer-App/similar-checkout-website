import { Container, Box, VStack, HStack, Text, Input, Button, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { FaCreditCard, FaUser, FaCalendarAlt, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">Checkout</Text>
          <FormControl id="name">
            <FormLabel>Name on Card</FormLabel>
            <HStack>
              <Box as={FaUser} />
              <Input placeholder="John Doe" />
            </HStack>
          </FormControl>
          <FormControl id="cardNumber">
            <FormLabel>Card Number</FormLabel>
            <HStack>
              <Box as={FaCreditCard} />
              <Input placeholder="1234 5678 9012 3456" />
            </HStack>
          </FormControl>
          <HStack spacing={4}>
            <FormControl id="expiryDate">
              <FormLabel>Expiry Date</FormLabel>
              <HStack>
                <Box as={FaCalendarAlt} />
                <Select placeholder="MM">
                  {[...Array(12).keys()].map((month) => (
                    <option key={month} value={month + 1}>
                      {month + 1}
                    </option>
                  ))}
                </Select>
                <Select placeholder="YY">
                  {[...Array(10).keys()].map((year) => (
                    <option key={year} value={year + 23}>
                      {year + 23}
                    </option>
                  ))}
                </Select>
              </HStack>
            </FormControl>
            <FormControl id="cvv">
              <FormLabel>CVV</FormLabel>
              <HStack>
                <Box as={FaLock} />
                <Input placeholder="123" />
              </HStack>
            </FormControl>
          </HStack>
          <Button colorScheme="blue" size="lg" width="100%">Pay Now</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;