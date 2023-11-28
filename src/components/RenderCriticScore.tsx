import { Badge } from "@chakra-ui/react";
interface Properties {
  score: number;
}

function RenderCriticScore({ score }: Properties) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="20px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
}

export default RenderCriticScore;
