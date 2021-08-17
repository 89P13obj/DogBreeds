import React, {useEffect} from 'react';
import i18n, {changeLanguage} from './src/i18n';
import AsyncStorage from '@react-native-community/async-storage';
import {Host} from 'react-native-portalize';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import './src/initial-imports';

import store, {persistor} from './src/store';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  useEffect(() => {
    const setLanguage = async () => {
      const language = await AsyncStorage.getItem('language');
      changeLanguage(language);
    };
    setLanguage();
  }, []);

  return (
    <Host>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </Host>
  );
};

export default App;
