import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  BREED_NAVIGATOR,
  MAIN_SCREEN,
  SETTINGS_SCREEN,
} from '../../../common/constants/routes';

import { SettingsScreen } from '../../../screens/SettingsScreen/index';
import BreedNavigator from '../BreedNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import { styles as _styles } from './styles';
import { colors } from '../../../common/constants/colors';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/rootReducer';
import { isAndroid } from '../../../helpers/platform';

const Tab = createBottomTabNavigator();

export default function BottomNavigator(): JSX.Element {
  const { theme } = useSelector((state: IRootState) => state.settings);

  const styles = useMemo(() => {
    return _styles(theme);
  }, [theme]);
  return (
    <Tab.Navigator
      initialRouteName={MAIN_SCREEN}
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === BREED_NAVIGATOR) {
            iconName = 'home-outline';
          } else if (route.name === SETTINGS_SCREEN) {
            iconName = 'person';
          }

          return (
            <View
              style={[
                styles.tabContainer,
                focused ? { overflow: 'hidden', elevation: 2 } : {},
              ]}>
              <View style={focused ? styles.activeTab : styles.inactiveTab} />
              <View style={{ elevation: 24 }}>
                {route.name === BREED_NAVIGATOR ? (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={25}
                    color={focused ? colors.blue1 : colors.gray6}
                  />
                ) : (
                  <MaterialIcons
                    name={iconName}
                    size={25}
                    color={focused ? colors.blue1 : colors.gray6}
                  />
                )}
              </View>
            </View>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={BREED_NAVIGATOR} component={BreedNavigator} />
      <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
