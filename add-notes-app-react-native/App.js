import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Alert, ScrollView, AsyncStorage, StatusBar } from 'react-native';
import Header from './component/Header'
import ListItem from './component/ListItem'
import AddItem from './component/AddItem'
import Footer from './component/Footer'


export default function App() {

  const  [items, setItems] = useState([
    {id: 0, title: 'Welcome 😋'}
  ])



  const storeData = async ( data ) => {
    try {
      await AsyncStorage.setItem('data' , JSON.stringify(data))
    }
    catch (err) {
      console.log(err);
    }
  }

  const retrieveData = async () => {
    const value = await AsyncStorage.getItem('data')

    try{
      if (  value !== null && value !== undefined ) {        
        setItems(JSON.parse(value));
      }
    }
    catch (err){
      console.log(err);
      
    }
  }

  // When the App Updated will get the data
  useEffect( ()=> {
    retrieveData()
    
  }, [])

  // When The items Updated data will be stored  
  useEffect( ()=> {
    storeData(items)
    
  }, [items])

  const addItemHandler =  (title) => {
    if (!title) {
      Alert.alert('Ooops', 
      'must be 3 letters entered at least',
       [{text:"Ok!", onPress: ()=> {}}])
    }
    else  {
      const id = items ? items.length + 1 : 1 ;
      setItems(prevItem => {
      return [{id, title}, ...prevItem]
    })
    }
  };
  

  const deleteItemHandler = (indexItem) => {
    setItems( prevItems => {return prevItems.filter( item => item.id != indexItem) } )    
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor='deepskyblue' />
      <View style={{flex: 1}}>
       
        <Header title='Create notes'/>
        <AddItem addItem={addItemHandler}/>
       
        <View style={styles.content}>
          <ScrollView>
            <FlatList
              style={{margin: 20}}
              keyExtractor={(item) => item.id.toString()}
              data={items}
              renderItem={({item}) =>  <ListItem  key={item.key} item={item}  deleteItem={deleteItemHandler} /> } />
          </ScrollView>
        </View>

      </View>
    
      <View> 
        <Footer title=' &copy; made it by Iheb'/>
      </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  content: {
    maxHeight: 450
  }
})