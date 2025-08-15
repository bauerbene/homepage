import { useCallback, useState, type SetStateAction } from "react";

const undefinedPlaceholder = "undefined";

export const useLocalStorageState = <TState>(
  stateKey: string,
  defaultValue: TState
) => {
  const getStateFromLocalStorage = useCallback(() => {
    const localStorageEntry = localStorage.getItem(stateKey);
    if (localStorageEntry == null || localStorageEntry === "undefined") {
      return undefined;
    }
    return JSON.parse(localStorageEntry, (_, value) =>
      value === undefinedPlaceholder ? undefined : value
    ) as TState;
  }, [stateKey, localStorage]);

  const [state, setState] = useState(
    getStateFromLocalStorage() ?? defaultValue
  );

  const setLocalStorageState = useCallback(
    (stateUpdater: SetStateAction<TState>) => {
      setState((currentState) => {
        const newState =
          stateUpdater instanceof Function
            ? stateUpdater(currentState)
            : stateUpdater;
        localStorage.setItem(
          stateKey,
          JSON.stringify(newState, (_, value) =>
            value === undefined ? undefinedPlaceholder : value
          )
        );
        return newState;
      });
    },
    [localStorage, stateKey]
  );

  return [state, setLocalStorageState] as const;
};
