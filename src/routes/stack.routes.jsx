import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../sreens/Home";
import Filiais from "../sreens/Filiais";
import Perfil from "../sreens/Perfil";
import Cadastro from "../sreens/Cadastro";
import Detalhes from "../sreens/Detalhes";




const Stack = createNativeStackNavigator()

const StackRoutes =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ClassBella" component={Home} />
        <Stack.Screen name="Filiais" component={Filiais} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Detalhe" component={Detalhes} />
       
      </Stack.Navigator>
    )
}
export default StackRoutes;