import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Properties {
  children: ReactNode;
}
function GameCardContainer({ children }: Properties) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
