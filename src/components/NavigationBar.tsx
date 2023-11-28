import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/epic-games-logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavigationBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavigationBar;
