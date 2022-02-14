import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Login } from "./pages/Login";
import { Menu } from "./pages/Menu";
import { Listagem } from "./pages/Listagem";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Login" component={Login} />
        <Screen name="Menu" component={Menu} />
        <Screen name="Listagem" component={Listagem} />
        <Screen name="Votacao" component={View} />
        <Screen name="Usuario" component={View} />
      </Navigator>
    </NavigationContainer>
  );
};
