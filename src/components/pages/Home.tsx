import { useNavigate } from "react-router-dom";
import { routes } from "../bootstrap/routes";

const Home = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(routes.imposter.path)}>
      go to imposter
    </button>
  );
};

export default Home;
