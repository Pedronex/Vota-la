import { View } from "react-native";

import { Menu } from "../pages/Menu";
import { Listagem } from "../pages/Listagem";
import { Voto } from "../pages/Voto";
import { Sucesso } from "../pages/Sucesso";
import { Falha } from "../pages/Falha";
import { Detalhes } from "../pages/Detalhes";
import { createStackNavigator } from "@react-navigation/stack";

export const AppRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Listagem" component={Listagem} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="Voto" component={Voto} />
      <Screen name="Sucesso" component={Sucesso} />
      <Screen name="Falha" component={Falha} />
    </Navigator>
  );
};
