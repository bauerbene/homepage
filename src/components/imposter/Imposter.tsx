import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { Players } from "./Players";
import { AddPlayerCard } from "./AddPlayerCard";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Settings } from "./Settings";
import { useCallback } from "react";
import { Warning } from "@mui/icons-material";

export type TPlayer = {
  isActive: boolean;
  name: string;
};

export type TSettings = {
  imposterCount: number;
  selectImposterCountRandomly: boolean;
};

export const Imposter = () => {
  const [players, setPlayers] = useLocalStorageState<TPlayer[]>("players", []);
  const [settings, setSettings] = useLocalStorageState<TSettings>("settings", {
    imposterCount: 1,
    selectImposterCountRandomly: false,
  });

  const isConfigurationValid = useCallback(() => {
    const activePlayerCount = players.filter((x) => x.isActive).length;
    return (
      activePlayerCount >= 3 &&
      (settings.imposterCount < activePlayerCount ||
        settings.selectImposterCountRandomly)
    );
  }, [players, settings]);

  return (
    <Stack
      sx={{ height: "100vh", flexDirection: "column", overflow: "hidden" }}
    >
      <Settings
        setSettings={setSettings}
        player={players}
        settings={settings}
      />
      <Stack direction="row" sx={{ justifyContent: "center", height: "40px" }}>
        <Typography variant="h5" component="h1">
          Spieler*innen
        </Typography>
      </Stack>
      <Stack
        sx={{
          height: "calc(73vh - 180px)",
          overflow: "hidden",
          py: 2,
        }}
      >
        <Players players={players} setPlayers={setPlayers} />
      </Stack>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, width: "100%", height: "27vh" }}
      >
        <Toolbar>
          <Stack sx={{ width: "100%", m: 2 }}>
            <Typography>Spieler*in hinzufügen</Typography>
            <AddPlayerCard players={players} setPlayers={setPlayers} />

            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 4 }}
              disabled={!isConfigurationValid()}
            >
              Spiel starten
            </Button>
            <Stack direction="row" spacing={1} py={2}>
              <Warning sx={{ opacity: isConfigurationValid() ? 0 : 1 }} />
              <Typography sx={{ opacity: isConfigurationValid() ? 0 : 1 }}>
                Es sind min. 3 Spieler*innen notwendig
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};
