import { CHANGE_LANGUAGE, CHANGE_THEME } from './constants';

import { LanguageType } from '../../models/ISettings';

export const changeLang = (payload: LanguageType) => ({
  type: CHANGE_LANGUAGE,
  payload,
});

export const changeTheme = () => ({
  type: CHANGE_THEME,
});
