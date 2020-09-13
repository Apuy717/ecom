import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImagePropTypes,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardHorizontal = (props) => {
  const data = [1, 2, 3, 4, 5];
  return (
    <View style={styles.card}>
      <View style={styles.cardTitle}>
        <Text style={styles.Text}>{props.title}</Text>
      </View>
      <View style={styles.cardContent}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((i) => (
            <TouchableOpacity
              style={{flex: 1}}
              activeOpacity={0.9}
              onPress={() => props.navigation(1)}>
              <View style={styles.item}>
                <View style={styles.imageParent}>
                  <Image source={{uri: props.image}} style={styles.image} />
                </View>
                <View style={styles.contentSection}>
                  <Text style={styles.textContnt}>iphone 11 pro 255gb</Text>
                  <Text style={styles.textContnt}>Rp.35.000.000,00</Text>
                  <Text style={styles.textContnt}>**** best</Text>
                  <Text style={styles.textContnt}>tersedia 20</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageParent: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
  },
  contentSection: {flex: 1},
  textContnt: {
    marginLeft: 10,
  },
});

export default CardHorizontal;
