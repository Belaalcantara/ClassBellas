import { View, Text } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default  Perfil = () => {
  const navigation = useNavigation();
  return (
    <View >
       
      <Text >Conheça nossa programadora !</Text>
       <Text> Isabela linda</Text>
      
       <TouchableOpacity
        onPress={() => navigation.navigate("escola")}
      >
        <Text> home.</Text>
      </TouchableOpacity>
    </View>
  )
}

