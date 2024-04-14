import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {HEIGHT, WIDTH, bgColor, themeColor} from '../constants/constants';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fields from '../components/Fields';
import GradientButton from '../components/GradientButton';
import Toast from 'react-native-toast-message';
import {storage} from '../constants/constants';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Login Denied',
      text2: 'Kindly enter valid credentials',
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/backgroundImage.jpg')}
        resizeMode="cover"
        style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#ffffff',
            fontSize: RFValue(24),
            fontWeight: 'bold',
            width: WIDTH * 0.4,
            // backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: HEIGHT * 0.05,
          }}>
          Hello, Welcome
        </Text>

        <Image
          resizeMode={'cover'}
          style={{
            height: HEIGHT * 0.3,
            width: WIDTH * 0.5,
            alignSelf: 'center',
            marginTop: HEIGHT * 0.03,
          }}
          source={require('../assets/images/signinImage.png')}
        />

        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            marginTop: HEIGHT * 0.05,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            // paddingTop: HEIGHT * 0.03,
            paddingHorizontal: WIDTH * 0.07,
          }}>
          <Fields
            property={email}
            setProperty={setEmail}
            placeholderText={'interview@eclatechsolutions.com'}
            heading={'Email Address'}
          />

          <Fields
            property={password}
            setProperty={setPassword}
            placeholderText={'*********'}
            heading={'Password'}
          />

          {/* <View
              style={{
                width: WIDTH * 0.8,
                height: HEIGHT * 0.07,
                borderRadius: 32,
              }}> */}

          <GradientButton
            text={'Sign In'}
            onPress={() => {
              if (
                email === 'interview@eclatechsolutions.com' &&
                password === 'testing123'
              ) {
                storage.set('LoggedIn', true);
                navigation.navigate('Listing');
              } else {
                showToast();
              }
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: HEIGHT * 0.01,
            }}>
            <Text>Need an account?</Text>
            <TouchableOpacity>
              <Text style={{fontWeight: 'bold'}}> Sign Up</Text>
            </TouchableOpacity>
          </View>
          {/* </ImageBackground> */}
          {/* </View> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
