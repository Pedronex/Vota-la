import { useForm } from "react-hook-form";
import { Navbar } from "../../components/Navbar";
import {
  Button,
  FormGroup,
  GroupButton,
  InputForm,
  InputGroup,
  LabelForm,
  LayerCenter,
  Wrapper,
} from "./styles";

type FormData = {
  login: string;
  senha: string;
};

export function Login() {
  const { handleSubmit, register } = useForm<FormData>();

  const onSubimit = handleSubmit((data) => console.log(data));

  return (
    <>
      <Navbar title="Bem vindo ao Vota-Lá" />
      <Wrapper>
        <LayerCenter>
          <FormGroup>
            <InputGroup>
              <LabelForm>Login:</LabelForm>
              <InputForm type={"text"} {...register("login")} />
            </InputGroup>
            <InputGroup>
              <LabelForm>Senha:</LabelForm>
              <InputForm type={"password"} {...register("senha")} />
            </InputGroup>
            <GroupButton>
              <Button onClick={onSubimit}>Login</Button>
              <Button color={"#fffffffff"}>Cadastrar</Button>
            </GroupButton>
          </FormGroup>
        </LayerCenter>
      </Wrapper>
    </>
  );
}
