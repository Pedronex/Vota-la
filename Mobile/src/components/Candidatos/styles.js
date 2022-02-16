import { Image, Text, TextInput, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { fonts } from "../../styles";

export const Content = styled(View)`
  width: 100%;
`;

export const TextContent = styled(Text)`
  font-size: 16px;
  text-align: left;
  font-family: ${fonts.familyContent};
`;

export const Form = styled(View)`
  margin-left: 5%;
  width: 95%;
  height: 40%;
  justify-content: space-evenly;
`;

export const GroupInput = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputText = styled(Text)`
  width: 30%;

  font-size: 16px;
  text-align: left;
  font-family: ${fonts.familyContent};

`

export const Input = styled(TextInput).attrs({
  maxLenght: 50
})`
  min-width: 70%;
  font-size: 16px;
  background-color: rgba(0,0,0,0.16);
  border-radius: 15px;
  padding: 5px;
`;

export const Button = styled(RectButton)`
  width: 40%;
  background-color: #195923;
  border-radius: 10px;
  align-self: flex-end;
  padding: 2%;
`

export const TextButton = styled(Text)`
  color: ${(props) => props?.color || '#fff'};
  font-family: ${fonts.familyTitle};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-left: 3%;
`
export const Info = styled(Text)`
  background-color: #b10d0d;

  border-radius: 10px;

  min-width: 50%;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto_400Regular;
  text-align: center;
`;

export const LogoCandidato = styled(Image).attrs({
  source: require("../../assets/Candidato.png"),
  resizeMode: "center",
})`
  width: 20%;
`;

export const ViewCandidato = styled(View)`
  background-color: rgba(0, 0, 0, 0.16);

  border-radius: 10px;

  margin-bottom: 5%;

  flex-direction: row;
  align-items: center;

  padding: 2%;
  justify-content: space-between;
`;

export const GroupInfo = styled(View)`
  width: 70%;
`;

export const DescriptionText = styled(Text)`
  color: #000;
  font-size: 18px;
  text-align: center;
  font-family: ${fonts.familyContent};
  text-align: justify;
`;

export const ContentText = styled(Text)`
  font-size: 18px;
  text-align: ${(props) => props.align || "center"};
  font-family: ${fonts.familyContent};
  font-weight: 700;
`;