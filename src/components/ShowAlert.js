import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {HEIGHT, WIDTH, bgColor, themeColor} from '../constants/constants';

export default function ShowAlert({
  showWarning,
  ConfirmPressed,
  CancelPressed,
  heading,
  text,
}) {
  return (
    <Modal
      visible={showWarning}
      transparent
      onRequestClose={() => CancelPressed()}
      animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, .4)',
        }}>
        <View
          style={{
            width: WIDTH * 0.8,
            // height: 200,
            backgroundColor: bgColor,

            borderRadius: 16,
            // elevation: 5,
            // marginHorizontal: 150,
            // marginHorizontal: '10%',
          }}>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: themeColor,
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
              //   marginHorizontal: 10,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: RFValue(18),
                margin: 10,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {heading}
            </Text>
          </View>
          <View
            style={{
              // height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: RFValue(10),
              marginHorizontal: WIDTH * 0.1,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: RFValue(18),
                margin: RFValue(5),
                textAlign: 'center',
              }}>
              {text}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: RFValue(15),
              marginBottom: RFValue(15),
            }}>
            <TouchableOpacity
              accessibilityLabel={'OK ' + heading}
              onPress={() => ConfirmPressed()}
              style={{
                // flex: 1,
                paddingHorizontal: WIDTH * 0.1,
                marginTop: RFValue(10),
                backgroundColor: themeColor,
                // paddingHorizontal: RFValue(35),
                paddingVertical: RFValue(10),
                borderRadius: 8,
                borderColor: themeColor,
                borderWidth: 1,

                shadowColor: '#777777',
                shadowOpacity: 0.3,
                shadowRadius: 4,
                shadowOffset: {
                  height: 3,
                  width: 3,
                },
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: WIDTH * 0.06,
              }}>
              <Text
                style={{
                  color: bgColor,
                  //   fontWeight: '900',
                  fontWeight: '600',
                  fontSize: RFValue(16),
                }}>
                OK
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => CancelPressed()}
              style={{
                flex: 1,
                marginTop: RFValue(10),
                backgroundColor: bgColor,
                // paddingHorizontal: RFValue(30),
                paddingVertical: RFValue(10),
                borderRadius: 8,
                borderColor: 'red',
                borderWidth: 1,
                marginHorizontal: WIDTH * 0.06,

                shadowColor: '#777777',
                shadowOpacity: 0.3,
                shadowRadius: 4,
                shadowOffset: {
                  height: 3,
                  width: 3,
                },
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontWeight: '600',
                  fontSize: RFValue(16),
                }}>
                Cancel
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Modal>
  );
}
