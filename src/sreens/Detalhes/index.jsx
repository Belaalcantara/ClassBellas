import { View, Text } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default  Detalhe = () => {
  const navigation = useNavigation();
  return (
    <View >
       
      <Text>mais sobre:</Text>
       <Text>  </Text>
    

      <TouchableOpacity 
            onPress={() => navigation.navigate("ClassBella")}
      >
       <Text> volte para a pagina inicial </Text>
      </TouchableOpacity>
    </View>
  )
}

