import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { api } from "../../Service/api";
import {
  Container,
  ContentText,
  DescriptionText,
  Footer,
  GroupInfo,
  Title,
  ListView,
  LogoCandidato,
  ViewCandidato,
  SubTitle,
  Button,
  TextButton,
} from "./styles";

export const Voto = () => {
  const [selectedId, setSelectedId] = useState(null);

  const { params } = useRoute();
  const { navigate, canGoBack, goBack } = useNavigation();

  const votar = async () => {
    const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
    if (selectedId) {
      if (params.status) {
        await api
          .delete(`/deletarVoto?idVotacao=${params.idVotacao}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .catch((erro) => {
            navigate("Falha", JSON.parse(erro.request._response).erro);
          });
      }
      api
        .post(
          "/criarVoto",
          {
            idCandidato: selectedId,
            idVotacao: params.idVotacao,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          navigate("Sucesso");
        })
        .catch((erro) => {
          navigate("Falha", JSON.parse(erro.request._response).erro);
        });
    }
  };

  const voltar = async () => {
    if (canGoBack()) {
      goBack();
    } else {
      navigate("Listagem");
    }
  };

  return (
    <Container>
      <Title>{params?.titulo}</Title>
      <SubTitle>Pressione no candidato que deseja votar</SubTitle>
      <ListView>
        <FlatList
          data={params?.candidatos}
          renderItem={({ item }) => {
            return (
              <RectButton onPress={() => setSelectedId(item.id)}>
                <ViewCandidato
                  background={selectedId == item.id ? "#195923" : null}
                >
                  <LogoCandidato
                    tintColor={selectedId == item.id ? "#fff" : "#000"}
                  />
                  <GroupInfo>
                    <ContentText color={selectedId == item.id ? "#fff" : null}>
                      {item?.nome}
                    </ContentText>
                    <DescriptionText
                      color={selectedId == item.id ? "#fff" : null}
                    >
                      {item?.cargo}
                    </DescriptionText>
                    <DescriptionText
                      color={selectedId == item.id ? "#fff" : null}
                    >
                      {item?.localizacao}
                    </DescriptionText>
                  </GroupInfo>
                </ViewCandidato>
              </RectButton>
            );
          }}
          extraData={selectedId}
        />
      </ListView>
      <Footer>
        <Button color="#195923" onPress={votar}>
          <TextButton>Confirmar</TextButton>
        </Button>
        <Button color="#B10D0D" onPress={voltar}>
          <TextButton>Voltar</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
