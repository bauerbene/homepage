import { useNavigate } from "react-router-dom";
import { routes } from "../bootstrap/routes";
import { Button } from "@mui/material";

const Imposter = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(routes.home.path)}>go to home</Button>;
};

export default Imposter;
