import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../sreens/Home";
import Filiais from "../sreens/Filiais";




const Stack = createNativeStackNavigator()

const StackRoutes =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ClassBella" component={Home} />
        <Stack.Screen name="Filiais" component={Filiais} />
       
      </Stack.Navigator>
    )
}
export default StackRoutes;