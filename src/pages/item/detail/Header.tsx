import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useValue, withTimingTransition} from 'react-native-redash';
import {useSafeArea} from 'react-native-safe-area-context';
import {Feather as Icon, AntDesign} from '../../../components/tools/Icon';
import {HEADER_IMAGE_HEIGHT} from './HeaderImage';

const ICON_SIZE = 24;
const PADDING = 16;
export const MIN_HEADER_HEIGHT = 70;
const {interpolate, Extrapolate, useCode, greaterThan, set, block} = Animated;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    height: MIN_HEADER_HEIGHT,
    alignItems: 'center',
    paddingHorizontal: PADDING,
  },
  title: {
    fontSize: 18,
    marginLeft: PADDING,
    flex: 1,
  },
  cart: {marginRight: 10},
});

interface HeaderProps {
  y: Animated.Value<number>;
}

export default ({y}: HeaderProps) => {
  const {goBack} = useNavigation();
  const toggle = useValue<0 | 1>(0);
  const insets = useSafeArea();
  const transition = withTimingTransition(toggle, {duration: 100});
  const {top: paddingTop} = insets;
  const opacity = transition;
  useCode(() => block([set(toggle, greaterThan(y, HEADER_IMAGE_HEIGHT))]), [
    toggle,
    y,
  ]);

  return (
    <Animated.View style={[styles.container, {paddingTop}]}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
          backgroundColor: 'white',
        }}
      />
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => goBack()}>
          <View>
            <Icon name="arrow-left" size={ICON_SIZE} color="white" />
            <Animated.View
              style={{...StyleSheet.absoluteFillObject, opacity: transition}}>
              <Icon name="arrow-left" size={ICON_SIZE} color="black" />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>

        <Animated.Text style={[styles.title, {opacity: transition}]}>
          Detail
        </Animated.Text>

        <View style={styles.cart}>
          <Icon name="heart" size={ICON_SIZE} color="white" />
          <Animated.View
            style={{...StyleSheet.absoluteFillObject, opacity: transition}}>
            <AntDesign name="shoppingcart" size={ICON_SIZE} color="black" />
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  );
};
