import { useNavigate } from "react-router-dom";
import { routes } from "../bootstrap/routes";

const Imposter = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(routes.home.path)}>go to home</button>;
};

export default Imposter;
