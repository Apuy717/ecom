import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextString = (props) => {
  return (
    <>
      <Text style={styles.text} {...props} allowFontScaling={false} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    marginLeft: 15,
  },
});
export default TextString;
