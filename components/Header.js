import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const Header=props=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:100,
        alignItems:'center',
        backgroundColor:Colors.primary,
        paddingTop:80
    },
    headerTitle:{
        color:'black',
        fontSize:18,
        marginTop:-20
    }
});


export default Header;