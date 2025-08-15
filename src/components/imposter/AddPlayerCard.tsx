import { IconButton, Stack, TextField } from "@mui/material";
import { useCallback, useState, type SetStateAction } from "react";
import type { Player } from "./Imposter";
import { Add } from "@mui/icons-material";

type AddPlayerCardProps = {
  readonly players: Player[];
  readonly setPlayers: (stateUpdater: SetStateAction<Player[]>) => void;
};

export const AddPlayerCard = (props: AddPlayerCardProps) => {
  const [newName, setNewName] = useState("");
  const addPlayer = useCallback(
    (name: string) => {
      setNewName("");
      props.setPlayers((curr) => [...curr, { name: name, isActive: true }]);
    },
    [props.setPlayers]
  );

  const doesPlayerNameAlreadyExist = useCallback(
    (newName: string) => {
      return props.players.findIndex((x) => x.name === newName) !== -1;
    },
    [props.players]
  );

  return (
    <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
      <TextField
        error={doesPlayerNameAlreadyExist(newName)}
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <IconButton
        onClick={() => addPlayer(newName)}
        size="large"
        disabled={doesPlayerNameAlreadyExist(newName) || newName === ""}
      >
        <Add />
      </IconButton>
    </Stack>
  );
};
