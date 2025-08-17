import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useCallback, type SetStateAction } from "react";
import { Warning } from "@mui/icons-material";
import { Players } from "./Players";
import { Settings } from "./Settings";
import { AddPlayerCard } from "./AddPlayerCard";
import type { TPlayer, TSettings } from "../Imposter";

type PlayersAndSettingsProps = {
  readonly settings: TSettings;
  readonly setSettings: (stateUpdater: SetStateAction<TSettings>) => void;
  readonly players: TPlayer[];
  readonly setPlayers: (stateUpdater: SetStateAction<TPlayer[]>) => void;
  readonly startGame: () => void;
};

export const PlayersAndSettings = (props: PlayersAndSettingsProps) => {
  const isConfigurationValid = useCallback(() => {
    const activePlayerCount = props.players.filter((x) => x.isActive).length;
    return (
      activePlayerCount >= 3 &&
      (props.settings.imposterCount < activePlayerCount ||
        props.settings.selectImposterCountRandomly)
    );
  }, [props.players, props.settings]);

  return (
    <Stack
      sx={{ height: "100vh", flexDirection: "column", overflow: "hidden" }}
    >
      <Settings
        setSettings={props.setSettings}
        player={props.players}
        settings={props.settings}
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
        <Players players={props.players} setPlayers={props.setPlayers} />
      </Stack>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, width: "100%", height: "27vh" }}
      >
        <Toolbar>
          <Stack sx={{ width: "100%", m: 2 }}>
            <Typography>Spieler*in hinzufügen</Typography>
            <AddPlayerCard
              players={props.players}
              setPlayers={props.setPlayers}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 4 }}
              disabled={!isConfigurationValid()}
              onClick={props.startGame}
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
