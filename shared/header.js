import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <ImageBackground style={styles.header}>
      <Image source={require('../assets/background.png')} style={styles.headerImage}/>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/logo1.png')} style={styles.headerLogo}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#fff',
    letterSpacing: 1,
    marginTop: 8
  },
  icon: {
    position: 'absolute',
    left: -38,
    color: '#fff'
  },

  headerLogo:{
    width: 45,
    height: 40,
    marginRight: 10,

  },
  headerTitle:{
    flexDirection:'row',
    justifyContent: 'center',
  },
  headerImage:{
    position: 'absolute',
    width: 500,
    height: 60,
 
  }
  
});