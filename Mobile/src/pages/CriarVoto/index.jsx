import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Container,
  Footer,
  Form,
  Info,
  InfoData,
  InfoInput,
  Input,
  InputMultiple,
  TextButton,
} from "./styles";

import { Calendar } from "../../components/Calendar";
import { Candidatos } from "../../components/Candidatos";
import { api } from "../../Service/api";
import { ScrollView, ToastAndroid, View } from "react-native";
import { useDispatch } from "react-redux";

export const CriarVoto = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const { navigate, canGoBack, goBack } = useNavigation();
  const dispatch = useDispatch();

  const [votacao, setVotacao] = useState(null);

  const criarVotacao = async (data) => {
    const { token = null } = JSON.parse(await SecureStore.getItemAsync("user"));
    if (token) {
      const resultado = await api.post("/criarVotacao", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resultado.status == 200) {
        setVotacao(resultado.data);
        dispatch({ type: "NOVA_VOTACAO", data: resultado.data.id });
      } else {
        ToastAndroid.show(
          "Não foi possivel realizar a criação da votação",
          3000
        );
      }
    }
  };

  const voltar = async () => {
    dispatch({ type: "LIMPAR_CANDIDATOS" });
    if (canGoBack()) {
      goBack();
    } else {
      navigate("Menu");
    }
  };

  if (votacao) {
    return (
      <Container>
        <ScrollView
          style={{
            width: "100%",
            maxHeight: "40%",
          }}
        >
          <InfoInput>Título:</InfoInput>
          <InfoData>{votacao.titulo}</InfoData>
          <InfoInput>Descrição:</InfoInput>
          <InfoData>{votacao.descricao}</InfoData>
          <InfoInput>Inicio da Votação:</InfoInput>
          <Calendar
            onChange={null}
            value={new Date(votacao.ini_votacao).getTime()}
            defaultValue={new Date(votacao.ini_votacao).getTime()}
            editable={false}
          />
          <InfoInput>Fim da Votação:</InfoInput>
          <Calendar
            onChange={null}
            value={new Date(votacao.fin_votacao).getTime()}
            defaultValue={new Date(votacao.fin_votacao).getTime()}
            editable={false}
          />
        </ScrollView>
        <Candidatos idVotacao={votacao.id} />
        <Footer>
          <Button color="#B10D0D" onPress={voltar}>
            <TextButton>Voltar</TextButton>
          </Button>
        </Footer>
      </Container>
    );
  }

  return (
    <Container>
      <View
        style={{
          width: "100%",
          height: "50%",
          justifyContent: "space-between",
        }}
      >
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <InfoInput>Título:</InfoInput>
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            </>
          )}
          name="titulo"
          rules={{
            required: true,
          }}
        />
        {errors?.titulo && <Info>O campo acima é obrigatório</Info>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <InfoInput>Descrição:</InfoInput>
              <InputMultiple
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="descricao"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <InfoInput>Inicio da Votação:</InfoInput>
              <Calendar
                onChange={onChange}
                value={value}
                defaultValue={Date.now()}
              />
            </>
          )}
          name="inicio"
          rules={{
            required: true,
          }}
        />
        {errors?.inicio && <Info>Confirme a data acima</Info>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <InfoInput>Fim da Votação:</InfoInput>
              <Calendar
                onChange={onChange}
                value={value}
                defaultValue={Date.now()}
              />
            </>
          )}
          name="fim"
          rules={{
            required: true,
          }}
        />
        {errors?.fim && <Info>Confirme a data acima</Info>}
      </View>
      <Footer>
        <Button color="#195923" onPress={handleSubmit(criarVotacao)}>
          <TextButton>Criar Votação</TextButton>
        </Button>
        <Button color="#B10D0D" onPress={voltar}>
          <TextButton>Voltar</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
