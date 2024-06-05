import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import style from './App.Style.js';
import HomeImage from './assets/Home.jpeg'
export default function App() {
  return (
    <>
    <ImageBackground source={HomeImage}>
      <SafeAreaProvider>
        <SafeAreaView style={style.container}/>
      </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
