import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Button,
  Container,
  Footer,
  SubTitle,
  TextButton,
  Title,
} from "./styles";

export const Falha = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const voltar = () => {
    navigation.navigate("Listagem");
  };

  return (
    <Container>
      <Title>Voto Não Computado</Title>
      <SubTitle>{route?.params}</SubTitle>
      <Footer>
        <Button onPress={voltar}>
          <TextButton>Voltar para listagem</TextButton>
        </Button>
      </Footer>
    </Container>
  );
};
