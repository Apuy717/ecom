import React from 'react';
import {View, Image, Text} from 'react-native';

const Category = (props) => {
  return (
    <View
      style={{
        height: 300,
        flexWrap: 'wrap',
      }}>
      {props.data.map((i) => (
        <View
          style={{
            backgroundColor: 'white',
            height: 120,
            width: 80,
            margin: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <Image
              source={i.image}
              style={{
                resizeMode: 'contain',
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{i.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Category;
