import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/img-url";
import PlatformIconList from "./PlatformIconList";
import RenderCriticScore from "./RenderCriticScore";

interface properties {
  game: Game;
}

function GameCard({ game }: properties) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
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
