import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import request from './../../../config/apiServices';

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.child}></View>
      </View>
      <View>
        <Text onPress={() => props.navigation.navigate('Login')}>
          hello world
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    backgroundColor: '#dddddd',
    height: 200,
    position: 'relative',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 10,
  },
  child: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    position: 'absolute',
    bottom: -50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default Profile;
