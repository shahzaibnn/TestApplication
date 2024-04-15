import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
// import { FlatList } from 'react-native-gesture-handler';
import ImageModal from 'react-native-image-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageList from '../components/ImageList';
// import ImageList from '../components/GalleryScreenComponents/ImageList';
// import {propertyDetails} from '../model/data';

export default function GalleryScreen({navigation, route}) {
  console.log(route.params.allImages);
  return (
    <View>
      <FlatList
        data={route.params.allImages}
        numColumns={route.params.allImages.length}
        columnWrapperStyle={{flexWrap: 'wrap'}}
        key={'_'}
        keyExtractor={item => '_' + item.id}
        ListHeaderComponent={
          <View>
            <View style={styles.topContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back" size={30} />
                </TouchableOpacity>
              </View>
              <View style={styles.heading}>
                <Text style={styles.villaText}>{'Gallery'}</Text>
              </View>
            </View>
          </View>
        }
        renderItem={({item}) => <ImageList item={item} />}
      />
    </View>
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
