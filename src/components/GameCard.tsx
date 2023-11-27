import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import RenderCriticScore from "./renderCriticScore";

interface properties {
  game: Game;
}

function GameCard({ game }: properties) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading font-size="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <RenderCriticScore score={game.metacritic}></RenderCriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
