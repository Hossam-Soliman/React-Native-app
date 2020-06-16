import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native'
import {globalStyles, images} from '../styles/globalStyles'
import Card from '../shared/card'


export default function ReviewDetails(props){
    const rating = props.route.params.rating
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text style={{...globalStyles.titleText, ...styles.boldText}}>{props.route.params.title}</Text>
                <Text style={globalStyles.titleText}>{props.route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>Rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16, 
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'

    },

    boldText:{
        fontSize: 20,
        color: 'red',
        marginBottom: 10
    }
})