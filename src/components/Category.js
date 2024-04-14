import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH, themeColor} from '../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';

export default function Category({
  backColor,
  categoryName,
  textColor,
  image,
  selectedCategory,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        selectedCategory();
      }}
      style={{
        backgroundColor: backColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: WIDTH * 0.03,
        paddingVertical: HEIGHT * 0.02,
        borderRadius: 16,
        elevation: 15,
      }}>
      <Image
        resizeMode={'cover'}
        style={{
          width: HEIGHT * 0.05,
          height: HEIGHT * 0.05,
          borderRadius: 128,
          // position: 'relative',
          // tintColor: themeColor,
        }}
        source={{
          uri: image,
        }}
      />

      <Text
        style={{
          color: textColor ? textColor : '#ffffff',
          marginTop: HEIGHT * 0.015,
          fontWeight: 'bold',
          fontSize: RFValue(14),
          // flex: 1,
          textAlign: 'center',

          width: WIDTH * 0.22,
        }}>
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
}
