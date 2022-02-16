import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Button,
  Container,
  ContentText,
  DescriptionText,
  Footer,
  GroupInfo,
  HeaderText,
  ListView,
  LogoCandidato,
  TextButton,
  ViewCandidato,
} from "./styles";
import { api } from "../../Service/api";
import { formatDateTime } from "../../utils";
import { FlatList, ScrollView } from "react-native";

export const Detalhes = (id) => {
  const { params } = useRoute();
  const [candidatos, setCandidatos] = useState([]);
  const [item, setItem] = useState(null);

  const navigation = useNavigation();

  const carregarLista = async () => {
    const data = JSON.parse(await SecureStore.getItemAsync("user"));
    if (data) {
      const resultado = await api.get(`/votacao?id=${params.id}`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      if (resultado.data != null) {
        setCandidatos(resultado.data.Candidato);
        delete resultado.data.Candidato;
        setItem(resultado.data);
      }
      return resultado.data;
    }
  };

  useEffect(() => {
    carregarLista();
  }, []);

  const voltar = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Listagem");
    }
  };

  const navegarParaVotacao = () => {
    navigation.navigate("Voto", {
      candidatos,
      idVotacao: item.id,
      titulo: item.titulo,
      status: params.status,
    });
  };

  return (
    <Container>
      <HeaderText>{item?.titulo}</HeaderText>
      <ContentText>Período da Votação:</ContentText>
      <ContentText>
        {formatDateTime(item?.ini_votacao)} -{" "}
        {formatDateTime(item?.fin_votacao)}
      </ContentText>
      <ContentText align="left">Detalhes da Votação:</ContentText>
      <ScrollView style={{ maxHeight: "25%" }}>
        <DescriptionText>{item?.descricao}</DescriptionText>
      </ScrollView>
      <ContentText>Lista de Candidatos:</ContentText>
      <ListView>
        <FlatList
          data={candidatos}
          renderItem={({ item }) => {
            return (
              <ViewCandidato>
                <LogoCandidato />
                <GroupInfo>
                  <ContentText>{item?.nome}</ContentText>
                  <DescriptionText>{item?.cargo}</DescriptionText>
                  <DescriptionText>{item?.localizacao}</DescriptionText>
                </GroupInfo>
              </ViewCandidato>
            );
          }}
        />
      </ListView>
      <Footer>
        <Button
          color={params?.status ? "#A4A729" : "#195923"}
          onPress={navegarParaVotacao}
        >
          <TextButton>
            {params?.status ? "Alterar Voto" : "Participar"}
          </TextButton>
        </Button>
        <Button color="#B10D0D" onPress={voltar}>
          <TextButton>Voltar</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
