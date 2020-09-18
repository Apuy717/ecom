import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onPress}
        style={[
          styles.Button,
          {
            height: props.height ? props.height : '4%',
            width: props.width ? props.width : '30%',
            borderRadius: props.borderRadius ? props.borderRadius : 4,
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : 'green',
          },
        ]}>
        <Text style={styles.Text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Text: {
    color: 'white',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
