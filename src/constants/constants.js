import {Dimensions} from 'react-native';

export const WIDTH = Dimensions.get('screen').width;

export const HEIGHT = Dimensions.get('screen').height;

export const themeColor = '#575CE5';

export const bgColor = '#ffffff';

import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();
