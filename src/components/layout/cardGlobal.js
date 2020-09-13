import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/tools/button';
import {AntDesign} from '../../components/tools/Icon';

const WIDTH = Dimensions.get('screen').width / 2 - 15;

const CardGlobal = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageParent}>
        <Image
          source={{uri: 'https://via.placeholder.com/600/1ee8a4'}}
          style={styles.image}
        />
        <View style={styles.iconFavorite}>
          <AntDesign name="heart" style={{fontSize: 20, color: 'green'}} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.childContent}>
          <Text style={styles.Text}>Iphone 11 255gb ...</Text>
          <Text style={styles.Text}>Rp. 35.000.000,00 </Text>
          <Text style={styles.Text}>***** 120 terjual </Text>
          <Text style={styles.Text}>Jakarta </Text>
          <View style={styles.Button}>
            <Button
              height={35}
              width={'100%'}
              borderRadius={10}
              title="Beli"
              onPress={() => props.navigation.navigate('Swiper')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CardGlobal;
