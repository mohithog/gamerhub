import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface Props{
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre , selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre , selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6 , 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        paddingX={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton ></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
