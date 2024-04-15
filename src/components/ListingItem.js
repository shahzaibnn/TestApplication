import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH, themeColor} from '../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ListingItem({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ListingDetail', {item: item});
      }}
      style={{
        flexDirection: 'row',
        backgroundColor: '#ffffff',

        marginHorizontal: WIDTH * 0.05,
        // borderRadius: 16,
        marginTop: HEIGHT * 0.03,
        // borderWidth: 0.2,
        elevation: 5,
        borderColor: '#777777',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
      }}>
      <Image
        resizeMode={'cover'}
        style={{
          width: WIDTH * 0.25,
          //   height: HEIGHT * 0.1,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
          // position: 'relative',
          // tintColor: themeColor,
        }}
        source={{
          uri: item.thumbnail,
        }}
      />

      <View
        style={{
          marginHorizontal: WIDTH * 0.02,
          paddingVertical: HEIGHT * 0.01,
          //   backgroundColor: 'red',
          flex: 1,

          //   borderTopRightRadius: 16,
          //   borderBottomRightRadius: 16,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#000000',
              fontSize: RFValue(14),
              fontWeight: 'bold',
              // marginTop: HEIGHT * 0.015,
            }}>
            {item.title}
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="star"
              size={HEIGHT * 0.02}
              color="#FDC315"
              // style={{alignSelf: 'flex-end'}}
            />
            <Text style={{marginHorizontal: WIDTH * 0.02}}>{item.ratings}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              marginTop: HEIGHT * 0.005,
              fontSize: RFValue(13),
              color: '#777777',
            }}>
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
