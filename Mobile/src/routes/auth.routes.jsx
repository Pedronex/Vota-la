import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/Login";

export const AuthRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
