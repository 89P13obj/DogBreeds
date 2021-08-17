import React, { useEffect, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBreeds } from '../../store/breeds/actions';
import { IRootState } from '../../store/rootReducer';
import { Card } from './components/Card';

import { styles as _styles } from './styles';

export function MainScreen() {
  const dispatch = useDispatch();
  const breeds = useSelector((state: IRootState) => state.breeds.list);
  const { theme } = useSelector((state: IRootState) => state.settings);
  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);
  const styles = useMemo(() => {
    return _styles(theme);
  }, [theme]);
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index,
            index,
          })}
          showsVerticalScrollIndicator={false}
          bounces={false}
          windowSize={3}
          initialNumToRender={8}
          maxToRenderPerBatch={2}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => 'key' + index.toString()}
          data={breeds}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
    </View>
  );
}
