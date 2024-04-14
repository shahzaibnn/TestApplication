import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  BackHandler,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {Grid} from 'react-native-animated-spinkit';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {CommonActions} from '@react-navigation/native';
import {MMKV} from 'react-native-mmkv';
import {HEIGHT, WIDTH, bgColor, themeColor} from '../constants/constants';
import ShowAlert from '../components/ShowAlert';

export const storage = new MMKV();

const showToast = (status, message) => {
  Toast.show({
    type: status,
    text1: message,
  });
};

export default function ProfileScreen({navigation}) {
  const [refresh, setRefresh] = useState(true);

  const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);

  const CancelPressed = () => {
    setShow(false);
    console.log('CANCEL PRESSED!!!');
  };

  const ConfirmPressed = () => {
    setShow(false);

    console.log('CONFIRM PRESSED!!!');
  };

  const [phone, setPhone] = useState(storage.getString('Phone'));
  const [phoneFocused, setPhoneFocused] = useState(false);

  const [email, setEmail] = useState(storage.getString('Email'));
  const [emailFocused, setEmailFocused] = useState(false);

  const [imageUploaded, setImageUploaded] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [base64String, setBase64String] = useState(
    storage.getString('Base64String'),
  );

  const [spinnerLoader, setSpinnerLoader] = useState(false);
  const [pointerEvent, setPointerEvent] = useState('auto');
  const [opacity, setOpacity] = useState(1);

  const [editable, setEditable] = useState(false);

  const [cityValue, setCityValue] = useState(storage.getNumber('City'));
  const [countryValue, setCountryValue] = useState(
    storage.getNumber('CountryID'),
  );

  const selectImage = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    const result = await launchImageLibrary(options);
    console.log(result);

    if (result.assets) {
      console.log('file is selected');
      setBase64String(result.assets[0].base64);
      setSelectedImageUri(result.assets[0].uri);
      setImageUploaded(true);
    } else {
      console.log('no file is selected');
      setImageUploaded(false);
    }
  };

  const showToast = (status, message) => {
    Toast.show({
      type: status,
      text1: message,
    });
  };

  const profileEditPressed = () => {
    setSpinnerLoader(true);
    setPointerEvent('none');
    setOpacity(0.8);

    if (email) {
      storage.set('Email', email);
    }
    if (phone) {
      storage.set('Phone', phone);
    }
    if (base64String) {
      storage.set('Base64String', base64String);
    }
    setMessage('Update Successfully!');
    setSpinnerLoader(false);
    setPointerEvent('auto');
    setOpacity(1);
    setShow(true);
  };

  function logoutPressed() {
    return new Promise(function (resolve, reject) {
      setSpinnerLoader(true);
      setPointerEvent('none');
      setOpacity(0.8);
      setTimeout(function () {
        setSpinnerLoader(false);
        setPointerEvent('auto');
        setOpacity(1);

        storage.clearAll();

        navigation.navigate('Login');
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Login'}],
          }),
        );
      }, 2000);
    });
  }

  //   useEffect(() => {
  //     GetAllStatusApi(dispatch);
  //   }, []);

  // useEffect(() => {
  //   // showToast('success', 'Login Successfull');
  // }, []);

  return (
    <SafeAreaView
      style={{backgroundColor: bgColor, flex: 1, opacity: opacity}}
      pointerEvents={pointerEvent}>
      <View
        style={{
          backgroundColor: themeColor,
          width: WIDTH,
          height: HEIGHT * 0.15,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,

          // flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'orange',
            marginTop: HEIGHT * 0.03,
          }}>
          <TouchableOpacity
            accessibilityLabel="Back"
            onPress={() => navigation.goBack()}
            // onPress={() => {
            //   if (storage.getNumber('AgentType') === 0) {
            //     navigation.dispatch({
            //       ...StackActions.replace('IsoDashboard'), // Replace with your screen name
            //       // forceRefresh: {key: Date.now()}, // Use a unique key to force reload
            //     });
            //   } else {
            //     navigation.dispatch({
            //       ...StackActions.replace('AgentDashboard'), // Replace with your screen name
            //       // forceRefresh: {key: Date.now()}, // Use a unique key to force reload
            //     });
            //   }
            // }}
            style={{flex: 1, alignItems: 'center'}}>
            <Ionicons
              name="chevron-back"
              size={HEIGHT * 0.03}
              color="#ffffff"
              // style={{alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              flex: 4,
              fontSize: RFValue(18),
              color: bgColor,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Profile
          </Text>

          {!editable ? (
            <TouchableOpacity
              accessibilityLabel="Edit"
              style={{flex: 1, alignItems: 'center'}}
              onPress={() => {
                setEditable(!editable);

                // alert('Editing is allowed!');
              }}>
              <Image
                resizeMode={'contain'}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                  //   position: 'absolute',
                  //   top: RFValue(45),
                  //   left: RFValue(20),
                }}
                source={require('../assets/images/editIcon.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              accessibilityLabel="Submit"
              style={{flex: 1}}
              onPress={() => {
                profileEditPressed();
                setEditable(!editable);
              }}>
              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <TouchableOpacity
        accessibilityLabel="Image"
        disabled={!editable}
        onPress={selectImage}
        style={{
          alignSelf: 'center',
          // justifyContent: 'center',
          // alignItems: 'center',
          marginBottom: RFValue(5),
        }}>
        <Image
          resizeMode={'contain'}
          style={{
            width: RFValue(125),
            height: RFValue(125),
            // alignSelf: 'center',
            marginTop: RFValue(-50),
            marginHorizontal: WIDTH * 0.05,
            borderRadius: base64String ? 64 : 0,

            //   position: 'absolute',
            //   top: RFValue(45),
            //   left: RFValue(20),
          }}
          source={
            base64String
              ? {
                  uri: 'data:image/png;base64,' + base64String,
                }
              : require('../assets/images/profileIcon.png')
          }
        />
      </TouchableOpacity>

      {/* First Name */}

      <ScrollView accessibilityLabel="Scroller">
        {/* Phone */}

        <SafeAreaView
          style={{
            height: RFValue(40),
            width: WIDTH * 0.8,
            marginHorizontal: WIDTH * 0.1,
            marginBottom: RFValue(20),
          }}>
          <TextInput
            accessibilityLabel="Phone"
            onBlur={() => setPhoneFocused(false)}
            onFocus={() => setPhoneFocused(true)}
            style={{
              backgroundColor: bgColor,
              height: RFValue(40),
              width: WIDTH * 0.8,
              // marginHorizontal: WIDTH * 0.1,
              // marginBottom: RFValue(20),

              //   marginStart: RFValue(5),
              borderColor: themeColor,
              borderWidth: phoneFocused ? 1 : 0,
              borderRadius: 4,
              shadowColor: '#777777',
              shadowOpacity: 0.9,
              shadowRadius: 4,
              shadowOffset: {
                height: 5,
                width: 5,
              },

              fontSize: RFValue(10),
              paddingLeft: RFValue(14),
              color: themeColor,
            }}
            editable={editable}
            keyboardType={'phone-pad'}
            onChangeText={setPhone}
            value={phone}
            placeholder={'Phone'}
            placeholderTextColor={'#777777'}
          />
          {phoneFocused ? (
            <Text
              style={{
                position: 'absolute',
                fontSize: RFValue(10),
                left: RFValue(20),
                top: RFValue(-5),
                color: themeColor,
                backgroundColor: bgColor,
                borderRadius: 64,
              }}>
              Phone
            </Text>
          ) : null}
        </SafeAreaView>

        {/* Email */}

        <SafeAreaView
          style={{
            height: RFValue(40),
            width: WIDTH * 0.8,
            marginHorizontal: WIDTH * 0.1,
            marginBottom: RFValue(20),
          }}>
          <TextInput
            accessibilityLabel="Email"
            onBlur={() => setEmailFocused(false)}
            onFocus={() => setEmailFocused(true)}
            style={{
              backgroundColor: bgColor,
              height: RFValue(40),
              width: WIDTH * 0.8,
              // marginHorizontal: WIDTH * 0.1,
              // marginBottom: RFValue(20),

              //   marginStart: RFValue(5),
              borderColor: themeColor,
              borderWidth: emailFocused ? 1 : 0,
              borderRadius: 4,
              shadowColor: '#777777',
              shadowOpacity: 0.9,
              shadowRadius: 4,
              shadowOffset: {
                height: 5,
                width: 5,
              },

              fontSize: RFValue(10),
              paddingLeft: RFValue(14),
              color: themeColor,
            }}
            editable={editable}
            onChangeText={setEmail}
            value={email}
            placeholder={'Email'}
            placeholderTextColor={'#777777'}
          />
          {emailFocused ? (
            <Text
              style={{
                position: 'absolute',
                fontSize: RFValue(10),
                left: RFValue(20),
                top: RFValue(-5),
                color: themeColor,
                backgroundColor: bgColor,
                borderRadius: 64,
              }}>
              Email
            </Text>
          ) : null}
        </SafeAreaView>

        <TouchableOpacity
          accessibilityLabel="Logout"
          onPress={() => logoutPressed()}
          style={{
            alignSelf: 'center',
            backgroundColor: themeColor,
            width: WIDTH * 0.5,
            marginLeft: RFValue(5),
            // paddingHorizontal: RFValue(100),
            paddingVertical: RFValue(10),
            borderRadius: 12,

            marginVertical: RFValue(10),

            shadowColor: '#777777',
            shadowOpacity: 0.9,
            shadowRadius: 4,
            shadowOffset: {
              height: 5,
              width: 5,
            },
          }}>
          <Text
            style={{
              // alignSelf: 'center',
              textAlign: 'center',
              fontSize: RFValue(16),
              color: '#ffffff',
              fontWeight: 'bold',
            }}>
            Logout
          </Text>
        </TouchableOpacity>

        <Toast />
      </ScrollView>

      {spinnerLoader ? (
        <Grid
          size={WIDTH * 0.2}
          color={themeColor}
          style={{
            position: 'absolute',
            top: HEIGHT * 0.5,
            left: WIDTH * 0.4,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      ) : null}

      <ShowAlert
        showWarning={show}
        ConfirmPressed={ConfirmPressed}
        CancelPressed={CancelPressed}
        heading={'Status'}
        text={message}
      />
    </SafeAreaView>
  );
}
