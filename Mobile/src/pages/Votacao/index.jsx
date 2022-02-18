import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Alert, ToastAndroid } from "react-native";
import * as SecureStore from "expo-secure-store";
import * as Print from "expo-print";
import { api } from "../../Service/api";

import {
  Button,
  ButtonUsuario,
  Container,
  Content,
  Footer,
  GroupInfo,
  ListView,
  TextButton,
  TitleContent,
  ViewContent,
} from "./styles";
import { formatDateTime } from "../../utils";
import { RectButton } from "react-native-gesture-handler";

export const Votacao = () => {
  const [listaVotacao, setListaVotacao] = useState([]);
  const [votacaoSelecionada, setVotacaoSelecionada] = useState(null);

  const { canGoBack, goBack, navigate } = useNavigation();

  const carregarLista = async () => {
    setListaVotacao([]);
    const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
    if (token) {
      const resultado = await api.get("/votacoes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resultado.status == 200) {
        setListaVotacao(resultado.data);
      }
      return resultado.data;
    }
  };

  const voltar = () => {
    if (canGoBack()) {
      goBack();
    } else {
      navigate("Menu");
    }
  };

  const navegarParaDetalhes = (id, status) => {
    navigate("Detalhes", { id, status });
  };

  const navegarParaAlterar = (id) => {
    navigate("Alterar", id);
  };

  const deletarVotação = async (id) => {
    const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
    try {
      await api.delete(`/deletarVotacao?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (erro) {
      Alert.alert(
        "Alerta",
        "Não é possivel realizar a exclusão da votação pois há itens relacionados"
      );
    }
  };

  useEffect(() => {
    carregarLista();
  }, []);

  return (
    <Container>
      <ListView>
        <FlatList
          data={listaVotacao}
          renderItem={({ item }) => {
            return (
              <>
                <RectButton onPress={() => setVotacaoSelecionada(item)}>
                  <ViewContent>
                    <TitleContent>{item.titulo}</TitleContent>
                    <Content>
                      Inicio da votação: {formatDateTime(item.ini_votacao)}
                    </Content>
                    <Content>
                      Fim da Votação:{formatDateTime(item.fin_votacao)}
                    </Content>
                  </ViewContent>
                </RectButton>
                {votacaoSelecionada == item && (
                  <GroupInfo>
                    <ButtonUsuario
                      background={"#A4A729"}
                      onPress={() => navegarParaAlterar(item.id)}
                    >
                      <TextButton>Alterar</TextButton>
                    </ButtonUsuario>
                    <ButtonUsuario
                      background={"#195923"}
                      onPress={() =>
                        navegarParaDetalhes(item.id, item.participou)
                      }
                    >
                      <TextButton>Participar</TextButton>
                    </ButtonUsuario>
                    <ButtonUsuario
                      background={"#B10D0D"}
                      onPress={() =>
                        Alert.alert(
                          "Atenção",
                          "Tem certeza que deseja realizar a exclusão da votação?",
                          [
                            {
                              onPress: () => deletarVotação(item.id),
                              text: "Sim",
                            },
                            { text: "Não" },
                          ]
                        )
                      }
                    >
                      <TextButton>Excluir</TextButton>
                    </ButtonUsuario>
                  </GroupInfo>
                )}
              </>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <ViewContent>
                <TitleContent>Nenhuma votação cadastrada</TitleContent>
              </ViewContent>
            );
          }}
          extraData={votacaoSelecionada}
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
