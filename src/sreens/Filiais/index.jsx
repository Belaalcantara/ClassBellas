import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default Filial = () => {
  const navigation= useNavigation()
  return (
    
    <View>
      <Text>FILIAIS</Text>
      <TouchableOpacity
            onPress={() => navigation.navigate("ClassBella")}
      >
       <Text> veja nossas filiais, e cadastre a sua!</Text>
      </TouchableOpacity>
    </View>
  )
}

