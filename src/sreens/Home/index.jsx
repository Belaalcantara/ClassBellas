import { View, Text } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default Home = () => {
  const navigation = useNavigation();
  return (
    <View >

      <Text>Seja Bem-Vindo ao colégio Vanguarda!</Text>

      <Text>
        Localizado em um tranquilo e arborizado bairro,
        o Colégio Vanguarda destaca-se como um farol de educação inovadora
        e inspiradora. Fundado com a missão de promover o desenvolvimento
        integral de seus alunos, o Colégio Vanguarda é muito mais do que uma simples instituição de ensino.
        É um lugar onde os sonhos se encontram com a realidade, onde a curiosidade é cultivada e onde o potencial de
        cada estudante
        é nutrido e valorizado.

      </Text>


      <TouchableOpacity
        onPress={() => navigation.navigate("Filiais")}
      >
        <Text> veja nossas filiais, e cadastre a sua!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text> conheca nossa diretoria</Text>
      </TouchableOpacity>
    </View>
  )
}

