import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Container,
  Footer,
  SubTitle,
  TextButton,
  Title,
} from "./styles";

export const Sucesso = () => {
  const navigation = useNavigation();

  const voltar = () => {
    navigation.navigate("Listagem");
  };

  return (
    <Container>
      <Title>Voto Computado com Sucesso</Title>
      <SubTitle>Agradeçemos a sua participação</SubTitle>
      <Footer>
        <Button onPress={voltar}>
          <TextButton>Voltar para listagem</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
