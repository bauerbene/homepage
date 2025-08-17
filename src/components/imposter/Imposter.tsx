import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { useCallback, useState } from "react";
import { PlayersAndSettings } from "./players-and-settings/PlayersAndSettings";
import { useGetCategories } from "./select-category/use-get-categories";
import { SelectCategory } from "./select-category/SelectCategory";
import { Game } from "./game/Game";

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
  const allCategories = useGetCategories();
  const [players, setPlayers] = useLocalStorageState<TPlayer[]>("players", []);
  const [settings, setSettings] = useLocalStorageState<TSettings>("settings", {
    imposterCount: 1,
    selectImposterCountRandomly: false,
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [gameState, setGameSate] = useState<TGameState>("initial");

  const [currentImposters, setCurrentImposters] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>("");

  const getRandomUnique = (arr: string[], n: number): string[] => {
    if (n >= arr.length) return [...arr];

    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
  };

  const startGame = useCallback(() => {
    // word
    const allPossibleWords = allCategories
      .filter((x) => selectedCategories.includes(x.categoryName))
      .flatMap((x) => x.words);
    const selectedWord =
      allPossibleWords[Math.floor(Math.random() * allPossibleWords.length)];
    setCurrentWord(selectedWord);
    // imposter count
    let imposterCount = settings.imposterCount;
    if (settings.selectImposterCountRandomly) {
      imposterCount = Math.floor(
        Math.random() * players.filter((x) => x.isActive).length
      );
    }
    if (imposterCount === 0) {
      imposterCount = 1;
    }
    const imposters = getRandomUnique(
      players.filter((x) => x.isActive).map((x) => x.name),
      imposterCount
    );
    console.log(imposters);
    console.log(imposterCount);
    setCurrentImposters(imposters);
    setGameSate("inProgress");
  }, [
    getRandomUnique,
    players,
    settings,
    setCurrentImposters,
    setCurrentWord,
    allCategories,
    setGameSate,
  ]);

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
        startGame={startGame}
        back={() => setGameSate("initial")}
      />
    );
  }

  return (
    <Game
      playerNames={players.filter((x) => x.isActive).map((x) => x.name)}
      imposterNames={currentImposters}
      word={currentWord}
      endGame={() => setGameSate("initial")}
    />
  );
};
