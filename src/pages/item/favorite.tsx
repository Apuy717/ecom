import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CardGlobal from '../../components/layout/cardGlobal';
import {AntDesign} from '../../components/tools/Icon';

const WIDTH = Dimensions.get('screen').width / 2 - 15;
const Favorite = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: 'white',
          height: 100,
          zIndex: 1,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Text style={{fontSize: 20}}>Barang Favorit</Text>
        <AntDesign
          name="shoppingcart"
          style={{fontSize: 30}}
          onPress={() => props.navigation.navigate('Cart')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrap}>
          {data.map((ind, i) => {
            return <CardGlobal />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 5,
    marginTop: 10,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    backgroundColor: 'white',
    height: 350,
    width: WIDTH,
    margin: 5,
    borderRadius: 10,
  },
  imageParent: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  childContent: {
    padding: 8,
    display: 'flex',
    justifyContent: 'space-between',
  },
  Button: {
    marginTop: 5,
  },
  Text: {
    color: '#6b6b6b',
  },
  iconFavorite: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    backgroundColor: 'white',
    height: '15%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Favorite;
