import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './Screens/StartScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />    
      <StartScreen />  
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
