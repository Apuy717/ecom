import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {onScrollEvent, useValue} from 'react-native-redash';
import CardHorizontal from '../../../components/layout/cardHorizontal';
import Header from './Header';
import HeaderImage, {HEADER_IMAGE_HEIGHT} from './HeaderImage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTitle: {marginTop: 10, padding: 10},
});

export default ({route}) => {
  const dat = [1, 2, 3, 4];
  const scrollView = useRef<Animated.ScrollView>(null);
  const y = useValue(0);
  const onScroll = onScrollEvent({y});
  return (
    <View style={styles.container}>
      <HeaderImage {...{y}} />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollView}
        style={StyleSheet.absoluteFill}
        scrollEventThrottle={1}
        {...{onScroll}}>
        <View
          style={{backgroundColor: '#e6e6e6', marginTop: HEADER_IMAGE_HEIGHT}}>
          {dat.map((i) => (
            <View style={styles.cardTitle}>
              <Text allowFontScaling={false} style={{fontSize: 17}}>
                Mobil Toyota terbaru cocok untuk keluarga toyota avanza gl120
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Rp.200.000.000,00
              </Text>
            </View>
          ))}
        </View>
        <CardHorizontal
          image={'https://via.placeholder.com/600/45601a'}
          title="Barang Terkait"
        />

        <CardHorizontal
          image={'https://via.placeholder.com/600/45601a'}
          title="Rekomendasi Buat Anda"
        />
      </Animated.ScrollView>
      <Header {...{y, scrollView}} />
    </View>
  );
};
