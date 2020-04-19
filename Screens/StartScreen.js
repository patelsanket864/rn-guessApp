import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const StartScreen=props=>{
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.startScreenContainer}>
            <Text style={{fontSize:25,marginTop:5}}>{'Start The Game!!'}</Text>
            <Card style={styles.inputContainer}> 
                <Text style={{alignSelf:'center'}}>Enter Number</Text> 
                <View style={styles.textInputContainer}>
                    <TextInput blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{width:90}}><Button title="RESET" color={Colors.secondary}/></View>
                    <View style={{width:90}}><Button title="CONFIRM" color={Colors.primary} /></View>
                </View>
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
    }
});

export default StartScreen;