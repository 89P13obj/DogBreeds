import React, { useEffect, useRef } from 'react';
import { StatusBar, EmitterSubscription } from 'react-native';
import ImmersiveMode from 'react-native-immersive-mode';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainMenu from './navigators/MainMenu';
import { navigationRef } from './helpers/RootNavigation';

import { isAndroid } from '../helpers/platform';
import { useSelector } from 'react-redux';
import { IRootState } from '../store/rootReducer';

const AppNavigation = () => {
  const listenRef = useRef<EmitterSubscription | null>(null);
  const { theme } = useSelector((state: IRootState) => state.settings);

  const immersiveModeHandler = () => {
    if (isAndroid) {
      ImmersiveMode.setBarMode('BottomSticky');
      ImmersiveMode.fullLayout(true);
    }
  };

  useEffect(() => {
    immersiveModeHandler();
  }, []);

  useEffect(() => {
    if (isAndroid) {
      listenRef.current = ImmersiveMode.addEventListener(
        ({ navigationBottomBar }) => {
          if (navigationBottomBar) {
            immersiveModeHandler();
          }
        },
      );

      return () => {
        if (listenRef.current !== null) {
          listenRef.current.remove();
        }
      };
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme ? 'dark-content' : 'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer ref={navigationRef}>
        <MainMenu />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
