import { useCallback, type SetStateAction } from "react";
import type { Player } from "./Imposter";
import { PlayerCard } from "./PlayerCard";

type PlayersProps = {
  readonly players: Player[];
  readonly setPlayers: (stateUpdater: SetStateAction<Player[]>) => void;
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
    <>
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
    </>
  );
};
