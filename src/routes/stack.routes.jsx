import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Filial from "../screens/Filiais";
import Users from "../screens/Detalhes";
import Form from "../screens/Form"
import Filial1 from "../models/Filiais/filial1";
import user from "../data/FirstFilial/user";



const Stack = createNativeStackNavigator()

const StackRoutes =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Filial" component={Filial} initialParams={{data:user}} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Filial1" component={Filial1} />


       
      </Stack.Navigator>
    )
}
export default StackRoutes;