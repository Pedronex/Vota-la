import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  <Navigator>
    <Screen name="Login" component={View} />
  </Navigator>;
};
