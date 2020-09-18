/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import HeaderWithBack from '../../../components/layout/headerWithBack';
import CartComponent from './cartComponent';
import {ScrollView} from 'react-native-gesture-handler';

const Cart = (props) => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <HeaderWithBack
        title="My Cart"
        onBack={() => props.navigation.goBack()}
      />
      <ScrollView>
        {load ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <CartComponent />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Cart;
