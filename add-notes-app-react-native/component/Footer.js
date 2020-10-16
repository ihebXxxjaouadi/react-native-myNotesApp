import React from 'react';
import {  View, StyleSheet, Text } from 'react-native';

const Footer  = ({ title }) => {
    return (
        <View style={myStyles.footer}> 
            <Text style={myStyles.text}>{title}</Text>
        </View>
    );
};


const myStyles = StyleSheet.create({
    footer: {
        height: 20, 
        backgroundColor: 'white',
    }, 
    text: {
        fontSize: 15,
        color: 'deepskyblue',
        textAlign: 'center',
    }
})

export default Footer;