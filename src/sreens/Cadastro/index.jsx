import { View, Text } from 'react-native'


import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default  Cadastro = () => {
  const navigation = useNavigation();
  return (
    <View >
       
      <Text>Cadastre sua filial!</Text>
       
    

      <TouchableOpacity 
            onPress={() => navigation.navigate("ClassBella")}
      >
       <Text> volte para a pagina inicial </Text>
      </TouchableOpacity>
    </View>
  )
}

