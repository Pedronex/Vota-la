import {
  Container,
  Button,
  ButtonView,
  ButtonText,
  ButtonLogo,
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
    await SecureStore.deleteItemAsync("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Container>
      <Button onPress={() => navegarPara("Listagem")}>
        <ButtonView>
          <ButtonLogo source={require("../../assets/Registrar.png")} />
          <ButtonText>Lista de Votações</ButtonText>
        </ButtonView>
      </Button>
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
      <Button onPress={() => navegarPara("Voto")}>
        <ButtonView>
          <ButtonLogo source={require("../../assets/Configuracao.png")} />
          <ButtonText>Gerenciar Votação</ButtonText>
        </ButtonView>
      </Button>
      <Button onPress={() => navegarPara("Relatorio")}>
        <ButtonView>
          <ButtonLogo source={require("../../assets/Relatorio.png")} />
          <ButtonText>Gerar Relatório da Votação</ButtonText>
        </ButtonView>
      </Button>
      <Button onPress={sairDoPerfil}>
        <ButtonView>
          <Feather name="log-out" size={50} color={"#fff"} />
          <ButtonText>Sair do Perfil</ButtonText>
        </ButtonView>
      </Button>
    </Container>
  );
};
