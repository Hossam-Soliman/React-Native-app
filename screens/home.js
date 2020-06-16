import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm'

export default function Home(props) {

  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Inglourious basterds ', rating: 5, body: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owners vengeful plans for the same.', key: 1 },
    { title: 'Catch me of you can', rating: 4, body: 'A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars worth of checks while posing as a Pan Am pilot, a doctor, and a legal prosecutor', key: 2 },
    { title: 'Kill Bill 2', rating: 3, body: 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.', key: 3 },
  ]);

  const addReview = (review) =>{
    review.key = Math.random().toString()
    setReviews((reviews)=>{
      return[review, ...reviews]
    })
    setModalOpen(false)
  }
  
  return (
    <View style={globalStyles.container}>

        <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />
      <FlatList 
      keyExtractor={item => item.key.toString()}
      data={reviews}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>props.navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
        </TouchableOpacity>
      )}
      />
    </View>
   
  );
}


const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});