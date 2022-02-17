import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import {
  Button,
  ButtonUsuario,
  Container,
  Footer,
  Form,
  GroupInfo,
  InfoInput,
  Input,
  ListView,
  TextButton,
  TextInfo,
  ViewInfo,
} from "./styles";

import { api } from "../../Service/api";
import { Alert, FlatList, Switch, ToastAndroid } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

export const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [novaSenha, setNovaSenha] = useState(false);
  const [ativos, setAtivos] = useState(false);

  const { control, handleSubmit, reset } = useForm();
  const { canGoBack, goBack, navigate } = useNavigation();

  const carregarUsuarios = async () => {
    const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
    if (token) {
      setUsuarios([]);
      const resultado = await api.get("/usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resultado.status == 200) {
        setUsuarios(resultado.data);
      }
      return resultado.data;
    }
  };

  const inativarUsuario = async (login, status) => {
    const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
    if (token) {
      const resultado = await api.put(
        "/alterarSenha",
        {
          login,
          ativo: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      carregarUsuarios();
      return resultado.data;
    }
  };

  const darPermissao = async (login, status) => {
    const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
    if (token) {
      const resultado = await api.put(
        "/alterarSenha",
        {
          login,
          admin: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      carregarUsuarios();
      return resultado.data;
    }
  };

  const atualizarSenha = async (data) => {
    if (data.senha != data.senhaConfirmar) {
      Alert.alert("Alerta", "As senhas não correspondem!");
    } else {
      const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
      if (token) {
        const resultado = await api.put(
          "/alterarSenha",
          {
            login: selectedUser,
            senha: data.senha,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (resultado.status == 200) {
          reset();
        }
        carregarUsuarios();
        return resultado.data;
      }
      reset();
    }
  };

  const cadastrarUsuario = async (data) => {
    if (data.senha != data.senhaConfirmar) {
      Alert.alert("Alerta", "As senhas não correspondem!");
    } else {
      const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
      if (token) {
        await api
          .post(
            "/registrar",
            {
              login: data.login,
              senha: data.senha,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((value) => {
            carregarUsuarios();
            reset();
            return value.data;
          })
          .catch((erro) => {
            ToastAndroid.show(JSON.parse(erro.request._response).erro, 2000);
          });
      }
    }
  };

  const voltar = () => {
    if (canGoBack()) {
      goBack();
    } else {
      navigate("Menu");
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <Container>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <InfoInput>Usuário:</InfoInput>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={novaSenha ? selectedUser : value}
                editable={!novaSenha}
              />
            </>
          )}
          name="login"
          rules={{
            required: !novaSenha,
          }}
          defaultValue={novaSenha ? selectedUser : ""}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <InfoInput>Senha:</InfoInput>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                editable={true}
                autoComplete="password"
                secureTextEntry={true}
              />
            </>
          )}
          name="senha"
          rules={{
            required: true,
          }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <InfoInput>Confirmar Senha:</InfoInput>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                editable={true}
                autoComplete="password"
                secureTextEntry={true}
              />
            </>
          )}
          name="senhaConfirmar"
          rules={{
            required: true,
          }}
        />
        {novaSenha ? (
          <GroupInfo>
            <ButtonUsuario
              background={"#195923"}
              onPress={handleSubmit(atualizarSenha)}
            >
              <TextButton>Confirmar</TextButton>
            </ButtonUsuario>
            <ButtonUsuario
              background={"#B10D0D"}
              onPress={() => setNovaSenha(false)}
            >
              <TextButton>cancelar</TextButton>
            </ButtonUsuario>
          </GroupInfo>
        ) : (
          <Button color={"#195923"} onPress={handleSubmit(cadastrarUsuario)}>
            <TextButton>Cadastrar Usuário</TextButton>
          </Button>
        )}
      </Form>
      <ListView>
        <FlatList
          data={
            ativos ? usuarios.filter((item) => item.ativo == true) : usuarios
          }
          ListHeaderComponent={() => {
            return (
              <ViewInfo onPress={() => setAtivos(!ativos)}>
                <GroupInfo>
                  <TextInfo>Mostrar apenas ativos</TextInfo>
                  <Switch value={ativos} style={{ height: "50%" }} />
                </GroupInfo>
              </ViewInfo>
            );
          }}
          renderItem={({ item }) => {
            return (
              <ViewInfo onPress={() => setSelectedUser(item.login)}>
                <GroupInfo>
                  <TextInfo>{item.login}</TextInfo>
                  <TextInfo color={item.ativo ? "#195923" : "#B10D0D"}>
                    {item.ativo ? "Ativo" : "Inativo"}
                  </TextInfo>
                </GroupInfo>
                {selectedUser == item.login && (
                  <GroupInfo>
                    <ButtonUsuario
                      background={"#A4A729"}
                      onPress={() => setNovaSenha(true)}
                    >
                      <TextButton>Nova Senha</TextButton>
                    </ButtonUsuario>
                    <ButtonUsuario
                      background={"#4374A8"}
                      onPress={() => inativarUsuario(item.login, !item.ativo)}
                    >
                      <TextButton>
                        {item.ativo ? "Inativar" : "Ativar"}
                      </TextButton>
                    </ButtonUsuario>
                    <ButtonUsuario
                      background={item.administrador ? "#195923" : "#B10D0D"}
                      onPress={() =>
                        darPermissao(item.login, !item.administrador)
                      }
                    >
                      <TextButton>Admin</TextButton>
                    </ButtonUsuario>
                  </GroupInfo>
                )}
              </ViewInfo>
            );
          }}
          keyExtractor={(item) => item.login}
          extraData={usuarios}
        />
      </ListView>
      <Footer>
        <Button onPress={voltar}>
          <TextButton>Voltar para o Menu</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
