import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { TouchableOpacity } from 'react-native'


export default  Home = () => {
  return (
    <View >
       
      <Text>Seja Bem-Vindo!</Text>
      <TouchableOpacity 
            onPress={() => navigation.navigate("Filiais")}
      >
       <Text> veja nossas filiais, e cadastre a sua!</Text>
      </TouchableOpacity>
    </View>
  )
}

