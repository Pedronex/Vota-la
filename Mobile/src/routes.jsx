import * as SecureStore from "expo-secure-store";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { api } from "./Service/api";
import { Detalhes } from "./pages/Detalhes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "./pages/Login";
import { Menu } from "./pages/Menu";
import { Listagem } from "./pages/Listagem";
import { Voto } from "./pages/Voto";
import { Sucesso } from "./pages/Sucesso";
import { Falha } from "./pages/Falha";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  const [user, setUser] = useState({ administrador: false });

  const coletarUsuario = async () => {
    const data = JSON.parse(await SecureStore.getItemAsync("user"));
    if (data) {
      const resultado = await api.get("/validar", {
        headers: {
          Authorization: `Bearer ${data?.token}`,
        },
      });
      if (resultado.data?.sucesso) {
        setUser(data);
      } else {
        await SecureStore.deleteItemAsync("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    coletarUsuario();
  }, [user]);

  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        {!user && <Screen name="Login" component={Login} />}
        {user && user.administrador && <Screen name="Menu" component={Menu} />}
        {user && <Screen name="Listagem" component={Listagem} />}
        {user && <Screen name="Detalhes" component={Detalhes} />}
        {user && <Screen name="Voto" component={Voto} />}
        {user && <Screen name="Sucesso" component={Sucesso} />}
        {user && <Screen name="Falha" component={Falha} />}
        {user && user.administrador && (
          <Screen name="Votacao" component={View} />
        )}
        {user && user.administrador && (
          <Screen name="Usuario" component={View} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
