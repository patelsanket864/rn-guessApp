import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer=props=>{
    return (
        <View style={{...styles.container,...props.style}}>{props.children}</View>
        );
}

const styles=StyleSheet.create({
    container:{
            alignItems:'center',
            padding:10,
            alignSelf:'center',
            marginVertical:10,
            borderRadius:5,
            borderWidth:3,
            borderColor:Colors.primary,
            fontSize:25,
            height:60
              
    }
});

export default NumberContainer;