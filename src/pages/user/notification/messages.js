import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import HeaderWithBack from './../../../components/layout/headerWithBack';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const Messages = ({navigation}) => {
  const chat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <View style={styles.container}>
      <HeaderWithBack title="Chat" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapChat}>
          {chat.map((i, k) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={k}
              onPress={() => navigation.navigate('DetailMessage', {id: i})}>
              <View style={styles.init}>
                <View style={styles.imgWrap}>
                  <Image
                    source={{uri: 'https://via.placeholder.com/600/474645'}}
                    style={styles.img}
                  />
                </View>
                <View style={styles.nickName}>
                  <Text style={styles.Text}>Apuy Store</Text>
                  <Text style={styles.textValue}>
                    Assalamualaikum wr wb, silahkan kak boleh langsung order
                    barang tersedia kok..
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapChat: {flex: 1},
  init: {
    backgroundColor: 'white',
    height: 90,
    flexDirection: 'row',
    padding: 10,
  },
  imgWrap: {
    flex: 0.23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  img: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
  nickName: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  Text: {
    fontSize: 15,
  },
  textValue: {color: 'grey'},
  hed: {
    backgroundColor: 'green',
    height: 100,
  },
});

export default Messages;
