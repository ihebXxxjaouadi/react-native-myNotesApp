import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const AddItem = ({addItem}) => {

  const [title, setTitle] = useState('');

  const onChangeTitle = (textValue) => {
    setTitle(textValue)
  }

  return(
    <View style={styles.content} >
      <TextInput style={styles.textInput} placeholder="new note" onChangeText={onChangeTitle} />
      <TouchableOpacity style={styles.button} onPress={addItem.bind(this, title)}>
        <AntDesign name='plus' size={15} color='dodgerblue' />
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 25
  },
  textInput: {
    height: 50,
    padding: 10,
    marginBottom: 4,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightskyblue'
  },
  button: {
    borderColor: 'lightskyblue',
    borderWidth: 1,
    padding: 10,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  buttonText: {
    color: 'deepskyblue',
    fontSize: 14,
    marginLeft: 5
  }
})

export default AddItem
