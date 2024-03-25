import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styles from '../Home/style';




export default  Perfil = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View >
       
      <Text style={styles.title}>NOSSA PROGRAMADORA!</Text>

      <Image style={styles.imgPerfil}  
          source={require('./../../../assets/eu.jpg')} />
         
       <Text style={styles.text}>Seja bem-vindo pessoa aleatoria, sou a isabela, programadora e diretora do Colégio Vanguarda.
        Estou nesse ramo a um bom tempo já por isso posso passar confiaça a tantos pais e alunos que me acompanham e ja acompanharam nessa jornada.
        Junto com meu cordernador Felipe, adiministramos essa escola e site.
        </Text>

        <Text style={styles.text}>
        Cresci em um país onde a educação é menospresada por muitos. 
        testemunhei em primeira mão os desafios enfrentados por crianças, e pessoas ja adultas e até idosas, que não
         tinham acesso a uma educação de qualidade. Desde cedo, 
        Me sentina obrigação de ser alguem para essas pessoas, para fazer a diferença na vida dessas crianças.
        </Text>
       
        <View style={styles.icons}>
     <a href="http://www.instagram.com/_alcantaraa_?igsh=MWtwMGJlM2JlcnB2cQ=="> <Feather name="instagram" size={24} color="black" /></a>
      <a href="http://github.com/Belaalcantara"><Feather name="github" size={24}  color="black" /></a>
      </View>
    
       <TouchableOpacity
        onPress={() => navigation.navigate("Filial")}
      >
        <Text style={styles.LinkPG}>Venha fazer parte do nosso time!</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

