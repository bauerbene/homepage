import { Button, Stack, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { PlayerCard } from "./PlayerCard";

type GameProps = {
  readonly imposterNames: string[];
  readonly playerNames: string[];
  readonly word: string;
  readonly endGame: () => void;
};

export const Game = (props: GameProps) => {
  const [currentPlayer, setCurrentPlayer] = useState(props.playerNames[0]);
  const [isFinished, setIsFinished] = useState(false);
  const [cardIsFlipped, setCardIsFlipped] = useState(false);

  const getWord = useCallback(() => {
    if (props.imposterNames.includes(currentPlayer)) {
      return "Imposter";
    }
    return props.word;
  }, [props.imposterNames, props.word, currentPlayer]);

  const nextPlayer = useCallback(() => {
    const currentIndex = props.playerNames.findIndex(
      (x) => x === currentPlayer
    );
    if (currentIndex === props.playerNames.length - 1) {
      setIsFinished(true);
    }
    setCurrentPlayer(props.playerNames[currentIndex + 1]);
  }, [props.playerNames, currentPlayer]);

  return (
    <Stack
      sx={{
        height: "100vh",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {isFinished ? (
        <Stack spacing={8}>
          <Typography variant="h5">Los gehts</Typography>
          <Button variant="contained" onClick={props.endGame}>
            Spiel beenden
          </Button>
        </Stack>
      ) : (
        <Stack spacing={8} sx={{ width: "100%", p: 2 }}>
          <PlayerCard
            playerName={currentPlayer}
            word={getWord()}
            flipped={cardIsFlipped}
            setFlipped={setCardIsFlipped}
          />
          <Button
            onClick={nextPlayer}
            variant="contained"
            disabled={cardIsFlipped}
          >
            Weiter
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
