export type AppConfigType = {
  lang: string;
  theme: string;
};

export enum Types {
  Create = 'CREATE_EXAMPLE',
  Delete = 'DELETE_EXAMPLE',
}

export enum TypeAppConfig {
  SwitchLang = 'SWITCH_LANG',
  SwitchTheme = 'SWITCH_THEME',
}

export type Exampletype = {
  id: number;
  name: string;
};

export type InitialStateType = {
  examples: Exampletype[];
  appConfig: AppConfigType;
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export type ExamplePayload = {
  [Types.Create] : {
    id: number;
    name: string;
  };
  [Types.Delete]: {
    id: number;
  }
}

export type ExampleActions = ActionMap<ExamplePayload>[keyof ActionMap<ExamplePayload>];


export type AppConfigPayload = {
  [TypeAppConfig.SwitchLang] : {
    lang: string;
  };
  [TypeAppConfig.SwitchTheme]: {
    theme: string;
  }
}

export type AppConfigActions = ActionMap<AppConfigPayload>[keyof ActionMap<AppConfigPayload>];