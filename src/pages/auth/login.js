import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';

const authLogin = () => {
  const Cimg = require('../../assets/ilustrator/login.png');
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        source={Cimg}
        style={{
          resizeMode: 'cover',
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          opacity: 0.9,
        }}
      />
      <SlidingUpPanel
        ref={(c) => (SlidingUpPanel._panel = c)}
        draggableRange={{top: 400, bottom: 200}}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.inner}>
            <TextInput
              placeholder="Username or number phone"
              style={styles.textInput}
            />
          </View>
        </KeyboardAvoidingView>
      </SlidingUpPanel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    backgroundColor: 'white',
    padding: 24,
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
});

export default authLogin;
