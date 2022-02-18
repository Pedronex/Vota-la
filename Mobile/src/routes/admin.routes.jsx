import { createStackNavigator } from "@react-navigation/stack";

import { Menu } from "../pages/Menu";
import { Voto } from "../pages/Voto";
import { Sucesso } from "../pages/Sucesso";
import { Falha } from "../pages/Falha";
import { Detalhes } from "../pages/Detalhes";
import { CriarVoto } from "../pages/CriarVoto";
import { Usuario } from "../pages/Usuario";
import { Relatorio } from "../pages/Relatorio";
import { Votacao } from "../pages/Votacao";
import { Alterar } from "../pages/AlterarVotacao";

export const AdminRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Menu" component={Menu} />
      <Screen name="Detalhes" component={Detalhes} />
      <Screen name="Voto" component={Voto} />
      <Screen name="Sucesso" component={Sucesso} />
      <Screen name="Falha" component={Falha} />
      <Screen name="CriarVoto" component={CriarVoto} />
      <Screen name="Usuario" component={Usuario} />
      <Screen name="Relatorio" component={Relatorio} />
      <Screen name="Votacao" component={Votacao} />
      <Screen name="Alterar" component={Alterar} />
    </Navigator>
  );
};
