import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import About from "../screens/about";
import Header from '../shared/header'


const Stack = createStackNavigator()

export default function Navigator({navigation}) {
  return (
      <Stack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: "#eee", 
          height: 80
        },
        headerTintColor: "#fff",
      }}>
        <Stack.Screen name='About' component={About} 
        options={{
            headerTitle: () => <Header navigation={navigation} title='About' />,
          }} 
        />
       
      </Stack.Navigator>
  );
}
