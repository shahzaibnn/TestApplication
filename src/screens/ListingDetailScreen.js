import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Linking,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {HEIGHT, WIDTH, bgColor} from '../constants/constants';

export default function ListingDetailScreen({navigation, route}) {
  const [id, setId] = useState(1);
  const [images, setImages] = useState([]);

  const [whatsappMessage, setWhatsappMessage] = useState(
    'Hello, I saw your ad on Test App, I am interested in your service, Can you please share more details?',
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: HEIGHT * 0.9, flex: 1}}>
        {/* <LineSpacing /> */}

        <View style={{flex: 1, backgroundColor: bgColor}}>
          <FlatList
            data={[]}
            keyExtractor={item => item.id}
            ListHeaderComponent={
              <View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Gallery', {
                        allImages: route.params.item.imageArray,
                      });
                    }}>
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: WIDTH,
                        height: HEIGHT * 0.4,
                        // borderRadius: 128,
                        // position: 'relative',
                        // tintColor: themeColor,
                      }}
                      source={{
                        uri: route.params.item.thumbnail,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      marginHorizontal: WIDTH * 0.03,
                      marginTop: HEIGHT * 0.02,
                    }}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Ionicons
                      name="chevron-back"
                      size={HEIGHT * 0.05}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.scrollingContainer}>
                  <Text style={styles.headlineText}>
                    {route.params.item.title}
                  </Text>

                  <View>
                    <Text style={styles.hostedText}>
                      {route.params.item.description}
                    </Text>

                    <Text style={styles.descriptionText}>
                      {'Price: ' + route.params.item.price}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(
                        'whatsapp://send?text=' +
                          whatsappMessage +
                          '&phone=' +
                          route.params.item.contact,
                      );
                    }}>
                    <Text
                      style={[styles.availabilityText, {fontWeight: 'bold'}]}>
                      {'Contact: ' + route.params.item.contact}
                    </Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'center',
                      marginTop: HEIGHT * 0.02,
                    }}>
                    <FontAwesome
                      name="star"
                      size={HEIGHT * 0.02}
                      color="#FDC315"
                      // style={{alignSelf: 'flex-end'}}
                    />
                    <Text style={{marginHorizontal: WIDTH * 0.02}}>
                      {route.params.item.ratings}
                    </Text>
                  </View>
                </View>
              </View>
            }
            renderItem={({item}) => <></>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollingContainer: {
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    backgroundColor: bgColor,
    width: WIDTH,
    marginTop: -20,
  },
  headlineText: {
    paddingTop: '2%',
    paddingLeft: '5%',
    fontSize: 25,
    // fontWeight: 'bold',
  },
  hostedText: {
    fontSize: 25,
    paddingTop: '5%',
    paddingLeft: '5%',
    // fontWeight: 'bold',
  },
  descriptionText: {
    paddingHorizontal: '5%',
    fontSize: 20,
  },
  availabilityText: {
    paddingHorizontal: '5%',
    marginTop: '5%',
    // fontWeight: 'bold',
    fontSize: 20,
  },
  calendar: {
    width: '90%',
    marginHorizontal: '5%',
  },

  sleepText: {
    paddingTop: '5%',
    fontSize: 20,
    paddingHorizontal: '5%',
  },
  offering: {
    paddingTop: '5%',
    // fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: '5%',
  },
  footerContainer: {
    alignItems: 'center',
    margin: '5%',
  },
  amenitiesButton: {
    marginLeft: '15%',
    marginTop: '5%',
    marginBottom: '2%',
    height: '7%',
    backgroundColor: bgColor,
    width: '70%',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
  },
  amenitiesText: {
    textAlign: 'center',
    fontSize: 20,
    // fontWeight: 'bold',
  },
  stayText: {
    padding: '5%',
    fontSize: 20,
    //  fontWeight: 'bold',
  },
  map: {width: '80%', height: 200, marginHorizontal: '10%'},
});
