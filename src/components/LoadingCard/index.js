import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';

const LoadingCard = () => {
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

export default LoadingCard;
