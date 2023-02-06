import { useReducer, createContext, Dispatch, PropsWithChildren } from "react";
import { exampleReducer, appConfigReducer } from "./reducers";
import { ExampleActions, AppConfigActions, InitialStateType } from "./model";

const initialState = {
  examples: [],
  appConfig: {
    lang: "fr",
    theme: "light",
  },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<AppConfigActions>;
}>({
  state: initialState,
  dispatch: () => {},
});

const globalReducer = (
  { examples, appConfig }: InitialStateType,
  action: ExampleActions | AppConfigActions
) => ({
  examples: exampleReducer(examples, action as ExampleActions),
  appConfig: appConfigReducer(appConfig, action as AppConfigActions),
});

const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
