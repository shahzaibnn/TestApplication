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
import {data} from '../modal/data';

// import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DashboardScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [
    onEndReachedCalledDuringMomentumJob,
    setOnEndReachedCalledDuringMomentumJob,
  ] = useState(true);

  const [startRange, setStartRange] = useState(0);
  const [endRange, setEndRange] = useState(4);

  const [selectedCategory, setSelectedCategory] = useState('Category 1');

  const [category1Data, setCategory1Data] = useState([]);

  const [category2Data, setCategory2Data] = useState([]);

  const [category3Data, setCategory3Data] = useState([]);

  const FetchMoreData = () => {
    {
      const category1Objects = data
        .filter(item => item.category === 'Category 1')
        .slice(startRange, endRange);

      console.log(category1Objects);

      if (category1Objects.length != 0) {
        setCategory1Data(oldArray => [...oldArray, ...category1Objects]);
      }
      const category2Objects = data
        .filter(item => item.category === 'Category 2')
        .slice(startRange, endRange);

      console.log(category2Objects);

      if (category2Objects.length != 0) {
        setCategory2Data(oldArray => [...oldArray, category2Objects]);
      }

      const category3Objects = data
        .filter(item => item.category === 'Category 3')
        .slice(startRange, endRange);

      console.log(category3Objects);

      if (category3Objects.length != 0) {
        setCategory3Data(oldArray => [...oldArray, category3Objects]);
      }

      setStartRange(startRange + 4);
      setEndRange(endRange + 4);
    }
  };

  useEffect(() => {
    const category1Objects = data
      .filter(item => item.category === 'Category 1')
      .slice(startRange, endRange);

    console.log(category1Objects);

    setCategory1Data(category1Objects);

    const category2Objects = data
      .filter(item => item.category === 'Category 2')
      .slice(startRange, endRange);

    console.log(category2Objects);

    setCategory2Data(category2Objects);

    const category3Objects = data
      .filter(item => item.category === 'Category 3')
      .slice(startRange, endRange);

    console.log(category3Objects);

    setCategory3Data(category3Objects);

    setStartRange(startRange + 4);
    setEndRange(endRange + 4);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#f2f2f2', flex: 1}}>
      {/* <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}> */}
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View>
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
                    navigation.navigate('Search');
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
                <Category
                  selectedCategory={() => {
                    setSelectedCategory('Category 1');
                  }}
                  backColor={themeColor}
                  categoryName={'Category 1'}
                  image={
                    'https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?format=jpg&width=1440'
                  }
                />
                <Category
                  selectedCategory={() => {
                    setSelectedCategory('Category 2');
                  }}
                  backColor={'#71CCD4'}
                  categoryName={'Category 2'}
                  image={
                    'https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?format=jpg&width=1440'
                  }
                />
                <Category
                  selectedCategory={() => {
                    setSelectedCategory('Category 3');
                  }}
                  backColor={'#F9B994'}
                  categoryName={'Category 3'}
                  image={
                    'https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?format=jpg&width=1440'
                  }
                />
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
            </View>
          );
        }}
        data={
          selectedCategory === 'Category 1'
            ? category1Data
            : selectedCategory === 'Category 2'
            ? category2Data
            : category3Data
        }
        renderItem={({item}) => (
          <ListingItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        // onEndReached={() => }
        onEndReachedThreshold={0.5}
        scrollEventThrottle={150}
        onMomentumScrollBegin={() => {
          console.log('called ever?');
          setOnEndReachedCalledDuringMomentumJob(false);
        }}
        onEndReached={() => {
          console.log('end is near');
          console.log(onEndReachedCalledDuringMomentumJob);
          //   if (!onEndReachedCalledDuringMomentumJob) {
          console.log(
            '0000000000000000000000000000000000000000000----------------------------------------',
          );
          FetchMoreData();
          setOnEndReachedCalledDuringMomentumJob(true);
          //   }
        }}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
