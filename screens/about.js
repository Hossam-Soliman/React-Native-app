import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {globalStyles} from '../styles/globalStyles'

export default function About(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}><Text style={styles.innerText}>Movie Zone</Text> is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. Get personalized recommendations, and learn where to watch across hundreds of streaming providers.</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    innerText:{
        color: 'red', 
        fontWeight: 'bold',
        fontSize: 20,
    }
})