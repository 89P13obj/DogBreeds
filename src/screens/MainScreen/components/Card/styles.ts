import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../../../common/constants/colors';
import { ThemeType } from '../../../../models/ISettings';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderRadius: 6,
      marginVertical: 8,
      height: 100,
      flex: 1,
      width: Dimensions.get('screen').width - 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: THEME[theme].backgroundView,
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowRadius: 6,
      shadowOpacity: 0.3,
      flexDirection: 'row',
      elevation: 3,
      flex: 1,

      width: Dimensions.get('screen').width - 20,
    },
    imageView: {
      width: 80,
      height: 80,
      margin: 10,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 20,
    },
    titleView: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginVertical: 15,
      marginHorizontal: 10,
    },
    title: {
      flex: 1,
      fontSize: 18,
      color: THEME[theme].colorText,
      fontWeight: 'bold',
      maxWidth: Dimensions.get('screen').width - 140,
      overflow: 'hidden',
    },
    subtitle: {
      flex: 1,
      paddingTop: 10,
      color: THEME[theme].colorText,
      fontSize: 13,
      lineHeight: 15,
      maxWidth: Dimensions.get('screen').width - 140,
      overflow: 'hidden',
    },
  });
