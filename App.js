import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import style from './App.Style.js';
import HomeImage from './assets/Home.jpeg'
import Home from './Pages/Home.js'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useEffect, useState } from 'react';
export default function App() {
  const [coordinates, setCoordinates] = useState()
  
  useEffect(()=>{
    getLocation();
  })
  async function getLocation() {
    const status = await requestForegroundPermissionsAsync();

    if (status == "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      })
    }
    else {
      console.log("error")
    }
  }
  return (
    <>
      <ImageBackground source={HomeImage} imageStyle={style.img}>
        <SafeAreaProvider>
          <SafeAreaView style={style.container} />
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
