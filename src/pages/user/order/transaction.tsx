import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Transaction = (props) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => props.navigation.navigate('Cart')}>Transaction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Transaction;
