import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { Players } from "./Players";
import { AddPlayerCard } from "./AddPlayerCard";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Settings } from "./Settings";

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

  return (
    <Stack sx={{ height: "100vh", flexDirection: "column" }}>
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
          height: "calc(75vh - 180px)",
          overflow: "hidden",
          py: 2,
        }}
      >
        <Players players={players} setPlayers={setPlayers} />
      </Stack>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, width: "100%", height: "25vh" }}
      >
        <Toolbar>
          <Stack sx={{ width: "100%", m: 2 }}>
            <Typography>Spieler hinzufügen</Typography>
            <AddPlayerCard players={players} setPlayers={setPlayers} />

            <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
              Spiel starten
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};
