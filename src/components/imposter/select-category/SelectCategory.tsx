import {
  Stack,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Categories } from "./Categories";
import type { SetStateAction } from "react";
import { Warning } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type SelectCategoryProps = {
  readonly selectedCategories: string[];
  readonly setSelectedCategories: (
    stateUpdater: SetStateAction<string[]>
  ) => void;
  readonly startGame: () => void;
  readonly back: () => void;
};

export const SelectCategory = (props: SelectCategoryProps) => {
  return (
    <Stack
      sx={{ height: "100vh", flexDirection: "column", overflow: "hidden" }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "center", height: "40px", mt: 4 }}
      >
        <Box flex={0} textAlign="left">
          <IconButton onClick={props.back}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box flex={1} textAlign="center">
          <Typography variant="h5" component="h1">
            Kategorien Auswählen
          </Typography>
        </Box>
      </Stack>
      <Stack
        sx={{
          height: "calc(82vh - 56px)",
          overflow: "hidden",
          py: 2,
        }}
      >
        <Categories
          addSelectedCategory={(categoryName) =>
            props.setSelectedCategories((curr) => curr.concat(categoryName))
          }
          removeSelectedCategory={(categoryName) =>
            props.setSelectedCategories((curr) => {
              const indexToRemove = curr.findIndex((x) => x === categoryName);
              if (indexToRemove !== -1) {
                curr.splice(indexToRemove, 1);
              }
              return [...curr];
            })
          }
          selectedCategoryNames={props.selectedCategories}
        />
      </Stack>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, width: "100%", height: "18vh" }}
      >
        <Toolbar>
          <Stack sx={{ width: "100%", m: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 4 }}
              disabled={props.selectedCategories.length === 0}
              onClick={props.startGame}
            >
              Spiel starten
            </Button>
            <Stack direction="row" spacing={1} py={2}>
              <Warning
                sx={{ opacity: props.selectedCategories.length > 0 ? 0 : 1 }}
              />
              <Typography
                sx={{ opacity: props.selectedCategories.length > 0 ? 0 : 1 }}
              >
                Min. eine Kategorie wählen
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};
