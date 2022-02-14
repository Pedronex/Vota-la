import { useEffect, useState } from "react";
import {
  Container,
  Button,
  ButtonView,
  TextHeader,
  TextContent,
  ListView,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Navbar } from "../../components/Navbar";
import { api } from "../../Service/api";
import { FlatList } from "react-native";

export const Listagem = () => {
  const [listaVotacao, setListaVotacao] = useState([]);

  const carregarLista = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));

    console.log(user);
    const resultado = await api.get("/votacoes", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log(resultado.data);

    setListaVotacao(resultado.data);
    return resultado.data;
  };

  useEffect(() => {
    carregarLista();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <ListView>
          <FlatList
            data={listaVotacao}
            renderItem={({ item }) => (
              <Button>
                <ButtonView>
                  <TextHeader>{item?.titulo}</TextHeader>
                  <TextContent>{item?.descricao}</TextContent>
                  <TextContent>
                    Inicio da Votação: {item?.ini_votacao}
                  </TextContent>
                  <TextContent>Fim da Votação: {item?.fin_votacao}</TextContent>
                  <TextContent colorText="#B10D0D">Não Participou</TextContent>
                </ButtonView>
              </Button>
            )}
          />
        </ListView>
      </Container>
    </>
  );
};
