import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {

  const [name, setName] = useState('Hossam')
  const [age, setAge] = useState('30')
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello, world!</Text>
      </View>

      <Text>Name: {name}, Age: {age}</Text>

      <TextInput style={styles.input} multiline placeholder= 'Name' onChangeText={(val)=> setName(val)}/>
      <TextInput style={styles.input} keyboardType='numeric' placeholder='Age'  onChangeText={(val)=> setAge(val)}/>

      <View style={styles.myButton}>
        <Button title='Update' />
      </View>

      </View>
    </TouchableWithoutFeedback>
    
  );
}
   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  
  },

  header:{
    backgroundColor: 'skyblue',
    padding: 20,
    marginBottom: 50
  },

  myButton:{
    
    backgroundColor: 'skyblue',
    marginTop: 40,
  },

  input:{
    borderWidth: 2,
    padding: 8, 
    width: 200, 
    margin: 20
  }
});
