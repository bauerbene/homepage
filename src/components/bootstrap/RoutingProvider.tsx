import { lazy, Suspense, useMemo } from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";

export const RoutingProvider = () => {
  const routeElements = useMemo(
    () =>
      Object.values(routes).map((x) => ({ ...x, element: lazy(x.element) })),
    []
  );

  return (
    <Routes>
      {routeElements.map((x) => (
        <Route
          key={x.path}
          path={x.path}
          element={
            <Suspense>
              <x.element />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
