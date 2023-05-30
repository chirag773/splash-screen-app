import React, {useLayoutEffect, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import {SystemBars} from 'react-native-bars';
import * as BootSplash from 'react-native-bootsplash';
import axios from 'axios';

// const bootSplashLogo = require('./assets/bootsplash_logo.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 89,
    width: 100,
  },
});

// const fakeApiCallWithoutBadNetwork = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms));

export const App = () => {
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  const [bootImage, setBootImage] = useState('');
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] =
    useState(bootImage);
  const opacity = useRef(new Animated.Value(1));
  const translateY = useRef(new Animated.Value(0));

  const init = async () => {
    // You can uncomment this line to add a delay on app startup
    // await fakeApiCallWithoutBadNetwork(3000);

    try {
      await BootSplash.hide();

      setTimeout(() => {
        Animated.stagger(150, [
          Animated.spring(translateY.current, {
            useNativeDriver: true,
            toValue: -60,
          }),
          Animated.spring(translateY.current, {
            useNativeDriver: true,
            toValue: Dimensions.get('window').height,
          }),
        ]).start();

        Animated.timing(opacity.current, {
          useNativeDriver: true,
          toValue: 0,
          duration: 150,
          delay: 350,
        }).start(() => {
          setBootSplashIsVisible(false);
        });
      }, 5000);
    } catch (error) {
      setBootSplashIsVisible(false);
    }
  };

  useEffect(() => {
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);

  useLayoutEffect(() => {
    (async () => {
      const API = axios.create({
        baseURL: 'http://192.168.29.173:5001',
      });

      const foundImage = await API.get('/api/v1/get-splash-image');
      // console.log(foundImage.data.image.image);
      setBootImage(foundImage.data.image.image);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <SystemBars barStyle="dark-content" />

      {bootSplashIsVisible && bootImage ? (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.bootsplash,
            {opacity: opacity.current},
          ]}>
          <Animated.Image
            source={{
              uri: bootImage,
            }}
            fadeDuration={0}
            resizeMode="contain"
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[
              styles.logo,
              {transform: [{translateY: translateY.current}]},
            ]}
          />
        </Animated.View>
      ) : !bootSplashIsVisible ? (
        <Text style={styles.text}>Hello, Metaagrow.</Text>
      ) : null}
    </View>
  );
};

export default App;
