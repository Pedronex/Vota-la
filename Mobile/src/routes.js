import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Login } from "../pages/Login";
import { Menu } from "./pages/Menu";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Menu" component={Menu} />
      <Screen name="Votacao" component={View} />
      <Screen name="Usuario" component={View} />
    </Navigator>
  );
};
