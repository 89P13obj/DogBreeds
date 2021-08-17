import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { BREED_SCREEN, MAIN_SCREEN } from '../../common/constants/routes';
import { BreedScreen } from '../../screens/BreedScreen/index';
import { MainScreen } from '../../screens/MainScreen';

const Breed = createStackNavigator();

export default function BreedNavigator(): JSX.Element {
  return (
    <Breed.Navigator
      initialRouteName={MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Breed.Screen name={MAIN_SCREEN} component={MainScreen} />
      <Breed.Screen name={BREED_SCREEN} component={BreedScreen} />
    </Breed.Navigator>
  );
}
