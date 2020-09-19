/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import HeaderWithBack from '../../../components/layout/headerWithBack';
import Button from '../../../components/tools/button';
import {Ionicons} from '../../../components/tools/Icon';

const DetailMessage = ({route, navigation}) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Apuy Store" onBack={() => navigation.goBack()} />
      <View style={styles.messageContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.messageWrap}>
            <View style={styles.message}>
              <Text style={styles.textMessage}>
                Sint exercitation velit nisi irure culpa aliquip minim dolor ad.
                Voluptate voluptate irure consequat aliqua commodo et
                consectetur nulla pariatur commodo consequat mollit eu qui. Ex
                aliquip sunt dolor ipsum aliqua velit est. Officia in nulla et
                id incididunt veniam officia irure occaecat laboris cupidatat
                nostrud ipsum. Duis aliqua deserunt do dolore do culpa commodo
                culpa dolor non culpa.
              </Text>
              <Text
                style={{alignSelf: 'flex-end', color: 'grey', marginTop: 5}}>
                10.50 PM
              </Text>
            </View>
            <View style={styles.incomeMessage}>
              <Text style={styles.textMessage}>oke cukup detail mas</Text>
              <Text
                style={{alignSelf: 'flex-end', color: 'grey', marginTop: 5}}>
                10.50 PM
              </Text>
            </View>

            <View style={styles.message}>
              <Text style={styles.textMessage}>
                Sint exercitation velit nisi irure culpa aliquip minim dolor ad.
                Voluptate voluptate irure consequat aliqua commodo et
                consectetur nulla pariatur commodo consequat mollit eu qui. Ex
                aliquip sunt dolor ipsum aliqua velit est. Officia in nulla et
                id incididunt veniam officia irure occaecat laboris cupidatat
                nostrud ipsum. Duis aliqua deserunt do dolore do culpa commodo
                culpa dolor non culpa.
              </Text>
              <Text
                style={{alignSelf: 'flex-end', color: 'grey', marginTop: 5}}>
                10.50 PM
              </Text>
            </View>

            <View style={styles.incomeMessage}>
              <Text style={styles.textMessage}>
                Sint exercitation velit nisi irure culpa aliquip minim dolor ad.
                Voluptate voluptate irure consequat aliqua commodo et
                consectetur nulla pariatur commodo consequat mollit eu qui. Ex
                aliquip sunt dolor ipsum aliqua velit est. Officia in nulla et
                id incididunt veniam officia irure occaecat laboris cupidatat
                nostrud ipsum. Duis aliqua deserunt do dolore do culpa commodo
                culpa dolor non culpa.
              </Text>
              <Text
                style={{alignSelf: 'flex-end', color: 'grey', marginTop: 5}}>
                10.50 PM
              </Text>
            </View>

            <View style={styles.message}>
              <Text style={styles.textMessage}>
                Sint exercitation velit nisi irure culpa aliquip minim dolor ad.
                Voluptate voluptate irure consequat aliqua commodo et
                consectetur nulla pariatur commodo consequat mollit eu qui. Ex
                aliquip sunt dolor ipsum aliqua velit est. Officia in nulla et
                id incididunt veniam officia irure occaecat laboris cupidatat
                nostrud ipsum. Duis aliqua deserunt do dolore do culpa commodo
                culpa dolor non culpa.
              </Text>
              <Text
                style={{alignSelf: 'flex-end', color: 'grey', marginTop: 5}}>
                10.50 PM
              </Text>
            </View>
            <View style={styles.incomeMessage}>
              <Text style={styles.textMessage}>Sint exercitation</Text>
              <Text
                style={{alignSelf: 'flex-end', color: 'grey', marginTop: 5}}>
                10.50 PM
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, marginRight: 10}}>
            <TextInput
              placeholder="type a message"
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'white',
                paddingHorizontal: 20,
                borderColor: 'grey',
              }}
            />
          </View>
          <View style={{marginRight: 10}}>
            <Button
              title={<Ionicons name="attach-outline" size={20} />}
              height={40}
              width={40}
              borderRadius={20}
              onPress={() => {}}
            />
          </View>
          <View>
            <Button
              title={<Ionicons name="send" size={15} />}
              height={40}
              width={40}
              borderRadius={20}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  Text: {textAlign: 'center', marginTop: 20},
  messageContainer: {flex: 1},
  messageWrap: {flex: 1, padding: 15},
  textMessage: {fontSize: 15, color: 'black'},
  message: {
    backgroundColor: 'white',
    marginTop: 20,
    alignSelf: 'flex-start',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  incomeMessage: {
    backgroundColor: '#26a620',
    marginTop: 20,
    alignSelf: 'flex-end',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default DetailMessage;
