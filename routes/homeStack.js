
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header'


const Stack = createStackNavigator()

export default function Navigator({navigation}) {
  return (
      <Stack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: "#eee", 
          height: 80
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title='Movie Zone' />,
      }}
    />

        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{title: "Review Details",  headerStyle: {height: 80}}}/>
      </Stack.Navigator>
  );
}
