import React from 'react';
import {  View, StyleSheet, Text } from 'react-native';

const Header  = ({ title }) => {
    return (
        <View style={myStyles.header}> 
            <Text style={myStyles.text}>{title}</Text>
        
        </View>
    );
};


const myStyles = StyleSheet.create({
    header: {
        height: 60, 
        padding: 15, 
        backgroundColor: 'deepskyblue',
    }, 
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
})

export default Header;