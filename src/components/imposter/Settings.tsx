import { Add, Remove } from "@mui/icons-material";
import { Checkbox, IconButton, Stack, Typography } from "@mui/material";
import type { TPlayer, TSettings } from "./Imposter";
import { useCallback, useEffect, type SetStateAction } from "react";

type SettingsProps = {
  readonly settings: TSettings;
  readonly setSettings: (stateUpdater: SetStateAction<TSettings>) => void;
  readonly player: TPlayer[];
};

export const Settings = (props: SettingsProps) => {
  useEffect(() => {
    const activePlayerCount = props.player.filter((x) => x.isActive).length;
    if (activePlayerCount <= 1) {
      return;
    }
    if (activePlayerCount - 1 < props.settings.imposterCount) {
      props.setSettings((curr) => ({
        ...curr,
        imposterCount: activePlayerCount - 1,
      }));
    }
  }, [props.player, props.settings]);

  const incrementImposter = useCallback(() => {
    props.setSettings((curr) => ({
      ...curr,
      imposterCount: curr.imposterCount + 1,
    }));
  }, [props.setSettings]);

  const decrementImposter = useCallback(() => {
    props.setSettings((curr) => ({
      ...curr,
      imposterCount: curr.imposterCount - 1,
    }));
  }, [props.setSettings]);

  const isIncrementAvailable = useCallback(() => {
    const activePlayerCount = props.player.filter((x) => x.isActive).length;
    return (
      activePlayerCount - 1 > props.settings.imposterCount &&
      !props.settings.selectImposterCountRandomly
    );
  }, [props.player, props.settings]);

  const isDecrementAvailable = useCallback(() => {
    return (
      props.settings.imposterCount > 1 &&
      !props.settings.selectImposterCountRandomly
    );
  }, [props.settings]);

  return (
    <Stack sx={{ height: "140px" }}>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <Typography component="h1" variant="h5" sx={{ p: 2 }}>
          Imposter Anzahl
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{ justifyContent: "center", alignItems: "center" }}
        spacing={4}
      >
        <IconButton
          onClick={decrementImposter}
          disabled={!isDecrementAvailable()}
        >
          <Remove />
        </IconButton>
        <Typography
          color={
            props.settings.selectImposterCountRandomly
              ? "textDisabled"
              : "textPrimary"
          }
        >
          {props.settings.imposterCount}
        </Typography>
        <IconButton
          onClick={incrementImposter}
          disabled={!isIncrementAvailable()}
        >
          <Add />
        </IconButton>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Checkbox
            checked={props.settings.selectImposterCountRandomly}
            onChange={(e) =>
              props.setSettings((curr) => ({
                ...curr,
                selectImposterCountRandomly: e.target.checked,
              }))
            }
          />
          <Typography>Zufällig</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
