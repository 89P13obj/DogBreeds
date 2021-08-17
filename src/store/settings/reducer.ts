import { CHANGE_LANGUAGE, CHANGE_THEME } from './constants';

import { ISettings, LanguageType, ThemeType } from '../../models/ISettings';

export interface ISettingsState extends ISettings {}

const defaultState: ISettingsState = {
  language: LanguageType.ru,
  theme: ThemeType.light,
};

export default function settingsReducer(
  state: ISettingsState = defaultState,
  action = { type: '', payload: {} },
) {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme:
          state.theme === ThemeType.dark ? ThemeType.light : ThemeType.dark,
      };
    default:
      return state;
  }
}
