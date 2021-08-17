import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, Image } from 'react-native';

import { styles as _styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomImage } from '../../store/breeds/actions';
import { IRootState } from '../../store/rootReducer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import i18n from '../../i18n';
import { goBack } from '../../navigation/helpers/RootNavigation';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../common/constants/colors';
import LoadingImg from '../../components/LoadingImg/index';
import { URL_MEDIA } from '../../libs/api';

export function BreedScreen(props: {
  route: {
    params: {
      id: number;
    };
  };
}) {
  const { id } = props.route.params;
  const { theme, language } = useSelector(
    (state: IRootState) => state.settings,
  );

  const styles = useMemo(() => {
    return _styles(theme);
  }, [theme]);
  const item = useSelector((state: IRootState) =>
    state.breeds.list.filter(item => item.id === id),
  )[0];
  const [done, setDone] = useState(true);
  const [image, setImage] = useState(
    URL_MEDIA + item.referenceImageID + '.jpg',
  );
  const dispatch = useDispatch();

  const randomImage = () => {
    setDone(undefined);
    dispatch(getRandomImage(id.toString()));
  };
  useEffect(() => {
    const setImageAfterLoad = () => {
      setTimeout(() => {
        setImage(item.image.url);
        setDone(true);
      }, 1500);
    };
    setImageAfterLoad();
  }, [item]);

  return (
    <View style={styles.container}>
      <Header
        statusBarProps={{
          backgroundColor: THEME[theme].backgroundColor,
        }}
        containerStyle={styles.header}
        leftComponent={
          <TouchableOpacity onPress={goBack}>
            <Icon
              name="ios-arrow-back-circle"
              size={40}
              color={THEME[theme].activeBtnColor}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.imageView}>
            {!done ? (
              <LoadingImg />
            ) : (
              <Image
                source={{ uri: image }}
                resizeMode="cover"
                style={styles.image}
              />
            )}
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.subtitleView}>
              <Text style={styles.subtitle}>{item.bredFor}</Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => randomImage()} style={styles.btnView}>
          <Text style={styles.btnTitle}>
            {i18n.t('breeds.button', { locale: language })}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
