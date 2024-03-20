import { View, Text, Image } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { DrawerContentScrollView } from '@react-navigation/drawer';



export default Home = () => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
    <View style={styles.container} >
        


      <Text style={styles.title} >COLÉGIO VANGUARDA.</Text>
     
      <Text>
        Localizado em um tranquilo e arborizado bairro,
        o Colégio Vanguarda destaca-se como um farol de educação inovadora
        e inspiradora. Fundado com a missão de promover o desenvolvimento
        integral de seus alunos, o Colégio Vanguarda é muito mais do que uma simples instituição de ensino.
        É um lugar onde os sonhos se encontram com a realidade, onde a curiosidade é cultivada e onde o potencial de
        cada estudante
        é nutrido e valorizado.

      </Text>
         <Image
        style={styles.img}
        source={require('./../../../assets/ESCOLA1.jpg')}/>

<Text>
        Entre as melhores nuca deixou de ficar, colégio vanguarda sempre entrgando o melhor para você e para o seu futuro, nunca ficaremos para trás e nunca deixaremmos quem nos acompanha.
        Oportunidade é o que não falta, responsabilidade e esforço tambem nao.

      </Text>


      <TouchableOpacity
        onPress={() => navigation.navigate("Filiais")}
      >
        <Text> veja nossas filiais, e cadastre a sua!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text> conheca nossa Desenvolvdora.</Text>
      </TouchableOpacity>
    </View>
    </DrawerContentScrollView>
  )
}

