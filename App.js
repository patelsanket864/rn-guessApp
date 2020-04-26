import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './Screens/StartScreen';
import GameScreen from './Screens/GameScreen';

export default function App() {

  const [userNumber,setuserNumber]=useState();

  const startGameHandler=selectedNumber=>{
    setuserNumber(selectedNumber);
  }

  let content =content=<GameScreen userChoise={userNumber}/>;

 

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />    
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
