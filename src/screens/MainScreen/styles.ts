import { StyleSheet } from 'react-native';
import { THEME } from '../../common/constants/colors';
import { ThemeType } from '../../models/ISettings';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: THEME[theme].backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingTop: 70,
    },
  });
