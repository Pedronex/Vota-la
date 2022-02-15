import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import { api } from "../../Service/api";
import {
  Button,
  Container,
  Footer,
  Form,
  GroupInput,
  Info,
  Input,
  InputInfo,
  TextButton,
} from "./styles";

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const logar = async (data) => {
    const resultado = await api.post("/login", data);
    if (resultado.data?.erro) {
      Alert.alert("Alerta", resultado.data?.erro);
    } else {
      await SecureStore.setItemAsync("user", JSON.stringify(resultado.data));
    }
  };

  return (
    <Container>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <GroupInput>
              <InputInfo>Usuário:</InputInfo>
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            </GroupInput>
          )}
          name="login"
          rules={{
            required: true,
          }}
        />
        {errors.login && <Info>O campo acima é obrigatório</Info>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <GroupInput>
              <InputInfo>Senha:</InputInfo>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoComplete="password"
                secureTextEntry={true}
              />
            </GroupInput>
          )}
          name="senha"
          rules={{
            required: true,
          }}
        />
        {errors.senha && <Info>O campo acima é obrigatório</Info>}
        <Button onPress={handleSubmit(logar)}>
          <TextButton>Entrar</TextButton>
        </Button>
      </Form>
      <Footer></Footer>
    </Container>
  );
};
