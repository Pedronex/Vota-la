import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Navbar } from "./src/components/Navbar";
import { Provider } from "react-redux";
import { store } from "./src/config/store";

export default function App() {
  let [fontsCarregadas] = useFonts({
    Raleway_400Regular,
    Roboto_400Regular,
  });

  if (!fontsCarregadas) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <Navbar />
      <Routes />
      <StatusBar style="auto" />
    </Provider>
  );
}
