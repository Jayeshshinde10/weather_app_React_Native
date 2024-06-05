import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import style from './App.Style.js';
export default function App() {

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.container}/>
        <Home/>
      </SafeAreaProvider>
    </>
  );
}
