import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Filiais from "../screens/Filiais";
import filiais from "../data/FirstFilial/user";
import Perfil from "../screens/Perfil";
import Cadastro from "../screens/forms";
import { user } from "../data/FirstFilial/user";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Pagina inicial",
          headerTintColor: "#003077",
          headerStyle: {
            backgroundColor: "",
          },
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#013440" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#013440",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Filiais"
        component={Filiais}
        initialParams={{ data: user }}
        options={{
          headerTitle: "Filiais",
          headerTintColor: "#003077",
          drawerIcon: ({ mappin }) => (
            <Feather name="map-pin" size={24} color="#013440" />
          ),
          drawerLabel: "Filiais",
          drawerActiveTintColor: "#013440",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ data: filiais }}
        options={{
          headerTitle: "Perfil",
          headerTintColor: "#003077",
          drawerIcon: ({ user }) => (
            <Feather name="user" size={24} color="black" />
          ),
          drawerLabel: "perfil",
          drawerActiveTintColor: "#013440",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        initialParams={{ data: filiais }}
        options={{
          headerTitle: "Cadastre-se!",
          headerTintColor: "#003077",
          drawerIcon: ({ users }) => (
            <Feather name="users" size={24} color="#013440" />
          ),
          drawerLabel: "Cadastro",
          drawerActiveTintColor: "#013440",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerRoutes;