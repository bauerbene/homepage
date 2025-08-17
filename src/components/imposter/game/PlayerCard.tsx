import { Box, Card, Typography } from "@mui/material";
import { type SetStateAction } from "react";

type PlayerCardProps = {
  readonly playerName: string;
  readonly word: string;
  readonly flipped: boolean;
  readonly setFlipped: (stateUpdater: SetStateAction<boolean>) => void;
};

export const PlayerCard = (props: PlayerCardProps) => {
  return (
    <Box sx={{ perspective: "1000px", width: "100%", height: "200px" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: props.flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "pointer",
        }}
        onClick={() => props.setFlipped((curr) => !curr)}
      >
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{props.playerName}</Typography>
        </Card>
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotateY(180deg)",
          }}
        >
          <Typography variant="h5">{props.word}</Typography>
        </Card>
      </Box>
    </Box>
  );
};
