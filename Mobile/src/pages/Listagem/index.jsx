import {
  Container,
  Button,
  ButtonView,
  ButtonText,
  ButtonLogo,
} from "./styles";
import { Navbar } from "../../components/Navbar";

export const Listagem = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Button>
          <ButtonView>
            <ButtonText>Seleção do Conselho Fiscal</ButtonText>
            <ButtonText>Inicio da Votação: 15/05/2022 08:00</ButtonText>
            <ButtonText>Fim da Votação: 15/05/2022 15:45</ButtonText>
            <ButtonText>Em breve</ButtonText>
          </ButtonView>
        </Button>
      </Container>
    </>
  );
};
