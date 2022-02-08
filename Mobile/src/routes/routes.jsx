import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  <Navigator>
    <Screen name="Menu" component={View} />
    <Screen name="Votacao" component={View} />
  </Navigator>;
};
