import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import style from './App.Style.js';
import HomeImage from './assets/Home.jpeg';
import Home from './Pages/Home/Home.js';
import { useFonts } from 'expo-font';
//import GeoWeatherApi from './API/api.js';
import  getWeatherData from './api.js'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useEffect, useState } from 'react';
import Forecasts from './Pages/Forecasts/Forecast.js';
const stack = createNativeStackNavigator()
export default function App() {
  const [coordinates, setCoordinates] = useState();
  //const [weather,setWeather] = useState();

  useEffect(() => {
    getLocation();
  }, []);

     
  // useEffect(()=>{
  //   if(coordinates){
  //     fetchWeatherByCoords(coordinates)
  //     console.log(weather)
  //   }
  // },[coordinates])
    
  // async function fetchWeatherByCoords(coords) {
  //   const weatherResponse = await getWeatherData(coords);
  //   setWeather(weatherResponse)
  // }


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

  return (
    <>
    <NavigationContainer>
      <ImageBackground
        source={HomeImage}
        imageStyle={style.img}
        style={style.container}>
        <SafeAreaProvider>
          <SafeAreaView style={style.container}>
          <stack.Navigator initialRouteName='Home'>
            <stack.Screen name='Home' component={Home}/>
            <stack.Screen name ='forecasts' component={Forecasts}/>
          </stack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
      </NavigationContainer>
    </>
  );
}
