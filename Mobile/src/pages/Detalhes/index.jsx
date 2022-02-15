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
import { FlatList } from "react-native";

export const Detalhes = (id) => {
  const route = useRoute();
  const [candidatos, setCandidatos] = useState([]);
  const [item, setItem] = useState(null);

  const navigation = useNavigation();

  const carregarLista = async () => {
    const { params } = route;
    const data = JSON.parse(await SecureStore.getItemAsync("user"));
    if (data) {
      const resultado = await api.get(`/votacao?id=${params}`, {
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
      <DescriptionText>{item?.descricao}</DescriptionText>
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
        <Button color="#195923" onPress={navegarParaVotacao}>
          <TextButton>Participar</TextButton>
        </Button>
        <Button color="#B10D0D" onPress={voltar}>
          <TextButton>Voltar</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
