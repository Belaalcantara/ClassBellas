import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Home from "../sreens/Home";
import Filiais from "../sreens/Filiais";
import filiais from "../data/filiais";
import Perfil from "../sreens/Perfil";
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Pagina inicial",
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Filiais"
        component={Filiais}
        initialParams={{ data: filiais }}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="filiais"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Filiais",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

<Drawer.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ data: filiais }}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="Perfil"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "perfil",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
    </Drawer.Navigator>

    
  )}
  export default DrawerRoutes;