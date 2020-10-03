import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';

export default ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(index)}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={[styles.image, style, {height: height}]}
          source={local ? item[imageKey] : {uri: item[imageKey]}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
});
