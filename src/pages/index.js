/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CardGlobal from '../components/layout/cardGlobal';
import CardHorizontal from '../components/layout/cardHorizontal';
import HeaderSearch from '../components/layout/headerSearch';
import {FontAwesome5} from '../components/tools/Icon';
import Category from '../components/layout/category';
const width = Dimensions.get('screen').width;

const Home = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const banner = require('../assets/2.jpg');
  const hp = require('../assets/category_hp.jpg');
  const leptop = require('../assets/leptop.jpg');
  const speda = require('../assets/speda.jpg');
  const elektronik = require('../assets/elektronik.jpg');
  const fashion = require('../assets/fashion.jpg');
  const perkakas = require('../assets/perkakas.jpg');
  const sembako = require('../assets/sembako.jpg');
  const onderdil = require('../assets/onderdil.jpg');
  const vapor = require('../assets/vapor.jpg');
  const bunga = require('../assets/bunga.jpg');
  const category = [
    {title: 'handphone', image: hp},
    {title: 'Leptop', image: leptop},
    {title: 'Elektronik', image: elektronik},
    {title: 'Speda', image: speda},
    {title: 'Fashion', image: fashion},
    {title: 'Perkakas', image: perkakas},
    {title: 'Sembako', image: sembako},
    {title: 'Onderdil', image: onderdil},
    {title: 'elektrik rk', image: vapor},
    {title: 'Bunga', image: bunga},
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderSearch
        placeholder="Cari barang yang anda ..."
        counterNotif={9 + '+'}
        counterCart={7 + '+'}
        onPress={() => props.navigation.navigate('Search')}
        onPressChart={() => props.navigation.navigate('Cart')}
        onPressNotif={() => props.navigation.navigate('Notifikasi')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: 200, padding: 10}}>
          <Image source={banner} style={styles.image} />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginTop: 10,
            borderTopWidth: 1,
            borderColor: '#c9c9c9',
          }}>
          <View>
            <Text style={styles.Text}>Category</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category data={category} />
          </ScrollView>
        </View>

        <CardHorizontal
          image={'https://via.placeholder.com/600/771796'}
          title="recommendations for you"
          navigation={(i) => props.navigation.navigate('Detail')}
        />
        <CardHorizontal
          image={'https://via.placeholder.com/600/45601a'}
          title="Barang Populer"
        />
        <CardHorizontal
          image={'https://via.placeholder.com/600/474645'}
          title="Promo"
        />
        <View style={styles.more}>
          <Text style={styles.Text}>More</Text>
          <View style={styles.wrap}>
            {data.map((i) => (
              <CardGlobal />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  card: {
    backgroundColor: 'white',
    height: 300,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#cacaca',
  },
  cardTitle: {
    flex: 0.4,
    justifyContent: 'center',
  },
  Text: {
    fontSize: 20,
    marginLeft: 20,
  },
  cardContent: {
    flex: 2,
  },
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    backgroundColor: '#f9f9f9',
    height: 230,
    width: 150,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  wrap: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 5,
    marginTop: 10,
  },
  more: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#cacaca',
    marginTop: 10,
  },
});

export default Home;
