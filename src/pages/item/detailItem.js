import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {usePanGestureHandler, withOffset} from 'react-native-redash';

const DetailItem = () => {
  const {gestureHandler, translation, state} = usePanGestureHandler();
  const translateX = withOffset(translation.x, state);
  const translateY = withOffset(translation.y, state);
  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[styles.ball, {transform: [{translateX}, {translateY}]}]}
        />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default DetailItem;
