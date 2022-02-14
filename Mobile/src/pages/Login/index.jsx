import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../Service/api";
import {
  Button,
  Container,
  Footer,
  Form,
  GroupInput,
  Header,
  Info,
  Input,
  InputInfo,
  Logo,
  TextButton,
  TextHeader,
} from "./styles";

export const Login = () => {
  const navigation = useNavigation();

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
      await AsyncStorage.setItem("user", JSON.stringify(resultado.data));
      navigation.navigate("Menu");
    }
  };

  return (
    <Container>
      <Header>
        <Logo />
        <TextHeader>Sistema de Votação</TextHeader>
      </Header>
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
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
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
