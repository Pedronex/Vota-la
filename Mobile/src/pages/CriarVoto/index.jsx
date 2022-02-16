import { Controller, useForm } from "react-hook-form";
import { Container, InfoInput, Input, InputMultiple } from "./styles";
import { Calendar } from "../../components/Calendar";
import { Candidatos } from "../../components/Candidatos";

export const CriarVoto = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <InfoInput>Título:</InfoInput>
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          </>
        )}
        name="titulo"
        rules={{
          required: true,
        }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <InfoInput>Descrição:</InfoInput>
            <InputMultiple
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="descricao"
        rules={{
          required: true,
        }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <InfoInput>Inicio da Votação:</InfoInput>
            <Calendar
              onChange={onChange}
              value={value}
              defaultValue={Date.now()}
            />
          </>
        )}
        name="inicio"
        rules={{
          required: true,
        }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <InfoInput>Fim da Votação:</InfoInput>
            <Calendar
              onChange={onChange}
              value={value}
              defaultValue={Date.now()}
            />
          </>
        )}
        name="fim"
        rules={{
          required: true,
        }}
      />
      <Candidatos />
    </Container>
  );
};
