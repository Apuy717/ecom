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
  im: {
    height: '100%',
    width: 200,
    resizeMode: 'cover',
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
    <Animated.View style={[styles.image, {top, height}]}>
      <ScrollView horizontal={true}>
        {dat.map((img, i) => (
          <View style={{width: 100, height: 100, margin: 10}}>
            <View
              style={{
                backgroundColor: 'red',
                height: 100,
                width: 100,
                margin: 2,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

// img.map((im) => (
//   <Animated.Image
//     source={{uri: im.image}}
//     style={[styles.image, {top, height}]}
//   />
// ));
