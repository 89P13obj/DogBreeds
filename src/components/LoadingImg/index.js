import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';

const LoadingImg = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../resources/lottie/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingImg;
