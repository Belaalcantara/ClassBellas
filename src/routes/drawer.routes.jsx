import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Home from "../sreens/Home";
import Filiais from "../sreens/Filiais";
import filiais from "../data/filiais";
import Perfil from "../sreens/Perfil";
import Cadastro from "../sreens/Cadastro";

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
              color={focused ? "#013440" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#013440" ,
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Filiais"
        component={Filiais}
        initialParams={{ data: filiais }}
        options={{
          headerTitle: "",
          drawerIcon: ({ mappin }) => (
            <Feather name="map-pin" size={24} color="#013440" />
          ),
          drawerLabel: "Filiais",
          drawerActiveTintColor: "#013440" ,
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

<Drawer.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ data: filiais }}
        options={{
          headerTitle: "",
          drawerIcon: ({ user }) => (
            <Feather name="user" size={24} color="black" />
          ),
          drawerLabel: "perfil",
          drawerActiveTintColor: "#013440" ,
          drawerInactiveTintColor: "#D6D6D6",
          
        }}
      />

      
<Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        initialParams={{ data: filiais }}
        options={{
          headerTitle: "",
          drawerIcon: ({ users }) => (
            <Feather name="users" size={24} color=  "#013440" />
          ),
          drawerLabel: "Cadastro",
          drawerActiveTintColor: "#013440" ,
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />


    </Drawer.Navigator>

    
  )}
  export default DrawerRoutes;