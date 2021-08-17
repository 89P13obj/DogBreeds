import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  BREED_NAVIGATOR,
  MAIN_SCREEN,
  SETTINGS_SCREEN,
} from '../../../common/constants/routes';

import { SettingsScreen } from '../../../screens/SettingsScreen/index';
import BreedNavigator from '../BreedNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { styles as _styles } from './styles';
import { colors } from '../../../common/constants/colors';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/rootReducer';

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
      }}>
      <Tab.Screen
        name={BREED_NAVIGATOR}
        component={BreedNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <Icon
                  name="home-outline"
                  size={20}
                  color={focused ? colors.blue1 : colors.gray6}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <Icon
                  name="person-sharp"
                  size={20}
                  color={focused ? colors.blue1 : colors.gray6}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
