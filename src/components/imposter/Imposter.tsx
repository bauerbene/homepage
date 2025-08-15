import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { Players } from "./Players";
import { AddPlayerCard } from "./AddPlayerCard";

export type Player = {
  isActive: boolean;
  name: string;
};

export const Imposter = () => {
  const [players, setPlayers] = useLocalStorageState<Player[]>("players", []);

  return (
    <>
      <Players players={players} setPlayers={setPlayers} />
      <AddPlayerCard players={players} setPlayers={setPlayers} />
    </>
  );
};
