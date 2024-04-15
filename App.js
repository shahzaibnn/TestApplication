import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import Toast from 'react-native-toast-message';
import ProfileScreen from './src/screens/ProfileScreen';
import {storage} from './src/constants/constants';
import AuthStack from './src/navigations/AuthStack';
import ListingDetailScreen from './src/screens/ListingDetailScreen';

export default function App() {
  return (
    <NavigationContainer>
      <>{storage.getBoolean('LoggedIn') ? <AuthStack /> : <AppStack />}</>
      <Toast />
    </NavigationContainer>
    // <ProfileScreen />

    // <ListingDetailScreen />
  );
}
