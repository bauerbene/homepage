import { Card, Checkbox, Stack, Typography } from "@mui/material";

type CategoryCardProps = {
  categoryName: string;
  isActive: boolean;
  setActiveState: (activeState: boolean) => void;
};

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <Card sx={{ width: "100%", overflow: "unset" }}>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <Checkbox
          checked={props.isActive}
          onChange={(e) => props.setActiveState(e.target.checked)}
        />
        <Typography>{props.categoryName}</Typography>
      </Stack>
    </Card>
  );
};
