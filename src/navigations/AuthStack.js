import {View, Text} from 'react-native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListingScreen from '../screens/ListingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import GalleryScreen from '../screens/GalleryScreen';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Listing"
        component={ListingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ListingDetail"
        component={ListingDetailScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
