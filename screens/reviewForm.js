import React from 'react';
import {StyleSheet, Button, TextInput, View, Text, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {Formik} from 'formik'
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string().required().min(3),
    body: yup.string().required().min(3),
    rating: yup.string().required()
    .test('is-num-1-5', 'Rating must be a number 1-5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function ReviewForm({addReview}){

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title:'', body:'', rating:''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions)=> {
                    actions.resetForm()
                    addReview(values)
                }}
            >
            {(props)=>(
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Movie title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                    />
                    <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>

                    <TextInput
                    style={globalStyles.input}
                    placeholder='body'
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    multiline
                    onBlur={props.handleBlur('body')}
                    />
                    <Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text>

                    <TextInput
                    style={globalStyles.input}
                    placeholder='rating (1-5)'
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'
                    onBlur={props.handleBlur('rating')}
                    
                    />
                    <Text style={styles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                    <TouchableOpacity onPress={props.handleSubmit}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>submit</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            )}
            
            </Formik>
        
        </View>
    )
}



const styles = StyleSheet.create({
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    
    button:{
        borderRadius: 8,
        paddingVertical: 14, 
        paddingHorizontal: 10, 
        backgroundColor:'black',
        marginTop: 10
    },

    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }

})