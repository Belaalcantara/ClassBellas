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
          source={require('./../../../assets/ESCOLA1.jpg')} />

        <Text>
          Entre as melhores nuca deixou de ficar, colégio vanguarda sempre entrgando o melhor para você e para o seu futuro, nunca ficaremos para trás e nunca deixaremmos quem nos acompanha.
          Oportunidade é o que não falta, responsabilidade e esforço tambem nao.

        </Text>

        <Text style={styles.title}>
          A ARTE DA VANGUARDA:
        </Text>
       

        
          <View  >
          <Image style={styles.img}
          source={require('./../../../assets/escola2.jpg')} />
          </View>
         
          <Text>
          A equipe pedagógica do Colégio Etapa é formada por profissionais que passam por uma seleção rigorosa, em que são avaliados não apenas os conhecimentos na área
          e a didática em sala de aula, mas também o alinhamento com a nossa proposta pedagógica e
          os nossos valores.
        </Text>



<Image style={styles.img}
          source={require('./../../../assets/escolaAerea.jpg')} />

<Text>
Esta escola, com sua arquitetura tecnológica, 
não é apenas um local de aprendizado; é um manifesto para o futuro. Um lembrete de que, através da fusão da mente humana com a tecnologia, podemos moldar um mundo
 onde o potencial humano é verdadeiramente ilimitado.
        </Text>


        <TouchableOpacity
          onPress={() => navigation.navigate("Filial")}
        >
          <Text style={styles.LinkPG} >Veja nossas filiais, e cadastre a sua!</Text>
        </TouchableOpacity>

       
      </View>
    </DrawerContentScrollView>
  )
}

