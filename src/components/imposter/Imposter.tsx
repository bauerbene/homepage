import { useLocalStorageState } from "../hooks/use-local-storage-state";
import { Players } from "./Players";
import { AddPlayerCard } from "./AddPlayerCard";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, More, Search } from "@mui/icons-material";

export type Player = {
  isActive: boolean;
  name: string;
};

export const Imposter = () => {
  const [players, setPlayers] = useLocalStorageState<Player[]>("players", []);

  return (
    <>
      <Players players={players} setPlayers={setPlayers} />
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, width: "100%" }}
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
    </>
  );
};
