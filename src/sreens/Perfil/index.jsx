import { View, Text } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default  Perfil = () => {
  const navigation = useNavigation();
  return (
    <View >
       
      <Text>Conheça nossa diretoria!</Text>
       <Text> Isabela linda</Text>
      
      <TouchableOpacity 
            onPress={() => navigation.navigate("ClassBella")}
      >
       <Text> volte para a pagina inicial</Text>
      </TouchableOpacity>
    </View>
  )
}

