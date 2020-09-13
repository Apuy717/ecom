import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AntDesign, Ionicons} from '../tools/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderSearch = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.child1}>
        <View style={styles.input}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.touchSearch}
            onPress={props.onPress}>
            <AntDesign name="search1" style={styles.iconSearch} />
            <Text style={styles.TextInput}>{props.placeholder}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconParent}>
        <View style={styles.sectionIcon}>
          <TouchableOpacity onPress={props.onPressNotif}>
            <Ionicons name="notifications-outline" style={styles.Icon} />
          </TouchableOpacity>
          {props.counterNotif ? (
            <View style={styles.buble}>
              <Text style={styles.textBuble}>{props.counterNotif}</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.sectionIcon}>
          <TouchableOpacity onPress={props.onPressChart}>
            <AntDesign name="shoppingcart" style={styles.Icon} />
          </TouchableOpacity>
          {props.counterCart ? (
            <View style={styles.buble}>
              <Text style={styles.textBuble}>{props.counterCart}</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  child1: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    padding: 8,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconParent: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
  },
  iconSearch: {fontSize: 25, marginLeft: 10},
  sectionIcon: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  buble: {
    backgroundColor: 'red',
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
    position: 'absolute',
    top: 12,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBuble: {color: 'white', fontSize: 10},
  Icon: {
    fontSize: 30,
  },
  TextInput: {fontSize: 20, marginLeft: 10, color: '#d3d3d3'},
});

export default HeaderSearch;
