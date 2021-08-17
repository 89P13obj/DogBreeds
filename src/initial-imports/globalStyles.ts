import { setCustomTextInput, setCustomText } from 'react-native-global-props';

import { fonts } from '../common/constants/fonts';

const customTextProps = {
  style: {
    fontFamily: fonts.light,
  },
};

setCustomText(customTextProps);
setCustomTextInput(customTextProps);
