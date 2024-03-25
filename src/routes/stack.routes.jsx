import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Filial from "../screens/Filiais";
import Users from "../screens/Detalhes";
import Form from "../screens/Forms"



const Stack = createNativeStackNavigator()

const StackRoutes =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Filial" component={Filial} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Forms" component={Form} />


       
      </Stack.Navigator>
    )
}
export default StackRoutes;