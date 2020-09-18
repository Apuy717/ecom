// import React, {useState} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {
//   PanGestureHandler,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';
// import Animated from 'react-native-reanimated';
// import {
//   usePanGestureHandler,
//   withOffset,
//   useTimingTransition,
// } from 'react-native-redash';

// const DetailItem = () => {
//   const {gestureHandler, translation, state} = usePanGestureHandler();
//   const translateX = withOffset(translation.x, state);
//   const translateY = withOffset(translation.y, state);
//   const [open, setOpen] = useState(false);
//   const transition = useTimingTransition(open, {duration: 400});
//   return (
//     <View style={styles.container}>
//       <PanGestureHandler {...gestureHandler}>
//         <Animated.View
//           style={[styles.ball, {transform: [{translateX}, {translateY}]}]}
//         />
//       </PanGestureHandler>

//       <View
//         style={{backgroundColor: 'red', height: open ? 400 : 100, width: 100}}>
//         <TouchableOpacity
//           onPress={() => (open ? setOpen(false) : setOpen(true))}>
//           <Text>tes open</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ball: {
//     backgroundColor: 'green',
//     height: 50,
//     width: 50,
//     borderRadius: 50,
//   },
// });

// export default DetailItem;

import React, {useRef, useState} from 'react';
import {Image, StatusBar, StyleSheet, Switch, Text, View} from 'react-native';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

Ionicons.loadFont();
Feather.loadFont();

const hei = Dimensions.get('screen').height;
const DetailItem = () => {
  const ref = useRef(null);
  const ck = useRef(null);
  // console.log({...StyleSheet.absoluteFillObject});
  const [isDarkMode, setDarkMode] = useState(false);
  const [hg, setHg] = useState(0);
  console.log(hg);

  const cs = (e) => {
    setHg(e.nativeEvent.layout.height);
  };
  const transition = (
    <Transition.Together>
      <Transition.In type="slide-top" durationMs={300} />
      <Transition.Out type="slide-top" durationMs={300} />
      <Transition.Change durationMs={300} />
    </Transition.Together>
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Transitioning.View
        style={
          isDarkMode
            ? {
                ...styles.container,
                height: hg + 120,
              }
            : styles.container
        }
        {...{ref, transition}}>
        <View style={{marginVertical: 40, marginHorizontal: 20}}>
          <Switch
            value={isDarkMode}
            onValueChange={() => {
              if (ref.current) {
                ref.current.animateNextTransition();
              }
              setDarkMode(isDarkMode ? false : true);
            }}
          />
        </View>
        <View onLayout={(e) => cs(e)}>
          <Text>
            Commodo incididunt ea officia amet dolore qui cillum. Id quis
            aliquip laboris in sint nisi labore duis. Aliqua tempor labore ea
            enim fugiat eiusmod cillum enim nostrud ullamco do veniam aliqua
            pariatur. Duis Lorem Lorem quis ad. Adipisicing consectetur dolor
            qui magna minim nostrud tempor dolore minim pariatur laborum
            proident enim eu. Est aliquip qui adipisicing cillum. Commodo
            incididunt ea officia amet dolore qui cillum. Id quis aliquip
            laboris in sint nisi labore duis. Aliqua tempor labore ea enim
            fugiat eiusmod cillum enim nostrud ullamco do veniam aliqua
            pariatur. Duis Lorem Lorem quis ad. Adipisicing consectetur dolor
            qui magna minim nostrud tempor dolore minim pariatur laborum
            proident enim eu. Est aliquip qui adipisicing cillum. Commodo
            incididunt ea officia amet dolore qui cillum. Id quis aliquip
            laboris in sint nisi labore duis. Aliqua tempor labore ea enim
            fugiat eiusmod cillum enim nostrud ullamco do veniam aliqua
            pariatur. Duis Lorem Lorem quis ad. Adipisicing consectetur dolor
            qui magna minim nostrud tempor dolore minim pariatur laborum
            proident enim eu. Est aliquip qui adipisicing cillum. Commodo
            incididunt ea officia amet dolore qui cillum. Id quis aliquip
            laboris in sint nisi labore duis. Aliqua tempor labore ea enim
            fugiat eiusmod cillum enim nostrud ullamco do veniam aliqua
            pariatur. Duis Lorem Lorem quis ad. Adipisicing consectetur dolor
            qui magna minim nostrud tempor dolore minim pariatur laborum
            proident enim eu. Est aliquip qui adipisicing cillum.
          </Text>
        </View>
      </Transitioning.View>
    </>
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
  },
  container: {height: 100, backgroundColor: 'red', overflow: 'hidden'},
});

export default DetailItem;
