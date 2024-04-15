import {View, Text} from 'react-native';
import React from 'react';
import ImageModal from 'react-native-image-modal';

import {HEIGHT, WIDTH} from '../constants/constants';

export default function ImageList({item}) {
  let check = item.id % 3;
  console.log(check);
  console.log(item.id);
  if (check == 0) {
    console.log('0 is running');
    // setColumnNumber(2);
    return (
      <ImageModal
        resizeMode="cover"
        // imageBackgroundColor="transparent"
        style={{
          // minHeight: 150,
          // minWidth: windowWidth / 2,
          width: WIDTH,
          height: 150,
          marginBottom: 1,
        }}
        modalImageResizeMode="contain"
        modalImageStyle={{
          minHeight: HEIGHT,
          minWidth: WIDTH,
        }}
        source={{
          uri: item.image,
        }}
      />
    );
  } else {
    console.log('other is running');
    // setColumnNumber(1);
    return (
      <View style={{flexDirection: 'row'}}>
        <ImageModal
          resizeMode="cover"
          style={{
            width: WIDTH / 2 - 1,
            height: 100,
            marginHorizontal: 0.5,

            marginBottom: 1,
          }}
          modalImageResizeMode="contain"
          modalImageStyle={{
            minHeight: HEIGHT,
            minWidth: WIDTH,
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
    );
  }
}
