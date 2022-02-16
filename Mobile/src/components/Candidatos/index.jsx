import { Controller, useForm } from "react-hook-form";
import { api } from "../../Service/api";
import * as SecureStore from "expo-secure-store";
import {
  Button,
  Content,
  ContentText,
  DescriptionText,
  Form,
  GroupInfo,
  GroupInput,
  Info,
  Input,
  InputText,
  LogoCandidato,
  TextButton,
  TextContent,
  ViewCandidato,
} from "./styles";
import { FlatList, Text, ToastAndroid, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Candidatos = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { idVotacao, listaCandidatos } = useSelector(
    (state) => state.candidato
  );
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const usuario = JSON.parse(await SecureStore.getItemAsync("user"));
    if (usuario) {
      const resultado = await api.post(
        `/criarCandidato?id=${idVotacao}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${usuario?.token}`,
          },
        }
      );
      if (resultado.status == 200) {
        ToastAndroid.show("Sucesso", 1000);
        dispatch({ type: "NOVO_CANDIDATO", data: resultado.data });
        reset();
      }
    }
  };

  return (
    <Content>
      <TextContent>Adicionar Candidatos:</TextContent>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <GroupInput>
              <InputText>Nome:</InputText>
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            </GroupInput>
          )}
          name="nome"
          rules={{
            required: { message: "Este Campo é obrigatório", value: true },
          }}
        />
        {errors?.nome && <Info>{errors.nome.message}</Info>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <GroupInput>
              <InputText>Localização:</InputText>
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            </GroupInput>
          )}
          name="localizacao"
          rules={{
            required: { message: "Este Campo é obrigatório", value: true },
          }}
        />
        {errors?.localizacao && <Info>{errors.localizacao.message}</Info>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <GroupInput>
              <InputText>Cargo:</InputText>
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            </GroupInput>
          )}
          name="cargo"
          rules={{
            required: { message: "Este Campo é obrigatório", value: true },
          }}
        />
        {errors?.cargo && <Info>{errors.cargo.message}</Info>}
        <Button
          onPress={handleSubmit(onSubmit, () => console.log(listaCandidatos))}
        >
          <TextButton>Adicionar</TextButton>
        </Button>
      </Form>
      <View style={{ height: "40%" }}>
        <FlatList
          data={listaCandidatos}
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
          extraData={listaCandidatos}
        />
      </View>
    </Content>
  );
};
