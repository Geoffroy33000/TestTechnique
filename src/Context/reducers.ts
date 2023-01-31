import { AppConfigActions, AppConfigType, ExampleActions, Exampletype, TypeAppConfig, Types } from "./model";

export const exampleReducer = (state: Exampletype[], action: ExampleActions) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
        }
      ]
    case Types.Delete:
      return [
        ...state.filter(example => example.id !== action.payload.id),
      ]
    default:
      return state;
  }
}

export const appConfigReducer = (state: AppConfigType, action: AppConfigActions) => {
  switch (action.type) {
    case TypeAppConfig.SwitchLang:
      return {
        ...state,
        lang: action.payload.lang
      }
      case TypeAppConfig.SwitchTheme:
        return {
          ...state,
          theme: action.payload.theme
        }
      default:
        return state;
  }
}