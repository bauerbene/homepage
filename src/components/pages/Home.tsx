import { useNavigate } from "react-router-dom";
import { routes } from "../bootstrap/routes";
import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(routes.imposter.path)}>
      go to imposter
    </Button>
  );
};

export default Home;
