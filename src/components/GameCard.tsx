import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface properties {
  game: Game;
}

function GameCard({ game }: properties) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading font-size="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
