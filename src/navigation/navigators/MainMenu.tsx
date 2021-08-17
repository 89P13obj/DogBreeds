import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';

import { BOTTOM_NAVIGATOR } from '../../common/constants/routes';

const Main = createStackNavigator();

export default function MainMenu(): JSX.Element {
  return (
    <Main.Navigator
      initialRouteName={BOTTOM_NAVIGATOR}
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name={BOTTOM_NAVIGATOR} component={BottomNavigator} />
    </Main.Navigator>
  );
}
