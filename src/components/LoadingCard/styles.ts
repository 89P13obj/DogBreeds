import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray3,
    borderRadius: 6,
    marginVertical: 8,
    height: 100,
    flex: 1,
    width: Dimensions.get('screen').width - 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
