import { useCallback, type SetStateAction } from "react";
import type { TPlayer } from "./Imposter";
import { PlayerCard } from "./PlayerCard";
import { Stack } from "@mui/material";

type PlayersProps = {
  readonly players: TPlayer[];
  readonly setPlayers: (stateUpdater: SetStateAction<TPlayer[]>) => void;
};

export const Players = (props: PlayersProps) => {
  const setPlayerActiveState = useCallback(
    (activeState: boolean, name: string) => {
      props.setPlayers((curr) => {
        const playerToChange = curr.find((x) => x.name === name);
        if (playerToChange) {
          playerToChange.isActive = activeState;
        }

        return [...curr];
      });
    },
    [props.setPlayers]
  );

  const deletePlayer = useCallback(
    (name: string) => {
      props.setPlayers((curr) => {
        const indexToDelete = curr.findIndex((x) => x.name === name);
        if (indexToDelete !== -1) {
          curr.splice(indexToDelete, 1);
        }
        return [...curr];
      });
    },
    [props.setPlayers]
  );

  return (
    <Stack sx={{ overflow: "scroll", height: "100%" }} spacing={2}>
      {props.players.map((player, index) => (
        <PlayerCard
          key={index}
          deletePlayer={() => deletePlayer(player.name)}
          setActiveState={(state: boolean) =>
            setPlayerActiveState(state, player.name)
          }
          isActive={player.isActive}
          name={player.name}
        />
      ))}
    </Stack>
  );
};
