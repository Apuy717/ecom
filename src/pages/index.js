/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CardGlobal from '../components/layout/cardGlobal';
import CardHorizontal from '../components/layout/cardHorizontal';
import Category from '../components/layout/category';
import HeaderSearch from '../components/layout/headerSearch';
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

  const img = [
    {
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      desc:
        'Sample Description below the image for representation purpose only',
    },
    {
      image: 'https://via.placeholder.com/600/771796',
      desc:
        'Sample Description below the image for representation purpose only',
    },
  ];

  const reff = useRef();
  const [end, setEnd] = useState(0);
  console.log(end);

  const setSelectedIndex = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;

    const count = Math.round(contentOffset / viewSize);
    setEnd(count);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     setEnd(() => end + 1),
  //       reff.current.scrollTo({
  //         animated: true,
  //         y: 0,
  //         x: width * end,
  //       });
  //   }, 3000);
  // }, []);

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
        {/* <FlatListSlider
          data={img}
          width={275}
          timer={4000}
          component={<Preview />}
          onPress={(item) => alert(JSON.stringify(item))}
          indicatorActiveWidth={40}
          contentContainerStyle={styles.contentStyle}
        /> */}
        <View style={{position: 'relative'}}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            ref={reff}
            onMomentumScrollEnd={setSelectedIndex}>
            {img.map((image, i) => {
              return (
                <View style={{height: 220, width: width, padding: 10}} key={i}>
                  <Image
                    source={{uri: image.image}}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 10,
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}>
            {img.map((image, i) => {
              return (
                <View
                  style={{
                    backgroundColor: '#f8f8f8',
                    height: 12,
                    width: 12,
                    margin: 2,
                    borderRadius: 6,
                    opacity: i === end ? 0.3 : 1,
                  }}
                />
              );
            })}
          </View>
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
          navigation={(i) => props.navigation.navigate('Detail', {id: i})}
        />
        <CardHorizontal
          image={'https://via.placeholder.com/600/45601a'}
          title="Barang Populer"
          navigation={(i) => alert(i)}
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
  contentStyle: {
    paddingHorizontal: 16,
  },
  textH: {
    padding: 20,
  },
});

export default Home;
