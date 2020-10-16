import React from 'react';
import {  View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ListItem  = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text> {item.title} </Text>
                <TouchableOpacity style={styles.button} onPress={deleteItem.bind(this, item.id)}>
                  <AntDesign name='delete' size={12} color='deeppink' />
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 2,
      borderColor: "#eee",
    },
    button: {
      paddingVertical: 2,
      paddingHorizontal: 12,
      borderColor: 'deeppink',
      borderWidth: 1,
      borderRadius: 3,
      flexDirection: 'row',
      alignItems: 'center'
    },
    buttonText: {
      color: 'deeppink',
      fontSize: 12,
      marginLeft: 9

    }

})

export default ListItem;
