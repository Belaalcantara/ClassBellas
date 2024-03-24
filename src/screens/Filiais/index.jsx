import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import Title from "../components/Title";
import usersRepository from "../../models/Filiais/cadastroF";

export default function Filial({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editUser = () => {
    navigation.navigate("Form", { user: data, edit: true });
  };

  const deleteUser = () => {
    usersRepository.remove(data.id);
    navigation.navigate("Users");
  };

  return (
    <View style={styles.container}>
      <Title title="filial" />

      {data ? (
        <Text>Detalhes do usuário</Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}

      <View style={styles.user}>
        <View style={styles.userDetail}>
          <Text style={styles.text}>{data.nome_Escola}</Text>
          <Text style={styles.text}>{data.cargo}</Text>
          <Text style={styles.text}>{data.fundacao}</Text>
          <Text style={styles.text}>{data.email}</Text>
          <Text style={styles.text}>{data.quantia_Alunos}</Text>
          <Text style={styles.text}>{data.quantia_Turma}</Text>
          <Text style={styles.text}>{data.contato}</Text>
        </View>

        <View style={styles.userActions}>
          <TouchableOpacity style={styles.editButton} onPress={editUser}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}