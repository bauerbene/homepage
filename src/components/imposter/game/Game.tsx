import { Button, Stack, Typography } from "@mui/material";
import { useCallback, useState } from "react";

type GameProps = {
  readonly imposterNames: string[];
  readonly playerNames: string[];
  readonly word: string;
};

export const Game = (props: GameProps) => {
  const [currentPlayer, setCurrentPlayer] = useState(props.playerNames[0]);
  const [isFinished, setIsFinished] = useState(false);

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
      sx={{ height: "100vh", flexDirection: "column", overflow: "hidden" }}
    >
      {isFinished ? (
        <Typography>Los gehts</Typography>
      ) : (
        <>
          <Typography>{currentPlayer}</Typography>
          <Typography>{getWord()}</Typography>
          <Button onClick={nextPlayer}>Weiter</Button>
        </>
      )}
    </Stack>
  );
};
