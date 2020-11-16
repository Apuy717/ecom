import React from 'react';
import {Dimensions, StyleSheet, ScrollView, View, Image} from 'react-native';
import Animated from 'react-native-reanimated';

const {Extrapolate, interpolate} = Animated;
const {height: wHeight, width: wWidth} = Dimensions.get('window');

export const backgroundImage = require('../../../assets/1.jpg');

export const HEADER_IMAGE_HEIGHT = wHeight / 2.3;
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wWidth,
  },
});

interface HeaderImageProps {
  y: Animated.Value<number>;
}

export default ({y}: HeaderImageProps) => {
  const height = interpolate(y, {
    inputRange: [-100, 0],
    outputRange: [HEADER_IMAGE_HEIGHT + 200, HEADER_IMAGE_HEIGHT],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const top = interpolate(y, {
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  const dat = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Animated.Image
        source={backgroundImage}
        style={[styles.image, {top, height}]}
      />
    </>
  );
};
