import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../constants/constants';

export default function Fields({
  property,
  setProperty,
  placeholderText,
  heading,
}) {
  return (
    <View style={{marginTop: HEIGHT * 0.02}}>
      <Text style={{color: '#000000', fontWeight: 'bold'}}>{heading}</Text>

      <TextInput
        // secureTextEntry
        style={{
          backgroundColor: '#DBE4EB',

          color: 'black',
          borderRadius: 16,
          marginTop: HEIGHT * 0.02,
          paddingHorizontal: WIDTH * 0.04,
          paddingVertical: HEIGHT * 0.015,
          //   height: HEIGHT * 0.07,

          //   borderWidth: 1,
        }}
        onChangeText={setProperty}
        value={property}
        placeholder={placeholderText}
        placeholderTextColor={'#8D8C90'}
      />
    </View>
  );
}
