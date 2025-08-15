import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

export const BasePage = (props: PropsWithChildren) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Box>
  );
};
