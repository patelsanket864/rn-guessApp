import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card=props=>{
    return (
    <View style={{...styles.inputContainer,...props.style}}>{props.children}</View>
    );
}

const styles=StyleSheet.create({
    inputContainer:{
        borderRadius:6,
        elevation:2
    }
});

export default Card;

