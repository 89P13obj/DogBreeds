import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ch from './locales/ch.json';

const locales = RNLocalize.getLocales();
i18n.defaultLocale = 'en';
if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageCode;
}

export const changeLanguage = lang => {
  if (lang) {
    i18n.locale = lang;
  } else if (Array.isArray(locales)) {
    i18n.locale = locales[0].languageCode;
  }
};

i18n.fallbacks = true;

i18n.translations = {
  en,
  ru,
  ch,
};

export default i18n;
