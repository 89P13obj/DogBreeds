import { StyleSheet, Dimensions } from 'react-native';
import { THEME } from '../../common/constants/colors';
import { ThemeType } from '../../models/ISettings';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: THEME[theme].backgroundColor,
      alignItems: 'center',
      paddingTop: 70,
      flex: 1,
      paddingBottom: 105,
      paddingHorizontal: 10,
    },
    content: {
      flexDirection: 'column',
      flex: 1,
    },
    titleView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 25,
      marginHorizontal: 5,
      minHeight: 80,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: THEME[theme].colorText,
    },
    btnView: {
      width: Dimensions.get('screen').width / 4,
      marginHorizontal: 5,
      backgroundColor: THEME[theme].backgroundView,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      paddingHorizontal: 10,
      height: 40,
    },
    btnContainer: {
      flexDirection: 'row',
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 10,
      maxHeight: 40,
    },

    btnTitle: {
      color: THEME[theme].colorText,
      fontSize: 14,
      fontWeight: 'bold',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
