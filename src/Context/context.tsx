import React, { useReducer, createContext, Dispatch, PropsWithChildren } from 'react';
import { exampleReducer, appConfigReducer } from './reducers';
import { ExampleActions, AppConfigActions, InitialStateType } from './model';

const initialState = {
  appConfig: {
    lang: 'fr',
    theme: 'light'
  }
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ExampleActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const globalReducer = ({ examples, appConfig }: InitialStateType, action: ExampleActions | AppConfigActions) => ({
  examples: exampleReducer(examples, action),
  appConfig: appConfigReducer(appConfig, action)
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