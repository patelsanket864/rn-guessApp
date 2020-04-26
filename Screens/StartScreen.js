import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';

const StartScreen=props=>{

    const [enteredText,setEnteredText]=useState('');
    const [confirmInput,setConfirmInput]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState('');

    const inputHandler=inputText=>{
        setEnteredText(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputHandler=()=>{
        setEnteredText('');
        setConfirmInput(false);
    }

    const confirmInputHandler=()=>{
        const chosenNo=parseInt(enteredText);
        if(isNaN(chosenNo) || chosenNo<=0  ){
            Alert.alert('Invalid Number','Please enter Number >0 and <100',[{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
        }
        setConfirmInput(true);
        setEnteredText('');
        setSelectedNumber(parseInt(enteredText));
    }

    let confirmedOutput;
    if(confirmInput){
    confirmedOutput= 
            <NumberContainer style={styles.NumberContainer}>
                <Text style={{fontSize:25}}>{selectedNumber}</Text> 
            </NumberContainer>       
    }


    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.startScreenContainer}>
            <Text style={{fontSize:25,marginTop:5}}>{'Start The Game!!'}</Text>
            <Card style={styles.inputContainer}> 
                <Text style={{alignSelf:'center'}}>Enter Number</Text> 
                <View style={styles.textInputContainer} >
                    <TextInput 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='number-pad' 
                        maxLength={2} 
                        onChangeText={inputHandler}
                        value={enteredText}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{width:90}}><Button title="RESET" onPress={resetInputHandler} color={Colors.secondary}/></View>
                    <View style={{width:90}}><Button title="CONFIRM" onPress={confirmInputHandler} color={Colors.primary} /></View>
                </View>
            </Card>
            <Card style={styles.inputContainer}>
                <Text style={{alignSelf:'center',fontSize:18}}>You Selected!</Text>
                {confirmedOutput}
                <View style={{alignSelf:'center',margin:20}}><Button title="START GAME" onPress={()=>abc(selectedNumber)} color={Colors.primary}/></View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    startScreenContainer:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        padding:10,
    },
    inputContainer:{
        padding:20,
        marginTop:20,
        width:'70%',
    },
    textInputContainer:{
        width:30,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        alignSelf:'center',
    },
    buttonContainer:{
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    NumberContainer:{
        width:70,
        
    }
});

export default StartScreen;