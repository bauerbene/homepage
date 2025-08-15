import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../bootstrap/routes";

export const PlayImposterCard = () => {
  const navigate = useNavigate();
  return (
    <Card
      sx={(theme) => ({
        background: theme.palette.primary.dark,
        px: 3,
        py: 8,
        cursor: "pointer",
      })}
      onClick={() => navigate(routes.imposter.path)}
    >
      <Typography>Play Imposter</Typography>
    </Card>
  );
};
