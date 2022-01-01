import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"}>
      <VStack spacing={3} alignItems={"flex-start"}>
        <Heading size={"2xl"}>Your Details</Heading>
        <Text>If you already have an account, click to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="New Delhi 110043" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Delhi" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">USA</option>
              <option value="india">India</option>
              <option value="china">China</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox defaultChecked>Ship to billing address</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button variant={"primary"} size={"lg"} w="full">
              Place Order
            </Button>
          </FormControl>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
