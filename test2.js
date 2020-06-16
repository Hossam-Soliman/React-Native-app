import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Hossam', key: '1'},
    {name: 'john', key: '2'},
    {name: 'ahmad', key: '3'},
    {name: 'sobhey', key: '4'},
    {name: 'jack', key: '5'},
    {name: 'sam', key: '6'},
    {name: 'shaun', key: '7'},
  ])

  const deleteItem = (id) =>{
  //  setPeople((prevPeople)=>{
  //    return prevPeople.filter(person => person.key != id)
  //  })

  // setPeople(people.filter(person=>{
  //   return(person.key != id)
  // }))

    setPeople(people.filter(person=> person.key != id)
    )
  
  }

  return (
    <View style={styles.container}>    
        <FlatList 
          numColumns={1}
          data={people}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.items} onPress={()=>deleteItem(item.key)}>
            <View style={styles.item}>
              <AntDesign name="delete" size={24} color="black" />
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
              
            </TouchableOpacity>
          )}
        />

    {/*<ScrollView>
      {people.map((item) =>{
        return(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
    </ScrollView>*/}


    </View>
  );
}
   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20
  },

  item:{
    marginTop: 30,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    flexDirection: 'row',
    flex:1
  },

  itemText:{
    marginLeft: 20
  },


});
