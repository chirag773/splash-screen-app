/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';

const Splash = ({splashImage}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={{uri: splashImage}}
        style={{width: 250, height: 250}}
      />
    </View>
  );
};

export default Splash;
