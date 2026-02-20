import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";
import Loja from "../screens/Loja";
import Biblioteca from "../screens/Biblioteca";
import Perfil from "../screens/Perfil";
import Config from "../screens/Config";
import Instalacao from "../screens/Instalacao";
import Senha from "../screens/Senha";
import Informacoes from "../screens/Informacoes";
import Lista from "../screens/Lista";

// Tipagem das rotas do stack
export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  Loja: undefined;
  Biblioteca: undefined;
  Perfil: undefined;
  Config: undefined;
  Instalacao: undefined;
  Senha: undefined;
  Informacoes: undefined;
  Lista: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#15121C",
          },
          headerTintColor: "#fff",
        }}
      >

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Fazer login" }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Criar conta" }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Início" }}
        />

        <Stack.Screen
          name="Loja"
          component={Loja}
          options={{ title: "Loja" }}
        />

        <Stack.Screen
          name="Biblioteca"
          component={Biblioteca}
          options={{ title: "Biblioteca" }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />

        <Stack.Screen
          name="Config"
          component={Config}
          options={{ title: "Configurações" }}
        />

        <Stack.Screen
          name="Instalacao"
          component={Instalacao}
          options={{ title: "Instalação Remota" }}
        />

        <Stack.Screen
          name="Senha"
          component={Senha}
          options={{ title: "Redefinir Senha" }}
        />

        <Stack.Screen
          name="Informacoes"
          component={Informacoes}
          options={{ title: "Mais Informações" }}
        />

        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ title: "Lista de Desejos" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
