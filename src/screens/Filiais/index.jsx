import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './style';

import usersRepository from '../../models/Filiais/cadastroF';
import { ScrollView } from 'react-native-gesture-handler';

export default function Filial({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  const editUser = () => {
    navigation.navigate('Form', { user: data, edit: true });
  };

  const deleteUser = () => {
    usersRepository.remove(data.id);
    navigation.navigate('Filial1');
  };
  return (
    <View style={styles.container}>
     
      {data ? (
        <ScrollView>
        <View>
          <Text style={styles.title} >VEJA NOSSOS COLABORADORES!</Text>
          <View style={styles.user}>
            <View style={styles.userDetail}>
              <Text style={styles.text}> Nome da escola: {data.nome_Escola}</Text>
              <Text style={styles.text}>  Fundação: {data.fundacao}</Text> 
              <Text style={styles.text}>  Email:{data.email}</Text> 
              <Text style={styles.text}>  Cargo:{data.cargo}</Text>
              <Text style={styles.text}>  Quantia alunos:{data.quantia_Alunos}</Text> 
              <Text style={styles.text}>  Quantia salas:{data.quantia_Turmas}</Text>
              <Text style={styles.text}>  Endereço:{data.endereco}</Text>
              <Text style={styles.text}>  Contato:{data.contato}</Text>
            </View>
            <View style={styles.userActions}>
              <TouchableOpacity style={styles.editButton} onPress={editUser}>
              <Feather name="trash-2" size={24} color="#E80000"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
              <Feather name="edit" size={24}color="#1830A8"  />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}
    </View>
  );
}
