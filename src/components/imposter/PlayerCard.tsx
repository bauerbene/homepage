import { Delete } from "@mui/icons-material";
import { Checkbox, Card, IconButton, Stack, Typography } from "@mui/material";

type PlayerCardProps = {
  readonly isActive: boolean;
  readonly name: string;
  readonly setActiveState: (activeState: boolean) => void;
  readonly deletePlayer: () => void;
};

export const PlayerCard = (props: PlayerCardProps) => {
  return (
    <Card sx={{ width: "100%", overflow: "unset" }}>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Checkbox
          checked={props.isActive}
          onChange={(e) => props.setActiveState(e.target.checked)}
        />
        <Typography>{props.name}</Typography>
        <Stack direction="row" sx={{ justifyContent: "end", width: "100%" }}>
          <IconButton
            color="error"
            sx={{ justifySelf: "end" }}
            onClick={props.deletePlayer}
          >
            <Delete />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};
