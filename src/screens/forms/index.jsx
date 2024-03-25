import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./style";
import Title from "../components/Title";
import usersRepository from "../../models/Filiais/cadastroF";
import Filial1 from "../../models/Filiais/filial1";
import { ScrollView } from "react-native-gesture-handler";



export default function Form({ route }) {
  let { user, edit } = route.params;
  const [nome_Escola, setNomeEscola] = useState("");
  const [fundacao, setFundacao] = useState("");
  const [email, setEmail] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [cargo, setCargo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [quantia_alunos, setQuantiaAlunos] = useState("");
  const [quantia_turmas, setQuantiaTurmas] = useState("");
  const [contato, setContato] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setNomeEscola(user.nome_Escola);
      setFundacao(user.fundacao);
      setEmail(user.email);
      setResponsavel(user.responsavel); 
      setCargo(user.cargo); 
      setEndereco(user.endereco);
      setQuantiaAlunos(user.quantia_alunos);
      setQuantiaTurmas(user.quantia_turmas);
      setContato(user.contato);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
    
     usersRepository.update(user.id, nome_Escola, fundacao, responsavel, cargo, endereco, quantia_alunos, quantia_turmas, contato, email  || 0);
      clearInputs();
    } else {
      const newUser = new Filial1( nome_Escola, fundacao, responsavel, cargo, endereco, quantia_alunos, quantia_turmas, contato, email || 0);
      usersRepository.add(newUser);
      clearInputs();
    }
    navigation.navigate("Filiais");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setNomeEscola("");
    setFundacao("");
    setEmail("");
    setCargo(""); 
    setResponsavel(""); 
    setQuantiaAlunos(""); 
    setQuantiaTurmas(""); 
    setContato(""); 
  };

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title} >FAÇA PATE DA NOSSA EQUEIPE.</Text>
     
      <TextInput
        placeholder="Digite o nome da sua filial."
        style={styles.userInput}
        onChangeText={setNomeEscola}
        value={nome_Escola}
      />

<TextInput
        placeholder="digite data de fundação."
        style={styles.userInput}
        onChangeText={setFundacao}
        value={fundacao}
        keyboardType="data"
      />

<TextInput
        placeholder="Digite o nome do responsavel."
        style={styles.userInput}
        onChangeText={setResponsavel}
        value={responsavel}
        
      /> 
      <TextInput
        placeholder="Digite o email do usuário"
        style={styles.userInput}
        onChangeText={setEmail}
        value={email}
      />
    
        <TextInput
        placeholder="Digite seu cargo."
        style={styles.userInput}
        onChangeText={setCargo}
        value={cargo}
        
      />
        <TextInput
        placeholder="Digite a quantidade de alunos."
        style={styles.userInput}
        onChangeText={setQuantiaAlunos}
        value={quantia_alunos}
        keyboardType="numeric"
      />
        <TextInput
        placeholder="Digite a quantidade de turma."
        style={styles.userInput}
        onChangeText={setQuantiaTurmas}
        value={quantia_turmas}
        keyboardType="numeric"
      />
        <TextInput
        placeholder="Digite seu contato"
        style={styles.userInput}
        onChangeText={setContato}
        value={contato}
        keyboardType="numeric"
      />

<TextInput
        placeholder="Digite o endereço."
        style={styles.userInput}
        onChangeText={setEndereco}
        value={endereco}
        keyboardType="numeric"
      />


      <TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
    </ScrollView>
  );
}