import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, TouchableWithoutFeedback, View, Text } from 'react-native';

import { styles as _styles } from './styles';

import { URL_MEDIA } from '../../../../libs/api';
import { BreedItem } from '../../../../models/IBreed';
import { navigate } from '../../../../navigation/helpers/RootNavigation';
import { BREED_SCREEN } from '../../../../common/constants/routes';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store/rootReducer';
import LoadingCard from '../../../../components/LoadingCard/index';

export function Card({ item }: { item: BreedItem }) {
  const goToBreed = useCallback(() => {
    navigate(BREED_SCREEN, { id: item.id });
  }, [item.id]);
  const { theme } = useSelector((state: IRootState) => state.settings);
  const [done, setDone] = useState(undefined);
  const [image, setImage] = useState(undefined);

  const styles = useMemo(() => {
    return _styles(theme);
  }, [theme]);

  useEffect(() => {
    const setImageAfterLoad = () => {
      setTimeout(() => {
        setImage(URL_MEDIA + item.referenceImageID + '.jpg');
        setDone(true);
      }, 1500);
    };
    setImageAfterLoad();
  }, [item]);

  return (
    <TouchableWithoutFeedback onPress={goToBreed}>
      <View style={styles.container}>
        {!done ? (
          <LoadingCard />
        ) : (
          <View style={styles.content}>
            <View style={styles.imageView}>
              <Image
                source={{ uri: image }}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
            <View style={styles.titleView}>
              <Text numberOfLines={1} style={styles.title}>
                {item.name}
              </Text>
              <Text numberOfLines={2} style={styles.subtitle}>
                {item.bredFor}
              </Text>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
