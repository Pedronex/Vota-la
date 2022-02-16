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
import { FlatList, View } from "react-native";

export const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(false);

  const [refresh, setRefresh] = useState(false);

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
      setRefresh(false);
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
      if (resultado.status == 200) {
        setUsuarios(resultado.data);
      }
      setRefresh(false);
      carregarUsuarios();
      return resultado.data;
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <Container>
      <Form>
        <InfoInput>Usuário:</InfoInput>
        <Input />
        <InfoInput>Senha:</InfoInput>
        <Input />
        <InfoInput>Confirmar Senha:</InfoInput>
        <Input />
        <Button color={"#195923"}>
          <TextButton>Cadastrar Usuário</TextButton>
        </Button>
      </Form>
      <ListView>
        <FlatList
          data={usuarios}
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
                    <ButtonUsuario background={"#A4A729"}>
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
                    <ButtonUsuario background={"#B10D0D"}>
                      <TextButton>Excluir</TextButton>
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
        <Button>
          <TextButton>Voltar para o Menu</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
