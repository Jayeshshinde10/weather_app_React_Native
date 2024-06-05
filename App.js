import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import style from './App.Style.js';
import HomeImage from './assets/Home.jpeg';
import Home from './Pages/Home/Home.js';
import { useFonts } from 'expo-font';
//import { GeoWeatherApi } from './Api/Api.js';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import { useEffect, useState } from 'react';
export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeatherData] = useState();
  const [ isloaded ] = useFonts({
    'kanit-light': require('./assests/kanit-Light.ttf'),
  });

  useEffect(() => {
    getLocation();
  }, []);

  // useEffect(()=>{
  //   if(coordinates){
  //     WeatherFuncCaller(coordinates)
  //     console.log(weather)
  //   }
  // },[coordinates])

  async function getLocation() {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status == 'granted') {
        const location = await getCurrentPositionAsync();
        setCoordinates({
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        });
        console.log('coordinates are ');
        console.log(coordinates);
      } else {
        console.log('error occured ');
      }
    } catch (error) {
      console.log('error is ' + error.message);
    }
  }

  async function WeatherFuncCaller(coords) {
    const weatherdata = await GeoWeatherApi.getWeatherFromApi(coords);
    setWeatherData(weatherdata);
  }

  return (
    <>
      <ImageBackground
        source={HomeImage}
        imageStyle={style.img}
        style={style.container}>
        <SafeAreaProvider>
          <SafeAreaView style={style.container} />
          {coordinates && (
            <>
              <Text style={{ fontFamily: 'kanit-light', fontSize: 30 }}>
                latitude is {coordinates.lat}
              </Text>
              <Text style={{fontSize:30}}>longitude is {coordinates.lon}</Text>
            </>
          )}
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
