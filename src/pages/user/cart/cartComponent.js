/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {CheckBox, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/tools/button';
import {AntDesign, Feather, FontAwesome5} from '../../../components/tools/Icon';

const styles = StyleSheet.create({
  init: {
    flex: 1,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#f3f3f3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  item: {
    backgroundColor: 'grey',
    display: 'flex',
  },
  Store: {
    backgroundColor: '#efefef',
    height: 50,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  iconStore: {
    marginLeft: 10,
  },
  TextStore: {
    fontSize: 20,
  },
  Item: {
    backgroundColor: 'white',
    height: 140,
    padding: 10,
  },
  ItemTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ItemIconPlus: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buy: {
    backgroundColor: '#efefef',
    flexDirection: 'row',
    padding: 10,
  },
  Image: {resizeMode: 'cover', height: '100%', width: '100%'},
  containerWrapIcon: {flexDirection: 'row', marginTop: 10},
  wrapItemAdd: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    flexDirection: 'row',
    marginLeft: 40,
    borderWidth: 1,
    borderColor: 'green',
  },
  titleItemContain: {flex: 1, marginHorizontal: 5},
  buyChild: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
  },
});

const CartComponent = (props) => {
  const data = [1, 2, 3];
  const dataAll = [1, 2, 3];
  return dataAll.map((i, k) => (
    <View style={styles.init} key={k}>
      <View style={styles.item}>
        <View style={styles.Store}>
          <View>
            <CheckBox value={false} />
          </View>
          <View style={styles.iconStore}>
            <FontAwesome5 name="store" size={20} />
          </View>
          <View style={styles.iconStore}>
            <Text style={styles.TextStore}>Apuy Store</Text>
          </View>
        </View>
        {data.map((i, k) => (
          <View style={styles.Item} key={k}>
            <View style={styles.ItemTitle}>
              <View>
                <CheckBox value={false} />
              </View>
              <View style={styles.titleItemContain}>
                <Text style={{fontSize: 18}}>
                  xiaomi 5 plus ram 3gb internal 64gb color red green next
                </Text>
                <Text>Rp. 2.950.000</Text>
              </View>
              <View style={{height: 70, width: 70}}>
                <Image
                  source={{uri: 'https://via.placeholder.com/600/45601a'}}
                  style={styles.Image}
                />
              </View>
            </View>
            <View style={styles.containerWrapIcon}>
              <View style={styles.wrapItemAdd}>
                <View style={styles.ItemIconPlus}>
                  <TouchableOpacity>
                    <AntDesign name="plus" size={30} />
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    styles.ItemIconPlus,
                    {
                      backgroundColor: 'white',
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderColor: 'green',
                    },
                  ]}>
                  <Text>10</Text>
                </View>
                <View style={styles.ItemIconPlus}>
                  <TouchableOpacity>
                    <AntDesign name="minus" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  alignItems: 'flex-end',
                  marginRight: 15,
                }}>
                <Feather name="trash" size={30} />
              </View>
            </View>
          </View>
        ))}

        <View style={styles.Buy}>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{color: 'grey'}}>SUBTOTAL</Text>
            <Text style={styles.TextStore}>Rp. 2.950.000</Text>
            <Text style={{color: 'grey'}}>Belum termasuk ongkir</Text>
          </View>
          <View style={styles.buyChild}>
            <Button height={35} width={100} title="Buy" onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  ));
};

export default CartComponent;
