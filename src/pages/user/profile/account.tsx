import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => props.navigation.navigate('Cart')}>Profile</Text>
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

export default Profile;
