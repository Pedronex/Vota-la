import { createStackNavigator } from "@react-navigation/stack";

import { Menu } from "../pages/Menu";
import { Listagem } from "../pages/Listagem";
import { Voto } from "../pages/Voto";
import { Sucesso } from "../pages/Sucesso";
import { Falha } from "../pages/Falha";
import { Detalhes } from "../pages/Detalhes";
import { CriarVoto } from "../pages/CriarVoto";
import { Usuario } from "../pages/Usuario";
import { Relatorio } from "../pages/Relatorio";

export const AdminRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Menu" component={Menu} />
      <Screen name="Listagem" component={Listagem} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="Voto" component={Voto} />
      <Screen name="Sucesso" component={Sucesso} />
      <Screen name="Falha" component={Falha} />
      <Screen name="CriarVoto" component={CriarVoto} />
      <Screen name="Usuario" component={Usuario} />
      <Screen name="Relatorio" component={Relatorio} />
    </Navigator>
  );
};
