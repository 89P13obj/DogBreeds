import { call, takeLatest } from 'redux-saga/effects';

import { CHANGE_LANGUAGE } from '../constants';
import { LanguageType } from '../../../models/ISettings';
import { changeLanguage } from '../../../i18n';
import AsyncStorage from '@react-native-community/async-storage';

interface IAction {
  payload: LanguageType;
}

const saveLanguage = async (lang: string) => {
  AsyncStorage.setItem('language', lang);
  changeLanguage(lang);
};

function* changeLangSaga({ payload }: IAction): Generator<any, any, any> {
  try {
    yield call(saveLanguage, String(payload));
  } catch (e) {
    console.warn(e);
  }
}

export default function* listener(): Generator<any, any, any> {
  yield takeLatest(CHANGE_LANGUAGE, changeLangSaga);
}
