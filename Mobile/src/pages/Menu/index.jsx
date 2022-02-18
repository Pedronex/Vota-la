import {
  Container,
  Button,
  ButtonView,
  ButtonText,
  ButtonLogo,
  ButtonLogout,
  ViewLogout,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";

export const Menu = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function navegarPara(nome) {
    navigation.navigate(nome);
  }

  const sairDoPerfil = async () => {
    await SecureStore.deleteItemAsync("user").finally(() => {
      dispatch({ type: "LOGOUT" });
    });
  };

  return (
    <Container>
      <Button onPress={() => navegarPara("CriarVoto")}>
        <ButtonView>
          <ButtonLogo source={require("../../assets/Adicionar.png")} />
          <ButtonText>Criar Nova Votação</ButtonText>
        </ButtonView>
      </Button>
      <Button onPress={() => navegarPara("Usuario")}>
        <ButtonView>
          <ButtonLogo source={require("../../assets/Gerenciar.png")} />
          <ButtonText>Gerenciar Usuarios</ButtonText>
        </ButtonView>
      </Button>
      <Button onPress={() => navegarPara("Votacao")}>
        <ButtonView>
          <ButtonLogo source={require("../../assets/Configuracao.png")} />
          <ButtonText>Gerenciar Votações</ButtonText>
        </ButtonView>
      </Button>
      <Button onPress={() => navegarPara("Relatorio")}>
        <ButtonView>
          <ButtonLogo source={require("../../assets/Relatorio.png")} />
          <ButtonText>Gerar Relatório das Votações</ButtonText>
        </ButtonView>
      </Button>
      <ButtonLogout onPress={sairDoPerfil}>
        <ViewLogout>
          <Feather name="log-out" size={40} color={"#fff"} />
          <ButtonText>Sair do Perfil</ButtonText>
        </ViewLogout>
      </ButtonLogout>
    </Container>
  );
};
