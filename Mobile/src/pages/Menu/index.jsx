import {
  Container,
  Button,
  ButtonView,
  ButtonText,
  ButtonLogo,
} from "./styles";
import { Navbar } from "../../components/Navbar";
import { useNavigation } from "@react-navigation/native";

export const Menu = () => {
  const navigation = useNavigation();

  function navegarPara(nome) {
    navigation.navigate(nome);
  }

  return (
    <>
      <Navbar />
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
      </Container>
    </>
  );
};
