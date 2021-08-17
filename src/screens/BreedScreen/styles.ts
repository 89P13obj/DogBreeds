import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../common/constants/colors';
import { ThemeType } from '../../models/ISettings';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: THEME[theme].backgroundColor,
      alignItems: 'center',
      flex: 1,
      paddingBottom: 105,
    },
    header: {
      backgroundColor: THEME[theme].backgroundColor,
      borderBottomWidth: 0,
    },
    content: {
      flexDirection: 'column',
      flex: 1,
    },
    image: {
      width: Dimensions.get('screen').width - 30,
      height: Dimensions.get('screen').width - 30,
      borderRadius: 20,
    },
    imageView: {
      width: Dimensions.get('screen').width - 30,
      height: Dimensions.get('screen').width - 30,
      alignSelf: 'center',
    },
    titleView: {
      flexDirection: 'column',
      flex: 1,
      marginVertical: 30,
      marginHorizontal: 5,
      paddingBottom: 30,
    },
    subtitleView: {
      paddingTop: 30,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: THEME[theme].colorText,
    },
    subtitle: {
      color: THEME[theme].colorText,
      fontSize: 16,
    },
    btnView: {
      backgroundColor: THEME[theme].activeBtnColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      height: 40,
    },
    btnTitle: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
