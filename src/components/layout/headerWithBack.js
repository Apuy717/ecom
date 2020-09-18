import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AntDesign} from '../tools/Icon';

const HeaderWithBack = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.iconBack}>
        <TouchableOpacity onPress={props.onBack}>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.Text}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    marginLeft: 20,
  },
  Text: {
    fontSize: 20,
  },
});

export default HeaderWithBack;
