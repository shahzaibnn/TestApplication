import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';

export default function GradientButton({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        //   borderRadius: 32,
        marginTop: HEIGHT * 0.03,

        //   alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('../assets/images/backgroundImage.jpg')}
        resizeMode="cover"
        imageStyle={{borderRadius: 32}}
        style={{
          height: HEIGHT * 0.06,
          width: WIDTH * 0.75,
          alignItems: 'center',
          justifyContent: 'center',
          //   borderRadius: 32,
          // height: HEIGHT * 0.1,
          // width: WIDTH * 0.8,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: RFValue(18),
            //   fontWeight: 'bold',
            //   borderRadius: 32,
            //   textAlign: 'center',
            //   verticalAlign: 'middle',
          }}>
          {text}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
