import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {HEIGHT, WIDTH, themeColor} from '../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import {storage} from './ProfileScreen';
import ListingItem from '../components/ListingItem';

// import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DashboardScreen({navigation}) {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: '#f2f2f2', flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: WIDTH * 0.04,
            marginTop: HEIGHT * 0.02,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              resizeMode={'cover'}
              style={{
                height: WIDTH * 0.1,
                width: WIDTH * 0.1,
                // alignSelf: 'center',
                borderRadius: 128,
                // marginTop: HEIGHT * 0.03,
              }}
              source={require('../assets/images/profileIcon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => {
              // navigation.navigate('Message');
            }}>
            <Fontisto
              name="search"
              size={HEIGHT * 0.03}
              color="#777777"
              // style={{alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: WIDTH * 0.05,
            marginTop: HEIGHT * 0.02,
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: RFValue(20),
              fontWeight: 'bold',
            }}>
            Categories
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: WIDTH * 0.05,
            marginTop: HEIGHT * 0.03,
            justifyContent: 'space-between',
          }}>
          <Category backColor={themeColor} categoryName={'Cardiology'} />
          <Category backColor={'#71CCD4'} categoryName={'Cardiology'} />
          <Category backColor={'#F9B994'} categoryName={'Cardiology'} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: WIDTH * 0.05,
            marginTop: HEIGHT * 0.02,
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: RFValue(20),
              fontWeight: 'bold',
            }}>
            Listing
          </Text>
        </View>

        <FlatList
          data={[{id: 1, name: 'hdgds'}]}
          renderItem={({item}) => (
            <ListingItem title={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
