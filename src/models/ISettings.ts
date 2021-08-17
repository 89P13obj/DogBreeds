export enum LanguageType {
  ru = 'ru',
  en = 'en',
  ch = 'ch',
}

export enum ThemeType {
  light,
  dark,
}

export interface ISettings {
  language: LanguageType;
  theme: ThemeType;
}
