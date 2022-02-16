import { useEffect, useState } from "react";
import {
  Container,
  Button,
  ButtonView,
  TextHeader,
  TextContent,
  ListView,
  Separator,
  ButtonBack,
  ButtonText,
  Footer,
  ButtonLogout,
} from "./styles";
import * as SecureStore from "expo-secure-store";
import { api } from "../../Service/api";
import { FlatList } from "react-native";
import { formatDateTime } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

export const Listagem = () => {
  const [refresh, setRefresh] = useState(false);
  const [listaVotacao, setListaVotacao] = useState([]);
  const [user, setUser] = useState({ administrador: false });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const carregarLista = async () => {
    setListaVotacao([]);
    const user = JSON.parse(await SecureStore.getItemAsync("user"));
    if (user) {
      const resultado = await api.get("/votacoes", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (resultado.status == 200) {
        setListaVotacao(resultado.data);
      }
      setUser(user);
      setRefresh(false);
      return resultado.data;
    }
  };

  const navegarParaDetalhes = (id, status) => {
    navigation.navigate("Detalhes", { id, status });
  };

  const voltar = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Menu");
    }
  };

  const sairDoPerfil = async () => {
    await SecureStore.deleteItemAsync("user");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    carregarLista();
  }, []);

  return (
    <Container>
      <TextHeader>Lista de Votações</TextHeader>
      <ListView>
        <FlatList
          data={listaVotacao}
          refreshing={refresh}
          onRefresh={() => {
            setRefresh(true);
            carregarLista();
          }}
          renderItem={({ item }) => (
            <Button
              onPress={() => navegarParaDetalhes(item?.id, item?.participou)}
            >
              <ButtonView>
                <TextHeader>{item?.titulo}</TextHeader>
                <TextContent>
                  Inicio da Votação: {formatDateTime(item?.ini_votacao)}
                </TextContent>
                <TextContent>
                  Fim da Votação: {formatDateTime(item?.fin_votacao)}
                </TextContent>
                <TextContent
                  colorText={item?.participou ? "#195923" : "#B10D0D"}
                >
                  {item?.participou ? "Participou" : "Não participou"}
                </TextContent>
              </ButtonView>
            </Button>
          )}
          ItemSeparatorComponent={() => {
            return <Separator />;
          }}
        />
      </ListView>
      {user?.administrador ? (
        <Footer>
          <ButtonBack onPress={voltar}>
            <ButtonText>Voltar para o menu</ButtonText>
          </ButtonBack>
        </Footer>
      ) : (
        <ButtonLogout onPress={sairDoPerfil}>
          <Feather name="log-out" size={35} />
          <ButtonText color="#000">Sair do Perfil</ButtonText>
        </ButtonLogout>
      )}
    </Container>
  );
};
