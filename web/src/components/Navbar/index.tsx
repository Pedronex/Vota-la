import { Container, LogoImage, Title } from "./styles";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = "Bem vindo" }) => {
  return (
    <Container>
      <LogoImage />
      <Title>{title}</Title>
    </Container>
  );
};

export { Navbar };
