import React,{useState} from 'react';
import { View,StyleSheet, Text, Button} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=Math.floor(Math.random()*(max-min))+min;
    if(rndNum===exclude){
        return generateRandomBetween(min,max,random);
    }else{
        return rndNum;
    }
}

const GameScreen=props=>{
    const [currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,100,props.userChoise));

    return(



        <View style={styles.screen}>
            <View style={styles.container}><Text>{currentGuess}</Text></View >
            <Card>
                
                <View style={styles.buttonContainer}>
                <Button title="Upper"></Button>
                <Button title="lower"></Button>
                </View>
            </Card>
        </View>
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10
    },
    buttonContainer:{
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    container:{
        alignItems:'center',
        padding:10,
        alignSelf:'center',
        marginVertical:10,
        borderRadius:5,
        borderWidth:3,
        //borderColor:Colors.primary,
        fontSize:25,
        height:60
          
}
})

export default GameScreen;