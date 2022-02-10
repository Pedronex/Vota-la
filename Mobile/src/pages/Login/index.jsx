import { useNavigation } from "react-navigation-hooks";
import {
  Button,
  Container,
  Footer,
  Form,
  GroupInput,
  Header,
  Input,
  InputInfo,
  Logo,
  TextButton,
  TextHeader,
} from "./styles";

export const Login = () => {
  const navigation = useNavigation();

  const handleToMenu = () => {};

  return (
    <Container>
      <Header>
        <Logo />
        <TextHeader>Sistema de Votação</TextHeader>
      </Header>
      <Form>
        <GroupInput>
          <InputInfo>Usuário:</InputInfo>
          <Input />
        </GroupInput>
        <GroupInput>
          <InputInfo>Senha:</InputInfo>
          <Input />
        </GroupInput>
        <Button onPress={handleToMenu}>
          <TextButton>Entrar</TextButton>
        </Button>
      </Form>
      <Footer></Footer>
    </Container>
  );
};
