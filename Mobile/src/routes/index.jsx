import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { api } from "../Service/api";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { ToastAndroid } from "react-native";
import Constants from "expo-constants";

export const Routes = () => {
  const usuario = useSelector((state) => state.usuario.dados);
  const dispatch = useDispatch();

  const coletarUsuario = async () => {
    const data = JSON.parse(await SecureStore.getItemAsync("user"));
    if (data) {
      try {
        await api.get("/validar", {
          headers: {
            Authorization: `Bearer ${data?.token}`,
          },
        });
        if (usuario == null) {
          dispatch({ type: "SUCESSO", data });
        }
      } catch (error) {
        await SecureStore.deleteItemAsync("user");
        dispatch({ type: "LOGOUT" });
        ToastAndroid.show("Token expirou");
      }
    }
  };

  useEffect(() => {
    console.log(
      `http://${Constants.manifest.extra.IP_SERVER}:${Constants.manifest.extra.PORT}`
    );
    coletarUsuario();
  }, [usuario]);

  return (
    <NavigationContainer>
      {usuario ? (
        usuario.administrador ? (
          <AdminRoutes />
        ) : (
          <AppRoutes />
        )
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
};
