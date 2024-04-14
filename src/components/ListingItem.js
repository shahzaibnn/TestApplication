import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH, themeColor} from '../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ListingItem({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DoctorProfile');
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
          uri: 'https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg',
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
            Dr. Jaison
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="star"
              size={HEIGHT * 0.02}
              color="#FDC315"
              // style={{alignSelf: 'flex-end'}}
            />
            <Text style={{marginHorizontal: WIDTH * 0.02}}>5.0</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              marginTop: HEIGHT * 0.005,
              fontSize: RFValue(13),
              color: '#777777',
            }}>
            Gastrology
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="clock-o"
              size={HEIGHT * 0.02}
              color={themeColor}
              // style={{alignSelf: 'flex-end'}}
            />
            <Text style={{marginHorizontal: WIDTH * 0.02}}>
              9:00 AM - 4:00 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: HEIGHT * 0.02,
            alignItems: 'center',
            // backgroundColor: 'red',
            // justifyContent: 'space-between',
          }}>
          <Image
            resizeMode={'cover'}
            style={{
              width: WIDTH * 0.07,
              height: HEIGHT * 0.03,
              borderRadius: 8,
              // borderTopLeftRadius: 16,
              // borderBottomLeftRadius: 16,
              // position: 'relative',
              // tintColor: themeColor,
            }}
            source={{
              uri: 'https://smartbenefits.pk/wp-content/uploads/2022/09/08-1024x538.jpg',
            }}
          />
          <Text style={{marginHorizontal: WIDTH * 0.03, fontSize: RFValue(15)}}>
            Liaquat National Hospital
          </Text>
          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="star"
              size={HEIGHT * 0.02}
              color="#FDC315"
              // style={{alignSelf: 'flex-end'}}
            />
            <Text style={{marginHorizontal: WIDTH * 0.02}}>5.0</Text>
          </View> */}

          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome
              name="clock-o"
              size={HEIGHT * 0.02}
              color={themeColor}
              // style={{alignSelf: 'flex-end'}}
            />
            <Text style={{marginHorizontal: WIDTH * 0.02}}>
              9:00 AM - 4:00 PM
            </Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}
