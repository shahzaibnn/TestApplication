import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {RFValue} from 'react-native-responsive-fontsize';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {HEIGHT, WIDTH, bgColor, themeColor} from '../constants/constants';
import ListingItem from '../components/ListingItem';
import {data} from '../modal/data';
export default function SearchScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [searchedData, setSearchedData] = useState([]);

  function SearchArrayObjects(array, searchString) {
    const results = [];

    array.forEach(obj => {
      // Iterate through each key in the object
      Object.keys(obj).forEach(key => {
        console.log(obj);
        console.log(key);
        // Check if the value of the current key contains the search string
        if (
          obj[key].toString().toLowerCase().includes(searchString.toLowerCase())
        ) {
          results.push(obj);
        }
      });
    });

    return results;
  }

  useEffect(() => {
    console.log(search.length);
    if (search) {
      if (search.length >= 3) {
        // setLoading(true);
        const timer = setTimeout(() => {
          setSearchedData(SearchArrayObjects(data, search));
        }, 500);

        return () => clearTimeout(timer);
      }
    } else {
      setSearchedData([]);
    }
  }, [search]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={styles.topContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.heading}>
            <Text style={styles.villaText}>{'Search'}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: HEIGHT * 0.02,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: WIDTH * 0.03,
        }}>
        <View
          style={{
            //   borderRadius: 32,
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 32,
            borderBottomLeftRadius: 32,
            borderWidth: 0.2,
            borderColor: '#777777',

            paddingVertical: HEIGHT * 0.005,
            alignItems: 'center',
            //   justifyContent: 'center',
            paddingHorizontal: WIDTH * 0.03,
            flexDirection: 'row',
            width: WIDTH * 0.78,
          }}>
          <Fontisto
            name="search"
            size={HEIGHT * 0.02}
            color="#777777"
            // style={{alignSelf: 'flex-end'}}
          />

          <TextInput
            style={{
              backgroundColor: '#ffffff',
              height: RFValue(35),
              width: RFValue(200),
              marginStart: RFValue(10),
              borderRadius: 4,
              // elevation: 5,

              fontSize: RFValue(14),
              // paddingLeft: RFValue(14),
              color: 'black',

              //   borderWidth: 1,
            }}
            onChangeText={setSearch}
            value={search}
            placeholder={'Search Listing'}
            placeholderTextColor={'#777777'}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 128,
            borderWidth: 0.2,
            borderColor: '#777777',
            width: WIDTH * 0.15,
            height: WIDTH * 0.15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name="options-outline"
            size={WIDTH * 0.07}
            color={themeColor}
            // style={{alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchedData}
        renderItem={({item}) => (
          <ListingItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        // onEndReached={() => }
        onEndReachedThreshold={0.5}
        scrollEventThrottle={150}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    left: '2%',
    marginTop: '2%',
  },
  heading: {marginTop: '2%'},
  villaText: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: '10%',
    // marginTop: '2%',
  },
  galleryText: {
    marginVertical: '5%',
    fontSize: 25,
    marginLeft: '2%',
    marginBottom: '2%',
  },
});
