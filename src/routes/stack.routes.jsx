import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Filiais from "../screens/Filiais";
import Perfil from "../screens/Perfil";
import Cadastro from "../screens/forms";
import Detalhes from "../screens/Detalhes";




const Stack = createNativeStackNavigator()

const StackRoutes =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Filiais" component={Filiais} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Detalhe" component={Detalhes} />
       
      </Stack.Navigator>
    )
}
export default StackRoutes;