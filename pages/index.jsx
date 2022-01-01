import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "../src/section/details";
import Cart from "../src/section/cart";

function HomePage() {
  return (
    <Container maxW={"container.xl"} p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}

export default HomePage;
