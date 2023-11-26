import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/epic-games-logo.png";

function NavigationBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text> Nav Bar</Text>
    </HStack>
  );
}

export default NavigationBar;
