import { config } from "../../config";

type Route = {
  path: string;
  element: () => Promise<unknown>;
};

const validateRoutes = <T extends Record<string, Route>>(routes: T) => routes;

export const routes = validateRoutes({
  home: {
    path: `${config.basePath}/`,
    element: () => import("../pages/Home"),
  },
});
