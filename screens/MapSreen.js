import React ,{useState, useContext} from 'react'
import { StyleSheet, Text,View, Platform,

  Alert,
  ActivityIndicator,Image} from 'react-native';
import Task from './components/Task'

export default function MapSreen() {
  return (
    <View>
      
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.flowershopdirectory.com/images/maps/conroys-long-beach-2008.png',
        }}
      />
      {/* https://lh6.googleusercontent.com/proxy/JIYaZWH7_VPSFA1WgIT6EOMFEJXhQ-TaHv3GPXBBP6Zmlu4ODrzLSPyMoGdH-7ePcOe2SvfSCSTyQD2zeyYWWUwroAV_-fAJuSVsJe7Mm58--O36_d5tFqpXXo7Vd7g9rUErHgnwHp5B4p_giitQ=s0-d */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 400,
    height: 620,
  },
});



