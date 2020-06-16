import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import drawerNavigator from './routes/drawer';

export default function App() {


  useEffect(()=>{
    Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    });
  })

  return(
    drawerNavigator()
  )

}