import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Alert, ToastAndroid } from "react-native";
import * as SecureStore from "expo-secure-store";
import * as Print from "expo-print";
import { api } from "../../Service/api";

import {
  Button,
  Container,
  Content,
  Footer,
  ListView,
  TextButton,
  TitleContent,
  ViewContent,
} from "./styles";
import { formatDateTime, formatDateTimeReport } from "../../utils";
import { RectButton } from "react-native-gesture-handler";

export const Relatorio = () => {
  const [listaVotacao, setListaVotacao] = useState([]);

  const { canGoBack, goBack, navigate } = useNavigation();

  const html = (
    titulo,
    dataInicio,
    dataFim,
    resultado = [{ nome: "", votos: 0 }]
  ) => {
    const total = () => {
      var total = 0;
      resultado.forEach(({ votos }) => {
        total += votos;
      });
      return total;
    };

    return `<html lang="pt-BR">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway&family=Roboto&display=swap"
      rel="stylesheet"
    />
  </head>
  <body style="font-family: Arial; width: 100vw;">
    <table border="1" style="width: 100vw;" >
      <thead>
        <tr>
          <th colspan="3">${titulo}</th>
        </tr>
        <tr>
          <th colspan="3">Inicio da votação: ${formatDateTimeReport(
            dataInicio
          )}</th>
        </tr>
        <tr>
          <th colspan="3">Fim da votação: ${formatDateTimeReport(dataFim)}</th>
        </tr>
        <tr>
          <th>Nome Candidato</th>
          <th>Quantidade de votos</th>
          <th>Porcentagem</th>
        </tr>
      </thead>
      <tbody>
        ${resultado.map((candidato) => {
          return `<tr>
            <td>${candidato.nome}</td>
            <td>${candidato.votos}</td>
            <td>${(candidato.votos / total()) * 100}%</td>
          </tr>`;
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${total()}</td>
          <td>100%</td>
        </tr>
      </tfoot>
    </table>
  </body>
</html>
`;
  };

  const imprimirResultado = async (votacao) => {
    ToastAndroid.show("Imprimindo resultado", 1000);
    const { token } = JSON.parse(await SecureStore.getItemAsync("user"));
    if (token) {
      const resultado = await api.get(`/listaVotos?idVotacao=${votacao.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resultado.data.length == 0) {
        Alert.alert("Alerta", "Nenhum candidato cadastrado");
      } else {
        const listaCandidatos = [...resultado.data];
        const listaResultados = [];
        listaCandidatos.forEach(({ candidato, votos }) => {
          listaResultados.push({ nome: candidato.nome, votos });
        });

        const data = await Print.printAsync({
          html: html(
            votacao.titulo,
            votacao.ini_votacao,
            votacao.fin_votacao,
            listaResultados
          ),
        });

        console.log(data);
      }
    }
  };

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
              <RectButton onPress={() => imprimirResultado(item)}>
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
            );
          }}
          ListEmptyComponent={() => {
            return (
              <ViewContent>
                <TitleContent>Nenhuma votação cadastrada</TitleContent>
              </ViewContent>
            );
          }}
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
