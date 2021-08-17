import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { styles as _styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/rootReducer';
import { colors, THEME } from '../../common/constants/colors';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from '../../i18n';
import { changeLang, changeTheme } from '../../store/settings/actions';
import { LanguageType } from '../../models/ISettings';

export function SettingsScreen() {
  const { language, theme } = useSelector(
    (state: IRootState) => state.settings,
  );
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeLang, setActiveLang] = useState(language);

  const setLang = (lang: LanguageType) => {
    dispatch(changeLang(lang));
    setActiveLang(lang);
  };
  const setTheme = () => {
    dispatch(changeTheme());
    setIsEnabled(previousState => !previousState);
  };
  const styles = useMemo(() => {
    return _styles(theme);
  }, [theme]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Switch
            trackColor={{ false: colors.gray3, true: '#116062' }}
            thumbColor={isEnabled ? '#30d5c8' : 'white'}
            ios_backgroundColor={colors.gray3}
            onValueChange={() => setTheme()}
            value={isEnabled}
            style={{ marginRight: 20 }}
          />
          <Icon
            name={isEnabled ? 'moon-outline' : 'sunny'}
            size={30}
            color={isEnabled ? 'white' : 'black'}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.subtitle}>
            {i18n.t('settings.header', { locale: language })}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[
              styles.btnView,
              {
                backgroundColor:
                  activeLang === 'ru'
                    ? THEME[theme].activeBtnColor
                    : THEME[theme].backgroundView,
              },
            ]}
            onPress={() => setLang(LanguageType.ru)}>
            <Text style={styles.btnTitle}>Русский</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnView,
              {
                backgroundColor:
                  activeLang === 'ch'
                    ? THEME[theme].activeBtnColor
                    : THEME[theme].backgroundView,
              },
            ]}
            onPress={() => setLang(LanguageType.ch)}>
            <Text style={styles.btnTitle}>中文</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnView,
              {
                backgroundColor:
                  activeLang === 'en'
                    ? THEME[theme].activeBtnColor
                    : THEME[theme].backgroundView,
              },
            ]}
            onPress={() => setLang(LanguageType.en)}>
            <Text style={styles.btnTitle}>English</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
