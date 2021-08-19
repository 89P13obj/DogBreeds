import { StyleSheet } from 'react-native';
import { THEME } from '../../../common/constants/colors';
import { ThemeType } from '../../../models/ISettings';
import { isIos } from '../../../helpers/platform';

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
      position: 'absolute',
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0,
      borderColor: THEME[theme].backgroundView,
      shadowColor: '#000000',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowRadius: 5,
      shadowOpacity: 0.7,

      backgroundColor: THEME[theme].backgroundView,
      borderRadius: 25,

      elevation: 8,
    },
    activeTab: {
      position: 'absolute',
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
      backgroundColor: 'transparent',
      borderColor: isIos ? THEME[theme].backgroundView : 'transparent',
      borderWidth: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowRadius: 5,
      shadowOpacity: 0.7,
      elevation: 24,
    },
    tabContainer: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    },
  });
