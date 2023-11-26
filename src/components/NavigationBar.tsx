import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/epic-games-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavigationBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavigationBar;
