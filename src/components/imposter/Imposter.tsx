import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { Typography } from "@mui/material";
import { useState } from "react";
import { PlayersAndSettings } from "./players-and-settings/PlayersAndSettings";
import { useGetCategories } from "./select-category/use-get-categories";
import { SelectCategory } from "./select-category/SelectCategory";

export type TPlayer = {
  isActive: boolean;
  name: string;
};

export type TSettings = {
  imposterCount: number;
  selectImposterCountRandomly: boolean;
};

type TGameState = "initial" | "selectCategory" | "inProgress";

export const Imposter = () => {
  useGetCategories();
  const [players, setPlayers] = useLocalStorageState<TPlayer[]>("players", []);
  const [settings, setSettings] = useLocalStorageState<TSettings>("settings", {
    imposterCount: 1,
    selectImposterCountRandomly: false,
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [gameState, setGameSate] = useState<TGameState>("initial");

  if (gameState === "initial") {
    return (
      <PlayersAndSettings
        players={players}
        setPlayers={setPlayers}
        settings={settings}
        setSettings={setSettings}
        startGame={() => setGameSate("selectCategory")}
      />
    );
  }

  if (gameState === "selectCategory") {
    return (
      <SelectCategory
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    );
  }

  return <Typography>not implemented</Typography>;
};
