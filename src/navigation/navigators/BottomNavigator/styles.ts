import { StyleSheet } from 'react-native';
import { THEME } from '../../../common/constants/colors';
import { ThemeType } from '../../../models/ISettings';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    tabBar: {
      borderTopWidth: 0,
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      paddingBottom: 10,
      height: 100,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: THEME[theme].backgroundView,
    },

    inactiveTab: {
      borderWidth: 0,
      borderColor: THEME[theme].backgroundView,
      shadowColor: '#000000',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowRadius: 5,
      shadowOpacity: 0.5,
      width: 50,
      height: 50,
      backgroundColor: THEME[theme].backgroundView,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTab: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
      backgroundColor: 'transparent',
      borderColor: THEME[theme].backgroundView,
      borderWidth: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowRadius: 5,
      shadowOpacity: 0.5,
      overflow: 'hidden',
    },
  });
